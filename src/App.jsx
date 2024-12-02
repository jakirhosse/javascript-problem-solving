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
