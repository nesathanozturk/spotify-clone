import { Icon } from "Icons";
import { NavLink } from "react-router-dom";

function MobileBottom() {
  return (
    <div className="md:hidden bg-black rounded-lg md:bg-footer border-t border-white border-opacity-5">
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
              to="/"
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "mobile-bottom-active" : "mobile-bottom-inactive"
              }
            >
              <span>
                <Icon name="logo" />
              </span>
              Get App
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileBottom;
