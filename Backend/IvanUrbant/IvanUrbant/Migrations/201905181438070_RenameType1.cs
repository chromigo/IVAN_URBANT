namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RenameType1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.UserInfoes", "Experience", c => c.Int(nullable: false));
            DropColumn("dbo.UserInfoes", "LevelUpPercentage");
        }
        
        public override void Down()
        {
            AddColumn("dbo.UserInfoes", "LevelUpPercentage", c => c.Int(nullable: false));
            DropColumn("dbo.UserInfoes", "Experience");
        }
    }
}
