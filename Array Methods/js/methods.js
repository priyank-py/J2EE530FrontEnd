//Array Methods
/*
filter
map
reduce
find
sort
*/
//const prices = [230, 750, 480, 560, 840, 325, 690];

//filter
/*
const filteredPrices = prices.filter(price => price > 500);

console.log(filteredPrices);
*/
/*
const scores = [
    {player: 'mario', points: 80},
    {player: 'luigi', points: 70},
    {player: 'ryu', points: 85}
]

const filteredScore = scores.filter( score => score.points > 75)
console.log(filteredScore);
*/

//Map

/*
const prices = [230, 750, 480, 560, 840, 325, 690];

const discountPrice = prices.map(price => {
    if(price > 500){
   return Math.round(price/2)
} else {
    return price
}
});

console.log(discountPrice)
*/

//Reduce
/*
const prices = [230, 750, 480, 560, 840, 325, 690];

const discountedItems = prices.reduce((result, price) => {
    if(price > 500){
        result += 1
    }
    return result
}, 0)

console.log(discountedItems)
*/
/*
const scores = [
    {player: 'mario', points: 80},
    {player: 'luigi', points: 70},
    {player: 'ryu', points: 85},
    {player: 'mario', points: 95},
    {player: 'luigi', points: 50},
    {player: 'ryu', points: 45},
    {player: 'mario', points: 180},
    {player: 'luigi', points: 170},
    {player: 'ryu', points: 125},
    {player: 'mario', points: 150},
    {player: 'luigi', points: 130},
    {player: 'ryu', points: 115}
]

const marioScores = scores.reduce((total, score) =>{
    if(score.player == 'mario'){
        total += score.points;
    }
    return total
}, 0)

console.log(marioScores);

*/

//Find
/*
const prices = [230, 750, 480, 560, 840, 325, 690];

const getValue = prices.find(price => price == 750)
console.log(getValue)

*/

//Sort

/*
const fruits = ['Orange', 'Grapes', 'Tomatoes', 'Apples'];

fruits.sort()
fruits.reverse() // for descending Order
console.log(fruits)
*/

//const prices = [230, 750, 480, 560, 840, 325, 690];
/*
const nums = [11, 5, 23, 64, 17, 8];

nums.sort((a, b) => a - b) // from descending order return b - a
console.log(nums)
*/
