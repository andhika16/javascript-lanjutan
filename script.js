function Car(speed, color, hp, fuel) {

    this.speed = speed;
    this.color = color;
    this.hp = hp;
    this.fuel = fuel;


    this.carSpeed = function (extendSpeed) {

        this.speed = this.speed + extendSpeed;




        console.log("kecepatan mobil bertambah menjadi " + this.speed + " KM/hrs")

    }



}



let ferrari = new Car(200, "red", 1000);

ferrari.carSpeed(6);







