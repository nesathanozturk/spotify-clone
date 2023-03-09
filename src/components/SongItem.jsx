import { NavLink } from "react-router-dom";
import { Icon } from "Icons";

function SongItem({ item }) {
  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";

      case "podcast":
        return "rounded-xl";

      default:
        return "rounded";
    }
  };

  return (
    <NavLink
      key={item.id}
      to="/"
      className={"bg-footer p-4 rounded hover:bg-active group"}
    >
      <div className="pt-[100%] relative mb-4">
        <img
          src={item.image}
          alt={item.title}
          className={`absolute inset-0 object-cover w-full h-full ${imageStyle(
            item
          )}`}
        />
        <button className="hidden w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 group-hover:flex group-focus:flex items-center justify-center">
          <Icon name="play" size={16} />
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {item.title}
      </h6>
      <p className="line-clamp-2 text-link text-sm mt-2">{item.description}</p>
    </NavLink>
  );
}

export default SongItem;
