using System.ComponentModel.DataAnnotations.Schema;

namespace MovieVerseBackend.Models
{
    public class OrderListVM
    {
        public int OrderId { get; set; }
        public int ShowTimingsId { get; set; }
        public int UserId { get; set; }
        public int bookedSeats { get; set; }
        public DateTime time { get; set; }
    }
}
