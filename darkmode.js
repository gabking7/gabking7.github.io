let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");


pList = document.getElementsByClassName("dm-text");
dmButton = document.getElementById("dark-mode-toggle");
// dmLogo = document.getElementById("dm-logo");
mainSVGs = document.getElementsByClassName("main-svg");
dmLogo = document.getElementsByClassName("bi");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");

    for (let i = 0; i < pList.length; i++) {
        pList[i].style.color = "white";
    }

    for (let i = 0; i < dmLogo.length; i++) {
        dmLogo[i].style.color = "white";
    }

    for (let i = 0; i < mainSVGs.length; i++) {
        mainSVGs[i].style.fill = "white";
        
    }


    dmButton.style.background = "#212529";

    // mainSVG.style.fill = "white";

    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");

    for (let i = 0; i < pList.length; i++) {
        pList[i].style.color = "black";
    }

    for (let i = 0; i < dmLogo.length; i++) {
        dmLogo[i].style.color = "black";
    }

    for (let i = 0; i < mainSVGs.length; i++) {
        mainSVGs[i].style.fill = "black";
    }

    dmButton.style.background = "white";

    // mainSVG.style.fill = "black";
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

