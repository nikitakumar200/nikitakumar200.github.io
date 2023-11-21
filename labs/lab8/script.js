function toggleTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("dark-mode")
}

let buttonVariable = document.querySelector("#toggleButton")
buttonVariable.onclick = toggleTheme;