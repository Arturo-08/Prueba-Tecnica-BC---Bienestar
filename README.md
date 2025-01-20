# Proyecto: Plataforma de Gestión de Cryptomonedas
Este es un repositorio para realizar una prueba técnica en el rol Ingeniero de Software en Bancolombia SA.

## **Estructura del Proyecto**

El proyecto sigue un enfoque modular para facilitar la escalabilidad y el mantenimiento:

- **Backend**: Contiene la lógica de negocio y los endpoints del microservicio. Se planteó para usar **"CleanArquitecture"** junto con su modelo de inversión de dependencias, para lograr desacoplar los modulos y dependencias y así ser más adaptable el código a cambio u actualizaiones.
- **Frontend**: Maneja la interfaz de usuario y la interacción con el usuario. Se usó la arquitectura por defecto de los proyectos de Angular, esto permite una correcta comunicación entre componentes.
- **Base de Datos (DB)**: Incluye el esquema (script) y la configuración de conexión para MySQL. Se planteó un modelo Relacional dada las relaciones de los usuarios.

## **Requisitos Técnicos**

El proyecto se desarrolló utilizando las siguientes versiones y herramientas:

- **Frontend**: Angular 17
- **Backend**: Spring Boot v3.4.1
- **Arquitectura**: Clean Architecture v3.20.10
- **Base de Datos**: MySQL Server v8.0.40
- **Gestor de Dependencias**: Maven para el backend y npm para el frontend

## **Guía de Instalación**

Sigue estos pasos para configurar y ejecutar el proyecto desde una máquina que clone el repositorio:

### **Requisitos Previos**

1. Instalar las siguientes herramientas:
   - **Node.js** (v18 o superior) y npm (v9 o superior).
   - **Angular CLI** (v17 o superior):
     ```bash
     npm install -g @angular/cli@17
     ```
   - **Java JDK** (v21 Amazon Corretto o superior).
   - **Maven** (v3.8.5 o superior).
   - **MySQL** (v8 o superior).

2. Clonar el repositorio:
   ```bash
   git clone https://github.com/Arturo-08/Prueba-Tecnica-BC---Bienestar.git
   cd tu-repositorio
   ```

### **Configuración del Backend**

1. Configura las credenciales de la base de datos en el archivo `application.yml` (ubicado en `Back/applications/app-service/src/main/resources/application.yaml`):
   ```yaml
   spring:
     datasource:
       url: "jdbc:mysql://localhost:3306/crypto_manager"
       username: <TU_USUARIO> (usualmente "root")
       password: <TU_PASSWORD> (usualmente "admin123")
       driverClassName: com.mysql.cj.jdbc.Driver
     jpa:
       hibernate:
         ddl-auto: update
       show-sql: true
       databasePlatform: "org.hibernate.dialect.MySQLDialect"
   ```

2. Compila y ejecuta el backend:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

3. El backend estará disponible en el puerto **8080** por defecto: `http://localhost:8080`.
   
### **Configuración de la base de datos**
1. Usa el script para la creación de la base de datos y sus tablas relacionales "scriptDataBase.sql" (Ubicado en `DB/scriptDataBase.sql´).

### **Configuración del Frontend**

1. Instala las dependencias del proyecto Angular:
   ```bash
   cd frontend
   npm install
   ```

2. Ejecuta el servidor de desarrollo:
   ```bash
   ng serve
   ```

3. El frontend estará disponible en el puerto **4200** por defecto: `http://localhost:4200`.

## **Plan de Pruebas**

Se implementarán los siguientes tipos de pruebas para garantizar la calidad del proyecto:

### **Pruebas Unitarias**

- **Frontend**:
  - Framework sugerido: **Jest**
  - Ejecuta las pruebas unitarias:
    ```bash
    ng test
    ```

- **Backend**:
  - Framework sugerido: **JUnit**
  - Ejecuta las pruebas unitarias:
    ```bash
    mvn test
    ```

### **Pruebas de Aceptación**

- Framework sugerido: **Cucumber**.
- Configura escenarios y pruebas en archivos `.feature`.

### **Pruebas de Performance**

- Framework sugerido para backend: **JMeter**.
- Diseñar escenarios de carga para endpoints críticos y de alta concurrencia.

### **Pruebas E2E**

- **Frontend**:
  - Framework: **Playwright**.
  - Ejecuta pruebas E2E:
    ```bash
    npx playwright test
    ```

### **Análisis de Código**

- Herramienta: **SonarQube**.
- Ejecuta el análisis:
  ```bash
  sonar-scanner
  ```

## **Colección de Postman**

Se incluye una colección de Postman para probar los endpoints del backend:

### **1. Health**
Verifica que el microservicio esté funcionando:
```bash
curl -X GET http://localhost:8080/api/health
-H "Accept: application/json" \
-H "Content-Type: application/json" 
```

**Respuesta esperada:**
```json
"Backend is running!"
```

### **2. Listar Monedas de un Usuario**
Lista las monedas asociadas a un usuario ingresando su email:
```bash
curl -X POST http://localhost:8080/api/list-users \
-H "Accept: application/json" \
-H "Content-Type: application/json"\
-d '{ 
    "email": "bob@example.com",
    "password": "12345"
}'
```

**Respuesta esperada:**
```json
{
  "userName": "Bob",
  "userEmail": "bob@example.com",
  "countryName": "Canada",
  "currencies": [
    { "id": 2, "name": "Ethereum", "symbol": "ETH", "exchange_rate": 2000 },
    { "id": 3, "name": "Litecoin", "symbol": "LTC", "exchange_rate": 100 }
  ]
}
```

### **3. Listar Monedas por País**
Lista las monedas disponibles en un país ingresando su nombre:
```bash
curl -X POST http://localhost:8080/api/list-currencies-by-country \
-H "Accept: application/json" \
-H "Content-Type: application/json"\
-d '{
    "country": "Canada"
}'
```

**Respuesta esperada:**
```json
[
  { "name": "Ethereum", "symbol": "ETH", "exchange_rate": 2000 },
  { "name": "Litecoin", "symbol": "LTC", "exchange_rate": 100 }
]
```
##**Imagenes de Referencia**
### Login:
![image](https://github.com/user-attachments/assets/546d9c21-4d1b-4b4c-8058-2b4b991ffd2b)

### Lista de monedas del usuario:
![image](https://github.com/user-attachments/assets/9fded1ad-c5c0-47de-8cdc-ac4509117b0c)

## **¿Todo se puede automatizar? ¿Todo es sujeto a ser automatizado?**

Si bien apostar por la automatización siempre traerá consigo un reto técnico y monetario y aunque la automatización permite mejorar la eficiencia, reducir errores humanos y liberar tiempo para tareas de mayor valor, algunas ocasiones es importante comparar el costo de la automatización o si implica una opinion humana.La clave está en identificar qué procesos generan más valor al ser automatizados y priorizarlos.

En este caso se considera que las tareas propuestas en el reto técnico todas son altamente automatizables, incluyendo la lógica del negocio como todo el plan de pruebas. Se pueden seguir agregando más elementos que permita la hiperpersonalización dependiendo del usuario.






