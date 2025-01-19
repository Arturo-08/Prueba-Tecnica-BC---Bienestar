package co.com.bancolombia.model.datamodeluser;
import co.com.bancolombia.model.currency.Currency;
import lombok.Builder;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class DataModelUser {
    private String userName;
    private String userEmail;
    private String countryName;
    private List<Currency> currencies;

}
