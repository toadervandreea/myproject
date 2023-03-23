let numar = 12.123456;
//toFixes()
console.log(numar.toFixed(3)); //12.123

//Math
console.log(Math.E, Math.PI); // 2.71 3.14

//abs -valoare absoluta
console.log(Math.abs(12.3), Math.abs(-6.3)); //12.3 6.3

//ceil -returneaza cel mai mic numar intreg care este mai mare decat valoarea data ca parametru la functie 
console.log(Math.ceil(12.15), Math.ceil(14.89)); //13 15

//floor -returneaza cel mai mare numar intreg care este mai mic decat valoarea data ca parametru
console.log(Math.floor(6.89)); //6

//exp - se ridica e la putera pe care o dam in parametru 
console.log(Math.exp(0)); //1
console.log(Math.exp(1)); // 2.72

//pow - ridicarea la putere 
console.log(Math.pow(2,2), Math.pow(2,4)); //4 16

//sqrt - calcularea radicalului de ordinul 2
console.log(Math.sqrt(4), Math.sqrt(9)); //2 3

//round - rotunjim un numar dat ca parametru la cel mai apropiat numar intreg
console.log(Math.round(6.325)); //6
console.log(Math.round(6.525)); //7

//random - gemeram un numar aleatoriuintre 0 si 1
console.log(Math.random());
//cu max si min 
let min = 1, max = 10;
console.log(Math.floor(min + Math.random() * max)) 

//min, max
console.log(Math.min(1, -3, 5), Math.max(-2, 7, 4)); //-3 7 

//functii trigonometrice 
console.log(Math.sin(0)); //0
console.log(Math.sin(90*Math.PI/180)); //1

console.log(Math.cos(0)); //1
console.log(Math.cos(90*Math.PI/180));
