using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieVerseBackend.Models
{
    public class TheatreList
    {
        [Key]
        public int TheatreId { get; set; }
        public string TheatreName { get; set; }
        public string TheatreCity { get; set; }
        public string TheatreEmail { get; set; }
        public string TheatrePhoneNo { get; set; }
        public string TheatrePassword { get; set; }
        public int Seats { get; set; }
        public IList<MovieTheatreList> MovieTheatreList { get; set; }
    }
}
