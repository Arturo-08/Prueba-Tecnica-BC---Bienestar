package co.com.bancolombia.model.currency;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class Currency {
    private int id;
    private String name;
    private String symbol;
    private float exchange_rate;

    public Currency(String currencyName, String currencySymbol, float exchangeRate) {
        this.name = currencyName;
        this.symbol = currencySymbol;
        this.exchange_rate = exchangeRate;
    }
}
