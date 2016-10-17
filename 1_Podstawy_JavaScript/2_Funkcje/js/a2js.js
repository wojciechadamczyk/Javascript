function circleCalcs(radius) {
    if (typeof radius == 'number') {
        var pi = 3.14;
        var area = Math.PI * Math.pow(radius, 2);
        var circ = 2 * pi * radius;
        console.log('Pole o promieniu ' + radius +' to: ' + area);
        console.log('Obwod o promieniu ' + radius + ' to: ' + circ);
    } else {
        console.log('zly typ argumentu');
        return false;
    }
}
console.log(circleCalcs("10111"));
