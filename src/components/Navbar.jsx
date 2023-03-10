import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import { useMatch } from "react-router-dom";
import Search from "./Navbar/Search";
import { TbSettings } from "react-icons/tb";

function Navbar() {
  const searchRoute = useMatch("/search");

  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
      <Navigation />
      {searchRoute ? (
        <Search />
      ) : (
        <div className="w-full flex justify-end md:hidden">
          <TbSettings size={27} className="mt-4 cursor-pointer" />
        </div>
      )}
      <Auth />
    </nav>
  );
}

export default Navbar;
