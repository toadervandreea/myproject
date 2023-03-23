let fruct = prompt("introdu un fruct");
switch(fruct){
    case "mar":
        console.log("ai introdus un mar");
        break;
    case "para":
        console.log("ai introdus o para");
        break;
    case "pruna":
        console.log("ai introdus o pruna");
        break;
    case "caramel":
        console.log("ai introdus caramel");
        break;
    case 5:
        console.log("ai introdus 5");
        break;
    default:
        console.log(`nu avem ${fruct} in meniu`);
}
console.log("dupa switch");