package co.com.bancolombia.model.requestmodels;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class RequestModelByCountry {
    private String country;
}
