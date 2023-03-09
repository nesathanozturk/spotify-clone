function Playlists() {
  return (
    <nav className="mx-6 mt-2 py-2 flex flex-auto border-t border-white border-opacity-20 overflow-auto">
      <ul>
        <li>
          <a
            href="#"
            className="text-s text-link hover:text-white flex h-8 items-center"
          >
            GOAT
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-s text-link hover:text-white flex h-8 items-center"
          >
            Arctic Monkeys
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-s text-link hover:text-white flex h-8 items-center"
          >
            KALEO
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Playlists;
