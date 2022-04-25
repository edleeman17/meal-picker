const dinners = require('./dinners.json');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

let usedDinners = [];

function getRandomDinner() {
    let max = dinners.dinner.length - 1;
    let randomNumber =  generateRandomNumber(max)

    if (argv.exclude && dinners.dinner[randomNumber].meat === argv.exclude) {
        return getRandomDinner()
    }

    if (usedDinners.includes(randomNumber)){
        return getRandomDinner()
    }

    usedDinners.push(randomNumber);

    return randomNumber;
}

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function writeDinnersToConsole(dinnerList) {
    console.log(`Dinners:`)
    console.log("-----------------------------")
    console.log("")
    console.log(`Monday: ${dinners.dinner[dinnerList[0]].name}`)
    console.log(`Tuesday: ${dinners.dinner[dinnerList[1]].name}`)
    console.log(`Wednesday: ${dinners.dinner[dinnerList[2]].name}`)
    console.log(`Thursday: ${dinners.dinner[dinnerList[3]].name}`)
    console.log(`Friday: ${dinners.dinner[dinnerList[4]].name}`)
    console.log(`Saturday: ${dinners.dinner[dinnerList[5]].name}`)
    console.log(`Sunday: ${dinners.dinner[dinnerList[6]].name}`)
    console.log("")
    console.log(`Shopping List ID: ${usedDinners.join('.')}`)
}

function writeShoppingListToConsole(dinnerIds) {
    console.log("")
    console.log("Shopping List:")
    console.log("-----------------------------")
    console.log("")

    dinnerIds.forEach(id => {
        console.log(`${dinners.dinner[id].name} ::`)
        dinners.dinner[id].shoppingList.forEach(item => {
            console.log(`${item.item} -> ${item.qty}`)
        })
        console.log("")
    });
}

if(argv.shoppinglist) {
    let listId = argv.shoppinglist;
    let dinnerIds = listId.split('.');

    writeDinnersToConsole(dinnerIds);
    writeShoppingListToConsole(dinnerIds);

    
} else {
    let dinnerList = [];
    for (let index = 0; index < 7; index++) {
        dinnerList.push(getRandomDinner());
    }

    writeDinnersToConsole(dinnerList);
}
