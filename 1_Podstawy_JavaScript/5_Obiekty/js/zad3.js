var Car = {
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

Car.inspections = [];
Car.addInspection = function (date) {
    this.inspections.push(date);
}
Car.showInspections = function() {
    console.log(this.inspections);
}

Car.addInspection('20.04.2016');
Car.addInspection('20.07.2016');
Car.showInspections();

