$(document).ready(() => {
    $("form").submit((e) => {
        e.preventDefault();


        var form = $(this);
        var formData = JSON.stringify({
            "email": form.find('input[name="Email"]').val(),
            "password": form.find('input[name="Password"]').val()
          });
        // var formData = form.serialize();

        $.ajax({
            type: "POST",
            url: 'http://localhost:5096/api/Account/login',
            data: formData,
            contentType: "application/json",
            success: function(response) {
              console.log("response");
            },
            error: function(error) {
              // Hata durumunda yapılacak işlemler
              console.log("error");
            }
          });
    })
})