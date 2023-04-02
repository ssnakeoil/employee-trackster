const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

init(); // initializes the app

// Displays the logo text, loads main prompts
function init() {
  const logoM = logo({ name: "Employee Manager" }).render();
  console.log(logoM);
  loadMainPrompts();
}

// Loads the main prompts
function loadMainPrompts() {

}

// function that lets you view all employees
function viewEmployees() {

}

// function that limits the view of employees by department
function viewEmployeesByDepartment() {

}

// function that limits the view of employees by manager
function viewEmployeesByManager() {

}

// function that lets you update employee role
function updateEmployeeRole() {
    
}

// function that lets you update employee manager
function updateEmployeeManager() {
    
}

// function that lets you delete an employee
function deleteEmployee() {

}

// function that lets you add employee
function addEmployee() {

}

// function that lets you add a role
function addRole() {

}

// function that lets you delete a role
function deleteRole() {

}

// function that lets you add a department
function addDepartment() {
    
}

// function that lets you delete a department
function deleteDepartment() {

}

// function that lets you view the total utilized budget of a department
function viewUtilizedBudgets() {
    
}

// function that lets you exit the app
function exit() {
    console.log("Goodbye!");
    process.exit();
}