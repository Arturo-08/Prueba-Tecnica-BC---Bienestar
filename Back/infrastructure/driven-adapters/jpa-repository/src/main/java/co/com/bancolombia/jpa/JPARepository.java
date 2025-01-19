package co.com.bancolombia.jpa;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.query.QueryByExampleExecutor;

import java.util.List;

public interface JPARepository extends CrudRepository<Object, Integer>, QueryByExampleExecutor<Object> {

        @Query(value = """
           SELECT 
               u.name AS userName,
               u.email AS userEmail,
               ctry.name AS countryName,
               curr.name AS currencyName,
               curr.symbol AS currencySymbol,
               curr.exchange_rate AS exchangeRate
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
        List<Object[]> findUserDetails(@Param("userId") int userId);
}
