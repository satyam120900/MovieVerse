namespace MovieVerseBackend.Models
{
    public class MovieGenereList
    {
            public int MovieId { get; set; }
            public MovieList MovieList { get; set; }
            public int GenreId { get; set; }
            public GenresList GenresList { get; set; }
    }
}
