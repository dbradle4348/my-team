const generatePage = employees => {
    if (!employees) {
      return '';
    }
  
    return `
      <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
        <p>${employees}</p>
      </section>
    `;
  };



  module.exports = templateData => {
    // destructure page data by section
    //const { projects, about, ...header } = templateData;
    console.log(templateData)
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1>this worked<h1>
        </div>
      </header>
      <main class="container my-5">
      </main>
      
    </body>
    </html>
    `;
  };