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
    public class TheatreController : ControllerBase
    {
        private readonly ITheatreList dal;
        public TheatreController(ITheatreList dal)
        {
            this.dal = dal;
        }
        [HttpPost]
        [Route("LoginTheatre")]
        public IActionResult LoginTheatre(string TheatreEmail, string TheatrePassword)
        {
            var theatre = dal.GetTheatreByEmail(TheatreEmail);
            if(theatre != null) 
            {
                System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
                System.Text.Decoder utf8Decode = encoder.GetDecoder();
                byte[] todecode_byte = Convert.FromBase64String(theatre.TheatrePassword);
                int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
                char[] decoded_char = new char[charCount];
                utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
                string result = new String(decoded_char);

                if(result==TheatrePassword)
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
                        theatreId =theatre.TheatreId 
                    });
                }
            }
            return Unauthorized();
        }
        [HttpPost]
        [Route("AddTheatre")]
        public JsonResult  AddTheatre([FromBody] TheatreVM value)
        {
           var msg= dal.AddTheatre(value);
            return new JsonResult(new { msg=msg });
        }
        [HttpGet]
        [Route("GetTheatreById/{id}")]
        public TheatreList GetTheatreById(int id)
        {
            return dal.GetTheatreById(id);
        }
        [HttpPut]
        [Route("UpdateTheatre")]
        public JsonResult UpdateTheatre([FromBody] TheatreVM value)
        {
            return new JsonResult(new { msg = dal.UpdateTheatre(value) });
        }
        [HttpPost]
        [Route("AddMovie")]
        public JsonResult AddMovie([FromBody] MoviesGenresVM value)
        {
            return new JsonResult(new { msg = dal.AddMovie(value) });
        }
        [HttpDelete]
        [Route("DeleteMovieByMovieIdTheatreId")]
        public JsonResult DeleteMovieByMovieIdTheatreId(int MovieId, int TheatreId)
        {
            return new JsonResult(new { msg = dal.DeleteMovieByMovieIdTheatreId(MovieId, TheatreId) });
        }
        [HttpGet]
        [Route("GetAllMoviesByTheatreId")]
        public IEnumerable<MovieList> GetAllMoviesByTheatreId(int id)
        {
            return dal.GetAllMoviesByTheatreId(id);
        }
    }
}
