
// let Mahasiswa = function () {

//     this.nama = "andhika";
//     this.umur = 1000;


//     sayHello = function () {
//         console.log(`hallo, ${this.nama} , umur kamu adalah${this.umur}`);

//     }


//     setInterval(() => {

//         console.log(this.umur -= 1); jika fungsi disamping ini menggunakan function declaration maka this pada fungsi sebelah akan mengacu ke window.
//     }, 1000);


// }



// let andhika = new Mahasiswa();

const box = document.querySelector('.box');


box.addEventListener('click', function () {

    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {

        [satu, dua] = [dua, satu];

    }

    this.classList.toggle(satu);

    setTimeout(() => {
        this.classList.toggle(dua);
    }, 500);


});



