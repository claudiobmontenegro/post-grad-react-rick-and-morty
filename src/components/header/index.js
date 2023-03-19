// Cabeçalho com um menu para a lista de Personagens, Episódios e Localização

import { Link, Outlet } from "react-router-dom";

const HeaderNavbar = () => (
  <>
    <header>
      <nav style={{ maxWidth: 1120, margin: "12px auto" }}>
        <Link to="/">Characters</Link>
        <Link style={{ margin: 20 }} to="episodes">
          Episodes
        </Link>
        <Link to="locations">Locations</Link>
      </nav>
    </header>
    <main style={{ maxWidth: 1120, margin: "12px auto" }}>
      <Outlet />
    </main>
  </>
);

export default HeaderNavbar;
