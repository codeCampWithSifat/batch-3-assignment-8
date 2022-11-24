import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Sports = ({ sport }) => {
  const { strSportThumb, strFormat, strSport, idSport } = sport;
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/sport/${id}`);
  };
  return (
    <div class="col">
      <div class="card">
        <img src={strSportThumb} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{strFormat}</h5>
          <p class="card-text">Catagory : {strSport}</p>
        </div>
        <button
          onClick={() => handleNavigate(idSport)}
          className="btn btn-info"
        >
          More Info <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Sports;
