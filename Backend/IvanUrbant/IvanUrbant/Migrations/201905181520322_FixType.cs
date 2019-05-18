namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FixType : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.UserInfoes", "Name", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.UserInfoes", "Name", c => c.Int(nullable: false));
        }
    }
}
