const inquirer = require('inquirer');
const fs = require("fs");
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const path = require('path');

const employees = []

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "teams.html")

const addManager = () => {
  return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the manager's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a name!');
            return false;
          }
        }
      },
      {
            type: 'input',
            name: 'id',
            message: "'What is the manager's employee ID? (Required)",
            validate: IdInput => {
              if (IdInput) {
                return true;
              } else {
                console.log('Please enter an ID!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email? (Required)",
            validate: EmailInput => {
              if (EmailInput) {
                return true;
              } else {
                console.log('Please enter an email!');
                return false;
              }
            }
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: "What is the manager's office number?",
          validate: officeInput => {
            if (officeInput) {
              return true;
            } else {
              console.log('Please enter an office number!');
              return false;
            }
          }
      }
        ])
      .then(answers => {
        new Manager(answers)
        employees.push(Manager)
        trafficControl()
      })
    }

const addEngineer = () => {
  return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name? (Required)",
        validate: nameInput => {
        if (nameInput) {
           return true;
      } else {
        console.log('Please enter a name!');
        return false;
      }
    }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID? (Required)",
        validate: IdInput => {
        if (IdInput) {
        return true;
        } else {
        console.log('Please enter an ID!');
        return false;
      }
      }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email? (Required):",
        validate: EmailInput => {
        if (EmailInput) {
        return true;
        } else {
        console.log('Please enter an Email!');
        return false;
      }
      }
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: "What is the engineer's GitHub Username? (Required):",
        validate: usernameInput => {
        if (usernameInput) {
        return true;
        } else {
        console.log('Please enter the Github Username!');
        return false;
      }
    }
  }
])
        .then(answers => {
        new Engineer(answers)
        employees.push(Engineer)
        trafficControl();
        })
      }
      
const addIntern = () => {
  return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the manager's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a name!');
            return false;
          }
        }
      },
      {
            type: 'input',
            name: 'id',
            message: "'What is the intern's employee ID? (Required)",
            validate: IdInput => {
              if (IdInput) {
                return true;
              } else {
                console.log('Please enter an ID!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email? (Required)",
            validate: EmailInput => {
              if (EmailInput) {
                return true;
              } else {
                console.log('Please enter an email!');
                return false;
              }
            }
        },
        {
          type: 'input',
          name: 'school',
          message: "What is the intern's school?",
          validate: schoolInput => {
            if (schoolInput) {
              return true;
            } else {
              console.log('Please enter a school!');
              return false;
            }
          }
      }
        ])
      .then(answers => {
        new Manager(answers)
        employees.push(Intern)
        trafficControl()
      })
    }
      
      

  const trafficControl = () => { 
    return inquirer
    .prompt({        
        type: 'list',
        name : 'newTeamMember',          
        message: "Would you like to add another team member?",
        choices: ['Manager', 'Engineer', 'Intern', 'Finished! Create my page']
      })
       .then(({ newTeamMember }) => { 
         if (newTeamMember === 'Manager') {
           addManager();
         }
         else if (newTeamMember === 'Engineer') {
           addEngineer();
         }
         else if (newTeamMember === 'Intern') {
           addIntern();
         }
         else {
           
          
          
          generatePage();
           
           buildTeam();
          }
          
         }
       )};
    
function buildTeam() {
            // create some kind of an output directory if a path doesn't exist
         if(!fs.existsSync(OUTPUT_DIR)) {
           fs.mkdirSync(OUTPUT_DIR)
         }
         fs.writeFileSync(outputPath, generatePage(employees), "utf-8")
        .catch() 
          }
addManager();
      
    
    