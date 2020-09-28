
//Week 3 Homework
const pizzaToppings = ["Kalua Pig", "Teri Sauce", "Green Onions", "Chicken Lau Lau"];

//Greet Customer
function greetCustomer() {
  let greeting = 'Aloha senor pizza:';
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}
greetCustomer();

function getPizzaOrder (size, crust, ...toppings) {
  let order = `One $One ${size} ${crust} crust pizza with `;
  order += `${toppings}, `; {

  console.log(`${order}. Coming up!`);
  return [size, crust, toppings];
}
//Pizza Order
let customerOrder = getPizzaOrder (
  "large",
  "thin",
  "sausage",
  "onion",
  "peppers"
);
console.log(getPizzaOrder)

  //Prepare

function preparePizza ([orderSize, orderCrust, orderToppings]) {
  console.log(...your pizza is cooking...");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
}
let cookedPizza = preparePizza(customerOrder);

function serverPizza(pizza) {
  let orderREad =  `Order up! Here is your ${pizza.size} ${pizza.crust} crust
  for (let topping of pizza.toppings) {
    orderReady += `${topping}, `;
  }
  console.log(`${orderREady}. Enjoy!`);
  return pizza;
}
serverPizza(cookedPizza);
`
  }