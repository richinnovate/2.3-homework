/**

 For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()
let numbers = [10, 15, 532, 2, 388];
let toys = ["Trucks", "Cars", "Transformers",];
let string = "Good Enough For Government"
numbers.sort(function(a, b) {
  return a - b;
})
console.log(numbers);
console.log(toys);

// .concat()
let numberstoys = numbers.concat(toys);
console.log(numberstoys);


// .indexOf()
console.log(numbers.indexOf(13));
console.log(numbers.indexOf(3));
console.log(numbers.indexOf(5));
console.log(numbers.indexOf(10));

console.log(numbers);

// .split()
let toysArray = string.split(" ")

console.log(toysArray)

// .join()
let a = ['Food', 'Water', 'Housing', 'Shelter'];
let myVar1 = a.join();
let myVar2 = a.join(' , ');
let myVar3 = a.join(' + ');
let myVAr4 = a.join('');

console.log(a)

// .pop()
let myFavegames = ['football', 'basketball', 'PS3', 'Xbox 1'];
console.log(myFavegames);

let popped = myFavegames.pop();
console.log(myFavegames);
console.log(popped);

// .push()
let companies = ['nike', 'reebok'];
let morecomp = ['adidas', 'converse'];

myFavegames.push(companies, morecomp);

console.log(myFavegames);


// .slice()
let music = ['Rap', 'Rock', 'Jazz', 'House', 'Blues', 'Country'];
let popular = music.slice(0,1);

console.log(popular);

// .splice()
let removed = myFavegames.splice(2,0,'hockey');

console.log(myFavegames);

// .shift()
let artist = ['2Pac', 'Biggie', 'Madonna', 'TrickDaddyDollars'];
console.log('artist before:' + artist);

let shifted = artist.shift();
console.log('artist after:' + artist);
console.log('Removed this element:' + shifted);

// .unshift()
let arr = [19,20];
arr.unshift(18);
arr.unshift(16,17);
arr.unshift([15]);
console.log(arr);


// .filter()
function Big(value){
  return value <= 10;
}
let filtered = [10, 8, 19, 1, 11,].filter(Big);

console.log(filtered);


// .map()
let singles = [8, 11, 13];
let roots = singles.map(Math.sqrt);

console.log(singles);
