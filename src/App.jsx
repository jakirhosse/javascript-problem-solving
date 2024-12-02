// assain operator diye problem solve
let totalMarks = 0;

let math = 80;
let science = 70;
let english = 85;

totalMarks += math;
totalMarks += science;
totalMarks += english;

let average = totalMarks;
average /= 3;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", average);

// discount work /////

let originalPrice = 1200;
let discountPercentage = 10;

let discountAmount = originalPrice;
discountAmount *= discountPercentage;
discountAmount /= 100;

let finalprice = originalPrice;
finalprice -= discountAmount;

console.log(originalPrice);
console.log(discountAmount);
console.log(finalprice);

let principal = 50000;
let rate = 2;
let years = 2;

let amount = principal;

amount *= Math.pow(1 + rate / 100, years); // A = P * (1 + r/100)^t

let interrest = amount;
interrest -= principal;

console.log(amount);
console.log(interrest);

let cartTotal = 0;

// Adding products
let product1 = 250;
let product2 = 150;
let product3 = 400;

// Adding prices to the cart total
cartTotal += product1;
cartTotal += product2;
cartTotal += product3;

if (cartTotal > 500) {
  cartTotal *= 0.9;
}

console.log("Final Cart Total:", cartTotal);

let score = 0;
score += 10;

score -= 5; // score = score - 5

// Level 3: Bonus multiplier
score *= 2; // score = score * 2

// Final level: Division by a factor for difficulty adjustment
score /= 4; // score = score / 4

console.log("final score", score);

let numbers = [12, 25, 37, 48, 59];
let oddSum = 0,
  evenSum = 0;
numbers.forEach((num) => {
  if (num % 2 === 0) {
    evenSum += num;
  } else {
    oddSum += num;
  }
});

console.log("Sum of Even Numbers:", evenSum);
console.log("Sum of Odd Numbers:", oddSum);

let playerHP = 100;
let damage = 20;
let heal = 15;

// Taking damage
playerHP -= damage;

// Using healing potion
playerHP += heal;

// Dividing remaining HP due to poison effect
playerHP /= 2;

console.log("Player's Remaining HP:", playerHP);
