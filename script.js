//hämta element
const header = document.getElementById("header")
const welcome = document.getElementById("welcome")
const loggIn = document.getElementById("btn")
const username = document.getElementById("use")
const password = document.getElementById("password")
//skapa en function 
function changeWelcome (){
welcome.innerHTML = "<h1>välkommen</h1>" + username; 
username.innerHTML = "användarnamn";
password.innerHTML = "Janne";
loggIn.InnerHTML = "<button>Logg out<button>";
};

loggIn.addEventListener("click", () => {
changeWelcome()

console.log("hej")

});
//en knapp, logga in, som startar functionen när man loggar in

///en knapp, logga ut, som upphäver functionen när man loggar ut

//Varning när man skriver in fel lösen eller användarnamn
