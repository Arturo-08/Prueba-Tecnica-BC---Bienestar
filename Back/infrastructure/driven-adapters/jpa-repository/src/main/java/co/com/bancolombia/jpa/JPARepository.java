package co.com.bancolombia.jpa;

import co.com.bancolombia.jpa.entities.CurrencyEntity;
import co.com.bancolombia.jpa.entities.DataModelUserEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.query.QueryByExampleExecutor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JPARepository extends CrudRepository<CurrencyEntity, Integer> {

        @Query(value = """
           SELECT            
               u.name,  
               u.email,
               ctry.name AS countryName,
               curr.id,
               curr.name AS currencyName,
               curr.symbol,
               curr.exchange_rate 
           FROM 
               users u
           JOIN 
               countries ctry ON u.country_id = ctry.id
           JOIN 
               user_currency uc ON u.id = uc.user_id
           JOIN 
               currencies curr ON uc.currency_id = curr.id
           WHERE 
               u.id = :userId
           """, nativeQuery = true)
        List<DataModelUserEntity> findUserDetails(@Param("userId") int userId);
}
