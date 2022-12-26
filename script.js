/** algo
 * 1/au niveau de l'html on a quoi?
 * - un formulaire.
 * donc: recupérer le formulaire et l'activer au submit 
 *    (+ make sure the search isn't empty)
 * 
 * 2/fetch data by searching parameters
 * */

let form = document.forms[0];
let search = form.elements["search"];
// let search= document.getElementsByClassName('search');
let results = document.querySelector('#searchResults');

// let nameUser = document.querySelector('h1');
// let emailUser = document.querySelector('h2');
let data = [];

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(search.value.trim !== ""){
        // console.log(search.value);
        fetchUsers(search.value);
    };
})
function filterbyName(user){
    return user.username == search.value;
    //username == search.value
    
}

//the function en question
function fetchUsers(){
    fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then((response)=> {
        return response.json();
    })
    .then((response)=> {
         data = response;
         let resultUser = data.filter(filterbyName);

        if (resultUser !== null) {
        console.log(resultUser);
        let nameUser = document.createElement('h1');
        let emailUser = document.createElement('h2');
        nameUser.classList.add('userName');
        emailUser.classList.add('userEmail');
        nameUser.innerHTML =  resultUser[0].name;
        emailUser.innerHTML = resultUser[0].email;    
        results.append(nameUser,emailUser);
        }
        else {
            console.log('this name does not exist');
        }
        

    })
    .catch((err) => console.log(err));
}


// let form = document.forms[0];
// let data;
// let users=[];
// let userName = document.querySelector(".user-name") ;
// let userEmail = document.querySelector(".email") ;
// let btn = document.querySelector("button");

// function appendData(data) {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((response) => {
//         return response.json();
//     })
//     .then((response) => {
//         console.log(response);
//         data = response;
//         // document.querySelector('.user-name').textContent = data.name;
//         userName.textContent = data.name;
//         userEmail.textContent = data.email;
//     })
//     .catch((err)=> console.error(err));
     

// var mainContainer = document.getElementById("user-name");
// for (var i = 0; i < data.length; i++) {
//     var li = document.createElement("li");
//     li.innerHTML =  data[i].username;
//     li.classList.add('user-name');
//     li.dataset.userId = data[i].id;
//     li.addEventListener('click', (event) => getPosts(event))
//     mainContainer.appendChild(li);
//}

// }
// appendData();
// btn.addEventListener('click', appendData());

		
// form.addEventListener("submit", (e) => {
// e.preventDefault();
// let input = form.elements["search"];
// if (input.value !== "") {
//     fetchData(input.value);
//     console.log(data);
// }
// });




//
// https://type.fit/api/quotes
// let quoteElement = document.querySelector(".quote");
// let authorElement = document.querySelector(".author");
// let quotes = [];

//activer le bouton
//fetch data de l'url api
//créer une fonction qui sert a integrer le resultat recherché dans l'html

// let btn = document.querySelector(".new-quote");

// function getquotes() {
//   //declare  var where stoccking info
//   fetch(`https://type.fit/api/quotes`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((response) => {
//       quotes = response;
//       let quote = quotes[Math.floor(Math.random() * quotes.length)];
//       quoteElement.textContent = quote.text;
//       authorElement.textContent = quote.author;
//     })
//     .catch((error) => console.log(error));
// }

/*  
async allow to define asynchronose function and it returns a promise
 await is always use within async function and it allows to wait until the response is available
*/
// async function loadQuote() {
//   // use try catch to handle error and prevent the code to crach
//   try {
//     let response = await fetch(`https://type.fit/api/quotes`);
//     resultat = await response.json();
//     quotes = resultat;
//     let quote = quotes[Math.floor(Math.random() * quotes.length)];
//     quoteElement.textContent = quote.text;
//     authorElement.textContent = quote.author == null ? "Inconnu" : quote.author;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // load quote when the file is loaded
// // getquotes();
// loadQuote();

// btn.addEventListener("click", loadQuote);
