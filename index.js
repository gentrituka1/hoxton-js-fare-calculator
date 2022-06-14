let userAge = prompt("How old are you? (enter a number)");
while (!/^[0-9]+$/.test(userAge)) {
    alert("Mate are you kidding me? I said a number!!!");
    userAge = prompt("Enter a number: ");
}
let travelDistance = prompt("How far are you travelling (in km)?");
while (!/^[0-9]+$/.test(travelDistance)) {
    alert("Don't piss me off lad, big man ting ye... How many times should I say a number is needed here!!!");
    travelDistance = prompt("Enter a number lad... the kilometers as a numbeeer, jises:");
}


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