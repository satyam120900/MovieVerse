namespace MovieVerseBackend.Models
{
    public class MoviesGenresVM
    {
        public string MovieName { get; set; }
        public string MovieImage { get; set; }
        public string MoviePoster { get; set; }
        public string MovieRating { get; set; }
        public string MovieYoutubeId { get; set; }
        public string MovieDescription { get; set; }
        public DateTime MovieReleasedDate { get; set; }
        public string MovieDuration { get; set; }
        public int TheatreID { get; set; }
        public List<String> genres { get; set; }
        public List<String> showTimings { get; set; }
    }
}
