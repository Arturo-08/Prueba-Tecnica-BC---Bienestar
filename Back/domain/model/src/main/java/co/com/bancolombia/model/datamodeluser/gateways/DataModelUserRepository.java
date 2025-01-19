package co.com.bancolombia.model.datamodeluser.gateways;

import co.com.bancolombia.model.datamodeluser.DataModelUser;


public interface DataModelUserRepository {
    DataModelUser getInfoByUser(int id);
}
