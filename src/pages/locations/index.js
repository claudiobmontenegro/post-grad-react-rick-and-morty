import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../utils/http";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    http.get("/location").then((response) => {
      setLocations(response.data["results"]);
    });
  }, []);

  return (
    <div>
      <h1>Locations</h1>
      {locations.map((location) => (
        <Link to={`/locations/${location.id}`} key={location.id}>
          <div
            style={{
              padding: 16,
              margin: "0 0 16px 0",
              border: "solid 1px",
            }}
          >
            <h3>{location.name}</h3>
            <p>{location.type}</p>
            <p>{location.dimension}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Locations;
