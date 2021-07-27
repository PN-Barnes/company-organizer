const inquirer = require("inquirer")

const EmployeeQs = [
    {
        type: 'input',
        message: "What is the employee's first name?",
        name: 'first_Name'
    },
    {
        type: 'input',
        message: "What is the employee's Last name?",
        name: 'last_name'
    },
    {
        type: 'list',
        message: "What is the Employee's Role?",
        choices: []
    },
    {
        type: 'list',
        message: "Who is the employee's manager?",
        choices: []
    }
]

const newEmployee = inquirer.prompt(EmployeeQs)

module.exports = newEmployee;