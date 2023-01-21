using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MovieVerseBackend.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace MovieVerseBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserDetail dal;
        public UserController(IUserDetail dal)
        {
            this.dal = dal;
        }
        [HttpPost]
        [Route("LoginUser")]
        public IActionResult LoginUser(string UserEmail,string UserPassword)
        {
            var user=dal.GetUserByEmail(UserEmail);
            if (user != null)
            {
                System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
                System.Text.Decoder utf8Decode = encoder.GetDecoder();
                byte[] todecode_byte = Convert.FromBase64String(user.UserPassword);
                int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
                char[] decoded_char = new char[charCount];
                utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
                string result = new String(decoded_char);

                if (result == UserPassword)
                {
                    var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ByYM000OLlMQG6VVVp1OH7Xzyr7gHuw1qvUC5dcGt3SNM"));
                    var token = new JwtSecurityToken(
                    issuer: "Satyam",
                    audience: "Satyam",
                    expires: DateTime.Now.AddHours(3),
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );
                    return Ok(new
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        expiration = token.ValidTo,
                        userId = user.UserId
                    }); ;
                }
            }
            return Unauthorized();
        }
        [HttpPost]
        [Route("AddUser")]
        public JsonResult AddUser([FromBody] UserDetail value)
        {
            return new JsonResult(new { msg = dal.AddUser(value)});
        }
        [HttpDelete]
        [Route("DeleteUser/{id}")]
        public JsonResult DeleteUserById(int id)
        {
            return new JsonResult(new { msg = dal.DeleteUser(id) });
        }
        [HttpGet]
        [Route("GetUserById/{id}")]
        public UserDetail GetUserById(int id)
        {
            return dal.GetUserById(id);
        }
        [HttpPut]
        [Route("UpdateUser")]
        public JsonResult UpdateUser([FromBody] UserDetail value)
        {
            return new JsonResult(new { msg =dal.UpdateUser(value)});
        }
        [HttpGet]
        [Route("GetMovieById/{id}")]
        public MovieList GetMovieById(int id)
        {
            return dal.GetMovieById(id);
        }
        [HttpGet]
        [Route("GetMovieByName")]
        public MovieList GetMovieByName(string movieName)
        {
            return dal.GetMovieByName(movieName);
        }
        [HttpGet]
        [Route("GetMoviesByGenre")]
        public IEnumerable<MovieList> GetMoviesByGenre(string genre)
        {
            return dal.GetMoviesByGenre(genre);
        }
        [HttpGet]
        [Route("GetTheatreById/{id}")]
        public TheatreList GetTheatreById(int id)
        {
            return dal.GetTheatreById(id);
        }
        [HttpGet]
        [Route("GetTheatreListByMovieId")]
        public IEnumerable<TheatreList> GetTheatreListByMovieId(int id)
        {
            return dal.GetTheatreListByMovieId(id);
        }
        [HttpGet]
        [Route("GetShowTimingsByMovieIdTheatreId")]
        public IEnumerable<ShowTimings> GetShowTimingsByMovieIdTheatreId(int movieId, int theatreId)
        {
            return dal.GetShowTimingsByMovieIdTheatreId(movieId,theatreId);
        }
        [HttpGet]
        [Route("GetBookedSeatsByTheatreIdShowTimingsId/{TheatreId}/{ShowTimingsId}")]
        public List<int> GetBookedSeatsByTheatreIdShowTimingsId(int TheatreId, int ShowTimingsId)
        {
            return dal.GetBookedSeatsByTheatreIdShowTimingsId(TheatreId,ShowTimingsId);
        }
        [HttpPut]
        [Route("UpdateSeatsByShowTimingsId")]
        public void UpdateSeatsByShowTimingsId(int Id,int BookedSeats)
        {
            dal.UpdateSeatsByShowTimingsId(Id,BookedSeats);
        }
        [HttpGet]
        [Route("GetGenresByMovieId")]
        public List<GenresList> GetGenresByMovieId(int id)
        {
            return dal.GetGenresByMovieId(id);
        }
        [HttpGet]
        [Route("GetAllMovies")]
        public IEnumerable<MovieList> GetAllMovies()
        {
            return dal.GetAllMovies();
        }
        [HttpPost]
        [Route("AddOrderList")]
        public void AddOrderList([FromBody] OrderListVM value)
        {
            dal.AddOrderList(value);
        }
        [HttpGet]
        [Route("GetOrderListsByUserId/{id}")]
        public IEnumerable<OrderList> GetOrderListsByUserId(int id)
        {
            return dal.GetOrderListsByUserId(id);
        }
        [HttpGet]
        [Route("GetShowTimeByShowTimingsId/{id}")]
        public JsonResult GetShowTimeByShowTimingsId(int id)
        {
            return new JsonResult(new { msg = dal.GetShowTimeByShowTimingsId(id) });
        }
        [HttpGet]
        [Route("GetTicketInfoByShowTimingsId/{id}")]
        public TicketVM GetTicketInfoByShowTimingsId(int id)
        {
            return dal.GetTicketInfoByShowTimingsId(id);
        }
    }
}
