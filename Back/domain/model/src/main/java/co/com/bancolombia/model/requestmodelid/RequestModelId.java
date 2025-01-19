package co.com.bancolombia.model.requestmodelid;
import lombok.*;
//import lombok.NoArgsConstructor;


@Getter
@Setter
@NoArgsConstructor
@Builder(toBuilder = true)
public class RequestModelId {
    private int id;
    public RequestModelId(int id) {
        this.id = id;
    }
}
