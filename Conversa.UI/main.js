$(document).ready(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7101/myhub")
      .withAutomaticReconnect([1000, 1000, 2000])
      .build();

      async function start() {
        try {
          await connection.start();
        } catch (error) {
          setTimeout(() => start(), 2000);
        }
      }

      const status=$("#status");

      connection.onreconnecting(error=>{
        status.css("background-color","yellow");
        status.css("color","white");
        status.html("Reconnecting...");
        status.fadeIn(2000,()=>{
          setTimeout(() => {
            status.fadeOut(2000)
          }, 2000);
        });
      });

      connection.onreconnected(connectionId=>{
        status.css("background-color","blue");
        status.css("color","white");
        status.html("Reconnected...");
        status.fadeIn(2000,()=>{
          setTimeout(() => {
            status.fadeOut(2000)
          }, 2000);
        });
      });

      connection.onreconnecting(connectionId=>{
        status.css("background-color","red");
        status.css("color","white");
        status.html("Something was wrong...");
        status.fadeIn(2000,()=>{
          setTimeout(() => {
            status.fadeOut(2000)
          }, 2000);
        });
      });


      start();
      $("#btnSend").click(()=>{
        let message=$("#txtMessage").val();
        connection.invoke("SendMessageAsync",message).catch(error=>alert(`Mesaj göndərərkən xəta baş verdi.`))
      })

      connection.on("receiveMessage",message=>{
        $("#messages").append(message,"<br>")
      })
  });