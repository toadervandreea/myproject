let cana = {
    culoare:"rosu",
    volum: 200,
    unitate: "ml",
    greutate: 100
};
console.log(cana);

console.log(cana.culoare);

cana.volum = 210;
console.log(cana.volum);

let cana2 = {
    culoare:"rosu",
    volum: 200,
    unitate: "ml",
    greutate: 100
};
console.log(cana==cana2); //false

cana.culoare= "verde";
console.log(cana, cana2);

let cana3 = cana2;
console.log(cana3==cana2); //true

cana2.culoare="alb";
console.log(`cana2: ${cana2.culoare}, cana3: ${cana3.culoare}`);