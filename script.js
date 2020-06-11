// Promise
// object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states(fullfilled / rejected / pending)
// callback (resolve / rejected / finally )
// aksi (then / catch)



// contoh 
// let ditepati = false;
// const janji1 = new Promise((tepat, tidakTepati) => {
//     if (ditepati) {
//         tepat('janji telah ditepati !');

//     } else {
//         tidakTepati('janji diingkari');
//     }
// })


// janji1
//     .then(resolve => console.log('OK :' + resolve))
//     .catch(resolve => console.log('Gagal :' + resolve));

// Contoh kedua


let ditepati = true;
const janji2 = new Promise((resolve, rejected) => {
    if (ditepati) {
        setTimeout(() => {
            resolve('janji ditepati..');
        }, 2000)

    } else {
        setTimeout(() => {
            rejected('janji tidak ditepati..');
        }, 2000)

    }
})


console.log('mulai');

// console.log(janji2.then(() => console.log(janji2)));
janji2
    .finally(() => console.log('selesai menunggu'))
    .then(resolve => console.log('OK :' + resolve))
    .catch(resolve => console.log('Gagal :' + resolve));

console.log('selesai');



// promise.all

const film = new Promise((resolve) => {

    setTimeout(() => {
        resolve({
            judul: 'transformers',
            Director: 'andhika',
            tahun: 2017
        });
    }, 2000);

});

const cuaca = new Promise((resolve) => {

    setTimeout(() => {
        resolve({
            kota: 'ponorogo',
            suhu: 30,
            kondisi: 'Cerah berawan'
        });
    }, 1000);

});

const mobil = new Promise((resolve) => {

    setTimeout(() => {
        resolve({
            merk: 'ferrari',
            kecepatan: 3000,
            Produksi: 2010
        });
    }, 1000);

});





// film.then((res) => console.log(res))
// cuaca.then((res) => console.log(res))


Promise.all([film, cuaca, mobil])
    // .then(res => console.log(res));
    // dibawah ini menggunakan destructuring function kode
    .then(res => {
        const [film, cuaca, mobil] = res;
        console.log(film);
        console.log(cuaca);
        console.log(mobil);

    });














