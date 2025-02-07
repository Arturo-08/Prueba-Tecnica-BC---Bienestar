package co.com.bancolombia.model.datamodeluser.gateways;

import co.com.bancolombia.model.currency.Currency;
import co.com.bancolombia.model.datamodeluser.DataModelUser;
import co.com.bancolombia.model.responses.RequestModelByEmail;
import co.com.bancolombia.model.responses.ResponseAuthentication;

import java.util.List;


public interface DataModelUserRepository {
    ResponseAuthentication getInfoByUser(RequestModelByEmail credentials);
    List<Currency> getInfoByCountry(String country);
}
