import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router";
import Sport from "./components/Sport/Sport";
import NotFound from "./components/NotFound/NotFound";
import HeaderImage from "./components/HeaderImage/HeaderImage";

function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sport/:sportId" element={<Sport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
