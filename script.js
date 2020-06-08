
// Menggabungkan dua array 
// const mhs1 = ['andhika', 'doddy', 'erik'];
// const dosen = ['wanda', 'hendrik', 'kope'];

// const orang = [...dosen, ...mhs1];

// console.log(orang);




// Mengcopy array

// const mhs = ['andhika', 'doddy', 'erik']; 

// const mhs1 = [...mhs]; maka ini sudah benar-benar tercopy

// mhs1[0] = 'fajar';

// console.log(mhs1);


// const liMhs = document.querySelectorAll('ul li');
// dibawah ini push secara manual
// const mhs = [];

// for (let i = 0; i < liMhs.length; i++) {

//     mhs.push(liMhs[i].textContent);

// }

// console.log(mhs);
// bawah ini dengan menggunakan map
// const liMhs = document.querySelectorAll('ul li');

// const mhs = [...liMhs].map(m => m.textContent);

// console.log(mhs);

const nama = document.querySelector('.nama');

const huruf = [...nama.textContent].map(n => `<span>${n}</span>`).join('');

nama.innerHTML = huruf;


































