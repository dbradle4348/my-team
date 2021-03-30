const Employee = require("../lib/Employee");

const generatePage = (employees) => {
  if (!employees) {
    return "";
  }

  // create the manager html
  const generateManager = (manager) => {
    return `
  <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title">${manager.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
      </ul>
  </div>
</div>

  `;
  };

  // create the html for engineer
  const generateEngineer = (engineer) => {
    return `
  <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title">${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank"
                    rel="noopener noreferrer">${engineer.getGithub()}</a></li>
      
        </ul>
  </div>
</div>`;
  };
  // create the html for intern
  const generateIntern = (intern) => {
    return `
  <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${intern.getName()}</h2>
      <h3 class="card-title">${intern.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
  </div>
</div>`;
  };
  // push, filter and join the 3 htmls
  console.log(employees);
  const html = [];

  html.push(
    employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
      .join('')
  );
  // need same thing for the other ones
console.log(html);
  html.push(
    employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join('')
  );

  html.push(
    employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join('')
  );

  // function buildTeam() {
  //           // create some kind of an output directory if a path doesn't exist
  //        if(!fs.existsSync(OUTPUT_DIR)) {
  //          fs.mkdirSync(OUTPUT_DIR)
  //        }
  //        fs.writeFileSync(outputPath, render(employees), "utf-8")
  //       .catch(err)
  //         }

  return html.join("");
};

// some kind of export function to generate the entire page
// here you'll have your doctype and head, body... main html

module.exports = (employees) => {
  return `

  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
  </head>

<body>
<header>
<h1>My Team</h1>
</header>
${generatePage(employees)}

</body>

  `;
};
