//hämta element
const header = document.getElementById("header");
const welcome = document.getElementById("welcome");
const loggIn = document.getElementById("btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const wrongUP = document.getElementById("wrongup");
const loggOut = document.createElement("button");
const creatUser = document.getElementById("creatuser");
const creatPassword = document.getElementById("creatpassword");
const submit = document.getElementById("submit");

//skapa ny användare 
submit.addEventListener("click", () => {
    let username = document.getElementById("creatuser").value;
    let password = document.getElementById("creatpassword").value;
    user.push({ username, password });

    localStorage.setItem("user", JSON.stringify(user));

    return welcome.innerHTML = `<div>Du är nu registrerad, vänligen logga in</div>`;

});
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
];

//när man trycker på knappen startar funktionen
loggIn.addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    for (let i = 0; i < user.length; i++) {
        if (username == user[i].username && password == user[i].password) {//om användarnman och lösenord stämmer. function change startar
            change();
            
        }
        else { //om det inte stämmer med databasen, så skickas man till functionen wrong
            wrong();
        }
    }
})

//change startar funcionen main
function change() {
    if (localStorage.getItem("user") === null) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    main()
}
//ändrar innehållet. loggaut knapp 
function main() {
    welcome.innerHTML = `<h1>välkommen </h1>`;
    header.innerHTML = `hejsan användare`;

    loggOut.textContent = "logga ut";
    header.append(loggOut);
    localStorage.setItem("logg", 1)
    //när man loggar ut, tas allt bort
    loggOut.addEventListener("click", () => {
 
        localStorage.removeItem("logg");
        location.reload();
    });
};

    //fel user. eller pass. komemr en ruta upp med text och en stäng knapp
function wrong() {
    wrongUP.innerHTML = "Fel användarnamn eller lösenord, försök igen!";
    let closewin = document.createElement("button");
    closewin.textContent = "stäng";
    wrongUP.append(closewin);
    //trycker man på stäng knappen så stängs rutan. innerHTML gör att den töms men försvinner inte ur dom
    closewin.addEventListener("click", () => {
        wrongUP.innerHTML = "";
    });
};
function check() {
    if (localStorage.getItem("logg") == 1) {
        main();
    };
};

window.onload = check();
