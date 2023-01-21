using Microsoft.EntityFrameworkCore;

namespace MovieVerseBackend.Models
{
    public class TheatreDALayer : ITheatreList
    {
        private readonly DBContext _dBContext;
        public TheatreDALayer(DBContext dBContext)
        {
            _dBContext = dBContext;
        }

        public string AddMovie(MoviesGenresVM moviesGenresVM)
        {
            int movieId = 0;
            var movieA=_dBContext.MovieLists.Where(m=>m.MovieName==moviesGenresVM.MovieName).SingleOrDefault();
            if (movieA == null)
            {
                var movie = new MovieList
                {
                    MovieName = moviesGenresVM.MovieName,
                    MovieImage = moviesGenresVM.MovieImage,
                    MoviePoster = moviesGenresVM.MoviePoster,
                    MovieRating = moviesGenresVM.MovieRating,
                    MovieYoutubeId = moviesGenresVM.MovieYoutubeId,
                    MovieDescription = moviesGenresVM.MovieDescription,
                    MovieDuration = moviesGenresVM.MovieDuration,
                    MovieReleasedDate = moviesGenresVM.MovieReleasedDate
                };
                _dBContext.MovieLists.Add(movie);
                _dBContext.SaveChanges();
                int movieid = movie.MovieId;
                movieId = movieid;
                foreach (var item in moviesGenresVM.genres)
                {
                    var genre = _dBContext.GenresList.Where(o => o.GenreName == item).SingleOrDefault();
                    if (genre != null)
                    {
                        var movieGenre = new MovieGenereList
                        {
                            GenreId = genre.GenreId,
                            MovieId = movieId,
                        };
                        _dBContext.MovieGenereList.Add(movieGenre);
                    }
                }
                _dBContext.SaveChanges();
            }
            else
            {
                movieId=movieA.MovieId;
            }
            var movieTheatre = new MovieTheatreList
            {
                MovieId = movieId,
                TheatreId = moviesGenresVM.TheatreID,
            };
            _dBContext.MovieTheatreList.Add(movieTheatre);
            _dBContext.SaveChanges();
            int movietheatreId = movieTheatre.MovieTheatreId;
            var theatre=_dBContext.TheatreList.Where(t=>t.TheatreId==moviesGenresVM.TheatreID).SingleOrDefault();
            foreach(var item in moviesGenresVM.showTimings)
            {
                if (theatre != null)
                {
                    var ShowTimings = new ShowTimings
                    {
                        ShowTime = item,
                        TotalSeats=theatre.Seats,
                        MovieTheatreId=movietheatreId
                    };
                    _dBContext.ShowTimings.Add(ShowTimings);
                }
            }
            _dBContext.SaveChanges();
            return "Added Successfully";
        }

        public string AddTheatre(TheatreVM theatreVM)
        {
            var theatreA = _dBContext.TheatreList.Where(t => t.TheatreEmail == theatreVM.TheatreEmail).SingleOrDefault();
            if (theatreA == null)
            {
                try
                {
                    byte[] encData_byte = new byte[theatreVM.TheatrePassword.Length];
                    encData_byte = System.Text.Encoding.UTF8.GetBytes(theatreVM.TheatrePassword);
                    string encodedData = Convert.ToBase64String(encData_byte);
                    theatreVM.TheatrePassword = encodedData;
                    var theatre = new TheatreList
                    {
                        TheatreName = theatreVM.TheatreName,
                        TheatreEmail = theatreVM.TheatreEmail,
                        TheatreCity = theatreVM.TheatreCity,
                        TheatrePhoneNo = theatreVM.TheatrePhoneNo,
                        TheatrePassword = theatreVM.TheatrePassword,
                        Seats = theatreVM.Seats,
                    };
                    _dBContext.TheatreList.Add(theatre);
                }
                catch (Exception ex)
                {
                    throw new Exception("Error in base64Encode" + ex.Message);
                }
                _dBContext.SaveChanges();
                return "Registered Successfully";
            }
            return "Email already exists";
        }

        public string DeleteMovieByMovieIdTheatreId(int MovieId, int TheatreId)
        {
            var movie = _dBContext.MovieTheatreList.Where(m => m.MovieId == MovieId & m.TheatreId==TheatreId).SingleOrDefault();
            if (movie != null)
            {
                _dBContext.MovieTheatreList.Remove(movie);
                _dBContext.SaveChanges();
            }
            return "Deleted Successfully";
        }

        public List<MovieList> GetAllMoviesByTheatreId(int Id)
        {
            var lstmovies = _dBContext.MovieTheatreList
                .Where(m => m.TheatreId == Id)
                .Join(_dBContext.MovieLists, o => o.MovieId, i => i.MovieId, (o, i) => i);
            return lstmovies.ToList();
        }

        public TheatreList GetTheatreByEmail(string TheatreEmail)
        {
            var theatre = _dBContext.TheatreList.Where(t => t.TheatreEmail == TheatreEmail).SingleOrDefault();
            if (theatre != null)
            {
                return theatre;
            }
            else
            {
                return null;
            }
        }

        public TheatreList GetTheatreById(int Id)
        {
            var theatre = _dBContext.TheatreList.Where(t => t.TheatreId == Id).SingleOrDefault();
            System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
            System.Text.Decoder utf8Decode = encoder.GetDecoder();
            byte[] todecode_byte = Convert.FromBase64String(theatre.TheatrePassword);
            int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
            char[] decoded_char = new char[charCount];
            utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
            theatre.TheatrePassword = new String(decoded_char);
            if (theatre != null)
            {
                return theatre;
            }
            else
            {
                return null;
            }
        }

        public string UpdateTheatre(TheatreVM theatreVM)
        {
            try
            {
                byte[] encData_byte = new byte[theatreVM.TheatrePassword.Length];
                encData_byte = System.Text.Encoding.UTF8.GetBytes(theatreVM.TheatrePassword);
                string encodedData = Convert.ToBase64String(encData_byte);
                theatreVM.TheatrePassword = encodedData;
                var theatre = new TheatreList
                {
                    TheatreName = theatreVM.TheatreName,
                    TheatreEmail = theatreVM.TheatreEmail,
                    TheatreCity = theatreVM.TheatreCity,
                    TheatrePhoneNo = theatreVM.TheatrePhoneNo,
                    TheatrePassword = theatreVM.TheatrePassword,
                };
                var theatreA = _dBContext.TheatreList.Where(t => t.TheatreEmail == theatre.TheatreEmail).SingleOrDefault();
                if (theatreA != null)
                {
                    theatreA.TheatreName = theatre.TheatreName;
                    theatreA.TheatreCity = theatre.TheatreCity;
                    theatreA.TheatreEmail = theatre.TheatreEmail;
                    theatreA.TheatrePhoneNo = theatre.TheatrePhoneNo;
                    theatreA.TheatrePassword = theatre.TheatrePassword;
                    _dBContext.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error in base64Encode" + ex.Message);
            }
            return "Updated Successfully";
        }
    }
}
