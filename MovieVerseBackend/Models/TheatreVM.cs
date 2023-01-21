namespace MovieVerseBackend.Models
{
    public class TheatreVM
    {
        public int TheatreId { get; set; }
        public string TheatreName { get; set; }
        public string TheatreCity { get; set; }
        public string TheatreEmail { get; set; }
        public string TheatrePhoneNo { get; set; }
        public string TheatrePassword { get; set; }
        public int Seats { get; set; }
    }
}
