let score = 85;
let grade = score >= 75 ? "Passed" : "Failed";
console.log(grade); // Output: "Passed"

let age = 25;
let isEligible =
  age >= 18
    ? age >= 21
      ? "Eligible for everything"
      : "Eligible for limited activities"
    : "Not eligible";

console.log(isEligible); // Output: "Eligible for everything"

// প্রথম শর্ত: age >= 18 সত্য হলে দ্বিতীয় ধাপে যাবে।
// দ্বিতীয় শর্ত: age >= 21 হলে "Eligible for everything"। না হলে "Eligible for limited activities"।

// spreate operator work

const primaryColors = ["Red", "Blue"];
const secondaryColors = ["Green", "Yellow"];

const allColors = [...primaryColors, ...secondaryColors, "Black"];
console.log(allColors);
// Output: ["Red", "Blue", "Green", "Yellow", "Black"]

const defaultSettings = { theme: "light", notifications: true };
const userSettings = { notifications: false, fontSize: "medium" };

const finalSettings = { ...defaultSettings, ...userSettings };
console.log(finalSettings);
// Output: { theme: "light", notifications: false, fontSize: "medium" }

// rest operator working

function getDetails(firstName, lastName, ...attributes) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Attributes: ${attributes}`);
}

getDetails("Alice", "Smith", "Engineer", "Cyclist", 30);
// Output:
// Name: Alice Smith
// Attributes: ["Engineer", "Cyclist", 30]

//     Nullish Coalescing

let primaryContact = null;
let secondaryContact = undefined;
let emergencyContact = "John Doe";

let contactPerson =
  primaryContact ??
  secondaryContact ??
  emergencyContact ??
  "No contact available";

console.log(contactPerson); // Output: "John Doe"

// Optional Chaining///////

let user = {
  profile: {
    name: "Alice",
    contact: {
      email: "alice@example.com",
    },
  },
};

let userEmail = user.profile?.contact?.email ?? "Email not available";
let userPhone = user.profile?.contact?.phone ?? "Phone not available";

console.log(userEmail); // Output: "alice@example.com"
console.log(userPhone); // Output: "Phone not available"
