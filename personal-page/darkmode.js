let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");


pList = document.getElementsByClassName("dm-text");
dmButton = document.getElementById("dark-mode-toggle");
dmLogo = document.getElementById("dm-logo")
gitHubLogo = document.getElementById("github-logo");


const enableDarkMode = () => {
    document.body.classList.add("darkmode");

    for (let i = 0; i < pList.length; i++) {
        pList[i].style.color = "white";
    }

    dmButton.style.background = "#212529";

    gitHubLogo.style.fill = "white";
    dmLogo.style.fill = "white";

    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");

    for (let i = 0; i < pList.length; i++) {
        pList[i].style.color = "black";
    }

    dmButton.style.background = "white";

    gitHubLogo.style.fill = "black";
    dmLogo.style.fill = "black";
    localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
    enableDarkMode();
}


darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})

