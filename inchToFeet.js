//inch To Feet

function inchToFeet(inch) {
    var feet = inch / 12
    return feet;
}

var inch = 156;
var feet = inchToFeet(inch);
console.log(feet);

// Mile To Kilometer

function mileToklomiter(mile) {
    var kilomiter = mile * 1.60934;
    return kilomiter;
}
var mile = 10;
var km = mileToklomiter(mile);
console.log('Ami Ekhon Kilomiter Dekhbo :', km);