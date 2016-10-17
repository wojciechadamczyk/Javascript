//$(function (){ //zadanie 1 eventy
//   var divHeroBtns = $('div.hero-buttons');
//   var btn1 = divHeroBtns.children().first();
//   var btn2 = divHeroBtns.children().eq(1);
//   var btn3 = divHeroBtns.children().last();
//   
//   
//   btn1.on('click', function (){ //on ciagle
//      console.log('kliknieto mnie'); 
//   });
//   btn2.one('click', function (){ //one dziala raz
//      console.log('kliknieto mnie, ale juz drugi raz nie dam sie kliknac');
//  });
//  btn3.on('click', function (){
//    // divHeroBtns.children().off('click');
//    btn1.add(btn2).add(btn3).off('click');
//  });
//});

//$(function (){ //zadanie 3 1 sposob
//var SHdesp = $('section.superhero-description dl > dt');
//SHdesp.next().addClass('hide');
//
//SHdesp.on('click', function (){
//   console.log('klik na ', $(this));
//   $(this).next().toggleClass('hide');
//});
//});

//$(function (){ // zadanie 3 2 sposob
//   var sectionHero = $('section.superhero-description');
//   sectionHero.find('dd').hide();
//   sectionHero.find('dt').on('click', function(){
//       $(this).next('dd').toggle();
//   });
//});

$(function () { //zadanie 4 czytelniejszy sposob
    var form = $('form.Login');
    var input = form.find('input.user-pass');
    form.find('button.show-hide-btn').on('click', function () {
        event.preventDefault();
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
        } else {
            input.attr('type', 'password');
        }
    });
    //input.attr('type', input.attr('type') == 'password' ? 'text' : 'password');
});