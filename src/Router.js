import { HashRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Version from "./pages/Version";
import DogResult from "./pages/DogResult";
import Cat from "./pages/Cat";
import Dog from "./pages/Dog";
import CatResult from "./pages/CatResult";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/version" element={<Version />}></Route>
        <Route path="/cat" element={<Cat />}></Route>
        <Route path="/dog" element={<Dog />}></Route>
        <Route path="/dogresult" element={<DogResult />}></Route>
        <Route path="/catresult" element={<CatResult />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
