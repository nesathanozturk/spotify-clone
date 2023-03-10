function Playlists() {
  return (
    <nav className="mx-6 mt-2 py-2 flex flex-auto border-t border-white border-opacity-20 overflow-auto">
      <ul>
        <li>
          <a href="#" className="playlist-item">
            GOAT
          </a>
        </li>
        <li>
          <a href="#" className="playlist-item">
            Arctic Monkeys
          </a>
        </li>
        <li>
          <a href="#" className="playlist-item pt-3 text-link">
            React yazarken dinlenecek şarkılar
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Playlists;
