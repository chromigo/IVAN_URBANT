namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ReplaceStatusCard : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AvailableCards", "CardStatus", c => c.Int(nullable: false));
            DropColumn("dbo.Cards", "Status");
            DropColumn("dbo.AvailableCards", "IsLootboxed");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AvailableCards", "IsLootboxed", c => c.Boolean(nullable: false));
            AddColumn("dbo.Cards", "Status", c => c.Int(nullable: false));
            DropColumn("dbo.AvailableCards", "CardStatus");
        }
    }
}
