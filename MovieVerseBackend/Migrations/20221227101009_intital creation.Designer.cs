﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MovieVerseBackend.Models;

#nullable disable

namespace MovieVerseBackend.Migrations
{
    [DbContext(typeof(DBContext))]
    [Migration("20221227101009_intital creation")]
    partial class intitalcreation
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("MovieVerseBackend.Models.GenresList", b =>
                {
                    b.Property<int>("GenreId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("GenreId"));

                    b.Property<string>("GenreName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("GenreId");

                    b.ToTable("GenresList");
                });

            modelBuilder.Entity("MovieVerseBackend.Models.MovieGenereList", b =>
                {
                    b.Property<int>("MovieId")
                        .HasColumnType("int");

                    b.Property<int>("GenreId")
                        .HasColumnType("int");

                    b.HasKey("MovieId", "GenreId");

                    b.HasIndex("GenreId");

                    b.ToTable("MovieGenereList");
                });

            modelBuilder.Entity("MovieVerseBackend.Models.MovieList", b =>
                {
                    b.Property<int>("MovieId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("MovieId"));

                    b.Property<string>("MovieDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MovieDuration")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MovieImage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MovieName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MoviePoster")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MovieRating")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("MovieReleasedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("MovieYoutubeId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MovieId");

                    b.ToTable("MovieLists");
                });

            modelBuilder.Entity("MovieVerseBackend.Models.MovieTheatreList", b =>
                {
                    b.Property<int>("MovieTheatreId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("MovieTheatreId"));

                    b.Property<int>("MovieId")
                        .HasColumnType("int");

                    b.Property<int>("TheatreId")
                        .HasColumnType("int");

                    b.HasKey("MovieTheatreId");

                    b.HasIndex("MovieId");

                    b.HasIndex("TheatreId");

                    b.ToTable("MovieTheatreList");
                });

            modelBuilder.Entity("MovieVerseBackend.Models.ShowTimings", b =>
                {
                    b.Property<int>("ShowTimingsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ShowTimingsId"));

                    b.Property<int>("MovieTheatreId")
                        .HasColumnType("int");

                    b.Property<string>("ShowTime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TotalSeats")
                        .HasColumnType("int");

                    b.HasKey("ShowTimingsId");

                    b.HasIndex("MovieTheatreId");

                    b.ToTable("ShowTimings");
                });

            modelBuilder.Entity("MovieVerseBackend.Models.TheatreList", b =>
                {
                    b.Property<int>("TheatreId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TheatreId"));

                    b.Property<int>("Seats")
                        .HasColumnType("int");

                    b.Property<string>("TheatreCity")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TheatreEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TheatreName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TheatrePassword")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TheatrePhoneNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TheatreId");

                    b.ToTable("TheatreList");
                });

            modelBuilder.Entity("MovieVerseBackend.Models.UserDetail", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<string>("UserCity")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserEmail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserPassword")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserPhoneNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("UserDetails");
                });

            modelBuilder.Entity("MovieVerseBackend.Models.MovieGenereList", b =>
                {
                    b.HasOne("MovieVerseBackend.Models.GenresList", "GenresList")
                        .WithMany("MovieGenereList")
                        .HasForeignKey("GenreId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("MovieVerseBackend.Models.MovieList", "MovieList")
                        .WithMany("MovieGenereList")
                        .HasForeignKey("MovieId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GenresList");

                    b.Navigation("MovieList");
                });

            modelBuilder.Entity("MovieVerseBackend.Models.MovieTheatreList", b =>
                {
                    b.HasOne("MovieVerseBackend.Models.MovieList", "MovieList")
                        .WithMany("MovieTheatreList")
                        .HasForeignKey("MovieId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("MovieVerseBackend.Models.TheatreList", "TheatreList")
                        .WithMany("MovieTheatreList")
                        .HasForeignKey("TheatreId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("MovieList");

                    b.Navigation("TheatreList");
                });

            modelBuilder.Entity("MovieVerseBackend.Models.ShowTimings", b =>
                {
                    b.HasOne("MovieVerseBackend.Models.MovieTheatreList", "movieTheatreList")
                        .WithMany()
                        .HasForeignKey("MovieTheatreId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("movieTheatreList");
                });

            modelBuilder.Entity("MovieVerseBackend.Models.GenresList", b =>
                {
                    b.Navigation("MovieGenereList");
                });

            modelBuilder.Entity("MovieVerseBackend.Models.MovieList", b =>
                {
                    b.Navigation("MovieGenereList");

                    b.Navigation("MovieTheatreList");
                });

            modelBuilder.Entity("MovieVerseBackend.Models.TheatreList", b =>
                {
                    b.Navigation("MovieTheatreList");
                });
#pragma warning restore 612, 618
        }
    }
}
