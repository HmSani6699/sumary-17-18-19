//is Now In Even Number

function isEvenNumber(num) {
    // var evenNum = num % 2 == 0;
    // return evenNum;
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
var num = 23;
var myEvenNum = isEvenNumber(num);
console.log(myEvenNum);

//is now in odd number

function isOddNumber(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

var num = 32;
var myOddNumber = isOddNumber(num);
console.log(myOddNumber);