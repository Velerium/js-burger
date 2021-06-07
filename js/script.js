var short = document.getElementById('output');
var food = document.getElementsByClassName('ingredient');
var price = document.getElementById('price');

var result = 0;

price.addEventListener('click', totalPrice)

function totalPrice() {
    result = 0;

    for (x = 0; x < food.length; x++) {
        if (food[x].checked === true) {
            result += parseInt(food[x].value);
        }
    }

short.innerHTML = 50 + result + '€';
}             // 50 is the base price~  Fair deal, huh?
