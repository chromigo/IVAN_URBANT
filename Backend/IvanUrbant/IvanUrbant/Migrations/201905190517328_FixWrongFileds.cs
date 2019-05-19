namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FixWrongFileds : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.AspNetUsers", "Answer_Id", "dbo.Answers");
            DropForeignKey("dbo.AspNetUsers", "Card_Id", "dbo.Cards");
            DropIndex("dbo.AspNetUsers", new[] { "Answer_Id" });
            DropIndex("dbo.AspNetUsers", new[] { "Card_Id" });
            DropColumn("dbo.AspNetUsers", "Answer_Id");
            DropColumn("dbo.AspNetUsers", "Card_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "Card_Id", c => c.Int());
            AddColumn("dbo.AspNetUsers", "Answer_Id", c => c.Int());
            CreateIndex("dbo.AspNetUsers", "Card_Id");
            CreateIndex("dbo.AspNetUsers", "Answer_Id");
            AddForeignKey("dbo.AspNetUsers", "Card_Id", "dbo.Cards", "Id");
            AddForeignKey("dbo.AspNetUsers", "Answer_Id", "dbo.Answers", "Id");
        }
    }
}
