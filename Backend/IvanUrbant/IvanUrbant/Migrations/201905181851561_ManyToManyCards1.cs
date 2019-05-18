namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ManyToManyCards1 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.UserInfoes", "Card_Id", "dbo.Cards");
            DropForeignKey("dbo.Cards", "UserInfo_Id", "dbo.UserInfoes");
            DropForeignKey("dbo.Cards", "UserInfo_Id1", "dbo.UserInfoes");
            DropIndex("dbo.UserInfoes", new[] { "Card_Id" });
            DropIndex("dbo.Cards", new[] { "UserInfo_Id" });
            DropIndex("dbo.Cards", new[] { "UserInfo_Id1" });
            DropColumn("dbo.UserInfoes", "Card_Id");
            DropColumn("dbo.Cards", "UserInfo_Id");
            DropColumn("dbo.Cards", "UserInfo_Id1");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Cards", "UserInfo_Id1", c => c.Int());
            AddColumn("dbo.Cards", "UserInfo_Id", c => c.Int());
            AddColumn("dbo.UserInfoes", "Card_Id", c => c.Int());
            CreateIndex("dbo.Cards", "UserInfo_Id1");
            CreateIndex("dbo.Cards", "UserInfo_Id");
            CreateIndex("dbo.UserInfoes", "Card_Id");
            AddForeignKey("dbo.Cards", "UserInfo_Id1", "dbo.UserInfoes", "Id");
            AddForeignKey("dbo.Cards", "UserInfo_Id", "dbo.UserInfoes", "Id");
            AddForeignKey("dbo.UserInfoes", "Card_Id", "dbo.Cards", "Id");
        }
    }
}
