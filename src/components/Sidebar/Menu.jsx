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
              isActive
                ? "bg-active text-white h-10 flex gap-x-4 items-center text-sm font-semibold hover:text-white px-4 rounded"
                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded"
            }
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "bg-active text-white h-10 flex gap-x-4 items-center text-sm font-semibold hover:text-white px-4 rounded"
                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded"
            }
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "bg-active text-white h-10 flex gap-x-4 items-center text-sm font-semibold hover:text-white px-4 rounded"
                : "h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded"
            }
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
