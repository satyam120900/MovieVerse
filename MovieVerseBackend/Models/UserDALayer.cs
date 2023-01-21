using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace MovieVerseBackend.Models
{
    public class UserDALayer : IUserDetail
    {
        private readonly DBContext _dBContext;
        public UserDALayer(DBContext dBContext)
        {
            _dBContext = dBContext;
        }

        public void AddOrderList(OrderListVM orderList)
        {
            var order = new OrderList
            {
                OrderId = orderList.OrderId,
                ShowTimingsId = orderList.ShowTimingsId,
                UserId = orderList.UserId,
                bookedSeats = orderList.bookedSeats,
                time=orderList.time
            };
            _dBContext.OrderList.Add(order);
            _dBContext.SaveChanges();
        }

        public string AddUser(UserDetail user)
        {
            var data=_dBContext.UserDetails.Where(u=>u.UserEmail== user.UserEmail).SingleOrDefault();
            if(data==null)
            {
                try
                {
                    byte[] encData_byte = new byte[user.UserPassword.Length];
                    encData_byte = System.Text.Encoding.UTF8.GetBytes(user.UserPassword);
                    string encodedData = Convert.ToBase64String(encData_byte);
                    user.UserPassword = encodedData;
                    _dBContext.UserDetails.Add(user);
                }
                catch (Exception ex)
                {
                    throw new Exception("Error in base64Encode" + ex.Message);
                }
                _dBContext.SaveChanges();
                return "Registered Successfully";
            }
            else
            {
                return "Email already exists";
            }
        }

        public string DeleteUser(int Id)
        {
            var user = _dBContext.UserDetails.Where(u => u.UserId == Id).SingleOrDefault();
            if (user != null)
            {
                _dBContext.UserDetails.Remove(user);
                _dBContext.SaveChanges();
            }
            return "Profile Deleted Successfully";
        }

        public List<MovieList> GetAllMovies()
        {
            return _dBContext.MovieLists.ToList();
        }

        public List<int> GetBookedSeatsByTheatreIdShowTimingsId(int TheatreId, int ShowTimingsId)
        {
            var theatre=_dBContext.TheatreList.Where(t=>t.TheatreId== TheatreId).SingleOrDefault();
            var totalSeats = theatre.Seats;
            var availableSeats = GetSeatsByShowTimingsId(ShowTimingsId);
            var bookedSeats = totalSeats - availableSeats;
            List<int> randomList = new List<int>();
            while (randomList.Count < bookedSeats)
            {
                Random a = new Random();
                int number = a.Next(0, totalSeats);
                if (!randomList.Contains(number))
                    randomList.Add(number);
            }
            return randomList;
        }

        public List<GenresList> GetGenresByMovieId(int Id)
        {
            var lstGenres = _dBContext.MovieGenereList
                 .Where(mg => mg.MovieId == Id)
                 .Join(_dBContext.GenresList, o => o.GenreId, i => i.GenreId, (o, i) => i);
            return lstGenres.ToList();
        }

        public MovieList GetMovieById(int Id)
        {
            var movie = _dBContext.MovieLists.Where(m => m.MovieId == Id).SingleOrDefault();
            if (movie != null)
            {
                return movie;
            }
            else
            {
                return null;
            }
        }

        public MovieList GetMovieByName(string movieName)
        {
            var movie = _dBContext.MovieLists.Where(m => m.MovieName == movieName).SingleOrDefault();
            if (movie != null)
            {
                return movie;
            }
            else
            {
                return null;
            }
        }

        public TicketVM GetTicketInfoByShowTimingsId(int Id)
        {
            var showTiming=_dBContext.ShowTimings.Where(s=>s.ShowTimingsId== Id).SingleOrDefault();
            var movieTheatre=_dBContext.MovieTheatreList.Where(m=>m.MovieTheatreId==showTiming.MovieTheatreId).SingleOrDefault();
            var movie=_dBContext.MovieLists.Where(m=>m.MovieId== movieTheatre.MovieId).SingleOrDefault();
            var theatre = _dBContext.TheatreList.Where(t => t.TheatreId == movieTheatre.TheatreId).SingleOrDefault();
            return new TicketVM
            {
                MovieName = movie.MovieName,
                MovieImage = movie.MovieImage,
                TheatreName = theatre.TheatreName,
                TheatreCity = theatre.TheatreCity
            };
        }

        public List<MovieList> GetMoviesByGenre(string Genre)
        {
            var genreId = _dBContext.GenresList
                          .Where(g => g.GenreName == Genre)
                          .Select(o=>o.GenreId).SingleOrDefault();

            var lstMovies = _dBContext.MovieGenereList
                          .Where(mg => mg.GenreId == genreId)
                          .Join(_dBContext.MovieLists, o => o.MovieId, i => i.MovieId, (o, i) => i);
                
                
            return lstMovies.ToList();
        }

        public List<OrderList> GetOrderListsByUserId(int Id)
        {
            var orderlst=_dBContext.OrderList.Where(o=>o.UserId == Id);
            return orderlst.ToList();
        }

        public int GetSeatsByShowTimingsId(int Id)
        {
            var seats = _dBContext.ShowTimings.Where(s => s.ShowTimingsId == Id).SingleOrDefault();
            return seats.TotalSeats;
        }

        public string GetShowTimeByShowTimingsId(int Id)
        {
            var showTime=_dBContext.ShowTimings.Where(s=>s.ShowTimingsId==Id).SingleOrDefault();
            return showTime.ShowTime;
        }

        public List<ShowTimings> GetShowTimingsByMovieIdTheatreId(int movieId, int theatreId)
        {
            var showTimings=_dBContext.MovieTheatreList
                .Where(mt=>mt.TheatreId==theatreId&mt.MovieId==movieId)
                .Join(_dBContext.ShowTimings,o=>o.MovieTheatreId,i=>i.MovieTheatreId,(o, i) => i);
            return showTimings.ToList();
        }

        public TheatreList GetTheatreById(int Id)
        {
            var theatre = _dBContext.TheatreList.Where(t => t.TheatreId == Id).SingleOrDefault();
            if (theatre != null)
            {
                return theatre;
            }
            else
            {
                return null;
            }
        }

        public List<TheatreList> GetTheatreListByMovieId(int Id)
        {
            var lstTheatre = _dBContext.MovieTheatreList
               .Where(m => m.MovieId == Id)
               .Join(_dBContext.TheatreList, o => o.TheatreId, i => i.TheatreId, (o, i) => i);
            return lstTheatre.ToList();
        }

        public UserDetail GetUserByEmail(string UserEmail)
        {
            var user = _dBContext.UserDetails.Where(u => u.UserEmail == UserEmail).SingleOrDefault();
            if (user != null)
            {
                return user;
            }
            else
            {
                return null;
            }
        }

        public UserDetail GetUserById(int Id)
        {
            var user = _dBContext.UserDetails.Where(u => u.UserId == Id).SingleOrDefault();
            System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
            System.Text.Decoder utf8Decode = encoder.GetDecoder();
            byte[] todecode_byte = Convert.FromBase64String(user.UserPassword);
            int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
            char[] decoded_char = new char[charCount];
            utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
            user.UserPassword = new String(decoded_char);
            if (user != null)
            {
                return user;
            }
            else
            {
                return null;
            }
        }

        public string UpdateSeatsByShowTimingsId(int Id,int BookedSeats)
        {
            var showTiming = _dBContext.ShowTimings.Where(s => s.ShowTimingsId == Id).SingleOrDefault();
            if (showTiming != null)
            {
                if (showTiming.TotalSeats > BookedSeats)
                {
                    showTiming.TotalSeats = showTiming.TotalSeats - BookedSeats;
                    _dBContext.SaveChanges();
                    return "Seats Booked Successfully";
                }
                else
                {
                    return "Selected No. of Seats Not Available";
                }
            }
            return "Selected No. of Seats Not Available";
        }

        public string UpdateUser(UserDetail user)
        {
            try
            {
                var userA = _dBContext.UserDetails.Where(u => u.UserEmail == user.UserEmail).SingleOrDefault();
                byte[] encData_byte = new byte[user.UserPassword.Length];
                encData_byte = System.Text.Encoding.UTF8.GetBytes(user.UserPassword);
                string encodedData = Convert.ToBase64String(encData_byte);
                user.UserPassword = encodedData;
                if (userA != null)
                {
                    userA.UserName = user.UserName;
                    userA.UserEmail = user.UserEmail;
                    userA.UserCity = user.UserCity;
                    userA.UserPhoneNo = user.UserPhoneNo;
                    userA.UserPassword = user.UserPassword;
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
