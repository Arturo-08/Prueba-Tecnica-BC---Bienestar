package co.com.bancolombia.model.currency;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Currency {
    private int id;
    private String name;
    private String symbol;
    private Double exchange_rate;
}
