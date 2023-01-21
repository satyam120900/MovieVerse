using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MovieVerseBackend.Migrations
{
    /// <inheritdoc />
    public partial class fourthcreation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "bookedSeats",
                table: "OrderList",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "bookedSeats",
                table: "OrderList");
        }
    }
}
