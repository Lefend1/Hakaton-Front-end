import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import MapGraph from "./pages/MapGraph";

const App = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/map" element={<MapGraph />} />
    </Routes>
  );
};

export default App;
