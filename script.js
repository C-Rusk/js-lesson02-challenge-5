var hourlyWage = prompt("What is your hourly wage? (ex: 12.50)");
var hoursWorked = prompt("How many hours have you worked this week? (ex: 40)");

console.log(
  `Your weekly wage earned is $${(hourlyWage * hoursWorked).toFixed(2)}`
);
