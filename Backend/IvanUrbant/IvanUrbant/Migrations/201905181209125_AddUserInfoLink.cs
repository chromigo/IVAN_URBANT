namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUserInfoLink : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "UserInfoId", c => c.Int(nullable: false));
            CreateIndex("dbo.AspNetUsers", "UserInfoId");
            AddForeignKey("dbo.AspNetUsers", "UserInfoId", "dbo.UserInfoes", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUsers", "UserInfoId", "dbo.UserInfoes");
            DropIndex("dbo.AspNetUsers", new[] { "UserInfoId" });
            DropColumn("dbo.AspNetUsers", "UserInfoId");
        }
    }
}
