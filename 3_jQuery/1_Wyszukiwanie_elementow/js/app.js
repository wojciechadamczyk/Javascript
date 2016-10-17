//$(function () {
//    $('section.main').find('li').addClass('borderClass');
//    var allShowMore = $('.showMore');
//    //allShowMore.first().css('color', 'blue');
//    allShowMore.eq(0).css('color', 'blue'); //eq wskazuje na indeks
//});
$(function () {
   //$('a').css('color', 'red');
   //$('ul.menu').find('a').css('color', 'red');
   $('ul.menu').find('a').addClass('redLinks');
   $('ul.menu').find('li').first().addClass('biggerFont');
   
});