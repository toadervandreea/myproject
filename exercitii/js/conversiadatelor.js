let a = "16";
let b = 8;
// console.log(typeof a);
// console.log(typeof b);

// console.log(a+b); //168
// console.log(a-b); //8
// console.log(a/b); //2
// console.log(b-"trei"); //NaN

// let val = b - "a";
// console.log(isNaN(val)); //true

// let van = b- "3";
// console.log(isNaN(van)); //false


//conversii explicite 
//1. conversia de la strig la number 
//parseInt, parseFloat, Number
// a = parseInt("8");
// b = parseFloat("2.5");
// console.log(a+b); //10.5


// let c = Number("25");
// console.log(typeof c, c); //number 25
// let d = Number("a25");
// console.log(typeof c, c); //number NaN

//2.conversii la tipul string 
// toString, String
// let rez = String(123);//123 string
// rez = String(5.3+2);// 7.3 string
// console.log(rez, typeof rez); 

// rez = String(null);
// console.log(rez); //null

// rez = String(undefined);
// console.log(rez); //undefined

// rez = String(NaN);
// console.log(rez); //NaN

// rez = String(true);
// console.log(rez); //true


// rez = (123).toString();
// console.log(rez, typeof rez); //123 string

//3.conversii la tipul boolean
let result = Boolean("");
console.log(result, typeof result); //false boolean

result = Boolean(0);
console.log(result, typeof result);//false boolean

result = Boolean(undefined);
console.log(result); //false

result = Boolean(null);
console.log(result); //false

result = Boolean(NaN);
console.log(result); //false

result = Boolean("salut");
console.log(result); //true

result = Boolean(10);
console.log(result); //true