-- Base de datos
CREATE DATABASE crypto_manager;

-- Tabla de Países
CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Tabla de Monedas
CREATE TABLE currencies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    symbol VARCHAR(10) NOT NULL,
    exchange_rate NUMERIC(10, 2) NOT NULL -- Valor en dólares
);

-- Tabla Intermedia: Países y Monedas
CREATE TABLE country_currency (
    country_id INT NOT NULL,
    currency_id INT NOT NULL,
    PRIMARY KEY (country_id, currency_id),
    FOREIGN KEY (country_id) REFERENCES countries(id) ON DELETE CASCADE,
    FOREIGN KEY (currency_id) REFERENCES currencies(id) ON DELETE CASCADE
);

-- Tabla de Gestoras
CREATE TABLE managers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Tabla Intermedia: Países y Gestoras
CREATE TABLE country_manager (
    country_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (country_id, manager_id),
    FOREIGN KEY (country_id) REFERENCES countries(id) ON DELETE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES managers(id) ON DELETE CASCADE
);

-- Tabla de Usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    country_id INT NOT NULL,
    FOREIGN KEY (country_id) REFERENCES countries(id) ON DELETE CASCADE
);

-- Tabla Intermedia: Usuarios y Monedas
CREATE TABLE user_currency (
    user_id INT NOT NULL,
    currency_id INT NOT NULL,
    PRIMARY KEY (user_id, currency_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (currency_id) REFERENCES currencies(id) ON DELETE CASCADE
);

-- Insertar Datos en Países
INSERT INTO countries (name) VALUES
    ('USA'),
    ('Canada'),
    ('Germany'),
    ('Japan'),
    ('Australia'),
    ('Brazil');

-- Insertar Datos en Monedas
INSERT INTO currencies (name, symbol, exchange_rate) VALUES
    ('Bitcoin', 'BTC', 30000.00),
    ('Ethereum', 'ETH', 2000.00),
    ('Litecoin', 'LTC', 100.00),
    ('Ripple', 'XRP', 0.50),
    ('Cardano', 'ADA', 0.30),
    ('Solana', 'SOL', 20.00);

-- Insertar Relaciones en Country_Currency
INSERT INTO country_currency (country_id, currency_id) VALUES
    (1, 1), (1, 2), (1, 3), -- USA permite BTC, ETH, LTC
    (2, 2), (2, 3), (2, 4), -- Canada permite ETH, LTC, XRP
    (3, 1), (3, 4), (3, 5), -- Germany permite BTC, XRP, ADA
    (4, 1), (4, 6),         -- Japan permite BTC, SOL
    (5, 3), (5, 4),         -- Australia permite LTC, XRP
    (6, 5), (6, 6);         -- Brazil permite ADA, SOL

-- Insertar Datos en Gestoras
INSERT INTO managers (name) VALUES
    ('Binance'),
    ('Coinbase'),
    ('Kraken'),
    ('Gemini'),
    ('Bitstamp');

-- Insertar Relaciones en Country_Manager
INSERT INTO country_manager (country_id, manager_id) VALUES
    (1, 1), (1, 2),         -- USA tiene Binance y Coinbase
    (2, 1), (2, 3),         -- Canada tiene Binance y Kraken
    (3, 2), (3, 4),         -- Germany tiene Coinbase y Gemini
    (4, 1), (4, 5),         -- Japan tiene Binance y Bitstamp
    (5, 3), (5, 4),         -- Australia tiene Kraken y Gemini
    (6, 1), (6, 2);         -- Brazil tiene Binance y Coinbase

-- Insertar Datos en Usuarios
INSERT INTO users (name, email, password, country_id) VALUES
    ('Alice', 'alice@example.com', 'password123', 1), -- Alice en USA
    ('Bob', 'bob@example.com', 'password456', 2),    -- Bob en Canada
    ('Charlie', 'charlie@example.com', 'password789', 3), -- Charlie en Germany
    ('Diana', 'diana@example.com', 'securepass1', 4), -- Diana en Japan
    ('Eve', 'eve@example.com', 'securepass2', 5),    -- Eve en Australia
    ('Frank', 'frank@example.com', 'securepass3', 6); -- Frank en Brazil

-- Insertar Relaciones en User_Currency
INSERT INTO user_currency (user_id, currency_id) VALUES
    (1, 1), (1, 2),        -- Alice tiene BTC, ETH
    (2, 2), (2, 3),        -- Bob tiene ETH, LTC
    (3, 1), (3, 5),        -- Charlie tiene BTC, ADA
    (4, 1), (4, 6),        -- Diana tiene BTC, SOL
    (5, 3), (5, 4),        -- Eve tiene LTC, XRP
    (6, 5), (6, 6);        -- Frank tiene ADA, SOL