using System.ComponentModel.DataAnnotations;

namespace IvanUrbant.Models
{
    public class UserInfo
    {
        public int Id { get; set; }
        public int Level { get; set; }
        public int Experience { get; set; }
        public int Type { get; set; }
        public int Name { get; set; }
    }
}