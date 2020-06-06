
// Template literals


// Embeded Expressions

const x = prompt('masukkan nilai');
let test = ` ${x} apakah nilai disamping ganjil atau genap?  ${(x % 2 == 1 ? 'nilai disamping adalah ganjil' : 'nilai disamping adalah genap')}`



// HTML fragments 
const mhs = {

    nama: "muhammad andhika",
    nim: 19533080,
    jurusan: "Teknik Informatika"


}


let cetak = `<div class="ya">

    <h1>Nama saya Adalah ${this.nama}</h1>

    <p class="">Nim saya Adalah ${this.nim}</p>

</div>`;


console.log(test);


