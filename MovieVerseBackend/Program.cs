using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MovieVerseBackend.Models;
using System.Text;

namespace MovieVerseBackend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<DBContext>(options =>
            {
                options.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=MovieVerseDB;Integrated Security=True;Encrypt=False");
            });
            builder.Services.Add(new ServiceDescriptor(typeof(IUserDetail), typeof(UserDALayer), ServiceLifetime.Transient));
            builder.Services.Add(new ServiceDescriptor(typeof(ITheatreList), typeof(TheatreDALayer), ServiceLifetime.Transient));
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("client-allowed", policy =>
                {
                    policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
                    policy.WithOrigins("http://localhost:3001").AllowAnyHeader().AllowAnyMethod();
                });
            });


            //jwt bearer token configure
            builder.Services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = "Satyam",//ConfigurationManager.AppSetting["JWT:ValidIssuer"],
                        ValidAudience = "Satyam",// ConfigurationManager.AppSetting["JWT:ValidAudience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ByYM000OLlMQG6VVVp1OH7Xzyr7gHuw1qvUC5dcGt3SNM"/*ConfigurationManager.AppSetting["JWT:Secret"]*/))
                    };
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors("client-allowed");
            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();
            


            app.Run();
        }
    }
}