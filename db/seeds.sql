INSERT INTO department (department_name)
VALUES  ("Accounting"),
        ("Marketing"),
        ("Management"),
        ("IT");


INSERT INTO roles (title, salary, department_id)
VALUES  ("Receptionist",35000, 3 ),
        ("Developer", 65000, 4),
        ("Accountant", 55000, 1),
        ("Sales Representative", 40000, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Paul", "Barnes", 2),
        ("Tyler", "Johnson", 4),
        ("Bob", "Robert", 1),
        ("Richard", "Tucker", 3);