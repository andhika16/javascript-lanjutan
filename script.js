// Destructing asignment array
// const meet = ['halo', 'nama', 'saya', 'andhika'];

// const [halo, nama, saya, andhika] = meet;

// console.log(halo);


// Object


// let mhs = {
//     nama: "andhika",
//     umur: 20
// }

// let { nama, umur } = mhs;

// console.log(nama);
// return Value pada array 

// function coba() {

//     return [1, 2, 3];
// }

// let [a, b, c] = coba()

// console.log(b);



// Rest Parameter

// const [a, ...sisa] = [1, 2, 3, 4, 5, 6, 4, 7, 8, 6, 9];

// console.log(a, sisa[4]);

// Asign ke variable yang baru

// let mhs = {
//     nama: "andhika",
//     umur: 20
// }

// let { nama: nma, umur: umr } = mhs;

// console.log(umr);

// bisa diberi properti default

// let mhs = {
//     nama: "andhika",
//     umur: 20,
//     email: "moh.andhika16@gmail.com"
// }

// let { nama: nma, umur: umr, email = "defaul@gmail.com" } = mhs;

// console.log(email);


// Mengambil field pada object ,setelah dikirim sebagai parameter untuk function


// let mhs = {
//     id: 16,
//     nama: "andhika",
//     umur: 20,
//     email: "moh.andhika16@gmail.com"
// }


// function getId({ umur }) {

//     return umur;

// }



// console.log(getId(mhs));




