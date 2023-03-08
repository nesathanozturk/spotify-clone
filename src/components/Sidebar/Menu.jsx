function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm text-white font-semibold text-link hover:text-white px-4 bg-active rounded"
          >
            Anasayfa
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded"
          >
            Ara
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded"
          >
            Kitaplığın
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
