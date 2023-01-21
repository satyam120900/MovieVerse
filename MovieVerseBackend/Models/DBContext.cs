using Microsoft.EntityFrameworkCore;

namespace MovieVerseBackend.Models
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {

        }
        public DbSet<UserDetail> UserDetails { get; set; }
        public DbSet<GenresList> GenresList { get; set; }
        public DbSet<MovieList> MovieLists { get; set; }
        public DbSet<TheatreList> TheatreList { get; set; }
        public DbSet<MovieGenereList> MovieGenereList { get; set; }
        public DbSet<MovieTheatreList> MovieTheatreList { get; set; }
        public DbSet<ShowTimings> ShowTimings { get; set; }
        public DbSet<OrderList> OrderList { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MovieGenereList>().HasKey(mg => new { mg.MovieId, mg.GenreId });
            modelBuilder.Entity<MovieGenereList>()
                .HasOne<MovieList>(mg => mg.MovieList)
                .WithMany(m => m.MovieGenereList)
                .HasForeignKey(mg => mg.MovieId);


            modelBuilder.Entity<MovieGenereList>()
                .HasOne<GenresList>(mg => mg.GenresList)
                .WithMany(g => g.MovieGenereList)
                .HasForeignKey(mg => mg.GenreId);
            modelBuilder.Entity<MovieTheatreList>().HasKey(mt => new { mt.MovieTheatreId});
            modelBuilder.Entity<MovieTheatreList>()
                .HasOne<MovieList>(mt => mt.MovieList)
                .WithMany(m => m.MovieTheatreList)
                .HasForeignKey(mt => mt.MovieId);
            modelBuilder.Entity<MovieTheatreList>()
                .HasOne<TheatreList>(mt => mt.TheatreList)
                .WithMany(t => t.MovieTheatreList)
                .HasForeignKey(mt => mt.TheatreId);
        }


    }
}
