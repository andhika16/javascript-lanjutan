// // Latihan Templates Literals




// const mhs = {

//     nama: "Andhika",
//     nim: 19533080,
//     jurusan: "Teknik Informatika",
//     email: "moh.andhika16@gmail.com"

// }




// const el = `<div class="">
//     <h1> Nama   : ${mhs.nama}</h1>
//     <p> Nim     : ${mhs.nim} 
//         Jurusan : ${mhs.jurusan} 
//         Email   : ${mhs.email} </p>

// </div>`



// const mhs = [

//     {
//         nama: "muhammad Andhika",
//         email: "moh.andhika16@gmail.com"
//     },
//     {
//         nama: "Cristiano Ronaldo",
//         email: "Cristiano_ronald0@gmail.com",
//         mode: "Prosus"
//     },
//     {
//         nama: "Lionel Messi",
//         email: "MessiM10@gmail.com"

//     },
//     {
//         nama: "Roberto Firmino",
//         email: "Roberto_firmino9@gmail.com",
//         mode: "Prosus"
//     }



// ]



// const el = mhs.map(m => `<ul> 
// <li> ${m.nama} </li>
// <li> ${m.email} </li>${(m.mode ? `${m.mode}` : '')}

// </ul>` ).join('');


// document.body.innerHTML = el;






const mhs = {

    nama: "Moh Andhika",
    semester: 3,
    mataKuliah: [

        'Komunikas Data',
        'Pemrograman Berorientasi objek',
        'Aljabar dan linear',
        'Sistem Berkas',


    ]


}



function cetakMatkul(mataKuliah) {

    return `<ol>
       ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')} 
    </ol>`

}


const el = `
<h1>${mhs.nama}</h1>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah : ${cetakMatkul(mhs.mataKuliah)}</h4>`;




document.body.innerHTML = el;



























