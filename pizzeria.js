// var pizza = {
//     "crust1": "deep dish",
//     "crust2": "hand tossed",
//     "sauce1": "marinara",
//     "sauce2": "traditional",
//     "cheese1": "mozzarella",
//     "cheese2": ["mozzarella", "feta"],
//     "toppings1": ["pepperoni", "sausage"],
//     "toppings2" : ["mushrooms", "olives", "onions"]
// }
function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1)

var p2 = pizzaOven("hand tosses", "marinara", ["mozzarella", "feta"], ["mushrooms","olives", "onions"]);
console.log(p2)

var p3 = pizzaOven("hand tosses", "marinara", "mozzarella", ["jalapenos","pepperoni", "onions"]);
console.log(p3)

var p4 = pizzaOven("deep dish", "marinara", ["mozzarella", "feta"], "mushrooms");
console.log(p4)

