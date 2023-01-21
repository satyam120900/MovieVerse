import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import MovieCard from "./MovieCard.js";
import "./Row.css";
const Row = ({ props,rowId,data }) => {
    const slideLeft = () => {
        var slider = document.getElementById('slider'+rowId);
        slider.scrollLeft = slider.scrollLeft - 450;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider'+rowId);
        slider.scrollLeft = slider.scrollLeft + 450;
    };
    return (
        <div style={{width:props?"75vw":"90vw"}}>
            <div className="relative flex items-center ml-2 group">
                <MdChevronLeft
                    className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={30}
                    onClick={slideLeft}
                />
                <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap relative break-words no-scrollbar'>
                    {data.map((item) => {
                        return (
                            <MovieCard item={item} key={item.movieId}></MovieCard>
                        );
                    })}
                </div>
                <MdChevronRight
                    className='bg-white right-0 absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={30}
                    onClick={slideRight}
                />
            </div>
        </div>
    )
}

export default Row
