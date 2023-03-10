import MobileBottom from "./BottomBar/MobileBottom";

function MobileBottomBar() {
  return (
    <div className="md:hidden bg-black rounded-lg md:bg-footer border-t border-white border-opacity-5">
      <MobileBottom />
    </div>
  );
}

export default MobileBottomBar;
