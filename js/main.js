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



let addGreenSweet = document.getElementById("btn-addGreenSweet");
addGreenSweet.addEventListener("click", addGreenOne);

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

