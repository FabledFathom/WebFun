var pizza = {
crustType:  "Deep Dish",
sauceType:  "Marinara",
cheese:   ["Mozzarella, Feta. American, Swiss"],
toppings: ["Pepperoni","Sausage","Mushrooms","Olives","Onions", "Sardies", "Pinapple", "Peppers"],
};
    
console.log(pizza);

function pizzaFactory(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var s1 = pizzaFactory("Deep Dish", "Traditional", ["Mozzeralla"], ["Pepperoni", "Sausage"]);
console.log(s1);

var s2 = pizzaFactory("Hand Tossed", "Marinara", ["Mozzeralla, Feta"], ["Mushrooms","Olives","Onions"]);
console.log(s2);

var s3 = pizzaFactory("Thin", "Alfrado", ["American"], ["None"] );
console.log(s3);

var s3 = pizzaFactory("Oven-Cooked", "Tomato", ["Swiss"], ["Sardies", "Pinapple", "Peppers"] );
console.log(s3);

    // function rPTop(){
    //     Math.floor(Math.random(toppings.arr.length) * 5);
    // }
    // "Handed tossed", "Thin",
    // "Traditional", "Alfredo"
    // "Feta","American"

