import { Icon } from "Icons";

function DownloadApp() {
  return (
    <a
      href="#"
      className="h-10 px-6 flex-shrink-0 text-sm font-semibold text-link hover:text-white flex items-center gap-x-4 transition-all"
    >
      <Icon name="download" size={20} />
      Install App
    </a>
  );
}

export default DownloadApp;
