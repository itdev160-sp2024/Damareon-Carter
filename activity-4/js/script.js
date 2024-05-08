var user = 'Damareon';
var salutation = 'Hello, ';
var greeting = salutation + user + '! This page shows all the reviews of VS Code.';
var greetingElement = document.getElementById('greeting');

greetingElement.textContent = greeting;

var price = 0;
var studentDiscount = 0.1;
var studentPrice = price - (price * studentDiscount);
var priceElement = document.getElementById('price');
var studentPriceElement = document.getElementById('student-price');

priceElement.textContent = price;
studentPriceElement.textContent = studentPrice;