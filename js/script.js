var burgerName = document.getElementById('sandwich');
var burgerNameOutput = document.getElementById('burgerName');
var food = document.getElementsByClassName('ingredient');
var price = document.getElementById('price');
var coupon = document.getElementById('coupon');
var basePrice = 50;
var sale = 0.9;  // 10% sale

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
    
    finalPrice = basePrice + toppingPrice;
    // The base price is 50€~  Fair deal, huh?
    
    if (coupon.value === 'BK10') {
        finalPrice = finalPrice * sale;
    } else if (coupon.value === 'Ottavio') {
        finalPrice = 0.50; // Ottavio, this is for you~
    } else if (coupon.value.length > 0) {
        alert('Invalid code!')
    }
    
    if (burgerName.value.length === 0) {
        burgerNameOutput.innerHTML = 'Your Burger';
    } else {
        burgerNameOutput.innerHTML = burgerName.value;
    }

    document.getElementById('result').innerHTML = finalPrice.toFixed(2) + '€';
}
priceCalc();
