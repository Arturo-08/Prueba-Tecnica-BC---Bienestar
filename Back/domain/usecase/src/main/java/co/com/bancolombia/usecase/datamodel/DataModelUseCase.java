package co.com.bancolombia.usecase.datamodel;

import co.com.bancolombia.model.datamodeluser.DataModelUser;
import co.com.bancolombia.model.datamodeluser.gateways.DataModelUserRepository;
import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor
public class DataModelUseCase {


    private final DataModelUserRepository dataModelUserRepository;

    public DataModelUser GetInfoByUser(int id) {
        return dataModelUserRepository.getInfoByUser(id);
    }
}
