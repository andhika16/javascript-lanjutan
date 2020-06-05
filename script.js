const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];



// penulisan fungsi filter secara manual

// let newAngka = [];
// for (let i = 0; i < angka.length; i++) {

//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }


// }

// console.log(newAngka);




// penulisan filter secara otomatis


// const newAngka = angka.filter(function (a) {

//     return a > 3;

// })

// const newAngka2 = angka.filter(a => a > 3);

// console.log(newAngka);
// console.log(newAngka2);

// const angka1 = newAngka.map(function (a) {

//     return a * 2;

// });

// console.log(angka1);



// cara diatas bisa dilakukan dengan lebih simple dengan code dibawah ini :

const newAngka = angka.filter(a => a > 3)
    .map(a => a * 2)
    .reduce((a, b) => a + b, 5);


console.log(newAngka);















