using System.ComponentModel.DataAnnotations;

namespace IvanUrbant.Models
{
    public class UserInfo
    {
        public int Id { get; set; }
        public int Level { get; set; }
        public int Experience { get; set; }
        public int Type { get; set; }
        public string Name { get; set; }
        public int Coins { get; set; }

        public CharModel ToCharModel()
        {
            return new CharModel
            {
                Coins = Coins,
                Experience = Experience,
                Level = Level,
                Name = Name,
                Type = Type
            };
        }
    }
}