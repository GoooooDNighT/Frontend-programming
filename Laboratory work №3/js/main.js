function object1() {
    let arr = [];

    arr[0] = 6 * Math.pow(Math.PI, 2) + 3 * Math.pow(Math.E, 8);
    arr[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.pow(Math.E, 3);
    arr[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
    arr[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);

    let lower = 0;
    let high = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[lower]) {
            lower = i;
        }
        if (arr[i] > arr[high]) {
            high = i;
        }
    }
    alert("Минимальное: arr[" + lower + "] == " + arr[lower]);
    alert("Максимальное: arr[" + high + "] == " + arr[high]);
}

function object2() {
    let inf = ["pow", "pop", "push", "shift", "round", "floor", "sline", "sort"];
    let infMath = [];
    let infArray = [];

    for (let i = 0; i < inf.length; i++) {
        if (Array.prototype.hasOwnProperty(inf[i])) {
            infArray.push(inf[i]);
        }
        if (Math.hasOwnProperty(inf[i])) {
            infMath.push(inf[i]);
        }
    }
    infMath.unshift("log");
    infArray.push("unshift");

    console.log(...inf);
    console.log(...infArray);
    console.log(...infMath);
}

function object3() {
    let name = "Бондарев Савелий Алексеевич";

    console.log(name.length);

    let nameAnother = name;
    nameAnother = nameAnother.toUpperCase();
    nameAnother = nameAnother.toLowerCase();
    nameAnother = name.concat(nameAnother);
    nameAnother = nameAnother.replace(/[а-я]/g, '');

    console.log(name);
    console.log(nameAnother);
}

function object4() {
    x = new Date();

    document.write("<table border=\"2\" style=\" font-family:'Arial, sans-serif; color: green; padding: 5px; font-size: large;\">");

    document.write("<tr><td>Год</td><td>", x.getFullYear(), "</td></tr>");
    document.write("<tr><td>Месяц</td><td>", (x.getMonth() + 1), "</td></tr>");
    document.write("<tr><td>День</td><td>", x.getDate(), "</td></tr>");
    document.write("<tr><td>Час</td><td>", x.getHours(), "</td></tr>");
    document.write("<tr><td>Минуты</td><td>", x.getMinutes(), "</td></tr>");
    document.write("<tr><td>Секунды</td><td>", x.getSeconds(), "</td></tr>");

    document.write("</table>");
}