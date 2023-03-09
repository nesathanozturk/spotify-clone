import logo from "img/logo.svg";
import Menu from "components/Sidebar/Menu";
import Playlists from "components/Sidebar/Playlists";
import DownloadApp from "components/Sidebar/DownloadApp";
import { Icon } from "Icons";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";

function Sidebar() {
  const sidebar = useSelector((state) => state.player.sidebar);

  return (
    <div className="w-60 pt-6 flex flex-shrink-0 flex-col">
      <a href="https://open.spotify.com/" className="mb-7 px-6">
        <img src={logo} alt="Spotify" className="h-10" />
      </a>
      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a href="#" className="sidebar-links group">
              <span className="sidebar-span bg-white group-hover:bg-opacity-100 bg-opacity-60 text-black">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a href="#" className="sidebar-links group">
              <span className="sidebar-span bg-gradient-to-br from-purple-700 text-white to-blue-300 opacity-70 group-hover:opacity-100">
                <Icon name="heart" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <Playlists />
      <DownloadApp />
      {sidebar && <SidebarCover />}
    </div>
  );
}

export default Sidebar;
