using System.Collections.Generic;

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

    public class Card
    {
        public int Id { get; set; }
        public CardType Type { get; set; }
        public int Title { get; set; }
        public int Description { get; set; }
        public int Exp { get; set; }
        public int Coins { get; set; }
        public CardStatus Status { get; set; }
        public ICollection<Answer> Answers { get; set; }
        public Answer CorrectAnswer { get; set; }
    }

    public class Answer
    {
        public int Id { get; set; }
        public string Title { get; set; }
    }
}