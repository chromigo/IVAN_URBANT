namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Card2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.AspNetUsers", "Answer_Id", "dbo.Answers");
            DropForeignKey("dbo.Cards", "CorrectAnswer_Id", "dbo.Answers");
            DropForeignKey("dbo.Answers", "Card_Id", "dbo.Cards");
            DropForeignKey("dbo.AspNetUsers", "Card_Id", "dbo.Cards");
            DropIndex("dbo.AspNetUsers", new[] { "Answer_Id" });
            DropIndex("dbo.AspNetUsers", new[] { "Card_Id" });
            DropIndex("dbo.Answers", new[] { "Card_Id" });
            DropIndex("dbo.Cards", new[] { "CorrectAnswer_Id" });
            DropPrimaryKey("dbo.Answers");
            DropPrimaryKey("dbo.Cards");
            AlterColumn("dbo.AspNetUsers", "Answer_Id", c => c.Int());
            AlterColumn("dbo.AspNetUsers", "Card_Id", c => c.Int());
            AlterColumn("dbo.Answers", "Id", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.Answers", "Card_Id", c => c.Int());
            AlterColumn("dbo.Cards", "Id", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.Cards", "CorrectAnswer_Id", c => c.Int());
            AddPrimaryKey("dbo.Answers", "Id");
            AddPrimaryKey("dbo.Cards", "Id");
            CreateIndex("dbo.AspNetUsers", "Answer_Id");
            CreateIndex("dbo.AspNetUsers", "Card_Id");
            CreateIndex("dbo.Answers", "Card_Id");
            CreateIndex("dbo.Cards", "CorrectAnswer_Id");
            AddForeignKey("dbo.AspNetUsers", "Answer_Id", "dbo.Answers", "Id");
            AddForeignKey("dbo.Cards", "CorrectAnswer_Id", "dbo.Answers", "Id");
            AddForeignKey("dbo.Answers", "Card_Id", "dbo.Cards", "Id");
            AddForeignKey("dbo.AspNetUsers", "Card_Id", "dbo.Cards", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUsers", "Card_Id", "dbo.Cards");
            DropForeignKey("dbo.Answers", "Card_Id", "dbo.Cards");
            DropForeignKey("dbo.Cards", "CorrectAnswer_Id", "dbo.Answers");
            DropForeignKey("dbo.AspNetUsers", "Answer_Id", "dbo.Answers");
            DropIndex("dbo.Cards", new[] { "CorrectAnswer_Id" });
            DropIndex("dbo.Answers", new[] { "Card_Id" });
            DropIndex("dbo.AspNetUsers", new[] { "Card_Id" });
            DropIndex("dbo.AspNetUsers", new[] { "Answer_Id" });
            DropPrimaryKey("dbo.Cards");
            DropPrimaryKey("dbo.Answers");
            AlterColumn("dbo.Cards", "CorrectAnswer_Id", c => c.String(maxLength: 128));
            AlterColumn("dbo.Cards", "Id", c => c.String(nullable: false, maxLength: 128));
            AlterColumn("dbo.Answers", "Card_Id", c => c.String(maxLength: 128));
            AlterColumn("dbo.Answers", "Id", c => c.String(nullable: false, maxLength: 128));
            AlterColumn("dbo.AspNetUsers", "Card_Id", c => c.String(maxLength: 128));
            AlterColumn("dbo.AspNetUsers", "Answer_Id", c => c.String(maxLength: 128));
            AddPrimaryKey("dbo.Cards", "Id");
            AddPrimaryKey("dbo.Answers", "Id");
            CreateIndex("dbo.Cards", "CorrectAnswer_Id");
            CreateIndex("dbo.Answers", "Card_Id");
            CreateIndex("dbo.AspNetUsers", "Card_Id");
            CreateIndex("dbo.AspNetUsers", "Answer_Id");
            AddForeignKey("dbo.AspNetUsers", "Card_Id", "dbo.Cards", "Id");
            AddForeignKey("dbo.Answers", "Card_Id", "dbo.Cards", "Id");
            AddForeignKey("dbo.Cards", "CorrectAnswer_Id", "dbo.Answers", "Id");
            AddForeignKey("dbo.AspNetUsers", "Answer_Id", "dbo.Answers", "Id");
        }
    }
}
