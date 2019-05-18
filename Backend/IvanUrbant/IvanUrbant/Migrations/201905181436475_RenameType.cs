namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RenameType : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.UserInfoes", "Type", c => c.Int(nullable: false));
            DropColumn("dbo.UserInfoes", "SelectedType");
        }
        
        public override void Down()
        {
            AddColumn("dbo.UserInfoes", "SelectedType", c => c.Int(nullable: false));
            DropColumn("dbo.UserInfoes", "Type");
        }
    }
}
