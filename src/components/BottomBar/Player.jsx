import { Icon } from "Icons";

function Player() {
  return (
    <div className="flex px-4 justify-between items-center h-full">
      <div className="mix-w-[11.25rem] w-[30%]">sol</div>
      <div className="flex flex-col items-center">
        <div className="flex gap-x-2 items-center">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="shuffle" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerPrev" size={16} />
          </button>
          <button className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]">
            <Icon name="play" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="playerNext" size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name="repeat" size={16} />
          </button>
        </div>
        <div>alt</div>
      </div>
      <div className="mix-w-[11.25rem] w-[30%] flex justify-end">sağ</div>
    </div>
  );
}

export default Player;
