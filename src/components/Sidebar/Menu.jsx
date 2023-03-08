import { Icon } from "Icons";

function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <a
            href="#"
            className="h-10 flex gap-x-4 items-center text-sm text-white font-semibold text-link hover:text-white px-4 bg-active rounded"
          >
            <span>
              <Icon name="home" />
            </span>
            Ana sayfa
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded"
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded"
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığın
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
