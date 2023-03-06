/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/pokemon-details/:name"
            element={<PokemonDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
