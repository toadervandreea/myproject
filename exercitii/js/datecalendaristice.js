let data = new Date();
console.log(data, typeof data);

let data2 = Date();
console.log(data2, typeof data2);

let data3 = new Date(2021, 2, 15);
console.log(data3);

console.log(Date.now()); //nr de milisecunde

//convertim un string la o data calendaristica 
console.log(Date.parse(data2));

console.log(Date.parse("2018-07-23 15:23:48"));


let data4= new Date("2020-8-11 10:35:27");
//anul
console.log(data4.getFullYear()); //2020
//luna
console.log(data4.getMonth()); //7
//ziua din saptamana de la 0 la 6  0-duminica
console.log(data4.getDay()); //2 
//ziua efectiva
console.log(data4.getDate()); //11

//putem modifica
data4.setDate(25);
console.log(data4); 

//putem converti un obiect de tip date la string
console.log(data4.toLocaleString()); //returneaza un string care reprezinta data 
console.log(data4.toLocaleTimeString())//returneaza un string care repr doar portiunea cu ora

let diff = data3 - data4;
//convetim in ani 
console.log(diff/(1000*60*60*24*365));