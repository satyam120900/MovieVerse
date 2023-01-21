using System.ComponentModel.DataAnnotations;

namespace MovieVerseBackend.Models
{
    public class UserDetail
    {
        [Key]
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string UserPhoneNo { get; set; }
        public string UserPassword { get; set; }

        public string UserCity { get; set; }
    }
}
