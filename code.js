// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
let input = require('sync-input');

// initial supplies: 400 ml of water, 540 ml of milk, 120 g of coffee beans, 90 g of tea strands, 9 disposable cups, $550.

let money = 550;
let water = 400;
let milk = 540;
let beans = 120;
let strands = 90;
let cups = 9;

/* One espresso requires 250 ml of water and 16 g of coffee beans. It costs $4;
One latte requires 350 ml of water, 75 ml of milk, and 20 g of coffee beans. It costs $7;
One cappuccino requires 200 ml of water, 100 ml of milk, and 12 g of coffee beans. It costs $6.
One tea requires 350 ml of water, and 5 g of tea strands. It costs $4 */

let espresso = 4;
let espressoWater = 250;
let espressoBeans = 16;

let latte = 7;
let latteWater = 350;
let latteMilk = 75;
let latteBeans = 20;

let cappuccino = 6;
let cappuWater = 200;
let cappuMilk = 100;
let cappuBeans = 12;

let tea = 4;
let teaWater = 350;
let teaStrands = 5

while (true) {
    let action = input("Write action (buy, fill, take, remaining, exit):\n");
    if (action === "buy") {
        buy();
        continue;
    } else if (action === "fill") {
        fill();
        continue;
    } else if (action === "take") {
        take();
        continue;
    } else if (action === "remaining") {
        remaining();
        continue;
    } else if (action === "exit") {
        break;
    }
}

function buy() {
    let buy = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - tea, back - to main menu:\n");
    if (buy == 1) {
        if (water >= espressoWater && beans >= espressoBeans && cups >= 1) {
            console.log("I have enough resources, making you a coffee!");
            water = water - espressoWater;
            beans = beans - espressoBeans;
            cups--;
            money = money + espresso;
        } else {
            if (water < espressoWater) {
                console.log(`Sorry, not enough water!`);
            } else if (beans < espressoBeans) {
                console.log(`Sorry, not enough beans!`);
            } else if (cups < 1) {
                console.log(`Sorry, not enough cups!`);
            }
        }
    } else if (buy == 2) {
        if (water >= latteWater && milk >= latteMilk && beans >= latteBeans && cups >= 1) {
            console.log("I have enough resources, making you a coffee!");
            water = water - latteWater;
            milk = milk - latteMilk;
            beans = beans - latteBeans;
            cups--;
            money = money + latte;
        } else {
            if (water < latteWater) {
                console.log(`Sorry, not enough water!`);
            } else if (milk < latteMilk) {
                console.log(`Sorry, not enough milk!`);
            } else if (beans < latteBeans) {
                console.log(`Sorry, not enough beans!`);
            } else if (cups < 1) {
                console.log(`Sorry, not enough cups!`);
            }
        }
    } else if (buy == 3) {
        if (water >= cappuWater && milk >= cappuMilk && beans >= cappuBeans && cups >= 1) {
            console.log("I have enough resources, making you a coffee!");
            water = water - cappuWater;
            milk = milk - cappuMilk;
            beans = beans - cappuBeans;
            cups--;
            money = money + cappuccino;
        } else {
            if (water < cappuWater) {
                console.log(`Sorry, not enough water!`);
            } else if (milk < cappuMilk) {
                console.log(`Sorry, not enough milk!`);
            } else if (beans < cappuBeans) {
                console.log(`Sorry, not enough beans!`);
            } else if (cups < 1) {
                console.log(`Sorry, not enough cups!`);
            }
        }
    } else if (buy == 4) {
        if (water >= teaWater && beans >= teaStrands && strands >= 1) {
            console.log("I have enough resources, making you a tea!");
            water = water - teaWater;
            strands = strands - teaStrands;
            cups--;
            money = money + tea;
        } else {
            if (water < teaWater) {
                console.log(`Sorry, not enough water!`);
            } else if (strands < teaStrands) {
                console.log(`Sorry, not enough strands!`);
            } else if (cups < 1) {
                console.log(`Sorry, not enough cups!`);
            }
        }
    } else if (buy == "back") { 
        return;
    }
}

function fill() {
    let fillWater = input("Write how many ml of water you want to add:\n");
    let fillMilk = input("Write how many ml of milk you want to add:\n");
    let fillBeans = input("Write how many grams of coffee beans you want to add:\n");
    let fillStrands = input("Write how many grams of tea strands you want to add:\n");
    let fillCups = input("Write how many disposable coffee cups you want to add:\n");
    water = water + Number(fillWater);
    milk = milk + Number(fillMilk);
    beans = beans + Number(fillBeans);
    strands = strands + Number(fillStrands);
    cups = cups + Number(fillCups);
    return;
}

function take() {
    console.log(`I gave you $${money}`);
    money = 0;
    return;
}

function remaining() {
    console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${beans} g of coffee beans
${strands} g of tea strands
${cups} disposable cups
${money} of money`);
return;
}
