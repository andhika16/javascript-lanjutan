
// const coba = new Promise(resolve => {

//     setTimeout(() => {
//         resolve('jalankan')
//         // resolve(console.log('jalankan'))
//     }, 2000)

// })

// coba.then((coba) => console.log(coba))
// // console.log(coba);


// fungsi mencoba promise
// dan saya menggunakan default parameter difungsi coba promise
function cobaPromise(waktu = 3000) {
    return new Promise((resolve, reject) => {

        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu);
        } else {
            reject('kelamaan anying');
        }
    });
}


// kode dibawah ini percobaan menggunakan then dan catch

// const coba = cobaPromise();
// coba
//     .then((coba) => console.log(coba))
//     .catch((coba) => console.log(coba))
// maka hasilnya akan sama

// membuat sychronus function dengan error handling
async function cobaAsync(wkt) {
    try {
        // jika resolve berhasil maka akan mengembalikan fungsi dibawah ini
        const coba = await cobaPromise(wkt);
        console.log(coba);

    } catch (err) {
        // jika waktu resolve error maka akan mengembalikan fungsi dibawah ini
        console.error(err);
    }
}

// menjalankan fungsi Async dengan percobaan waktu jika waktu terlalu lama maka akan error tapi jika waktu nya dibawah 5 detik maka berhasil
cobaAsync(1000);
