namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCoins : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.UserInfoes", "Coins", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.UserInfoes", "Coins");
        }
    }
}
