const Input = require('../lib/Input.js');

// defining the function to create the employee cards
const generateCards = (arrOfObj)=> {
   cardsArr = arrOfObj.map(function({name, id, email, ...rest}, index)  {
      return`

         <section class="card">
               <div class="card-title">
                  <h3>${name}</h3>
                  <p>${arrOfObj[index].getRole()}</p>
               </div>

               <div class="card-content">
               <ul class="list-group">
                  <li>ID: ${id}</li>
                  <li>Email: ${email}</li>
                  <li>${Object.keys(rest)[0]}: ${Object.values(rest)[0]}</li>
               </ul>
            </div>
            </section>
      
      `
   });
   return cardsArr.join('');
};



const generatePage = (arrOfObj) => {
   return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="./assets/style.css">
   </head>
   <body>
      <header class = 'jumbotron'>
         <h1 class="page-title">My Team</h1>
      </header>

      <main>
         <section class="card-container">
            ${generateCards(arrOfObj)}
         </section>
      <main>
   </body>
   </html>
`

};

module.exports = generatePage;