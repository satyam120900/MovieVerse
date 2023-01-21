namespace MovieVerseBackend.Models
{
    public interface IUserDetail
    {
        public string AddUser(UserDetail user);
        public string UpdateUser(UserDetail user);
        public string DeleteUser(int Id);
        public UserDetail GetUserById(int Id);
        public UserDetail GetUserByEmail(string UserEmail);
        public List<MovieList> GetAllMovies();
        public List<MovieList> GetMoviesByGenre(string Genre);
        public MovieList GetMovieById(int Id);
        public MovieList GetMovieByName(string movieName);
        public List<TheatreList> GetTheatreListByMovieId(int Id);
        public TheatreList GetTheatreById(int Id);
        public List<ShowTimings> GetShowTimingsByMovieIdTheatreId(int movieId,int theatreId);
        public int GetSeatsByShowTimingsId(int Id);
        public string UpdateSeatsByShowTimingsId(int Id,int BookedSeats);
        public List<GenresList> GetGenresByMovieId(int Id);
        public List<int> GetBookedSeatsByTheatreIdShowTimingsId(int TheatreId, int ShowTimingsId);
        public void AddOrderList(OrderListVM orderList);
        public List<OrderList> GetOrderListsByUserId(int Id);
        public string GetShowTimeByShowTimingsId(int Id);
        public TicketVM GetTicketInfoByShowTimingsId(int Id);
    }
}
