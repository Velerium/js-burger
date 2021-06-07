var short = document.getElementById('result');
var food = document.getElementsByClassName('ingredient');
var price = document.getElementById('price');
var coupon = document.getElementById('coupon');

var toppingPrice = 0;
var finalPrice = 0;

price.addEventListener('click', priceCalc)

function priceCalc() {
    toppingPrice = 0;

    for (x = 0; x < food.length; x++) {
        if (food[x].checked === true) {
            toppingPrice += parseInt(food[x].value);
        }
    }

    finalPrice = 50 + toppingPrice;
    // 50 is the base price~  Fair deal, huh?

    if (coupon.value === 'BK10') {
        finalPrice = finalPrice * 0.9;
    } else if (coupon.value === 'Ottavio') {
        finalPrice = 0.50; // Ottavio, this is for you~
    }

short.innerHTML = finalPrice.toFixed(2) + '€';
}
