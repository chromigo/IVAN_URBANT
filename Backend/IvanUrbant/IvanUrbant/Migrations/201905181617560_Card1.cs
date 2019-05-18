namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Card1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Answers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Title = c.String(),
                        Card_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Cards", t => t.Card_Id)
                .Index(t => t.Card_Id);
            
            AddColumn("dbo.AspNetUsers", "Answer_Id", c => c.String(maxLength: 128));
            AddColumn("dbo.Cards", "CorrectAnswer_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.AspNetUsers", "Answer_Id");
            CreateIndex("dbo.Cards", "CorrectAnswer_Id");
            AddForeignKey("dbo.AspNetUsers", "Answer_Id", "dbo.Answers", "Id");
            AddForeignKey("dbo.Cards", "CorrectAnswer_Id", "dbo.Answers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Cards", "CorrectAnswer_Id", "dbo.Answers");
            DropForeignKey("dbo.Answers", "Card_Id", "dbo.Cards");
            DropForeignKey("dbo.AspNetUsers", "Answer_Id", "dbo.Answers");
            DropIndex("dbo.Cards", new[] { "CorrectAnswer_Id" });
            DropIndex("dbo.Answers", new[] { "Card_Id" });
            DropIndex("dbo.AspNetUsers", new[] { "Answer_Id" });
            DropColumn("dbo.Cards", "CorrectAnswer_Id");
            DropColumn("dbo.AspNetUsers", "Answer_Id");
            DropTable("dbo.Answers");
        }
    }
}
