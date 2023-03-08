import logo from "img/logo.svg";
import Menu from "components/Sidebar/Menu";
import Playlists from "components/Sidebar/Playlists";
import DownloadApp from "components/Sidebar/DownloadApp";
import { Icon } from "Icons";

function Sidebar() {
  return (
    <div className="w-60 pt-6 flex flex-col">
      <a href="https://open.spotify.com/" className="mb-7 px-6">
        <img src={logo} alt="Spotify" className="h-10" />
      </a>
      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white group-hover:bg-opacity-100 bg-opacity-60 rounded-sm text-black">
                <Icon name="plus" size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 opacity-70 bg-gradient-to-br from-purple-700 to-blue-300 text-white rounded-sm group-hover:bg-opacity-100">
                <Icon name="heart" size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <Playlists />
      <DownloadApp />
    </div>
  );
}

export default Sidebar;
