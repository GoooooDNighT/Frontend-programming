function lab5TaskFrom1To3() {
    for (let numberOfHtmlElement = 0; numberOfHtmlElement < document.all.length; numberOfHtmlElement++) {
        let temp = document.all[numberOfHtmlElement];
        console.log((numberOfHtmlElement + 1) + ": " + temp.tagName);
    }

    for (let numberOfBodysChild = 0; numberOfBodysChild < document.body.childNodes.length; numberOfBodysChild++) {
        if (numberOfBodysChild % 2) {
            let temp = document.body.childNodes[numberOfBodysChild];
            console.log(temp);
        }
    }

    console.log("Через доступ all:");
    let isFirst = true;
    for (let numberOfHtmlElement = 0; numberOfHtmlElement < document.all.length; numberOfHtmlElement++) {
        let temp = document.all[numberOfHtmlElement];
        if ((temp.tagName == "SPAN") && isFirst) {
            console.log(temp);
            isFirst = false;
        }
    }

    console.log("Через частную коллекцию span:");
    let temp = document.getElementsByTagName('span');
    console.log(temp[0]);

    console.log("Через идентификатор элемента:");
    console.log(document.getElementById("name"));
}

function lab5Task4() {
    let sum = 0, number = 0;
    for (let numberOfTempsChild = 0; numberOfTempsChild < document.querySelectorAll(".pop").length; numberOfTempsChild++) {
        sum += Number(document.querySelectorAll(".pop")[numberOfTempsChild].textContent);
		number++;
    }
	document.querySelector(".ball").innerHTML = (sum / number);
}