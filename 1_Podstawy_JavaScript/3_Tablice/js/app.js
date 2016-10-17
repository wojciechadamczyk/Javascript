var distTab = [1,2,3,4,5,6,7];
function add(array) {
    var sum=0;
    
    for(var i=0; i<array.length; i++) {
        sum += array[i];
    }
    return sum;
}
    
    function distFromAverage(array) {
        var avg = add(array) / array.length;
        var result = [];
        for(var i=0;i<array.length; i++) {
            var dist= Math.abs(avg-array[i]);
            result.push(dist);
        }
        return result;
    }
    console.log(distFromAverage(distTab));
    
//function multiply(array) {
//    var iloczyn=1;
//    for(var i =0; i < array.length; i++) {
//        iloczyn *= array[i];
//    }
//    return iloczyn;
//}
//
//console.log(add(tab));


