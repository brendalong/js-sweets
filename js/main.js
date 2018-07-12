console.log("ld main.js");

// show the sweets in dom

// let sweetspot = document.getElementById("sweetstuff");
const sweetspot = document.querySelector("#sweetstuff");
console.log("sweetspot", sweetspot);

//data coming from sweet-data.js
// array method forEach
inventory.forEach(function(item, index) {
    console.log("sweet item", index, item);
    sweetspot.innerHTML += `<li class='fancy'>${index + 1} ${item.name}: ${item.flavor}</li>`;
});

//es6 fat arrow function
// inventory.forEach((item, index) => {
//     console.log("sweet item", index, item);
// });

//try out getElementsByClassName - HTML Collection, like an array
// let getFancy = document.getElementsByClassName("fancy");
// console.log("fancy class", getFancy);
// console.log("fancy item", getFancy[0].innerHTML);

//OR with querySelectorAll
const getFancy = document.querySelectorAll(".fancy");
console.log("getFancy", getFancy);

// declared vs expression
// test the position (top of page or bottom of page) of invoking howmanySweets as a declared and expression 

// function howmanySweets(){
//     console.log("The sweets total:", inventory.length);
//     var numberOfSweets = inventory.length;
// }

// functions that simply run and functions that return a value

// const howmanySweets = function(){
//     console.log("The sweets total:", inventory.length);
//     var numberOfSweets = inventory.length;
// }
// howmanySweets(); 
// doesn't do much good since it does not return anything.

//now we can call anytime to get the number
//not the function name - action/verb
const getHowManySweets = function(){
    //single job: return the value
    return inventory.length;
}

// same thing as fat arrow function
const totalNumberSweets = () => {
    //single job: show the value
    var count = getHowManySweets();
    console.log("how many:", count);
}

//add button to html, reference it, and when clicked call function
// let btnGetTotalAmounts = document.getElementById("btn-getTotalSweets");
const btnGetTotalAmounts = document.querySelector("#btn-getTotalSweets");
btnGetTotalAmounts.addEventListener("click", totalNumberSweets);


// Define what a Sweet is ()
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
    //What about updating the list? and showing all. Look below.
}

// add button to html and reference it
const addGreenSweet = document.getElementById("btn-addGreenSweet");
addGreenSweet.addEventListener("click", addGreenOne);

// // same as above, chain the items together
// // let addGreenSweet = document.getElementById("btn-addGreenSweet").addEventListener("click", addGreenOne);


// // now want to show them all
// // what would be the flow of events? 
// push item to array
// show array in DOM

// does one thing really well
function makeSweetObj(name, kind, flavor, topping, topcolor){
    return new Sweet(name, kind, flavor, topping, topcolor);
}

// does one thing really well
function showSweets(){
    inventory.forEach((item, index) =>{
        document.getElementById("new-version").innerHTML += `<li>${item.name}: ${item.topcolor}</li>`
    });
}

function addNewSweet(){
    inventory.push(makeSweetObj("Camper Tree", "cake", "chocolate", "sprinkles", "green"));
    console.log(inventory);
    showSweets();

    // chain it together
    // showSweets(inventory.push(makeSweetObj("Camper Tree", "cake", "chocolate", "sprinkles", "green")));
    // both of these work
}


const btnAddSweet = document.getElementById("btn-addSweet");
btnAddSweet.addEventListener("click", addNewSweet);

/////////// now let's bake a sweet
// some are cakes and some are brownies

//newVersion - take out the above 
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

// const btnBakeSweet = document.getElementById("btn-bakeSweet");
// btnBakeSweet.addEventListener("click", bakeSweet);