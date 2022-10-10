
//break in wile loop
var i = 0;
while (i < 10) {
    i++;
    if (i == 5) {
        break;
    }
    // console.log(i);
}

//continue in while loop

var i = 0;
while (i < 5) {
    i++;
    if (i == 2) {
        continue;
    }
    // console.log(i);
}


//break in for loop

for (var i = 0; i < 10; i++) {
    if (i == 3) {
        break;
    }
    // console.log(i);
}

//continue in for loop

for (var i = 1; i <= 10; i++) {
    if (i == 8) {
        continue;
    }
    // console.log(i);
}

//array diey loop and break

var number = [12, 13, 14, 15, 45, 34, 66, 97, 45, 28]

for (var i = 0; i < number.length; i++) {
    var elimants = number[i];
    if (elimants == 45) {
        break;
    }
    console.log(elimants);
}

//array diey loop and continue

var number = [12, 13, 14, 15, 45, 34, 66, 97, 45, 28]

for (var i = 0; i < number.length; i++) {
    var elimants = number[i];
    if (elimants == 45) {
        continue;
    }
    console.log(elimants);
}