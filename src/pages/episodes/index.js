import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../utils/http";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    http.get("/episode").then((response) => {
      setEpisodes(response.data["results"]);
    });
  }, []);

  return (
    <div>
      <h1>Episodes</h1>
      {episodes.map((episode) => (
        <Link to={`/episodes/${episode.id}`} key={episode.id}>
          <div
            style={{
              padding: 16,
              margin: "0 0 16px 0",
              border: "solid 1px",
            }}
          >
            <h3>{episode.name}</h3>
            <p>{episode.air_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Episodes;
