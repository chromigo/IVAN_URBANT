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
    }
}