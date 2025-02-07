package co.com.bancolombia.jpa;

import co.com.bancolombia.jpa.entities.CurrencyEntity;
import co.com.bancolombia.jpa.entities.DataModelUserEntity;
import co.com.bancolombia.model.currency.Currency;
import co.com.bancolombia.model.datamodeluser.DataModelUser;
import co.com.bancolombia.model.datamodeluser.gateways.DataModelUserRepository;
import co.com.bancolombia.model.responses.RequestModelByEmail;
import co.com.bancolombia.model.responses.ResponseAuthentication;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JPARepositoryAdapter implements DataModelUserRepository{

    private  final JPARepository repository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public ResponseAuthentication getInfoByUser(RequestModelByEmail credentials) {
        try{
            ResponseAuthentication authenticationResult = new ResponseAuthentication();
            Optional <List<DataModelUserEntity>> results =
                    repository.findUserDetails(credentials.getEmail());

            if (results.isEmpty() || results.get().isEmpty()) {
                authenticationResult.setAuthenticated(false);
                authenticationResult.setMessage("User not found");
                authenticationResult.setUserInfo(null);
                return authenticationResult;
            }
            List<DataModelUserEntity> resultsList = results.get();

            DataModelUserEntity userInfo = resultsList.get(0);

            if(passwordEncoder.matches(credentials.getPassword(),userInfo.getPassword())){
                authenticationResult.setAuthenticated(true);
                authenticationResult.setMessage("Authentication successful");
                authenticationResult.setUserInfo(buildResponseModel(userInfo,resultsList));
            }
            else {
                authenticationResult.setAuthenticated(false);
                authenticationResult.setMessage("Incorrect password");
                authenticationResult.setUserInfo(null);

            }

            return authenticationResult;
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Currency> getInfoByCountry(String country) {
        try {
        List<CurrencyEntity> results = repository.findByCountryName(country);
            return results.stream().map(row -> new Currency(
                    row.getId(),
                    row.getName(),
                    row.getSymbol(),
                    row.getExchange_rate()
            )).toList();} catch (Exception e) {
            throw new RuntimeException(e);
            }
    }

    public DataModelUser buildResponseModel(DataModelUserEntity userInfo , List<DataModelUserEntity> results) {
        List<Currency> currencies = results.stream()
                .map(row -> new Currency(
                        row.getId(),
                        row.getCurrencyName(),
                        row.getCurrencySymbol(),
                        row.getExchangeRate()
                ))
                .toList();

        return new DataModelUser(userInfo.getUserName(), userInfo.getUserEmail(), userInfo.getCountryName(), currencies);
    }
}
