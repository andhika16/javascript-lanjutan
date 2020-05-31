let nomor = 10

for (let i = 0; i < 8; i++) {


    console.log(nomor += 1);






}



function Car(speed, color, horsepower) {
    this.speed = speed;
    this.color = color;
    this.horsepower = horsepower;


    function speedActivate(speed) {
        this.speed += 1;
        console.log("kecepatan bertambah" + this.speed + "KM");

    }



}


let ferrari = new Car;

Car.speedActivate(200);

