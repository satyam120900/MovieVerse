import React, { useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";
import Youtube from "react-youtube";
import "./Movie.css"
import Navbar from "../HomeComponent/NavbarComponent/Navbar.js";
import Footer from "../HomeComponent/FooterComponent/Footer.js";
import { useNavigate, useParams } from 'react-router-dom';
const MovieDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const {id}=useParams();
  const [data,setData]=useState([]);
  const [genre,setGenre]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5041/api/User/GetMovieById/${id}`)
        .then(res=>res.json())
        .then(data=>setData(data));
        fetch(`http://localhost:5041/api/User/GetGenresByMovieId?id=${id}`)
        .then(res=>res.json())
        .then(data=>setGenre(data));
  },[])
  const navigate= useNavigate();
  const handleSubmit = () => {
    navigate(`/theatreList/${id}`);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className='MovieDetail' style={{backgroundImage:`linear-gradient(90deg, rgb(26,26,26) 24.97%, rgb(26,26,26) 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, rgb(26,26,26) 100%),url('${data.moviePoster}')`}}>
      {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
                    <div className="flex items-start justify-between border-b p-2 ">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-white opacity-100  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-white opacity-100  h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                      </button>
                    </div>
                    <>
                      <Youtube
                        videoId={data.movieYoutubeId}
                        className="w-[50vh] h-[50vh] md:w-[100vh] md:h-[60vh]"
                        opts={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </>
                  </div>
                </div>
              </div>
              <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
      <div className='MovieDetailbox' >
        <div className=" lg:w-[30%] h-auto md:h-[400px] w-[70%] ">
          <img className="w-[100%] h-full md:h-auto object-cover rounded-md" src={data.movieImage} alt=""/>
        </div>
        <div className="float-left w-[70%] md:pl-12 ">
            <p className="text-3xl md:text-5xl mb-3 mt-3 md:mt-0">
              {data.movieName}{" "}
            </p>
            <div className="flex flex-row items-center ">
              <div className="flex flex-row justify-center items-center mr-5 pb-2">
                <AiFillStar className="text-3xl mr-2" />
                <h2>{data.movieRating}</h2>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2 h-6">
                  <p className="text-cyan-500 text-sm md:text-base">
                    Released: {String(data.movieReleasedDate).substring(0,10)}
                  </p>
                  <p className="text-cyan-600 text-sm md:text-base">
                    {data.movieDuration} min
                  </p>
                </div>
                <div className="flex auto-cols-max gap-3 mb-2">
                  {genre.map((item)=>
                    <p key={item.genreId}>{item.genreName}</p>
                  )}
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-8">{data.movieDescription} </p>
            <div className="flex flex-row items-center gap-4">
              <button onClick={() => setShowModal(true)} className="border text-[#FFFDE3] text-base border-gray-300 py-2 px-5 flex flex-row items-center hover:bg-cyan-600 hover:border-cyan-600 mb-8 md:mb-0">
                <IoMdPlay className="mr-3" />
                Watch Trailer
              </button>
              <button onClick={handleSubmit} className=" text-[#FFFDE3] text-base bg-red-500  py-2 px-5 flex flex-row items-center hover:bg-cyan-600 mb-8 md:mb-0">
                Book Tickets
              </button>
            </div>
          </div>
      </div>
    </div>
      <Footer></Footer>
    </div>
  )
}

export default MovieDetail
