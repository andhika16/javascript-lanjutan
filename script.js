// const mahasiswaMethod = {

//     makan: function (porsi) {

//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);


//     },

//     main: function (jam) {

//         this.energi -= jam;
//         console.log(`halo ! ${this.nama}, Selamat Bermain`);
//     },

//     tidur: function (jam) {

//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat tidur`);


//     }


// }


// function Mahasiswa(nama, energi) {

//     let mahasiswa = Object.create(mahasiswaMethod);

//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }



// let andhika = Mahasiswa("andhika", 20);

// let kope = Mahasiswa("kope", 20);


// Contoh object function declaration && Protoype


// const karyawan_method = {

//     kerja: function (lembur) {
//         this.gaji += lembur * 2;
//         console.log(`anda telah lembur maka gaji anda ditambah ${this.gaji} , Selamat bekerja`);

//     }

// }


// function Karyawan(nama, gaji) {

//     let karyawan = Object.create(karyawan_method);

//     karyawan.nama = nama;
//     karyawan.gaji = gaji;

//     return karyawan;

// }



// let andhika = Karyawan("andhika", 90000);


// Sebelum ada sebuah class dalam object javascript menggunakan prototype untuk memanggil sebuah method 
// dalam objek JS.


// function Students(name, energy) {

//     this.name = name;
//     this.energy = energy;

// }


// Students.prototype.eats = function (p) {

//     this.energy += p * 2;
//     console.log(`Hai ${this.name}, Enjoy your meal`);


// }


// let andhika = new Students("andhika", 20);


// setelah dibuatlah Class dalam javascript.



// class Mahasiswa {

//     constructor(name, energy) {
//         this.name = name;
//         this.energy = energy;

//     }

//     makan(portion) {

//         this.energy += portion * 2;
//         console.log(`Hai ${this.name}, Enjoy your meal`);



//     }


// }



// let andhika = new Mahasiswa("andhika", 10);









