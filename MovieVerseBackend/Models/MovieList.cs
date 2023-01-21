using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieVerseBackend.Models
{
    public class MovieList
    {
        [Key]
        public int MovieId { get; set; }
        public string MovieName { get; set; }
        public string MovieImage { get; set; }
        public string MoviePoster { get; set; }
        public string MovieRating { get; set; }
        public string MovieYoutubeId { get; set;}
        public string MovieDescription {get; set;}
        public DateTime MovieReleasedDate { get; set;}
        public string MovieDuration { get; set;}
        public IList<MovieGenereList> MovieGenereList { get; set; }
        public IList<MovieTheatreList> MovieTheatreList { get; set; }
    }
}
