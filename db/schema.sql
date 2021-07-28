DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(8,2) NOT NULL, 
    deptId INT,
    FOREIGN KEY (deptId)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roleRefId INT,
    FOREIGN KEY (roleRefId)
    REFERENCES roles(role_id)
    ON DELETE SET NULL
);