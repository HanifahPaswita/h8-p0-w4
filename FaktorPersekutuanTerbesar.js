/*  Diberikan sebuah function fpb(angka1,angka2) yg menerima dua parameter angka,function akan mengembalikan nilai FPB,
    FPB dr dua bilangan merupakan bil bulat positif terbesar yg dpt membagi habis kedua bil tersebut.
    -FPB dari angka1 dan angka2 pasti akan habis membagi angka1, habis membagi angka2,
     juga habis membagi sisa pembagian angka1 dan angka2, trs diulang maka akan di dapat FPB dari dua angka tersebut.
*/

function fpb(angka1, angka2){
    var tampung=" ";
    for (i=0; i<angka2; i++){
        if (angka1%i===0 && angka2%i===0){
            tampung=i;
        }
    }
    return tampung;
}
console.log(fpb(12,16));    //4
console.log(fpb(50,40));    //10
console.log(fpb(22,99));    //11
console.log(fpb(24,36));    //12
console.log(fpb(17,23));    //1
