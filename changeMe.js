/*
Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi 
dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) 
First Name, Last Name, Gender dan Birth Year . 
Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age.
Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. 
Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'
*/

function changeMe(arr){
    for (var i=0; i<arr.length; i++){
        var objArr ={};
        console.log((i+1)+'.'+arr[i][0]+' '+arr[i][1]+':');
        objArr.firsName = arr[i][0];
        objArr.lastName = arr[i][1];
        objArr.gender   = arr[i][2];
        var age         = 2018 - arr[i][3];
        if (!age|| 2018 < arr[i][3]){
        objArr.age='Invalid Birth Year'
        }else{
        objArr.age= age;
        }
        console.log(objArr);
    }
    if(arr.length<1){
        console.log('""');
    }
}
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""