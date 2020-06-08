const nama = ['dhika', 'zulkfili', 'doddy'];


for (n of nama) {

    console.log(n);

}



function jumlahAngka() {

    console.log(arguments);


}


jumlahAngka(1,24,532344,35)




let mhs = {
    nama: "andhika",
    umur: 33,
    email: "moh.andhika16@gmail.com"
};

for (n in mhs) {
    console.log(mhs[n]);
}

function angka() {

    let jumlah = 0;
    for ( a of arguments){

      jumlah += a
    }
    return jumlah;
}
console.log(angka(1,2,3,4,5,6,7,8));

function add () {
    let nama = [];
    for ( n of arguments){

        nama += n

    }
    return nama;
}

console.log(add('y','o', 'l', 'o'))

