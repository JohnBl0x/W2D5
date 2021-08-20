
//Ex. 21:

let x = "John"
let y = "Doe"
console.log(x + " <> " + y)

//Ex. 22 & 23:

let myInfo = {
    name: "John",
    surname: "Blox",
    email: "johnblox5@gmail.com"
}
delete myInfo.email
console.log(myInfo)

//Ex. 24 & 25:

let stringArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
console.log(stringArray)

//Ex. 26:

let randomArray = [];
for (let i=0; i<100; i++) {
    randomArray.push(Math.round(Math.random() * 100))
}
console.log(randomArray);

//Ex. 27:

let getValues = function() {
    let getMax = randomArray.reduce(function(a, b) {
        return Math.max(a, b);
    }, 0);
    console.log(getMax)
    
    let getMin = randomArray.reduce(function(a, b) {
        return Math.min(a, b);
    }, 0);
    console.log(getMin)
}

console.log(getValues())

//Ex. 28:

let newRandomArray = [];
for (let i=0; i<10; i++) {
    newRandomArray.push(Math.round(Math.random() * 10))
}
console.log(newRandomArray);

let newerRandomArray = [];
for (let i=0; i<10; i++) {
    newerRandomArray.push(Math.round(Math.random() * 10))
}
console.log(newerRandomArray);

let multipleArrays = []
multipleArrays.push(newRandomArray, newerRandomArray)
console.log(multipleArrays)

//Ex. 29:

let arr1 = [1,2,3]
let arr2 = [1,2,3,4]
let getLongest = function(a,b) {
    if (a > b)
    return a
    else
    return b
}

console.log(getLongest(arr1,arr2))




//DOM MANIPULATION:



let changeHeading = function() {
    document.getElementById("pageTitle").innerHTML = "Page Title"
}


window.onload = function(){
    alert("Page Loaded")
}

let addToList = function() {
    let node = document.createElement('li');
    node.appendChild(document.createTextNode("Extra"));
    document.querySelector('ul').appendChild(node);
}


let addToTable = function() {
    let table = document.getElementById("myTable");
    let row = table.insertRow();
    let cell = row.insertCell();
    cell.innerHTML = "New Row";
}


let removeList = function(){
    document.getElementById("myList").innerHTML = "";
}

let removeListItems = function() {
    let list = document.getElementById('myList');
    list.removeChild(list.lastElementChild);
}


console.log("hello")

