const inquirer = require('inquirer')
const Department = require('./Department')
const Employee = require('./Employee')
const Role = require('./Role')
const fs = require('fs')

const options = [
    {
        type: 'list',
        message: 'Choose what you would like to do!',
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
        name: 'options'
    }
]

let optionChoice = inquirer.prompt(options)

function company() {
    inquirer
    .prompt(options)
    .then(navigateChoice(optionChoice)) 
}

const navigateChoice = (option) => {
    let choice = option.options
    switch(choice) {
        case 'View all Departments':
            viewDepartments()
            break;
        case 'View all Roles':
            viewRoles()
            break;
        case 'View al Employees':
            viewEmployees()
            break;
        case 'Add a Department':
            addDepartment()
            break;
        case 'Add a role':
            addNewRole()
            break;
        case 'Add an Employee':
            addEmployee()
            break;
        case 'Update an Employee':
            updateEmployee()
            break;
        default: 
            return 'Error, option was selected correctly!'
    }
}

module.exports = company;