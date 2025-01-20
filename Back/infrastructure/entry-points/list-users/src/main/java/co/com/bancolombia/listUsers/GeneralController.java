package co.com.bancolombia.listUsers;

import co.com.bancolombia.model.requestmodels.RequestModelByCountry;
import co.com.bancolombia.model.requestmodels.RequestModelByEmail;
import co.com.bancolombia.usecase.datamodel.DataModelUseCase;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/api", consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class GeneralController {

    private final DataModelUseCase dataModelUseCase ;

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Backend is running!");
    }
    @PostMapping(value = "/list-users")
    public ResponseEntity<Object> listUsers( @RequestBody RequestModelByEmail requestModelByEmail) {
        ResponseEntity <Object> response ;
        try{
            Object body = dataModelUseCase.GetInfoByUser(requestModelByEmail.getEmail());
            response= ResponseEntity.ok(body);

        }catch (Exception e){
            response = ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(e.getMessage());
        }
        return response;
    }
    @PostMapping(value = "/list-currencies-by-country")
    public ResponseEntity<Object> listCurrenciesByCountry( @RequestBody RequestModelByCountry requestModelByCountry) {
        ResponseEntity <Object> response ;
        try{
            Object body = dataModelUseCase.GetInfoByCountry(requestModelByCountry.getCountry());
            response = ResponseEntity.ok(body);
        }catch (Exception e){
            response = ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(e.getMessage());
        }
        return response;
    }
}


