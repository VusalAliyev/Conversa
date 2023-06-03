$(document).ready(() => {
    $("form").submit((e) => {
        e.preventDefault();


        var formData = {
          email: $('#email').val(),
          password: $('#password').val()
        };
        console.log(formData);
        // var formData = form.serialize();

        $.ajax({
            type: "POST",
            xhrFields: {
              withCredentials: true
          },
            url: 'http://localhost:5096/api/Account/login',
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function(response) {
              console.log(response);
              if (response.isSuccess) {
                window.location.href = 'index.html';
              }
              else{
                window.location.href = 'auth-login.html';
              }
            },
            error: function(error) {
              // Hata durumunda yapılacak işlemler
              console.log(error);
            }
          });
    })
})