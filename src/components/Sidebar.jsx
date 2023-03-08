import logo from "img/logo.svg";
import Menu from "components/Sidebar/Menu";

function Sidebar() {
  return (
    <div className="w-60 py-6 flex flex-col">
      <a href="https://open.spotify.com/" className="mb-7 px-6">
        <img src={logo} alt="Spotify" className="h-10" />
      </a>
      <Menu />
    </div>
  );
}

export default Sidebar;
