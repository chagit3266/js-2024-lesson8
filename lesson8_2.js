let f = new Object();
f.name = "apple";
f.price = 5.69;
f.num = 50;
f.print = function () {
    for (const key in this) {
        if (typeof this[key] !== 'function')
            console.log(key, this[key]);
    }
    console.log("===============================");

}
const arr = [{
    name: "orange",
    num: 520,
    price: 12.5,
    print: function () {
        for (const key in this) {
            if (typeof this[key] !== 'function')
                console.log(key, this[key]);
        }
        console.log("===============================");
    }
},
{
    name: "orange",
    num: 520,
    price: 12.5,
    print: function () {
        for (const key in this) {
            if (typeof this[key] !== 'function')
                console.log(key, this[key]);
        }
        console.log("===============================");
    }
}, f
]
function printAll() {
    arr.forEach(element => {
        element.print();
    });
}
printAll()
console.log("===============================");
arr[0].color = "orange";
arr.forEach(element => {
    if ('color' in element)
        element.print();
});
console.log("===============================");
for (const key in arr[0]) {
    if (typeof arr[0][key] !== 'function')
        console.log(key, arr[0][key]);
}
console.log("===============================");
console.log(arr[1]);
delete (arr[1].price)
for (const key in arr[1]) {
    if (typeof arr[0][key] !== 'function')
        document.querySelector("#delete").innerHTML += key + "-" + arr[1][key] + "      "
}
console.log("===============================");
document.querySelector("#btn").onclick = () => {
    let price = document.querySelector("#price").value
    arr[0].price = price
    console.log(arr[0].print());
    console.log("===============================");
}

let num = document.querySelector("#num")
num.onblur = () => {
    console.log("++++++++++++++++++++");
    const f2 = arr.filter(x => x.num <= num.value)
    for (const x of f2) {
        x.print();
    }
    console.log("===============================");
};
for (const x of arr) {
    Object.defineProperty(x, "Price", {
        get() { return x.price },
        set(value) { if (value > 10 && value < 10000) x.price = value }
    })
}
console.log("????????????????????????????????????");
printAll()
arr[0].Price = 1;
arr[1].Price = 100
arr[2].Price = 50
console.log("????????????????????????????????????");
printAll()
console.log("????????????????????????????????????");

function messageBox(color = "black", backgroundColor = "white", img, title = "", body = "") {
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.img = img;
    this.title = title;
    this.body = body;
    this.message = this.title + "/n" + this.body;
    Object.defineProperty(this, "Titel",
        {
            set(value) { this.title = value }
        })
    Object.defineProperty(this, "Body",
        {
            set(value) { this.body = value }
        })
    this.render = function () {
        const container = document.createElement("div");
        container.style.color = this.color;
        container.style.backgroundColor = this.backgroundColor;
        container.style.border = "1px solid #ccc";
        container.style.padding = "10px";
        container.style.borderRadius = "5px";
        container.style.maxWidth = "300px";

        if (this.img) {
            const imgElement = document.createElement("img");
            imgElement.src = this.img;
            imgElement.style.maxWidth = "50%";
            container.appendChild(imgElement);
        }
        const titleElement = document.createElement("h1");
        titleElement.textContent = this.title;
        container.appendChild(titleElement)

        const bodyElement = document.createElement("p");
        bodyElement.textContent = this.body;
        container.appendChild(bodyElement);

        return container;
    }
}

const infoBox = new messageBox("white", "blue", "", "Information", "This is an informational message.");

const warningBox = new messageBox("black", "yellow", "", "Warning", "This is a warning message.");

const errorBox = new messageBox("white", "red", "", "Error", "This is an error message.");

const messageTypes = {
    info: infoBox,
    warning: warningBox,
    error: errorBox
};
// document.body.appendChild(infoBox.render());
// document.body.appendChild(warningBox.render());
// document.body.appendChild(errorBox.render());
let form = document.querySelector("#form").onclick = () => {
    //function to new form
    let type = document.querySelector("#type").value;
    if (messageTypes[type]) {
        let title = document.querySelector("#title").value
        if (title != "")
            messageTypes[type].Titel = title;
        let body = document.querySelector("#body").value
        if (body != "")
            messageTypes[type].Body = body;
        const my_old = document.querySelector("#element");
        console.log(my_old);

        const my_new = document.createElement("div");
        my_new.id = "element";
        my_new.appendChild(messageTypes[type].render());
        document.querySelector("#element").replaceWith(my_new);
        //document.body.appendChild(messageTypes[type].render())
    }
}