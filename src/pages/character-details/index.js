import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import http from "../../utils/http";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    http.get(`/character/${id}`).then((response) => {
      setCharacter(response.data);
    });
  }, []);

  const fetchEpisodes = async () => {
    const episodeUrls = character.episode;
    const episodeData = [];

    for (const url of episodeUrls) {
      const response = await http.get(url);
      episodeData.push(response.data);
    }

    setEpisodes(episodeData);
  };

  useEffect(() => {
    fetchEpisodes();
  }, [character]);

  return (
    <>
      {character && (
        <>
          <div
            style={{
              padding: 16,
              margin: "0 0 16px 0",
              border: "solid 1px",
            }}
          >
            <div>
              <img src={character.image} alt="Character photo" />
              <h3>{character.name}</h3>
            </div>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.location.name}</p>
          </div>

          <h4>Appear on episodes:</h4>
          {episodes.map((episode) => (
            <Link to={`/episodes/${episode.id}`} key={episode.id}>
              <div
                style={{
                  padding: 8,
                  margin: "0 0 16px 0",
                  border: "solid 1px",
                }}
              >
                <p>{episode.name}</p>
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default CharacterDetails;
