import React, { useState, useEffect, createContext } from "react";
import SingleShow from "./SingleShow";
import "./Home.css";

export const MovieContext = createContext();

const Home = () => {
  const api = "https://api.tvmaze.com/search/shows?q=all";
  const [data, setData] = useState([]);
  sessionStorage.setItem("username", "yatish");
  sessionStorage.setItem("email", "yatsihpandiri@gmail.com");
  sessionStorage.setItem("phone", "998672567");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${api}`);
      const data = await res.json();
      console.log(data);
      const listofShows = data.map((element) => {
        const { id, name, rating, image, language, summary, premiered } =
          element.show;
        return {
          id,
          name,
          rating: rating?.average || "None",
          summary,
          premiered,
          language,
          image: image?.original || 0,
        };
      });
      setData(listofShows);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="showsList">
      <div className="homeshow">
        {data.map((val, i) => {
          return <SingleShow val={val} id={i} />;
        })}
      </div>
    </div>
  );
};

export default Home;
