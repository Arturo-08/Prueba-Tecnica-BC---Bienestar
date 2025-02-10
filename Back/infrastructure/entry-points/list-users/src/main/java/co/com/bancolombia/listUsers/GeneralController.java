package co.com.bancolombia.listUsers;

import co.com.bancolombia.model.requests.RequestModelByCountry;
import co.com.bancolombia.model.requests.RequestModelByEmail;
import co.com.bancolombia.model.responses.ResponseHttp;
import co.com.bancolombia.usecase.datamodel.DataModelUseCase;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api", consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class GeneralController {

    private final DataModelUseCase dataModelUseCase ;

    @GetMapping("/health")
    public ResponseEntity<ResponseHttp> health() {
        return ResponseEntity.ok(ResponseHttp.builder()
                .statusCode(HttpStatus.OK.value())
                .message("Backend is running")
                .data(null).build());
    }

    @PostMapping(value = "/authentication")
    public ResponseEntity<ResponseHttp> listUsers( @RequestBody RequestModelByEmail requestModelByEmail) {
        ResponseEntity <ResponseHttp> response ;
        try{
            Object body = dataModelUseCase.GetInfoByUser(requestModelByEmail);
            response= ResponseEntity.ok(ResponseHttp.builder()
                    .statusCode(HttpStatus.OK.value())
                    .data(body)
                    .message("Request completed successfully")
                    .build());

        }catch (Exception e){
            response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ResponseHttp.builder()
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .message(e.getMessage())
                            .data(null)
                            .build());
        }
        return response;
    }

    @PostMapping(value = "/list-currencies-by-country")
    public ResponseEntity<ResponseHttp> listCurrenciesByCountry( @RequestBody RequestModelByCountry requestModelByCountry) {
        ResponseEntity <ResponseHttp> response ;
        try{
            Object body = dataModelUseCase.GetInfoByCountry(requestModelByCountry.getCountry());
            response = ResponseEntity.ok(ResponseHttp.builder()
                    .statusCode(HttpStatus.OK.value())
                    .data(body)
                    .message("Request completed successfully")
                    .build());
        }catch (Exception e){
            response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ResponseHttp.builder()
                    .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .message(e.getMessage())
                    .data(null)
                    .build());
        }
        return response;
    }
}


