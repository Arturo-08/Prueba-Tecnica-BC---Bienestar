package co.com.bancolombia.model.requests;


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
