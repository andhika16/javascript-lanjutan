
function init() {

    let nama = "andhika";

    return function () {

        console.log(`halo , ${nama}`);

    }

}


let a = init();


console.log(a());




let ucapSalam = function (salam) {

    // local scope ..
    // ..
    // ..
    // lexical scope
    // ..
    // ..
    return function (nama) {

        return `Halo, Selamat ${salam}, ${nama}`;
    }

}



let Pagi = ucapSalam('Pagi');
let Malam = ucapSalam('Malam');
let Siang = ucapSalam('Siang');


console.log(Pagi('Andhika'));




let tambah = (function () {

    let hitung = 0;

    return function () {
        return ++hitung;
    }


})();


console.log(tambah());
console.log(tambah());
console.log(tambah());
console.log(tambah());











