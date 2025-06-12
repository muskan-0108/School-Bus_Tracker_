CREATE DATABASE schoolbus;

USE schoolbus;

CREATE TABLE buses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  bus_number VARCHAR(20),
  driver_name VARCHAR(100)
);

CREATE TABLE bus_locations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  bus_id INT,
  latitude DECIMAL(9,6),
  longitude DECIMAL(9,6),
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (bus_id) REFERENCES buses(id)
);
