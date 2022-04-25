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

console.log(`Dinners: ${argv.exclude ? 'Excluding ' : ''}`)
console.log("-----------------------------")
console.log("")
console.log(`Monday: ${dinners.dinner[getRandomDinner()].name}`)
console.log(`Tuesday: ${dinners.dinner[getRandomDinner()].name}`)
console.log(`Wednesday: ${dinners.dinner[getRandomDinner()].name}`)
console.log(`Thursday: ${dinners.dinner[getRandomDinner()].name}`)
console.log(`Friday: ${dinners.dinner[getRandomDinner()].name}`)
console.log(`Saturday: ${dinners.dinner[getRandomDinner()].name}`)
console.log(`Sunday: ${dinners.dinner[getRandomDinner()].name}`)