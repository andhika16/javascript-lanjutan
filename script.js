// const nama = "muhammad andhika"
// const umur = 33
// const email = "moh.andhika16@gmail.com"


// function test(string, ...args) {
//     let result = '';

//     string.forEach((str, i) => {

//         result += `${str} ${args[i] || ''} `;

//     });

//     return result;

// }


// let str = test`halo nama saya ${nama}, umur saya ${umur}, tahun,email saya : ${email}`;
// let coba = test`halo nama saya ${nama}, umur saya ${umur}, tahun,email saya : ${email}`;



// console.log(str);

let isiNama = function (nama, umur, email) {
    this.nama = nama;
    this.umur = umur;
    this.email = email;

    function test(string, ...args) {


        return string.reduce((result, str, i) => `${result}${str} <span class="val">${args[i] || ''}</span> `, '');


    }

    let str = test`halo nama saya ${this.nama}, umur saya ${this.umur}, tahun,email saya : ${this.email}`;
    return str;

}



let andhika = isiNama("andhika", 20, "andhika@gmail.com");

let kope = isiNama("Kope", 21, "moh_kope17@gmail.com")



console.log(kope);
console.log(andhika);
















































