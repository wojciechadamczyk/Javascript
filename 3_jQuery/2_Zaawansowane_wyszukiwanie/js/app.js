//$(function (){ //zadanie 2
//   $('a.expand').click(function (e){
//       e.preventDefault();
//     console.log('klik');
//     $(this).parent().next().slideDown(2000);
//   });
//   
//   $('a.close').click(function(e){
//      e.preventDefault();
//      $(this).parent().slideUp(500);
//   });
//   
////   $('a.close').click(function(e){ //zamknsie sie wszystko podpunkt 3 zadania 2
////      e.preventDefault();
////      $('.container').slideUp(500);
////      });
//});

$(function (){
   $('section.shopping').find('button').click(function (){ //zadanie 1 wyszukiwanie elementow
      $(this).toggleClass('added');
      $(this).closest('.cart-item').toggleClass('cart-updated');
   });
   
});