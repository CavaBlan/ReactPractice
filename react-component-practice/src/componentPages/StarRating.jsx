import { useState, useEffect } from "react";
import "./star-rating.css"

function StarRating() {
  const [selectedStar, setSelectedStar] = useState(2);
  const [hoverdStar, setHoverdStar] = useState(-1);

  // useEffect(()=>{
  //   console.log(selectedStar);
  // },[selectedStar]);

  function handleClick(index) {
    setSelectedStar(index === selectedStar ? -1 : index);
  }

  function handleMouseEnter(index) {
    setHoverdStar(index);
  }

  function handleMouseLeave() {
    setHoverdStar(-1);
  }

  return (
    <div className="star-rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarRatingBar
          key={i}
          type={i <= Math.max(selectedStar, hoverdStar) ? "full" : "empty"}
          onClick={() => handleClick(i)}
          handleMouseEnter={()=>handleMouseEnter(i)}
          handleMouseLeave={handleMouseLeave}
        />
      ))}
      <div style={{fontSize:"30px"}}>{selectedStar + 1}</div>
    </div>
  );
}

function StarRatingBar({type, onClick, handleMouseEnter, handleMouseLeave}) {
  const i = 1;
  if(type==="empty"){
    return(
      <svg
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        xmlns="http://www.w3.org/2000/svg"
        className="star-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    )
  }else{
    return(
      <svg
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        xmlns="http://www.w3.org/2000/svg"
        className="star-icon star-icon-filled"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    )
  }
}

export default StarRating;