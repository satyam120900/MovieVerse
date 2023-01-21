using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieVerseBackend.Models
{
    public class ShowTimings
    {
        [Key]
        public int ShowTimingsId{ get; set; }
        public string ShowTime { get; set; }
        public int TotalSeats { get; set; }
        public int MovieTheatreId { get; set; }

        [ForeignKey("MovieTheatreId")]
        public MovieTheatreList movieTheatreList { get; set; }

    }
}
