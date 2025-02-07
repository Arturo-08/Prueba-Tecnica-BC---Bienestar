package co.com.bancolombia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.sql.Array;
import java.util.Scanner;

@SpringBootApplication
@ConfigurationPropertiesScan
public class MainApplication {
    public static void main(String[] args) {
        SpringApplication.run(MainApplication.class, args);

//        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//
//        String plainPassword = "mySecurePassword"; // Reemplaza con la contraseña real
//        String hashedPassword = passwordEncoder.encode(plainPassword);
//
//        System.out.println("Hashed Password: " + hashedPassword);
    }
}
