import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import http from "../../utils/http";

const EpisodeDetails = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    http.get(`/episode/${id}`).then((response) => {
      setEpisode(response.data);
    });
  }, []);

  const fetchCharacters = async () => {
    const characterUrls = episode.characters;
    const characterData = [];

    for (const url of characterUrls) {
      const response = await http.get(url);
      characterData.push(response.data);
    }

    setCharacters(characterData);
  };

  useEffect(() => {
    fetchCharacters();
  }, [episode]);

  return (
    <>
      {episode && (
        <>
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
          <h4>Characters on this episode:</h4>
          {characters.map((character) => {
            return (
              <Link to={`/characters/${character.id}`} key={character.id}>
                <div
                  style={{
                    padding: 16,
                    margin: "0 0 16px 0",
                    border: "solid 1px",
                  }}
                >
                  <img
                    src={character.image}
                    height={128}
                    alt="Character photo"
                  />
                  <h3>{character.name}</h3>
                </div>
              </Link>
            );
          })}
        </>
      )}
    </>
  );
};

export default EpisodeDetails;
