import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import PalmPlantation from "./Page/PalmPlantation";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/palm_plantation" element={<PalmPlantation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
