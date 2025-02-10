package co.com.bancolombia.model.responses;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class ResponseHttp {
    private int statusCode;
    private Object data;
    private String message;

}
