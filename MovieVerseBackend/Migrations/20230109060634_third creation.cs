using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MovieVerseBackend.Migrations
{
    /// <inheritdoc />
    public partial class thirdcreation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "OrderList",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_OrderList_UserId",
                table: "OrderList",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderList_UserDetails_UserId",
                table: "OrderList",
                column: "UserId",
                principalTable: "UserDetails",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderList_UserDetails_UserId",
                table: "OrderList");

            migrationBuilder.DropIndex(
                name: "IX_OrderList_UserId",
                table: "OrderList");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "OrderList");
        }
    }
}
