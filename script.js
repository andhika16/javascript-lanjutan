// ambil semua video


let videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih yang javascript lanjutan



let jslnjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // ambil durasi masing" video
    .map(item => item.dataset.duration)

    // ubah durasi menjadi int,ubah menit ke detik
    .map(waktu => {

        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];

    })
    //jumlahkan semua detik
    .reduce((total, detik) => total + detik);

// ubah detik ke jam , menit ,detik

const jam = Math.floor(jslnjut / 3600);
jslnjut = jslnjut - jam * 3600;

const menit = Math.floor(jslnjut / 60);
const detik = jslnjut - menit * 60;

// simpan di DOM

const p_durasi = document.querySelector('.total-durasi');
const p_jml_video = document.querySelector('.jumlah-video');
let jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
p_durasi.textContent = `Total : ${jam} Jam, ${menit} Menit, ${detik} Detik.`;
p_jml_video.textContent = `${jmlVideo} Video`;
