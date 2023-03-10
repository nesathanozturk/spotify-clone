import MobileBottom from "./BottomBar/MobileBottom";
import Player from "./BottomBar/Player";

function BottomBar() {
  return (
    <div className="h-16 md:h-24 rounded-lg md:bg-footer border-t border-white border-opacity-5">
      <Player />
      <MobileBottom />
    </div>
  );
}

export default BottomBar;
