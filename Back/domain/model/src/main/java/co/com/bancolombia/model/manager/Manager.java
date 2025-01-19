package co.com.bancolombia.model.manager;

import lombok.Builder;
import lombok.AllArgsConstructor;
import lombok.Getter;

import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Builder(toBuilder = true)
public class Manager {

    private int id;
    private String name;
}
