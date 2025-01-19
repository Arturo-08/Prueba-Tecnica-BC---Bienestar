package co.com.bancolombia.config;

import co.com.bancolombia.model.datamodeluser.gateways.DataModelUserRepository;
import co.com.bancolombia.usecase.datamodel.DataModelUseCase;
import org.springframework.context.annotation.*;

@Configuration
@ComponentScan(basePackages = "co.com.bancolombia.usecase",
        includeFilters = {
                @ComponentScan.Filter(type = FilterType.REGEX, pattern = "^.+UseCase$")
        },
        useDefaultFilters = false)
public class UseCasesConfig {
        @Bean
        @Primary
        public DataModelUseCase dataModelUseCaseConfig(DataModelUserRepository dataModelUserRepository) {
                return new DataModelUseCase(dataModelUserRepository);
        }
}
