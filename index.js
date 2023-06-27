var nameOfStudents = ["Ali", "Samad", "Rahim"];
// console.log(nameOfStudents);

var oddNumbers = [1, 3, 5, 7, 9];
// console.log(oddNumbers);

var evenNumbers = [2, 4, 6, 8, 10];
// console.log(evenNumbers);

var vowles = ["a", "e", "i", "o", "u"];
// console.log(vowles);
// console.log(vowles.length);
// console.log(vowles.indexOf("o"));

var myFavouritBooks = ["Ishkul of Love", "Himu", "Oparajita", "Hablu Programmer"];

// console.log(myFavouritBooks);
myFavouritBooks[1] = "Shimu";

// console.log(myFavouritBooks);
// myFavouritBooks["Shimu"] = "Himu";
// console.log(myFavouritBooks);

indexOfShimu = myFavouritBooks.indexOf("Shimu");
// console.log(indexOfShimu);
// myFavouritBooks[indexOfShimu] = "Himu";
// console.log(myFavouritBooks);
// console.log(myFavouritBooks.indexOf("shimu"));

var students = ["Akash", "Mahin"];
// students.push("Tufan Ali");
// console.log(students);
// students.push("Arafat Rahman");
// console.log(students);
// students.pop();
// console.log(students);
students.unshift("Tufan Ali");
// console.log(students);
students.shift();
// console.log(students);

// console.log(5 > 6);
// console.log(5 < 6);
// console.log(6 == 6);
// console.log(6 != 5);

var moneyOfRahim = 500;
var moneyOfKarim = 1000;

// console.log(moneyOfKarim > moneyOfRahim);
// console.log(moneyOfKarim < moneyOfRahim);
// console.log(moneyOfKarim == moneyOfRahim);
// console.log(moneyOfKarim != moneyOfRahim);

var isKarimJobHolder = true;
// var isLookHandsome = false;
var isLookHandsome = true;
var isHeProgrammer = true;
var isHisSalary = 2000;

// console.log(isKarimJobHolder && isLookHandsome && isHeProgrammer && isHisSalary > 5000);
// console.log(isLookHandsome || isHisSalary > 5000);

var doYouLoveMe = true;

// if(doYouLoveMe){
//     console.log(doYouLoveMe);
// }
// else {
//     console.log("I hate you.");
// }

var isRaining = false;
var isNotRaining = false;

// if(isRaining){
//     console.log("I will go to ramna park.")
// }
// else if(isNotRaining){
//     console.log("I will go to school.")
// } 
// else{
//     console.log("I will sleep.");
// }

var myPocketMoney = 400;
var priceOfHalim = 150;
var ramen = 400;
var chotpoti = 50;
var rutiPorota = 20;
var productSituation = "bashi";

if(myPocketMoney == priceOfHalim){
    console.log("Ami halim khete jabo");
}
else if(myPocketMoney == ramen){
    if(productSituation == "bashi"){
        console.log("ami ramen khabo na");
    }
    else{
        console.log("ami ramen khete pari");
    }
}
else if(myPocketMoney > chotpoti){
    console.log("Ami chotpoti khete jabo");
}