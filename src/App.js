import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import Favorites from "./pages/Favorites/Favorites";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="catalog" element={<CatalogPage/>}/>
            <Route path="favorites" element={<Favorites/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
