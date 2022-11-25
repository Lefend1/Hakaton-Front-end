import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  );
};

export default App;
