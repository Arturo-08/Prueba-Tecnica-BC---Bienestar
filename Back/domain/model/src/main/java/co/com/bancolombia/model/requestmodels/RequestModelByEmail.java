package co.com.bancolombia.model.requestmodels;
import lombok.*;
//import lombok.NoArgsConstructor;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class RequestModelByEmail {
    private String email;
    private String password;
}
