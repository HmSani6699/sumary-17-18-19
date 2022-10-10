function isLepYear(year) {
    var dibug = year % 4 == 0;
    return dibug;
}


var year = 2028;
var myLepYer = isLepYear(year);
console.log(myLepYer);