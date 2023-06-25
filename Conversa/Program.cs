using Conversa;
using Conversa.Hubs;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddCors(options => options.AddDefaultPolicy(policy => policy.AllowAnyMethod().
AllowAnyHeader().
AllowCredentials().
SetIsOriginAllowed(origin => true)));
builder.Services.AddSignalR();
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer("Server=localhost;Database=SignalRDB;Trusted_Connection=true;TrustServerCertificate=true;"));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseCors();

app.UseEndpoints(endpoints =>
{
    endpoints.MapHub<MyHub>("/myhub");
    endpoints.MapHub<MessageHub>("/messageHub");
    endpoints.MapHub<ChatHub>("/chathub");
});

app.UseAuthorization();

app.MapRazorPages();

app.Run();
