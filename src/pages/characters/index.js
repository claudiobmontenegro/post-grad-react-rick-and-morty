import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../utils/http";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    http.get("/character").then((response) => {
      setCharacters(response.data["results"]);
    });
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {characters.map((character) => (
        <Link to={`characters/${character.id}`} key={character.id}>
          <div
            style={{
              padding: 16,
              margin: "0 0 16px 0",
              border: "solid 1px",
            }}
          >
            <div>
              <img src={character.image} height={256} alt="Character photo" />
              <h3>{character.name}</h3>
            </div>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.location.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Characters;
