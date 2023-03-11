import { Icon } from "Icons";
import { NavLink } from "react-router-dom";

function MobileBottom() {
  return (
    <div className="w-full md:hidden bg-black rounded-lg md:bg-footer border-t border-white border-opacity-5">
      <nav className="p-3 md:hidden">
        <ul className="flex items-center justify-between">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "mobile-bottom-active" : "mobile-bottom-inactive"
              }
            >
              <span>
                <Icon name="home" />
              </span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "mobile-bottom-active" : "mobile-bottom-inactive"
              }
            >
              <span>
                <Icon name="search" />
              </span>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                isActive ? "mobile-bottom-active" : "mobile-bottom-inactive"
              }
            >
              <span>
                <Icon name="collection" />
              </span>
              Your Library
            </NavLink>
          </li>
          <li>
            <a
              href="https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580"
              className="h-10 flex flex-col items-center gap-y-1 text-xs md:text-sm font-semibold text-link hover:text-white px-4 rounded transition-all whitespace-nowrap"
            >
              <span>
                <Icon name="logo" />
              </span>
              Get App
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileBottom;
