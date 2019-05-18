using System.Collections.Generic;
using System.Linq;

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
        public virtual ICollection<AvailableCards> AvailableCards { get; set; }
        public CharModel ToCharModel()
        {
            return new CharModel
            {
                Coins = Coins,
                Experience = Experience,
                Level = Level,
                Name = Name,
                Type = Type,
                AvailableCards = AvailableCards.Select(e => new AvailableCardModel
                {
                    IsLootboxed = e.IsLootboxed,
                    Card = e.Card.ToCardModel()
                }).ToArray()
            };
        }
    }

    public class AvailableCards
    {
        public int Id { get; set; }
        public UserInfo UserInfo { get; set; }
        public Card Card { get; set; }
        public bool IsLootboxed { get; set; }
    }
//    
//    public class AvailableCard
//    {
//        public int Id { get; set; }
//        public UserInfo UserInfo { get; set; }
//        public Card Card { get; set; }
//    }

    public class Card
    {
        public int Id { get; set; }
        public CardType Type { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Exp { get; set; }
        public int Coins { get; set; }
        public CardStatus Status { get; set; }
        public ICollection<Answer> Answers { get; set; }
        public Answer CorrectAnswer { get; set; }
//        public virtual ICollection<UserInfo> UserInfos { get; set; }
        public CardModel ToCardModel()
        {
            return new CardModel
            {
                Id = Id,
                Type = Type,
                Title = Title,
                Description = Description,
                Exp = Exp,
                Coins = Coins,
                Status = Status,
                Answers = Answers.Select(e => e.ToAnswerModel()).ToArray(),
                CorrectAnswer = CorrectAnswer.ToAnswerModel()
            };
        }
    }

    public class Answer
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public AnswerModel ToAnswerModel()
        {
            return new AnswerModel{Id = Id, Title = Title};
        }
    }
}