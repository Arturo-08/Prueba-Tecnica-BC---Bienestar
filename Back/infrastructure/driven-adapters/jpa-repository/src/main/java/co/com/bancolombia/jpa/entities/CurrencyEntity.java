package co.com.bancolombia.jpa.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "currencies")
public class CurrencyEntity {
    @Id
    private int id;
//    @Column
//    private String name;
//    @Column
//    private String symbol;
//    @Column
//    private Double exchange_rate;
}
