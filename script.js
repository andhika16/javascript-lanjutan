

function Car(speed, color, horsepower) {
    this.speed = speed;
    this.color = color;
    this.horsepower = horsepower;

    function speedActivate(speed) {
        speed += 1;
        console.log("kecepatan bertambah" + speed + "KM");

    }


}




let ferrari = new Car(200, 'red', 600);






