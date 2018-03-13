/*  Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.
    2 hanya bisa dibagi 2 (prima)
    3 hanya bisa dibagi 3 (prima)
    4 bisa dibagi 2 dan 4 (bkn prima)
    5 hanya bisa dibagi 5 (prima)
    6 bisa dibagi 2,3,dan 6 (bkn prima)
    dst.
*/

function angkaPrima(angka) {
    for (var i=2; i<angka; i++){
        if (angka % i === 0){
            return false;
        }
    }
    return true;
}
console.log(angkaPrima(3)); //true
console.log(angkaPrima(7)); //true
console.log(angkaPrima(6)); //false
console.log(angkaPrima(23)); //true
console.log(angkaPrima(33)); //false

  