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
        return dataModelUserRepository.getInfoByUser(email);
    }
    public List<Currency> GetInfoByCountry(String country) {
        return dataModelUserRepository.getInfoByCountry(country);
    }
}
