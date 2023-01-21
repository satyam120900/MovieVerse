namespace MovieVerseBackend.Models
{
    public interface ITheatreList
    {
        public string AddTheatre(TheatreVM theatreVM);
        public string UpdateTheatre(TheatreVM theatreVM);
        public TheatreList GetTheatreById(int Id);
        public TheatreList GetTheatreByEmail(string TheatreEmail);
        public List<MovieList> GetAllMoviesByTheatreId(int Id);
        public string AddMovie(MoviesGenresVM moviesGenresVM);
        public string DeleteMovieByMovieIdTheatreId(int MovieId,int TheatreId);
    }
}
