$(document).ready(()=>{
    $("form").submit((e)=>{
        e.preventDefault();

        var formData = {
            email: $('#email').val(),
            username: $('#username').val(),
            password: $('#password').val(),
            confirmPassword: $('#confirm-password').val(),
          };

          console.log(formData);

          $.ajax({
            type: "POST",
            url: 'http://localhost:5096/api/Account/register',
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function(response) {
              console.log(response);
              
            },
            error: function(error) {
              console.log(error);
            }

          });
    })
})