const inquirer = require('inquirer')
const Department = require('./lib/Department')
// const Employee = require('./Employee')
// const Role = require('./Role')
const mysql = require('mysql2');
const fs = require('fs')


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );


const options = [
    {
        type: 'list',
        message: 'Choose what you would like to do!',
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
        name: 'options'
    }
]

const goBack = [
    {
        type: 'confirm',
        message: 'what would you like to do next?',
        name: 'goBack'
    }
]



function company() {
    inquirer
    .prompt(options)
    .then(navigateChoice(options)) 
}

const navigateChoice = (option) => {
    let choice = option.options
    switch(choice) {
        case 'View all Departments':
            console.log(choice)
            db.query('SELECT * FROM department', function (err, results) {
                if(err) throw err;
                console.log(results);
                navigateBack()
            });
            break;
        case 'Add a Department':
            //addDepartment()
            console.log(choice)
            break;
        case 'View all Roles':
            //viewRoles()
            console.log(choice)
            break;
        case 'Add a role':
            //addNewRole()
            console.log(choice)
            break;
        case 'View all Employees':
            //viewEmployees()
            console.log(choice)
            break;
        case 'Add an Employee':
            addEmployee()
            console.log(choice)
            break;
        case 'Update an Employee':
            //updateEmployee()
            console.log(choice)
            break;
        default: 
            return 'Error, option was selected correctly!'
    }
}

function navigateBack(back) {
    let confirmChoice = back.goBack
    inquirer.prompt(goBack)
    if(confirmChoice){
        company();
    } else {
        return;
    }

}
company()

module.exports = company, navigateChoice;