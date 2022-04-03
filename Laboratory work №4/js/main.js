function object1() {
    function Gruppa(n, spec, kolich, kurs) {
        this.n = n;
        this.spec = spec;
        this.kolich = kolich;
        this.kurs = kurs;
        let k;
        let j;
        this.add_stud = function add_stud(k) {
            kolich += k;
            console.log("В группу " + this.n + " добавили " + k + " cтудентов.");
        }
        this.sub_stud = function sub_stud(j) {
            kolich -= j;
            console.log("Из группы " + this.n + " удалили " + j + " cтудентов.");
        }
        this.output = function output() {
            console.log("Группа №" + n + "(" + spec + ")" + " в которой " + kolich + " студентов " + kurs + " курса.");
        }
    }
    gr1 = new Gruppa(1, "ИСИТ", 34, 2);
    gr2 = new Gruppa(2, "ПОИБМС", 28, 1);
    gr3 = new Gruppa(3, "ИСИТ", 21, 4);
    gr4 = new Gruppa(4, "ПОИТ", 25, 2);

    gr1.output();
    gr2.output();
    gr3.output();
    gr4.output();

    gr1.add_stud(2);
    gr2.sub_stud(3);
    gr3.add_stud(5);
    gr4.sub_stud(10);

    gr1.output();
    gr2.output();
    gr3.output();
    gr4.output();
}

function object2() {
    function Feature(mark, model, maxSpeed, numberDistance, numberFuel) {
        this.mark = mark;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.numberDistance = numberDistance;
        this.numberFuel = numberFuel;

        let numberRate = (numberFuel / numberDistance) * 100;

        this.output = function output() {
            console.log(mark + " " + model + ": maxSpeed == " + maxSpeed + "; numberDistance == " + numberDistance + "; numberFuel == " + numberFuel + "; numberRate == " + numberRate + ".\n");
        }
    }

    let car = [];
    car[0] = new Feature("Mersedes", "AMG GT-R", 210, 600, 90);
    car[0].output();
    car[1] = new Feature("Nissan", "GT-R", 375, 650, 85);
    car[1].output();
    car[2] = new Feature("Toyota", "Supra", 250, 880, 80);
    car[2].output();

    Feature.prototype.isTunned = this.isTunned;

    car[0].isTunned = true;
    car[1].isTunned = true;
    car[2].isTunned = false;

    for (let i = 0; i < 3; i++) {
        console.log("\n");
        car[i].output();
        if (car[i].isTunned) {
            console.log("\tThis car is tunned.\n");
        } else {
            console.log("\tThis car is not tunned.\n");
        }
    }
}

function object3() {
    let arr = [];

    arr[0] = 6 * Math.pow(Math.PI, 2) + 3 * Math.pow(Math.E, 8);
    arr[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.pow(Math.E, 3);
    arr[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
    arr[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);
    arr[4] = 2 * Math.sin(2) + Math.PI + Math.log(43);

    console.log(arr);

    delete arr[3];

    console.log(arr);

    if (2 in arr) {
        console.log("В массиве есть 2ой элемент\n");
    } else {
        console.log("В массиве нету 2ого элемента\n");
    }

    function Feature(mark, model, maxSpeed, numberDistance, numberFuel) {
        this.mark = mark;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.numberDistance = numberDistance;
        this.numberFuel = numberFuel;

        let numberRate = (numberFuel / numberDistance) * 100;

        this.output = function output() {
            console.log(mark + " " + model + ": maxSpeed == " + maxSpeed + "; numberDistance == " + numberDistance + "; numberFuel == " + numberFuel + "; numberRate == " + numberRate + ".\n");
        }
    }

    let car = new Feature("Mersedes", "AMG GT-R", 210, 600, 90);

    if ("marke" in car) {
        console.log("Свойство marke находится у объекта car\n");
    } else {
        console.log("Свойства marke нет у объекта car\n");
    }

    if (car instanceof Object) {
        console.log("car is Object\n");
    } else {
        console.log("car is not Object\n");
    }

    if (arr instanceof Array) {
        console.log("arr is Array\n");
    } else {
        console.log("arr is not Array\n");
    }

    function number5() {
        return 5;
    }

    console.log("number5 is " + (typeof number5));
    console.log("car is " + (typeof car));
    console.log("car.mark is " + (typeof car.mark));
    console.log("car.model is " + (typeof car.model));
    console.log("car.maxSpeed is " + (typeof car.maxSpeed));
    console.log("car.numberDistance is " + (typeof car.numberDistance));
    console.log("car.numberFuel is " + (typeof car.numberFuel));
    console.log("car.numberRate is " + (typeof car.numberRate));
}
