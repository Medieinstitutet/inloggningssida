//hämta element
const header = document.getElementById("header")
const welcome = document.getElementById("welcome")
const loggIn = document.getElementById("btn")
const username = document.getElementById("username").value
const password = document.getElementById("password").value
const wrongUP = document.getElementById("wrongup");
const loggOut = document.createElement("button");


//localStorage get, ändra, set
//min array
let user = [
    {
        username: "janne",
        password: "test"
    },
    {
        username: "anna",
        password: "panna"
    },
    {
        username: "petter",
        password: "getter"
    }
]



//när man trycker på knappen startar funktionen
loggIn.addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    for (let i = 0; i < user.length; i++) {
        //om användarnman och lösenord stämmer. function change startar
        if (username == user[i].username && password == user[i].password) {
            change()
        
            
        }
        //om det inte stämmer med databasen, så skickas man till functionen wrong
        else {
            wrong()
        }
    }
})

//när man är inloggad visas ens användarnamn och en logga ut knapp
function change() {
    if (localStorage.getItem("user") === null) {
        localStorage.setItem("user", JSON.stringify(user));
    }
  
    let users = user.filter((username, i) => { 
        return welcome.innerHTML = "<h1>välkommen <br/>användare</h1>" + username;
    })
    
    loggOut.textContent = "logga ut"
    header.append(loggOut)
    
    loggOut.addEventListener("click", () => {
    localStorage.removeItem("user")
        location.reload()
    })

};
//fel user. eller pass. komemr en ruta upp med text och en stäng knapp
function wrong() {
    wrongUP.innerHTML = "Fel användarnamn eller lösenord, försök igen!";
    let closewin = document.createElement("button");
    closewin.textContent = "stäng";
    wrongUP.append(closewin)
    //trycker man på stäng knappen så stängs rutan. innerHTML gör att den töms men försvinner inte ur dom
    closewin.addEventListener("click", () => {
        wrongUP.innerHTML = "";

    })
}
//när man loggar ut ska man komma tillbaka till start sidan





//en knapp, logga in, som startar functionen när man loggar in

///en knapp, logga ut, som upphäver functionen när man loggar ut

//Varning när man skriver in fel lösen eller användarnamn
