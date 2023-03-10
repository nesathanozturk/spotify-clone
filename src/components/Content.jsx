import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "components/views/Home";
import Search from "components/views/Search";

function Content() {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </main>
  );
}

export default Content;
