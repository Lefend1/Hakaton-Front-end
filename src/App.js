import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import VacanciesPage from "./pages/Vacancies/VacanciesPage";
import HeatMapPage from "./pages/HeatMap/HeatMapPage";
import NewsPage from "./pages/News/NewsPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/map/:variation/:time" element={<HeatMapPage />} />
      <Route path="/vacancies" element={<VacanciesPage />} />
      <Route path="/news/:tag" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
