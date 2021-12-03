//hämta element
const header = document.getElementById("header")
const welcome = document.getElementById("welcome")
const loggIn = document.getElementById("btn")
const username = document.getElementById("username").value
const password = document.getElementById("password").value
const wrongUP = document.getElementById("wrongup");
let loggOut = document.createElement("button");

//min array
let user = [
    {
        username: "janne",
        password: "test"
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
        else if (username !== user[i].username && password !== user[i].password) {
            wrong()
        }
    }
})

//när man är inloggad visas ens användarnamn och en logga ut knapp
function change() {
    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify(user));
    }
    welcome.innerHTML = "<h1>välkommen</h1>" + username;
    header.innerHTML = `Användarnamn: ` + user.username;
    loggOut.textContent = "logga ut"
    header.append(loggOut)

    loggOut.addEventListener("click", () => {

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
