

String.prototype.upperLower = function () {
    var result = [];
    var splited = this.split(" "); //pojedyncze wyrazy tablica

    for (var i = 0; i < splited.length; i++) {
        var singleWord = splited[i];//pojedynczy wyraz
        var singleWordResult = '';
        for (var j = 0; j < singleWord.length; j++) {
            if (j % 2 === 0) {
                singleWordResult += singleWord[j].toLowerCase();
            } else {
                singleWordResult += singleWord[j].toUpperCase();
            }
        }
        result.push(singleWordResult);
    }
    return result.join(' ');
}

var funnyTextWithSpace = "Javascript jest super".upperLower();
console.log(funnyTextWithSpace);