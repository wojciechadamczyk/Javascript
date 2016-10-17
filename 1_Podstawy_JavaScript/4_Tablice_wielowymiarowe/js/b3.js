function create2DArray(rows, columns) {
    var nr = 1;
    var result = [];

    for (var i = 0; i < rows; i++) {
        //glowny wymiar tablicy
        var tab = [];
        for (var j = 0; j < columns; j++) {
            tab.push(nr);
            nr++;
        }
        //tab to jest 4 el tablica osobna dla kazdego row
        result.push(tab);
        //result[i] = tab;
    }
    return result;
}

console.log(create2DArray(3, 4));


