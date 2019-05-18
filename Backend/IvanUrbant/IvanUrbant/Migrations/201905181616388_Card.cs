namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Card : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cards",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Type = c.Int(nullable: false),
                        Title = c.Int(nullable: false),
                        Description = c.Int(nullable: false),
                        Exp = c.Int(nullable: false),
                        Coins = c.Int(nullable: false),
                        Status = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.AspNetUsers", "Card_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.AspNetUsers", "Card_Id");
            AddForeignKey("dbo.AspNetUsers", "Card_Id", "dbo.Cards", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUsers", "Card_Id", "dbo.Cards");
            DropIndex("dbo.AspNetUsers", new[] { "Card_Id" });
            DropColumn("dbo.AspNetUsers", "Card_Id");
            DropTable("dbo.Cards");
        }
    }
}
