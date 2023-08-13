const darkModeToggle = document.querySelector('#dark-mode');
const body = document.body;

const isDarkMode = localStorage.getItem("darkMode") === "true";
    
if(isDarkMode){
    body.classList.add("dark");
    darkModeToggle.textContent = "MODO CLARO";
}else{
    body.classList.remove("dark");
    darkModeToggle.textContent = "Modo Oscuro";
}


darkModeToggle.addEventListener("click", (e)=>{
    e.preventDefault();

    body.classList.toggle("dark");

    const newDarkModeState = body.classList.contains("dark");
    localStorage.setItem("darkMode", newDarkModeState);

    // Cambiar el texto según el estado actual
    darkModeToggle.textContent = newDarkModeState ? "MODO CLARO" : "MODO OSCURO";

});


const webInfo = {
    favs: 0,
    darkMode: isDarkMode,
    gifs: 0,
}
const jsonWebInfo = JSON.stringify(webInfo);
localStorage.setItem("webInfo", jsonWebInfo)