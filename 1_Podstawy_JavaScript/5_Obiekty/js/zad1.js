
String.prototype.upperLower = function () {
    var result = [];
    var splited = this.split("");
    for (var i = 0; i < splited.length; i++) {
        if (i % 2 === 0) {
            result.push(splited[i].toLowerCase());
        } else {
            result.push(splited[i].toUpperCase());
        }
    }

    return result.join('');
}

var funnyText = "Smiesznie".upperLower();
console.log(funnyText);



