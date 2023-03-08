import { NavLink } from "react-router-dom";

function Section({ title, more = false, items }) {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight">
          {title}
        </h3>
        {more && (
          <NavLink
            to={more}
            className={
              "text-xs font-semibold uppercase text-link hover:underline"
            }
          >
            See all
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-5">
        {items.map((item) => (
          <NavLink to="/">{item.title}</NavLink>
        ))}
      </div>
    </section>
  );
}

export default Section;
