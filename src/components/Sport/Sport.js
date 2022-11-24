import React from "react";
import { useParams } from "react-router-dom";
import image3 from "../../images/sifat3.jpg";
import "./Sport.css";
import SportDescription from "./SportDescription";
import SocialLink from "./SocialLink";
import image from "../../images/sifat.jpg"

const Sport = () => {
  const { sportId } = useParams();

  return (
    <div className="sport_container">
      <img src={image3} className="img-fluid w-100" alt="..."></img>
      <div className="container p-5">
        <div className="d-flex justify-content-evenly mb-4 event_container">
            <div>
                <p>Sports Name : EventSport {sportId} </p>
                <p>Type : {sportId ? "men" : "women"} </p>
                <p>Catagory : ESports </p>
                <p><small>Status : Sports</small></p>
            </div>
            <div>
                {sportId && <img src={image} alt="" />}
            </div>
        </div>
        <SportDescription />
      </div>

      <div className="container text-center mt-5  ">
        <SocialLink />
        <footer className="mt-2">
            <p><small>All Right Reserved || sayedhossainsifat100@gmail.com</small></p>
        </footer>
      </div>
    </div>
  );
};

export default Sport;
