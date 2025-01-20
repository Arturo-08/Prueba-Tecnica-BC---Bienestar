package co.com.bancolombia.model.requestmodels;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class RequestModelByCountry {
    private String country;
}
