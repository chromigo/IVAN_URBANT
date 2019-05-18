namespace IvanUrbant.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ManyToManyCards2 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.AvailableCards",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IsLootboxed = c.Boolean(nullable: false),
                        Card_Id = c.Int(),
                        UserInfo_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Cards", t => t.Card_Id)
                .ForeignKey("dbo.UserInfoes", t => t.UserInfo_Id)
                .Index(t => t.Card_Id)
                .Index(t => t.UserInfo_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AvailableCards", "UserInfo_Id", "dbo.UserInfoes");
            DropForeignKey("dbo.AvailableCards", "Card_Id", "dbo.Cards");
            DropIndex("dbo.AvailableCards", new[] { "UserInfo_Id" });
            DropIndex("dbo.AvailableCards", new[] { "Card_Id" });
            DropTable("dbo.AvailableCards");
        }
    }
}
