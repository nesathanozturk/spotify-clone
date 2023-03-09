import { Icon } from "Icons";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "menu-links-active" : "menu-links-inactive"
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
              isActive ? "menu-links-active" : "menu-links-inactive"
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
              isActive ? "menu-links-active" : "menu-links-inactive"
            }
          >
            <span>
              <Icon name="collection" />
            </span>
            Your Library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
