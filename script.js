//hämta element
const header = document.getElementById("header")
const welcome = document.getElementById("welcome")
const loggIn = document.getElementById("btn")
const username = document.getElementById("username")
const password = document.getElementById("password")
const wrongUP = document.getElementById("wrongup");
const loggOut = document.createElement("button");

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
            // localStorage.setItem("status","inloggad")
        }
        //om det inte stämmer med databasen, så skickas man till functionen wrong
        else {
            wrong()
        }
    }
})

//när man är inloggad visas ens användarnamn och en logga ut knapp
function change(){
    
        localStorage.setItem("user", JSON.stringify(user))
        main()
    
}
function main(){
    welcome.innerHTML = `<h1>välkommen </h1>`
    header.innerHTML = `hejsan`
    loggOut.textContent = "logga ut"
    header.append(loggOut)
    localStorage.setItem("logg", 1) 

    loggOut.addEventListener("click", () => {
        localStorage.removeItem("user")
        localStorage.removeItem("logg")
        location.reload()
    }) 
}
function checkLoggIn() {
    if(localStorage.getItem("logg") == 1){
        main()
    }
//fel user. eller pass. komemr en ruta upp med text och en stäng knapp
}
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

window.onload = checkLoggIn();
