package co.com.bancolombia.usecase.datamodel;

import co.com.bancolombia.model.currency.Currency;
import co.com.bancolombia.model.datamodeluser.DataModelUser;
import co.com.bancolombia.model.datamodeluser.gateways.DataModelUserRepository;

import lombok.RequiredArgsConstructor;

import java.util.List;


@RequiredArgsConstructor
public class DataModelUseCase {

    private final DataModelUserRepository dataModelUserRepository;

    public DataModelUser GetInfoByUser(String email) {
        try{
            return dataModelUserRepository.getInfoByUser(email);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public List<Currency> GetInfoByCountry(String country) {
        try{
            return dataModelUserRepository.getInfoByCountry(country);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }
}
