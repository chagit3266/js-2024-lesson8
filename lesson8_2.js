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
function printAll(){
arr.forEach(element => {
    element.print();
});}
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
    const f2 = arr.filter(x=>x.num<=num.value)
    for (const x of f2) {
        x.print();
    }
    console.log("===============================");
};
for(const x of arr){
   Object.defineProperty(x,"Price",{
    get() {return x.price},
    set(value) {if(value>10 && value<10000)x.price=value}
   })
}
console.log("????????????????????????????????????");
printAll()
arr[0].Price=1;
arr[1].Price=100
arr[2].Price=50
console.log("????????????????????????????????????");
printAll()
console.log("????????????????????????????????????");


