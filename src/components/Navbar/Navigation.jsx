import { Icon } from "Icons";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="hidden md:flex items-center gap-x-4">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="navigation-button"
      >
        <Icon name="prev" size={22} />
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="navigation-button"
      >
        <Icon name="next" size={22} />
      </button>
    </nav>
  );
}

export default Navigation;
