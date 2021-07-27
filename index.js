const inquirer = require('inquirer')
// const Department = require('./lib/Department')
// const Employee = require('./Employee')
// const Role = require('./Role')
const mysql = require('mysql2');

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

// INQUIRER QUESTION ARRAYS

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
// =========================== END =====================//




function generateDatabase() {
    db.query( 'SOURCE schema.sql', function (err, results) {
        if(err) throw err;
        console.log(results)
            db.query('SOURCE seeds.sql', function (err, results) {
                if(err)throw err;
                console.log(results)
            })
        })
    }
    
    
async function company() {
    let optionChoice = await inquirer.prompt(options)
    console.log(optionChoice)
    let navigateChoice = option => {
        let choice = option.options
        switch(choice) {
            case 'View all Departments':
                console.log(choice)
                db.query('SELECT * FROM department', function (err, results) {
                    if(err) throw err;
                    console.log(results);
                })
                navigateBack();
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
                return 'Error, option was selected incorrectly!'
        }
    }
    let navigationPick = await navigateChoice(optionChoice)
    return navigationPick
}
    

// allows the user to navigate back to the start of the program with y/n question.

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
//generateDatabase()
