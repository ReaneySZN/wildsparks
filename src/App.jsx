import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import FoodAndAgro from "./Page/FoodAndAgro";
import Exporter from "./Page/Exporter";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/food_and_agro" element={<FoodAndAgro />} />
          <Route path="/exporter" element={<Exporter />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
