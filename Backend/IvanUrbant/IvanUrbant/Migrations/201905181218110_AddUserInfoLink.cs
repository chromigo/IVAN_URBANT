namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUserInfoLink : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "UserInfo_Id", c => c.Int());
            CreateIndex("dbo.AspNetUsers", "UserInfo_Id");
            AddForeignKey("dbo.AspNetUsers", "UserInfo_Id", "dbo.UserInfoes", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUsers", "UserInfo_Id", "dbo.UserInfoes");
            DropIndex("dbo.AspNetUsers", new[] { "UserInfo_Id" });
            DropColumn("dbo.AspNetUsers", "UserInfo_Id");
        }
    }
}
