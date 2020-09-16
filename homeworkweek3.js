
//Week 3 Homework
const pizzaToppings = ["Kalua Pig", "Teri Sauce", "Green Onions", "Chicken Lau Lau"];

//Greet Customer
console.log("Aloha, your toppings choices are:");
for (let toppingsList of pizzaToppings) {
  console.log(toppingsList);
}

//Pizza Order
const pizzaOrder = {
    size: ["6 Inch", "8 Inch", "12 Inch"],
    crust: ["Normal", "Pan"],
    toppings: []
  };

  console.log(
    pizzaOrder.size[1],
    pizzaOrder.crust[0],
    "pizza with",
    pizzaToppings[0],
    pizzaToppings[2],
    "is firing up!"
  );

  //Prepare

  const preparePizza = {
    size: pizzaOrder.size[1],
    crust: pizzaOrder.crust[0],
    toppings: [pizzaToppings[0], pizzaToppings[2]]
  };

  console.log('Cooking!');

  //Serve
const pizza = [preparePizza.size, preparePizza.crust, preparePizza.toppings];
console.log("Wow it's ready!");

console.log("Enjoy your", pizza, "Pizza!");