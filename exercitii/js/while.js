/*
while(conditie){
    instructiuni;
}
*/
let s = 0;
let cnt = 1;
while(cnt<=5){
    s = s + cnt;
    cnt++;
};
console.log(s);

//break
 let valoare = 12, cnt2 = 0;
 let arr = [3,5,9,12,7,6];
while(cnt2<arr.length){
    if(arr[cnt2]==valoare){
        break;
    }
    console.log(arr[cnt2]);
    cnt2++;
}

//do while
let i=0;
do{
    i+=1;
    console.log(i)
}while(i<3);