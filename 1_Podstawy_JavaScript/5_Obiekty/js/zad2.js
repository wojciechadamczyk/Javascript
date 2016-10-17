advar Car = {
    brand: 'BMW',
    color: 'Dark Blue',
    mileage: 0,
    printCarInfo: function() {
        console.log(this.brand);
        console.log(this.color);
        console.log(this.mileage);
    },
    drive: function(km) {
        this.mileage += km;
    }
}

Car.printCarInfo();
Car.drive(58);
Car.printCarInfo();


