import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "components/views/Home";
import Search from "components/views/Search";
import Collection from "components/views/Collection";

function Content() {
  return (
    <div className="flex flex-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </div>
  );
}

export default Content;
