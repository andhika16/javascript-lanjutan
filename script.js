
const car_method = {


    car_speed: function (km) {

        this.speed = km * 2;
        this.fuel -= km;
        console.log(`car is accelerate : ${this.speed} km/h`);


    }


}



function Car(speed, fuel) {

    let car = Object.create(car_method);

    car.speed = speed;
    car.fuel = fuel;


    return Car;
}



let ferrari = Car(2, 10);




const mahasiswaMethod = {

    makan: function (porsi) {

        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`);


    },

    main: function (jam) {

        this.energi -= jam;
        console.log(`halo ! ${this.nama}, Selamat Bermain`);
    },

    tidur: function (jam) {

        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, Selamat tidur`);


    }


}


function Mahasiswa(nama, energi) {

    let mahasiswa = Object.create(mahasiswaMethod);

    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}



let andhika = Mahasiswa("andhika", 20);

let kope = Mahasiswa("kope", 20);





