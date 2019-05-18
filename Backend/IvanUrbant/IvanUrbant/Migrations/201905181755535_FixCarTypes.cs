namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FixCarTypes : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Cards", "Title", c => c.String());
            AlterColumn("dbo.Cards", "Description", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Cards", "Description", c => c.Int(nullable: false));
            AlterColumn("dbo.Cards", "Title", c => c.Int(nullable: false));
        }
    }
}
