function welcomeMsg() {
  console.log("Lule");
}
welcomeMsg();

function universalWelcomeMsg(placeholder) {
  console.log("Welcome to the world,", placeholder);
}
universalWelcomeMsg("Lule");
universalWelcomeMsg("Patricia");

//02 Gross Price Function

function calcGrossPrice(net, tax) {
  console.log(net + tax * net);
}
calcGrossPrice(20, 0.19);
calcGrossPrice(40, 0.16);

//Add Positive Function

function addPositive(a, b) {
  console.log(Math.abs(a) + Math.abs(b));
}

addPositive(2, 3);
addPositive(3, -5);
addPositive(-1, -8);
