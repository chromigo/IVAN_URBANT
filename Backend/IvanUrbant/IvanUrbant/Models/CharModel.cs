using Newtonsoft.Json;

namespace IvanUrbant.Models
{
    public class CharModel
    {
        [JsonProperty("level")]
        public int Level { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("exp")]
        public int Experience { get; set; }
        [JsonProperty("avatar")]
        public int Type { get; set; }
        [JsonProperty("coins")]
        public int Coins { get; set; }
        [JsonProperty("availableCards")]
        public AvailableCardModel[] AvailableCards { get; set; }
    }

    public class AvailableCardModel
    {
        [JsonProperty("isLootboxed")]
        public bool IsLootboxed { get; set; }
        [JsonProperty("card")]
        public CardModel Card { get; set; }
    }

    public class CardModel {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("type")]
        public CardType Type { get; set; }
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("description")]
        public string Description { get; set; }
        [JsonProperty("exp")]
        public int Exp { get; set; }
        [JsonProperty("coins")]
        public int Coins { get; set; }
        [JsonProperty("status")]
        public CardStatus Status { get; set; }
        [JsonProperty("answers")]
        public AnswerModel[] Answers { get; set; }
        [JsonProperty("correctAnswer")]
        public AnswerModel CorrectAnswer { get; set; }
    }
    
    public class AnswerModel {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("title")]
        public string Title { get; set; }
    }

    public enum CardStatus
    {
        NotActive = 0,
        InProgress = 1,
        Skipped,
        Completed
    }
    
    public enum CardType
    {
        Task = 1,
        Question,
        Advice
    }
}