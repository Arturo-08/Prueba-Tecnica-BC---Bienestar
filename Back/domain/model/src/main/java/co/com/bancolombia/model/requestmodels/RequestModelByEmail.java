package co.com.bancolombia.model.requestmodels;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class RequestModelByEmail {
    private String email;
    private String password;
}
