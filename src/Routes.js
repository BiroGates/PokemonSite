import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/home";
import PokemonProfile from "./pages/pokemonProfile";


export default function Path() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/profile" element={<PokemonProfile />}></Route>
            </Routes>
        </BrowserRouter>
    )
};