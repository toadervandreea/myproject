 //document.createElement()
 let d1 = document.createElement('div');
 d1.innerHTML=`
 <h1>titlu</h1>
 <p>un paragraf de text</p>
 <button>click aici<button>
 `
 d1.classList.add('test');
 d1.setAttribute('k')

 //appendChild() - adauga elementul la DOM
 let parinte = document.getElementById('container');
 parinte.appendChild(d1);

 let newElem = document.createElement('div');
 newElem.textContent='new element';
 parinte.appendChild(newElem);

 //append/prepend
 let child1 = document.createElement('p');
 child1.textContent='child 1';
 parinte.append(child1);

 let child1 = document.createElement('p');
 child1.textContent='child 1';
 parinte.prepend(child1);

 //insertBefore
let toInsert = document.createElement('div');
toInsert.textContent='inserat';
parinte.insertBefore(toInsert, newElem);

//before 
let child2 = document.createElement('p');
child2.textContent='child 2';
child1.before(child2);

//after
let child2 = document.createElement('p');
child2.textContent='child 2';
child1.after(child2);

 console.log(d1);


//EXEMPLU MAI COLPLEX
function api(){
    return[
        {
            id:1,
            denumire:'masina de spalat',
            descriere:'descriere masina de spalat',
            pret:590
        },
        {
            id:2,
            denumire:'fier de calcat',
            descriere:'descriere fier de calcat',
            pret:950
        },
        {
            id:3,
            denumire:'televizor',
            descriere:'descriere televizor',
            pret:790
        },
        {
            id:4,
            denumire:'laptop',
            descriere:'descriere laptop',
            pret:690
        }
    ]
}


function afiseazaProduse(produse){
    let p;
    let parent = document.getElementById('container');
    for(let i=0; i<produse.lenght; i++){
        p = produse[i];
        let div = document.createElement('div');
        div.setAttribute('k',p.id);
        div.classList.add('card');
        div.innerHTML=`
        <p class="nume">${p.denumire}</p>
        <p class="descr">${p.descriere}</p>
        <p class="pret">${p.pret}</p>
        <button class="btn">adauga</button>
        `
        parent.appendChild(div);
    }
}
afiseazaProduse(api());