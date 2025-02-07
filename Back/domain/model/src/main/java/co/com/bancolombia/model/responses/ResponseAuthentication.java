package co.com.bancolombia.model.responses;


import co.com.bancolombia.model.datamodeluser.DataModelUser;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class ResponseAuthentication {
    private boolean isAuthenticated;
    private String message;
    private DataModelUser userInfo;
}
