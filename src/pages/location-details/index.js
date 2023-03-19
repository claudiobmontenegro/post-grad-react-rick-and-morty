import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import http from "../../utils/http";

const LocationDetails = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    http.get(`/location/${id}`).then((response) => {
      setLocation(response.data);
    });
  }, []);

  const fetchResidents = async () => {
    const residentUrls = location.residents;
    const residentData = [];

    for (const url of residentUrls) {
      const response = await http.get(url);
      residentData.push(response.data);
    }

    setResidents(residentData);
  };

  useEffect(() => {
    fetchResidents();
  }, [location]);

  return (
    <>
      {location && (
        <>
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
          <h4>Residents of this location:</h4>
          {residents.map((resident) => {
            return (
              <Link to={`/characters/${resident.id}`} key={resident.id}>
                <div
                  style={{
                    padding: 16,
                    margin: "0 0 16px 0",
                    border: "solid 1px",
                  }}
                >
                  <img
                    src={resident.image}
                    height={128}
                    alt="Character photo"
                  />
                  <h3>{resident.name}</h3>
                </div>
              </Link>
            );
          })}
        </>
      )}
    </>
  );
};

export default LocationDetails;
