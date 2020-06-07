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


    let str = test`halo nama saya ${this.nama}, umur saya ${this.umur}, tahun,email saya : ${this.email}`;
    return str;

}

function test(string, ...args) {


    return string.reduce((result, str, i) => `${result}${str} <span class="val">${args[i] || ''}</span> `, '');


}

let kope = isiNama("kope", 20, "kope_14314@gmail.com");
document.body.innerHTML = kope;


console.log(kope);
















































