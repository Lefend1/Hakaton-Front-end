import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import VacanciesPage from "./pages/Vacancies/VacanciesPage";
import HeatMapPage from "./pages/HeatMap/HeatMapPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/map/:variation/:time" element={<HeatMapPage />} />
      <Route path="/vacancies" element={<VacanciesPage />} />
    </Routes>
  );
};

export default App;
