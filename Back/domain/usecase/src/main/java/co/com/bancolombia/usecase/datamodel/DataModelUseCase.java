package co.com.bancolombia.usecase.datamodel;

import co.com.bancolombia.model.currency.Currency;
import co.com.bancolombia.model.datamodeluser.gateways.DataModelUserRepository;

import co.com.bancolombia.model.requests.RequestModelByEmail;

import co.com.bancolombia.model.responses.ResponseAuthentication;
import co.com.bancolombia.model.responses.ResponseCountryCurrencies;
import lombok.RequiredArgsConstructor;

import java.util.List;


@RequiredArgsConstructor
public class DataModelUseCase {

    private final DataModelUserRepository dataModelUserRepository;

    public ResponseAuthentication GetInfoByUser(RequestModelByEmail credentials) {
        try{
            return dataModelUserRepository.getInfoByUser(credentials);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public ResponseCountryCurrencies GetInfoByCountry(String country) {
        try{
            return dataModelUserRepository.getInfoByCountry(country);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }
}
