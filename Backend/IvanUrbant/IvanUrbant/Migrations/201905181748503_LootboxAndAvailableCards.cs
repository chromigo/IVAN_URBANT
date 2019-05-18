namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LootboxAndAvailableCards : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Cards", "UserInfo_Id", c => c.Int());
            AddColumn("dbo.Cards", "UserInfo_Id1", c => c.Int());
            CreateIndex("dbo.Cards", "UserInfo_Id");
            CreateIndex("dbo.Cards", "UserInfo_Id1");
            AddForeignKey("dbo.Cards", "UserInfo_Id", "dbo.UserInfoes", "Id");
            AddForeignKey("dbo.Cards", "UserInfo_Id1", "dbo.UserInfoes", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Cards", "UserInfo_Id1", "dbo.UserInfoes");
            DropForeignKey("dbo.Cards", "UserInfo_Id", "dbo.UserInfoes");
            DropIndex("dbo.Cards", new[] { "UserInfo_Id1" });
            DropIndex("dbo.Cards", new[] { "UserInfo_Id" });
            DropColumn("dbo.Cards", "UserInfo_Id1");
            DropColumn("dbo.Cards", "UserInfo_Id");
        }
    }
}
