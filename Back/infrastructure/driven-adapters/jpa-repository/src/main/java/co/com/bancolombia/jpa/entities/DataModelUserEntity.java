package co.com.bancolombia.jpa.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.springframework.stereotype.Service;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DataModelUserEntity {
    @Id
    private int id;
    @Column(name = "name")
    private String userName;
    @Column(name = "email")
    private String userEmail;
    @Column
    private String countryName;
    @Column
    private String currencyName;
    @Column(name = "symbol")
    private String currencySymbol;
    @Column(name = "exchange_rate")
    private Double exchangeRate;
}