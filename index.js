const inquirer = require('inquirer')
// const Department = require('./Department')
// const Employee = require('./Employee')
// const Role = require('./Role')
const fs = require('fs')

const options = [
    {
        type: 'list',
        message: 'Choose what you would like to do!',
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
        name: 'options'
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
            //viewDepartments()
            console.log(choice)
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
            //addEmployee()
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
company()

module.exports = company;