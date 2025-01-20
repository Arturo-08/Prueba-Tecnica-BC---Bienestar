package co.com.bancolombia.model.datamodeluser.gateways;

import co.com.bancolombia.model.currency.Currency;
import co.com.bancolombia.model.datamodeluser.DataModelUser;

import java.util.List;


public interface DataModelUserRepository {
    DataModelUser getInfoByUser(String id);
    List<Currency> getInfoByCountry(String country);
}
