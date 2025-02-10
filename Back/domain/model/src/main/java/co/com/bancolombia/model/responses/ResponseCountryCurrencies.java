package co.com.bancolombia.model.responses;

import co.com.bancolombia.model.currency.Currency;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class ResponseCountryCurrencies {
    private String countryName;
    private Currency[] currencies;
}
