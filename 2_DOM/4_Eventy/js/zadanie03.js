/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    
    var button = document.querySelector('button');
    
    button.addEventListener('click', function (event){
        if(event.target.tagName == 'BUTTON') {
    
       console.log('HURA DZIALA');
        
    }
    });
});