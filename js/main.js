console.log("ld main.js");

// show the sweets in dom

// array method forEach
let sweetspot = document.getElementById("sweetstuff");

inventory.forEach(function(item, index) {
    console.log("sweet item", index, item);
    sweetspot.innerHTML += `<li class='fancy'>${index + 1} ${item.name}: ${item.flavor}</li>`;
});

//es6 fat arrow function
// inventory.forEach((item, index) => {
//     console.log("sweet item", index, item);
// });

//try out getElementsByClassName - HTML Collection, like an array
let getFancy = document.getElementsByClassName("fancy");
console.log("fancy class", getFancy);
console.log("fancy item", getFancy[0].innerHTML);

// functions that simply run and functions that return a value
const howmanySweets = function(){
    console.log("The sweets total:", inventory.length);
    var numberOfSweets = inventory.length; // not available to the app
}
howmanySweets(); 

//now we can call anytime to get the number
const getHowManySweets = function(){
    //single job: return the value
    return inventory.length;
}

var totalNumberSweets = () => {
    //single job: show the value
    var count = getHowManySweets();
    console.log("how many:", count);
}

//add button to html, reference it, and call function
let btnGetTotalAmounts = document.getElementById("btn-getTotalSweets");
btnGetTotalAmounts.addEventListener("click", totalNumberSweets);




// add button to html and reference it
let addGreenSweet = document.getElementById("btn-addGreenSweet");
addGreenSweet.addEventListener("click", addGreenOne);

// same as above, chain the items together
// let addGreenSweet = document.getElementById("btn-addGreenSweet").addEventListener("click", addGreenOne);

function Sweet(name, kind, flavor, topping, topcolor){
    this.name = name;
    this.kind = kind;
    this.flavor = flavor;
    this.topping = topping;
    this.topcolor = topcolor;
};

// click button and add green one to inventory
function addGreenOne(){
    inventory.push(new Sweet("Christmas Tree", "cake", "white", "none", "green"));
    console.log(inventory);
}

// now want to show them all
// what would be the flow of events?

function makeSweetObj(name, kind, flavor, topping, topcolor){
    return new Sweet(name, kind, flavor, topping, topcolor);
}

let showSweets = function(){
    inventory.forEach((item, index) =>{
        document.getElementById("new-version").innerHTML += `<li>${item.name}: ${item.topcolor}</li>`
    });
}

function addNewSweet(){
    inventory.push(makeSweetObj("Camper Tree", "cake", "chocolate", "sprinkles", "green"));
    console.log(inventory);
    showSweets();
}


let btnAddSweet = document.getElementById("btn-addSweet");
btnAddSweet.addEventListener("click", addNewSweet);

/////////// now let's bake a sweet
// some are cakes and some are brownies

// change the object to account for each method

// function Sweet(name, kind, flavor, topping, topcolor){
//     this.name = name;
//     this.kind = kind;
//     this.flavor = flavor;
//     this.topping = topping;
//     this.topcolor = topcolor;
//     this.bake = function() {
//         let ovenTemp = 300; // default value
//         if (this.kind == "cake"){
//             ovenTemp = 350;
//         }else if (this.kind == "brownie"){
//             ovenTemp = 375;
//         }
//         return ovenTemp;
//     }
// };

// //recreate inventory with new object constructor
// //why - bake is not in the first ones

// let newInventory = [];
// function makeNewInventory(){
//         inventory.forEach((item, index) =>{
//         console.log("inventory item", item);
//         newInventory.push(makeSweetObj(item.name, item.kind, item.flavor, item.topping, item.topcolor))
//     });
// }
// makeNewInventory();
// console.log("NEW INVENTORY", newInventory);

// const bakeSweet = function(){
//     let item = newInventory[0];
//     console.log("item to bake", item);
//     let ovenTemp = item.bake();
//     console.log("ovenTemp", ovenTemp); 
// }

// let btnBakeSweet = document.getElementById("btn-bakeSweet");
// btnBakeSweet.addEventListener("click", bakeSweet);