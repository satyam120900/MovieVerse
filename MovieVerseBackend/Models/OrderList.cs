using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieVerseBackend.Models
{
    public class OrderList
    {
        [Key]
        public int OrderId { get; set; }
        public int ShowTimingsId { get; set; }

        [ForeignKey("ShowTimingsId")]
        public ShowTimings showTimings { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public UserDetail userDetail { get; set; }
        public int bookedSeats { get; set; }
        public DateTime time { get; set; }
    }
}
