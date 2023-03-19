import { Routes, Route } from "react-router-dom";

import HeaderNavbar from "./components/header";

import "./App.css";
import Characters from "./pages/characters";
import CharacterDetails from "./pages/character-details";
import Episodes from "./pages/episodes";
import EpisodeDetails from "./pages/episode-details";
import Locations from "./pages/locations";
import LocationDetails from "./pages/location-details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderNavbar />}>
        <Route index element={<Characters />} />
        <Route path="characters">
          <Route path=":id" element={<CharacterDetails />} />
        </Route>
        <Route path="episodes">
          <Route index element={<Episodes />} />
          <Route path=":id" element={<EpisodeDetails />} />
        </Route>
        <Route path="locations">
          <Route index element={<Locations />} />
          <Route path=":id" element={<LocationDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
