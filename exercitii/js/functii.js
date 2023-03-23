 function suma(x,y){
    return x+y;
 };
 let res = suma(3,5);
 console.log(`suma: ${res}`);


 let a = 5, b = 2;
 res = suma(a,b);
 console.log(`suma: ${res}`);


let lista = [
    {nume: "Daniel", greutate:75},
    {nume:"Anca", greutate:60},
    {nume:"Paula", greutate:72},
    {nume:"Toma", greutate:81},
    {nume:"Mircea", greutate:90}
];
 function greutate(persoane){
    let res = 0;
    for(let i=0; i<persoane.lenght; i++){
        res = res + persoane[i].greutate
    }
    return res;
 }
 console.log(`greutate: ${greutate(lista)}`);




 const produs = function(a,b){
    return a*b;
 };
 console.log(`produs: ${produs(3,4)}`);


//arrow function- daca folosim acest timp de functie nu putem folosi this in interiorul functiei 
 const produs2 = (a,b) =>{
    return a*b;
 };
 console.log(`produs: ${produs(3,4)}`);



 let x = 3;
 function test(a){
    a = a + 2;
    console.log(`in functie: ${a}`);
 }
 test(x);
 console.log(`in afara: ${x}`);



 let y = [1,2,3];
 function test(a){
    a.push(23);
    console.log(`in functie: ${a}`);
 }
 test(y);
 console.log(`in afara: ${y}`);



 let p = 4;
 function test(){
    return x*x;
 }
 console.log(`test: ${test()}`);



 function extern(){
    let y = 2;
    function intern(){
        let z = 5;
        return x + y + z; 
    }
    return intern();
 }
 console.log(`externa: ${extern()}`);