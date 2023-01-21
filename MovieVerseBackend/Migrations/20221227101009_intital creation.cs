using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MovieVerseBackend.Migrations
{
    /// <inheritdoc />
    public partial class intitalcreation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GenresList",
                columns: table => new
                {
                    GenreId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GenreName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GenresList", x => x.GenreId);
                });

            migrationBuilder.CreateTable(
                name: "MovieLists",
                columns: table => new
                {
                    MovieId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MovieName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MovieImage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MoviePoster = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MovieRating = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MovieYoutubeId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MovieDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MovieReleasedDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MovieDuration = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovieLists", x => x.MovieId);
                });

            migrationBuilder.CreateTable(
                name: "TheatreList",
                columns: table => new
                {
                    TheatreId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TheatreName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TheatreCity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TheatreEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TheatrePhoneNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TheatrePassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Seats = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TheatreList", x => x.TheatreId);
                });

            migrationBuilder.CreateTable(
                name: "UserDetails",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserPhoneNo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserPassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserCity = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserDetails", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "MovieGenereList",
                columns: table => new
                {
                    MovieId = table.Column<int>(type: "int", nullable: false),
                    GenreId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovieGenereList", x => new { x.MovieId, x.GenreId });
                    table.ForeignKey(
                        name: "FK_MovieGenereList_GenresList_GenreId",
                        column: x => x.GenreId,
                        principalTable: "GenresList",
                        principalColumn: "GenreId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MovieGenereList_MovieLists_MovieId",
                        column: x => x.MovieId,
                        principalTable: "MovieLists",
                        principalColumn: "MovieId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MovieTheatreList",
                columns: table => new
                {
                    MovieTheatreId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MovieId = table.Column<int>(type: "int", nullable: false),
                    TheatreId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MovieTheatreList", x => x.MovieTheatreId);
                    table.ForeignKey(
                        name: "FK_MovieTheatreList_MovieLists_MovieId",
                        column: x => x.MovieId,
                        principalTable: "MovieLists",
                        principalColumn: "MovieId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MovieTheatreList_TheatreList_TheatreId",
                        column: x => x.TheatreId,
                        principalTable: "TheatreList",
                        principalColumn: "TheatreId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ShowTimings",
                columns: table => new
                {
                    ShowTimingsId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ShowTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TotalSeats = table.Column<int>(type: "int", nullable: false),
                    MovieTheatreId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShowTimings", x => x.ShowTimingsId);
                    table.ForeignKey(
                        name: "FK_ShowTimings_MovieTheatreList_MovieTheatreId",
                        column: x => x.MovieTheatreId,
                        principalTable: "MovieTheatreList",
                        principalColumn: "MovieTheatreId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MovieGenereList_GenreId",
                table: "MovieGenereList",
                column: "GenreId");

            migrationBuilder.CreateIndex(
                name: "IX_MovieTheatreList_MovieId",
                table: "MovieTheatreList",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_MovieTheatreList_TheatreId",
                table: "MovieTheatreList",
                column: "TheatreId");

            migrationBuilder.CreateIndex(
                name: "IX_ShowTimings_MovieTheatreId",
                table: "ShowTimings",
                column: "MovieTheatreId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MovieGenereList");

            migrationBuilder.DropTable(
                name: "ShowTimings");

            migrationBuilder.DropTable(
                name: "UserDetails");

            migrationBuilder.DropTable(
                name: "GenresList");

            migrationBuilder.DropTable(
                name: "MovieTheatreList");

            migrationBuilder.DropTable(
                name: "MovieLists");

            migrationBuilder.DropTable(
                name: "TheatreList");
        }
    }
}
