$(document).ready(function() {
    console.log("sa");
    $.ajax({
       url: 'http://localhost:5096/api/Account',   
       method: 'GET',
       dataType: 'json',
       success: function(data) {
          console.log(data);
       },
       error: function() {
          console.log('Veri alınamadı');
       }
    });
 });
 
 
 
 