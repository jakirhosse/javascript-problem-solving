const products = [
  { name: "Laptop", price: 500, onSale: true },
  { name: "Phone", price: 300, onSale: false },
  { name: "Tablet", price: 200, onSale: true },
  { name: "Monitor", price: 150, onSale: false },
];

const filteredProducts = products.filter(
  (product) => product.price > 200 && product.onSale === true
);

console.log(filteredProducts);

const numbers = [25, 10, 40, 30, 5];

// I-sort ang mga number nang ascending order
numbers.sort((a, b) => (a < b ? -1 : 1));

console.log(numbers);
// Output: [ 5, 10, 25, 30, 40 ]

// I-sort nang descending order
numbers.sort((a, b) => (a > b ? -1 : 1));

console.log(numbers);
// Output: [ 40, 30, 25, 10, 5 ]

function canVote(person) {
  return person.age >= 18 && person.citizenship === "Filipino";
}

const person1 = { name: "Juan", age: 20, citizenship: "Filipino" };
const person2 = { name: "Maria", age: 17, citizenship: "Filipino" };
const person3 = { name: "Peter", age: 25, citizenship: "American" };

console.log(canVote(person1));

const users = [
  { username: "admin", role: "Admin" },
  { username: "john_doe", role: "User" },
  { username: "jane_doe", role: "User" },
];
//     !== mane admin hobe na
const nonAdmins = users.filter((user) => user.role !== "Admin");

console.log(nonAdmins);

const grades = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 70 },
  { name: "Charlie", score: 95 },
];

grades.forEach((student) => {
  if (student.score >= 90) {
    console.log(`${student.name} all passed`);
  } else if (student.score >= 75) {
    console.log(`${student.name} passed.`);
  } else {
    console.log(`${student.name} failed.`);
  }
});

const config = {
  mode: "development",
  debug: true,
};

if (config.mode !== "production" && config.mode === true) {
  console.log("production not ");
} else {
  console.log("Running in production mode.");
}

const employees = [
  { name: "Anna", position: "Manager", salary: 70000 },
  { name: "Ben", position: "Developer", salary: 50000 },
  { name: "Cara", position: "Intern", salary: 20000 },
];

const highEarnersOrManagers = employees.filter(
  (emp) => emp.position === "Manager" || emp.salary > 40000
);

console.log(highEarnersOrManagers);
