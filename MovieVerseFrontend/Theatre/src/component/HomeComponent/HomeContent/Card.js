import React from 'react'
import "./Card.css";
const Card = ({movie}) => {
    const handleSubmit=()=>
    {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          };
          fetch("http://localhost:5041/api/Theatre/DeleteMovieByMovieIdTheatreId?MovieId="+movie.movieId+"&TheatreId="+localStorage.getItem('theatreId'),requestOptions)
            .then(res=>res.json())
            .then(data=>{
              alert(data.msg);
              window.location.reload();
            });
    }

    return (
        <div>
            <div className="movieRow">
                <div className="movieRow--listarea">
                    <div className="movieRow--list" >
                        <div className="movieRow--item">
                            <img src={movie.movieImage} alt={movie.movieName} />
                        </div>
                    </div>
                    <button className="btn btn-danger" onClick={handleSubmit}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Card
