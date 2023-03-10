import { Icon } from "Icons";
import { useAudio, useFullscreen, useToggle } from "react-use";
import { secondsToTime } from "utils";
import CustomRange from "../CustomRange";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying, setSidebar } from "stores/player";
import FullScreenPlayer from "../FullScreenPlayer";

function MobilePlayer() {
  const fsRef = useRef();
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fsRef, show, {
    onClose: () => toggle(false),
  });

  const dispatch = useDispatch();
  const { current, sidebar } = useSelector((state) => state.player);

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "volumeMuted";
    if (state.volume > 0 && state.volume < 0.33) return "volumeLow";
    if (state.volume >= 0.33 && state.volume < 0.66) return "volumeNormal";
    return "volumeFull";
  }, [state.volume, state.muted]);

  return (
    <div className="bg-footer mx-1 p-2 w-full flex md:hidden justify-end items-center h-full rounded-xl">
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              <div className="w-12 h-12 mr-3 relative group flex-shrink-0 p-2">
                <img src={current.image} alt={current.title} />
                <button
                  onClick={() => dispatch(setSidebar(true))}
                  className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] rotate-90 rounded-full absolute top-1 right-1 flex items-center justify-center"
                >
                  <Icon size={16} name="arrowLeft" />
                </button>
              </div>
              <div>
                <h6 className="text-sm line-clamp-1">{current.title}</h6>
                <p className="text-[0.688rem] text-white text-opacity-70">
                  {current.artist}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 px-3">
            <button className="player-button">
              <Icon size={30} name="heart" />
            </button>
            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]"
            >
              <Icon size={20} name={state?.playing ? "pause" : "play"} />
            </button>
          </div>
        </div>
      </div>
      {audio}
    </div>
  );
}

export default MobilePlayer;
