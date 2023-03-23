for(let i=0; i<=10; i++){
    console.log(`constor: ${i}`);
}
console.log("dupa for");

//ex
let arr = [-2, 5, 3, 7, 4];
let max = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(`max: ${max}`);


//ex
let persoane = [
    {nume: "Manea", prenume: "Vlad", varsta:22},
    {nume: "Dinescu", prenume: "Amalia", varsta:27},
    {nume: "Tinu", prenume: "Andreea", varsta:25},
    {nume: "Oancea", prenume: "Dacian", varsta:31},
    {nume: "Cristea", prenume: "Diana", varsta:23},
    {nume: "Petrescu", prenume: "Maria", varsta:24},
    {nume: "Anghel", prenume: "Victor", varsta:26},
];
let res=[];
for(let i=0; i<persoane.length; i++){
    if(persoane[i].varsta>25){
        res.push(persoane[i]);
    }
}
console.log(res);


//exemplu cu continue
for(let i =0; i<arr.length; i++){
    if(arr[i]%2==1){
        continue
    }
    console.log(arr[i]);
};

//ex cu break
for(let i =0; i<arr.length; i++){
    if(arr[i]==5){
        break
    }
    console.log(arr[i]);
}

//ex
res=[];
for(let p of persoane){
    if(p.varsta>25){
        res.push(p);
    }
}
console.log(res);

