import NormalPlayer from "./BottomBar/NormalPlayer";

function BottomBar() {
  return (
    <div className="h-24 bg-black rounded-lg md:bg-footer border-t border-white border-opacity-5">
      <NormalPlayer />
    </div>
  );
}

export default BottomBar;
