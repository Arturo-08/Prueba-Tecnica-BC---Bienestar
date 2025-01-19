package co.com.bancolombia.jpa;

import co.com.bancolombia.jpa.helper.AdapterOperations;
import co.com.bancolombia.model.currency.Currency;
import co.com.bancolombia.model.datamodeluser.DataModelUser;
import co.com.bancolombia.model.datamodeluser.gateways.DataModelUserRepository;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public class JPARepositoryAdapter extends AdapterOperations<DataModelUser, Object, Integer, JPARepository> {

    public JPARepositoryAdapter(JPARepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, DataModelUser.class/* change for domain model */));
    }

    public DataModelUser getInfoByUser(int id) {

        List<Object[]> results = repository.findUserDetails(id);
        if (results.isEmpty()) {
            results = null;
        }
        Object[] userInfo = results.get(0);
        String userName = (String) userInfo[0];
        String userEmail = (String) userInfo[1];
        String countryName = (String) userInfo[2];

        List<Currency> currencies = results.stream()
                .map(row -> new Currency(
                        (String) row[3], // currencyName
                        (String) row[4], // currencySymbol
                        (float) row[5] // exchangeRate
                ))
                .toList();

        return new DataModelUser(userName, userEmail, countryName, currencies);
    }
}
