INSERT INTO department (department_name)
VALUES  ("Accounting"),
        ("Marketing"),
        ("Management"),
        ("IT");


INSERT INTO roles (title, salary, deptId)
VALUES  ("Receptionist", 35000.00, 3 ),
        ("Developer", 65000.00, 4),
        ("Accountant", 55000.00, 1),
        ("Sales Representative", 40000.00, 2);

INSERT INTO employee (first_name, last_name, roleRefId)
VALUES  ("Paul", "Barnes", 2),
        ("Tyler", "Johnson", 4),
        ("Bob", "Robert", 1),
        ("Richard", "Tucker", 3);