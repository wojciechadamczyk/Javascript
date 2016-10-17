function boilEgg(seconds) {
    var boilingId= setInterval(function() {
        console.log('jajko sie gotuje');
    }, 5000);
    
    setTimeout(function () {
        console.log('jajko ugotowane');
        clearInterval(boilingId);
    }, seconds * 1000);
}

boilEgg(30);