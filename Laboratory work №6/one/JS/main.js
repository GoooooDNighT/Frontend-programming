let openedWindow = [];

function _openWindow() {
    openedWindow[openedWindow.length] = window.open();
    openedWindow[(openedWindow.length - 1)].document.write("<div class=\"container\"></div>" + "<div class=\"container\"></div>" + "<div class=\"container\"></div>");
    openedWindow[(openedWindow.length - 1)].document.head.innerHTML = openedWindow[(openedWindow.length - 1)].document.head.innerHTML + "<link rel =\"stylesheet\" href=\"css/style0ForScript2.css\" />";
}

function _closeWindow() {
    if (openedWindow.length > 0) {
        openedWindow[(openedWindow.length - 1)].close();
        openedWindow.pop();
    } else {
        console.log("Нечего закрывать!\n");
    }
}

function _changeWindow() {
    for (let numberOfOpenetWindow = (openedWindow.length - 1); numberOfOpenetWindow >= 0; numberOfOpenetWindow--) {
        openedWindow[numberOfOpenetWindow].alert("Изменение!");
    }
}