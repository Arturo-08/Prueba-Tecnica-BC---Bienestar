package co.com.bancolombia.model.requests;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class RequestModelByCountry {
    private String country;
}
