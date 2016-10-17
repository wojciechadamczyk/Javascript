/**
 * Created by Jacek on 2016-01-11.
 */
function sum(a, b, c) {
    return a + b + c;
    
}
var result = sum(1 ,2, 3);
console.log(result);

function sum2(){
    return arguments[0]+arguments[1]+arguments[2];
}

console.log(sum2(1,2,3));
