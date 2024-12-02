function canAccess(user) {
  return (
    user.isAuthenticated && (user.role === "Admin" || user.role === "Moderator")
  );
}

const user1 = { isAuthenticated: true, role: "Admin" };
const user2 = { isAuthenticated: true, role: "User" };
const user3 = { isAuthenticated: false, role: "Moderator" };

console.log(canAccess(user1));
console.log(canAccess(user2));
console.log(canAccess(user3));

const orders = [
  { id: 1, status: "completed", customer: { name: "Ayesha" } },
  { id: 2, status: "pending", customer: { name: "Kamal" } },
  { id: 3, status: "canceled", customer: null },
];

// শর্ত: অর্ডার কমপ্লিটেড এবং কাস্টমার তথ্য থাকতে হবে
const validOrders = orders.filter(
  (order) => order.status === "completed" && order.customer
);

console.log(validOrders);
// Output: [ { id: 1, status: 'completed', customer: { name: 'Ayesha' } } ]

function isFormValid(data) {
  // শর্ত: ইউজারনেম এবং পাসওয়ার্ড থাকতে হবে এবং ইমেইল বা ফোন নম্বর যেকোনো একটি থাকতে হবে।
  return !!data.username && !!data.password && (data.email || data.phone);
}

const form1 = { username: "user1", password: "pass123", email: "" };
const form2 = { username: "user2", password: "pass123", phone: "01923456789" };
const form3 = { username: "", password: "", email: "" };

console.log(isFormValid(form1)); // false (ইমেইল বা ফোন নম্বর নেই)
console.log(isFormValid(form2)); // true (ফোন নম্বর আছে)
console.log(isFormValid(form3)); // false (ইউজারনেম এবং পাসওয়ার্ড নেই)
