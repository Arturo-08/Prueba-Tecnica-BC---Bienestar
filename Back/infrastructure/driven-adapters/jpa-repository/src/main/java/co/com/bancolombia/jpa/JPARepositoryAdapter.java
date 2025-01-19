package co.com.bancolombia.jpa;

import co.com.bancolombia.jpa.entities.CurrencyEntity;
import co.com.bancolombia.jpa.entities.DataModelUserEntity;
import co.com.bancolombia.jpa.helper.AdapterOperations;
import co.com.bancolombia.model.currency.Currency;
import co.com.bancolombia.model.datamodeluser.DataModelUser;
import co.com.bancolombia.model.datamodeluser.gateways.DataModelUserRepository;
import lombok.RequiredArgsConstructor;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@RequiredArgsConstructor
public class JPARepositoryAdapter implements DataModelUserRepository{

    private  final JPARepository repository;

    @Override
    public DataModelUser getInfoByUser(int id) {

        List<DataModelUserEntity> results = repository.findUserDetails(id);
        if (results.isEmpty()) {
            results = null;
        }
        DataModelUserEntity userInfo = results.get(0);
        String userName =  userInfo.getUserName();
        String userEmail =  userInfo.getUserEmail();
        String countryName =  userInfo.getCountryName();

        List<Currency> currencies = results.stream()
                .map(row -> new Currency(
                        row.getId(),
                        row.getCurrencyName(),
                        row.getCurrencySymbol(),
                        row.getExchangeRate()
                ))
                .toList();

        return new DataModelUser(userName, userEmail, countryName, currencies);
    }
}
