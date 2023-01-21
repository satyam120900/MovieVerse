import React from 'react'
import clsx from "clsx";
const Cinema = ({selectedSeats, onSelectedSeatsChange,setFlag,theatre,bookedSeats }) => {
    function handleSelectedState(seat) {
        const isSelected = selectedSeats.includes(seat)
        if (isSelected) {
          onSelectedSeatsChange(
            selectedSeats.filter(selectedSeat => selectedSeat !== seat),
          )
        } else {
          onSelectedSeatsChange([...selectedSeats, seat])
        }
      }
      const seats=Array.from({length:theatre.seats},(_,i)=>i);
      return (
        <div className="Cinema">
          <div className="screen" />
    
          <div className="seats">
            {seats.map(seat => {
              const isSelected = selectedSeats.includes(seat)
              const isOccupied = bookedSeats.includes(seat)
              return (
                <span tabIndex="0" key={seat} className={clsx('seat',isSelected && 'selected',isOccupied && 'occupied',)}
                  onClick={isOccupied ? null : () => {handleSelectedState(seat); setFlag(true);}}
                />
              )
            })}
          </div>
        </div>
      )
}

export default Cinema
