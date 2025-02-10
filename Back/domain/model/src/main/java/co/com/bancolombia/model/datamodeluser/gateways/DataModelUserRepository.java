package co.com.bancolombia.model.datamodeluser.gateways;

import co.com.bancolombia.model.currency.Currency;
import co.com.bancolombia.model.requests.RequestModelByEmail;
import co.com.bancolombia.model.responses.ResponseAuthentication;
import co.com.bancolombia.model.responses.ResponseCountryCurrencies;

import java.util.List;


public interface DataModelUserRepository {
    ResponseAuthentication getInfoByUser(RequestModelByEmail credentials);
    ResponseCountryCurrencies getInfoByCountry(String country);
}
