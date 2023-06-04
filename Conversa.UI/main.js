$(document).ready(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7101/chathub")
      .withAutomaticReconnect([1000, 1000, 2000])
      .build();

      let clientName;

      async function start() {
        try {
          await connection.start();
        } catch (error) {
          setTimeout(() => start(), 2000);
        }
      }

      $("#btnGiris").click(()=>{
        const nickName=$("#inputGiris").val();
        connection.invoke("GetNickname",nickName).catch(error=>console.log(error));
      })
      connection.on("clientJoined",(nickName)=>{
        $("#status").html(`${nickName} giris etdi`)
        $("#status").fadeIn(2000,()=>{
          setTimeout(() => {
            $("#status").fadeOut(2000);
          }, 2000);
        })
      });
      connection.on("allClients", (clients) => {
        $("#clients").empty();
        clients.forEach(client => {
          console.log(client);
          var yeniClient = $(`<li>${client.nickName}</li>`);
          $("#clients").append(yeniClient);
          yeniClient.click(() => {
            clientName = yeniClient.html(); // Seçilen <li> öğesinin içeriğini clientName'e atadık
            console.log(clientName);
          });
        });
      });
      

      start();
      
      $("#btnSend").click(()=>{
        let message=$("#txtMessage").val();
        connection.invoke("SendMessageAsync",message).catch(error=>alert(`Mesaj göndərərkən xəta baş verdi.`))
      })
      $("btnSendMessage").click(()=>{

      })
      
      connection.on("receiveMessage",(message,sender)=>{
        var yeniMesaj = $(`<li><strong>${sender.nickName}:</strong> ${message}</li>`);
  $("#messages").append(yeniMesaj);
      })

      $("#btnSendMessage").click(() => {
        const message = $("#inputSendMessage").val();
        if (clientName) { // Eğer clientName değeri tanımlıysa
          connection.invoke("SendMessageAsync", message, clientName); // clientName'i ile birlikte mesajı gönder
        }
      });

      $("#btnCreateGroup").click(()=>{
        connection.invoke("AddGroup",$("#inputCreateGroup").val())
      })

      var selectedGroup;
      connection.on("groups",(groups)=>{
        groups.forEach(group => {
          var yeniGroup=$(`<li> ${group.groupName}</li>`)
          $("#groups").append(yeniGroup);
          yeniGroup.click(()=>{
            selectedGroup=yeniGroup.html();
            console.log(selectedGroup);
          })
        });
      })

      $("#btnGroup").click(()=>{
        connection.invoke("AddClientToGroup",selectedGroup)
      })
    });


