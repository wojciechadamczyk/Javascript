document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('#addBtn');
    var table = document.getElementById('orders');
    btn.addEventListener('click', function () {
        event.preventDefault();
        var orderId = document.getElementById('orderId').value;
        var item = document.getElementById('item').value;
        var quantity = document.getElementById('quantity').value;
        //console.log(orderId, item, quantity);
        var newTr = document.createElement('tr');
        newTr.innerHTML = '<td>' +orderId+ '</td><td>' +item+ '</td><td>' +quantity+ '</td>';
        table.appendChild(newTr); 
    });
});

