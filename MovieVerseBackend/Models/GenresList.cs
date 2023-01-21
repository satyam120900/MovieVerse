using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MovieVerseBackend.Models
{
    public class GenresList
    {
        [Key]
        public int GenreId { get; set; }
        public string GenreName { get; set;}
        public IList<MovieGenereList> MovieGenereList { get; set; }
    }
}
