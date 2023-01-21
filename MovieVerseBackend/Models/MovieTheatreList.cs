using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace MovieVerseBackend.Models
{
    public class MovieTheatreList
    {
        [Key]
        public int MovieTheatreId { get; set; }
        public int MovieId { get; set; }
        public MovieList MovieList { get; set; }
        public int TheatreId { get; set; }
        public TheatreList TheatreList { get; set; }
    }
}
