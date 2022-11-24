import React, { useEffect, useState } from "react";
import HeaderImage from "../HeaderImage/HeaderImage";
import Sports from "../Sports/Sports";
import "./Home.css";

const Home = () => {
  const [sports, setSports] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
      .then((res) => res.json())
      .then((data) => setSports(data.sports));
  }, []);
  return (
    <div className="home_container">
      <HeaderImage />
      <h2 className="text-primary text-center m-3">The Sport As You Like</h2>
      <div className="container ">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {sports.map((sport) => (
            <Sports sport={sport} key={sport.idSport}></Sports>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
