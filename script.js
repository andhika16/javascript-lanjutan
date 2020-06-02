

// hoisting yaitu element var memiliki nilai undifined pada global scope
console.log(nama);
var nama = 'andhika';
// output: undefined

// cration phase and execution phase
// var = undefined
// function = fn(); jika function maka akan mengembalikan nilai didalam function itu sendiri
// window = global object
// this = window

// execution phase







var nama = "andhika"
var umur = 20;

console.log(sayHello());

function sayHello() {
    return `halo nama saya ${nama} , saya berumur ${umur} tahun`;


}




