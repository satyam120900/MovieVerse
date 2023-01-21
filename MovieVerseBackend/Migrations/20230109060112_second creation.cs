using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MovieVerseBackend.Migrations
{
    /// <inheritdoc />
    public partial class secondcreation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OrderList",
                columns: table => new
                {
                    OrderId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ShowTimingsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderList", x => x.OrderId);
                    table.ForeignKey(
                        name: "FK_OrderList_ShowTimings_ShowTimingsId",
                        column: x => x.ShowTimingsId,
                        principalTable: "ShowTimings",
                        principalColumn: "ShowTimingsId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderList_ShowTimingsId",
                table: "OrderList",
                column: "ShowTimingsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderList");
        }
    }
}
