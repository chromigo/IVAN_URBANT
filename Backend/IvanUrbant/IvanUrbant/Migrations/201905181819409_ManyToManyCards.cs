namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ManyToManyCards : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.UserInfoes", "Card_Id", c => c.Int());
            CreateIndex("dbo.UserInfoes", "Card_Id");
            AddForeignKey("dbo.UserInfoes", "Card_Id", "dbo.Cards", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.UserInfoes", "Card_Id", "dbo.Cards");
            DropIndex("dbo.UserInfoes", new[] { "Card_Id" });
            DropColumn("dbo.UserInfoes", "Card_Id");
        }
    }
}
