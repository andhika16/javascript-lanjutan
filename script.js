
// KODE INI LANJUTAN DARI CALLBACK FUNCTION YANG ADA DI CODE PEN

// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status) {
//                 error();
//             }
//         }
//     };

//     xhr.open('get', url);
//     xhr.send();


// }



// getDataMahasiswa('data/mahasiswa.json',
//     result => {
//         const mhs = JSON.parse(result);
//     }
//     , () => { });

// $('.click-button').on('click', function () {
//     $.ajax({
//         url: `http://www.omdbapi.com/?apikey=83626b40&s=${$('.input-keyword').val()}`,
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach((m) => {
//                 cards += showMovie(m);
//             });

//             $('.movie-container').html(cards);
// // ketika tombol detail diklik
//             $('.modal-detail-button').on('click', function () {

//                 $.ajax({
//                     url: ` http://www.omdbapi.com/?apikey=83626b40&i=${$(this).data('imdbid')}`,
//                     success: m => {
//                         const movieDetail = ShowMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: e => console.log(e.responseText)
//                 });


//             });



//         },
//         error: e => console.log(e.responseText)

//     });

// });


// const searchButton = document.querySelector('.click-button');
// searchButton.addEventListener('click', function () {
//     const inputKey = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=83626b40&s=' + inputKey.value)
//         .then(res => res.json())
//         .then(res => {
//             const movie = res.Search;
//             let cards = '';
//             movie.forEach(m => cards += showMovie(m));
//             const movContain = document.querySelector('.movie-container');
//             movContain.innerHTML = cards;

//             // ketika tombol see detail di klik
//             const detailButton = document.querySelectorAll('.modal-detail-button');
//             detailButton.forEach(btn => {
//                 btn.addEventListener('click', function () {
//                     fetch(`http://www.omdbapi.com/?apikey=83626b40&i=${$(this).data('imdbid')}`)
//                         .then(res => res.json())
//                         .then(movie => {
//                             const movieDetail = ShowMovieDetail(movie);
//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = movieDetail;
//                         })
//                         .catch(reject => console.log(reject))


//                 });
//             });

//         })
// });

// menampilkan API 
const searchButton = document.querySelector('.click-button');
searchButton.addEventListener('click', async function () {
    const inputKey = document.querySelector('.input-keyword')
    const movies = await getMovies(inputKey.value);
    updateUI(movies);
    // console.log(movies);

});


function getMovies(keyword) {

    return fetch(`http://www.omdbapi.com/?apikey=83626b40&s=${keyword}`)
        .then(res => res.json())
        .then(res => res.Search)
        .catch(err => console.log(err))


}


function updateUI(movies) {
    const movContain = document.querySelector('.movie-container');
    let cards = '';
    movies.forEach(m => cards += showMovie(m));
    movContain.innerHTML = cards;

}


// Detail button pada tiap API
// kode ini adalah sebuah data binding karena fungsi eventHandler tidak akan bisa eksekusi fungsi yang belum ada element-nya
document.addEventListener('click', async function (e) {

    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMoviesDetail(imdbid);
        updateUIdetailMovie(movieDetail);


    }

});

function getMoviesDetail(imdbid) {
    return fetch(`http://www.omdbapi.com/?apikey=83626b40&i=${imdbid}`)
        .then(res => res.json())
        .then(movie => movie)
        .catch(reject => console.log(reject))
}


function updateUIdetailMovie(movie) {
    const movieDetail = ShowMovieDetail(movie);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}



// UI untuk menampilkan APInya
function showMovie(m) {
    return `<div class="col-md-4 my-3 sm12">
                        <div class="card" >
                            <img src="${m.Poster}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${m.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary modal-detail-button"  data-toggle="modal" data-target="#movie-detail" data-imdbid=${m.imdbID}>See details</a>
                            </div>
                        </div>
                    </div>`;
}

function emptyClick(err) {
    `<div class="col-md-4 my-3 sm12">
                        <h1>${err}</h1>
                    </div>`;
}

function ShowMovieDetail(m) {
    return `<div class="container-fluid ">
                   <div class="row">
                       <div class="col-md-4">
                           <img src="${m.Poster}" class="img-fluid">
                       </div>
                       <div class="col">
                           <ul class="list-group">
                               <li class="list-group-item"> <strong >Title</strong>  ${m.Title}</li>
                               <li class="list-group-item"> <strong>Director :</strong> ${m.Director} </li>
                               <li class="list-group-item"> <strong>Actors:</strong> ${m.Actors}</li>
                               <li class="list-group-item"><strong >Year:</strong> ${m.Year}</li>
                               <li class="list-group-item"> <strong >Plot:</strong> <p>${m.Plot}</p> </li>
                           </ul>
                       </div>
                   </div>
               </div>`
}






















