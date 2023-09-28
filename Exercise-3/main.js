const car = {
    brand: "Toyota",
    speed: 120,

    accelerate: function () {
        console.log("The ".concat(this.brand, " is accelerating"));
    },

    brake: function () {
        console.log("The ".concat(car.brand, " is braking"));
    }
};

car.accelerate();
car.brake();
