//Objects
var mobileList = {
    Name: 'realmi',
    price: 1300,
    rom: '3Gb',
    rem: 32
}

//objects er man dekhbo

console.log(mobileList.Name)
console.log(mobileList.price)
console.log(mobileList.rom)
console.log(mobileList.rem)

//objects er man update for 3 itms

//01
mobileList.Name = 'iphone'
//02
mobileList['Name'] = 'redmi'
//03
var updateNum3 = 'Name'
mobileList[updateNum3] = 'sumsung'

console.log(mobileList);