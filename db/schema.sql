DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    dept_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (dept_id)
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary INT,
    department INT,
    PRIMARY KEY (role_id)
    FOREIGN KEY (department)
    REFERENCES department(dept_id)
);

CREATE TABLE employee (
    employee_id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roleRefId INT,
    PRIMARY KEY employee_id
    FOREIGN KEY (roleRefId)
    REFERENCES roles(role_id)
);