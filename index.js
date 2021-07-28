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
                //addDepartment()
                console.log(choice)
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
                // addEmployee()
                console.log(choice)
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
// allows the user to navigate back to the start of the program with y/n question.

function navigateBack() {
    inquirer.prompt(goBack)
    let confirmChoice = goBack.goBack
    if(confirmChoice){
        company();
    } else {
        return;
    }
}
//company()
//generateDatabase()
// Default response for any other request (Not Found)
// app.use((req, res) => {
//     res.status(404).end();
//   });
  
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
navigation()