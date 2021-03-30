// const fs = require('fs');

// // writing files
// const writeFile = fileContent => {
//   return new Promise((resolve, reject) => {
//      fs.writeFile('./index.html', pageHTML, err => {
//        if (err) throw new Error(err);
//        console.log('Page created! Check out index.html in this directory to see it!');
//      });
//   });
// };


//  // copying file
//  const copyFile = () => {
//      return new Promise((resolve, reject) => {
//        fs.copyFile('./src/style.css', './output/style.css', err => {
//          if (err) {
//            reject(err);
//            return;
//          }
  
//          resolve({
//            ok: true,
//            message: 'File created!'
//          });
//        });
//      });
//    };
  
//    module.exports = { copyFile };