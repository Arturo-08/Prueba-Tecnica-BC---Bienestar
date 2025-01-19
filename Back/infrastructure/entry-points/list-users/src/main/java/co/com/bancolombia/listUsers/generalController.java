package co.com.bancolombia.listUsers;

import co.com.bancolombia.model.requestmodelid.RequestModelId;
import co.com.bancolombia.usecase.datamodel.DataModelUseCase;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class generalController {

    private DataModelUseCase dataModelUseCase;


    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Backend is running!");
    }
    @PostMapping("/list-users")
    public ResponseEntity<String> listUsers( @RequestBody RequestModelId requestModelId) {
        ResponseEntity <String> response ;
        try{
            Object body = dataModelUseCase.GetInfoByUser(requestModelId.getId());
            response= ResponseEntity.ok(body.toString());

        }catch (Exception e){
            response = ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(e.getMessage());
        }
        return response;
    }
}


