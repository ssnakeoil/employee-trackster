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
function loadMainPrompts() {}

// function that lets you view all employees
function viewEmployees() {}

// function that limits the view of employees by department
function viewEmployeesByDepartment() {}

// function that limits the view of employees by manager
function viewEmployeesByManager() {}

// function that lets you update employee role
function updateEmployeeRole() {}

// function that lets you update employee manager
function updateEmployeeManager() {}

// function that lets you delete an employee
function deleteEmployee() {}

// function that lets you add employee
function addEmployee() {
  prompt([
    {
      name: "first_name",
      message: "Please enter employee's first name:",
    },
    {
      name: "last_name",
      message: "Please enter employee's last name:",
    },
  ]).then((res) => {
    let firstName = res.first_name;
    let lastName = res.last_name;

    db.findAllRoles().then(([rows]) => {
      let roles = rows;
      const roleChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id,
      }));

      prompt({
        type: "list",
        name: "roleId",
        message: "Employee's role:",
        choices: roleChoices,
      }).then((res) => {
        let roleId = res.roleId;

        db.findAllEmployees().then(([rows]) => {
          let employees = rows;
          const managerChoices = employees.map(
            ({ id, first_name, last_name }) => ({
              name: `${first_name} ${last_name}`,
              value: id,
            })
          );

          managerChoices.unshift({ name: "None", value: null });

          prompt({
            type: "list",
            name: "managerId",
            message: "Employee's manager:",
            choices: managerChoices,
          })
            .then((res) => {
              let employee = {
                manager_id: res.managerId,
                role_id: roleId,
                first_name: firstName,
                last_name: lastName,
              };

              db.createEmployee(employee);
            })
            .then(() =>
              console.log(`Added ${firstName} ${lastName} to the database`)
            )
            .then(() => loadMainPrompts());
        });
      });
    });
  });
}

// function that lets you add a role
function addRole() {}

// function that lets you delete a role
function deleteRole() {}

// function that lets you add a department
function addDepartment() {}

// function that lets you delete a department
function deleteDepartment() {}

// function that lets you view the total utilized budget of a department
function viewUtilizedBudgets() {}

// function that lets you exit the app
function exit() {
  console.log("Goodbye!");
  process.exit();
}
