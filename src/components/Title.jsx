import { NavLink } from "react-router-dom";

function Title({ title, more = false }) {
  return (
    <header className="flex items-center justify-between mb-4">
      <NavLink to={more ?? "#"}>
        <h3 className="text-2xl text-white font-semibold tracking-tight md:hover:underline">
          {title}
        </h3>
      </NavLink>
      {more && (
        <NavLink
          to={more}
          className={
            "hidden md:block text-xs font-semibold text-link hover:underline tracking-wider"
          }
        >
          Show all
        </NavLink>
      )}
    </header>
  );
}

export default Title;
