
// // Destructring function

function kalkulasi(a, b) {

    return [a * b, a + b, a / b, a - b];

}


const [kali, tambah, bagi, kurang] = kalkulasi(20, 3)

console.log(kali);




// // jika ingin menambah properti tidak urut dengan returnya harus menggunakan objek seperti dibawah ini 

function hitung(a, b) {

    return {
        kali: a * b,
        tambah: a + b,
        bagi: a / b,
        kurang: a - b
    }

}



const { kali, kurang, bagi, tambah } = hitung(2, 3);


console.log(kurang);

// // Destructuring object 

const mhs1 = {
    nama: 'moh andhika',
    umur: 33,
    email: 'moh.andhika16@gmail.com',
    nilai: {

        tugas: 80,
        uas: 70,
        uts: 75

    }

}


function hai({ nama, umur, nilai: { tugas, uts, uas } }) {

    return `Halo nama saya ${nama}, umur saya ${umur}, nilai uas saya ${tugas}`;
}


console.log(hai(mhs1));









