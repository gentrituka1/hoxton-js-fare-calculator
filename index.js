let userAge = Number(prompt("How old are you?"));
let travelDistance = Number(prompt("How far are you travelling (in km)?"));
let thePrice = travelDistance * 0.21;

if (userAge < 18){
    let thePriceToPay = thePrice - (thePrice * (20 / 100));
    let theRealPriceToPay = thePriceToPay.toFixed(1);
    console.log("Oi m8, you need to drop at least: " + "£" + theRealPriceToPay);
} 
else if (userAge > 65) {
    let thePriceToPay = thePrice - (thePrice * (40 / 100));
    let theRealPriceToPay = thePriceToPay.toFixed(1);
    console.log("Oi grandpa, how u doin, drop at least: " + "£" + theRealPriceToPay);
} else {
    let theRealPriceToPay = thePrice.toFixed(1);
    console.log("Oi there lad, no discount for you bruv, so you have to pay: " + "£" + theRealPriceToPay);
}