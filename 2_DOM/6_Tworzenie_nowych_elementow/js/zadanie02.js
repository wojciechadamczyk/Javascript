document.addEventListener('DOMContentLoaded', function () {
   var btn= document.querySelector('a.button');
   var counter = 0;
   var ul = document.querySelector('ul');
   
   btn.addEventListener('click', function (event){
      event.preventDefault();
      var newLi = document.createElement('li');
      newLi.innerHTML = 'Element' + (counter + 1) + ' -w chwili dodania bylo ' + counter + ' elementow';
      counter++;
      ul.appendChild(newLi);
   });
});

