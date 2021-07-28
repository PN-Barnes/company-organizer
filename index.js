const inquirer = require('inquirer')
const Department = require('./lib/Department')
const createDepartment = require('./lib/Department');
// const Employee = require('./Employee')
// const Role = require('./Role')
const mysql = require('mysql2');
const express = require('express')
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// ===================== CREATE CONNECTION ================== //
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'M@keMoney$2021',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );
//================ INQUIRER QUESTION ARRAYS ================ //

const addDepartmentInfo = [
    {
        type: "input",
        message: "What is the name of the Department?",
        name: "deptName"
    }
]


const employeeInfo = [
    {
        type: "Input",
        message: "What is the Employee's First name?",
        name: "firstName"
    },
    {
        type: "Input",
        message: "What is the Employee's Last name?",
        name: "lastName"
    }, 
    {
        type: "input",
        message: "What is the Employee's Role?",
        name: "employeeRole"
    }

]


const options = [
    {
        type: 'list',
        message: 'Choose what you would like to do!',
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
        name: 'options'
    }
]


// =========================== END =====================//


const navigation = () => {

    inquirer.prompt(options).then((data) => {
        let choice = data.options
        switch(choice) {
            case 'View all Departments':
                //console.log(choice)
                printDepartment();

                break;
            case 'Add a Department':
                runAddDepartment()
                
                break;
            case 'View all Roles':
                console.log(choice)
                viewRoles()

                break;
            case 'Add a role':
                //addNewRole()
                console.log(choice)
                break;
            case 'View all Employees':
                console.log(choice)
                viewEmployees()

                break;
            case 'Add an Employee':
                runAddEmployee()
                //console.log(choice)
                break;
            case 'Update an Employee':
                //updateEmployee()
                console.log(choice)
                break;
            default: 
                return 'Error, option was selected incorrectly!'
        }
    })
}

// ================= VIEW FUNCTIONS ==========================//

function printDepartment() {
    db.query('SELECT * FROM department', function (err, results) {
        if(err) throw err;
        console.log("\n")
        console.table(results);
        navigation()
    })
}   

function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        if(err) throw err;
        console.log("\n")
        console.table(results);
        navigation()
    })
}

function viewRoles() {
    db.query('SELECT * FROM roles', function (err, results) {
        if(err) throw err;
        console.log("\n")
        console.table(results);
        navigation()
    })
}
// =================================================================//        
 

// ========================== ADD FUNCTIONS ======================= //

const runAddDepartment = async() => {
    let deptInfo = await inquirer.prompt(addDepartmentInfo)
    addDepartment(deptInfo)
}

function addDepartment (info) {
    let departmentName = info.deptName
    let query = "INSERT INTO department (department_name) VALUES(?)"
    db.query(query, [departmentName], function(err, results) {
        if(err)throw err;
        console.log(`Department: ${departmentName} Added Successfully!`)
        navigation()
    })
}

// ================================================================== //
function addRole() {

}

// ================================================================= //

const runAddEmployee = async() => {
    let info = await inquirer.prompt(employeeInfo)
    dbAddEmployee(info)
}
function dbAddEmployee(info) {
    let fName = info.firstName;
    let lName = info.lastName;
    let roleChoice = info.employeeRole
    db.query('INSERT INTO employee (first_name, last_name, roleRefId) VALUES (?, ?, ?)', [fName, lName, roleChoice], function(err,results) {
        if(err) throw err;
        console.log("Employee Added successfully")
        navigation()
    })
}


// =============================================================== //

navigation()

