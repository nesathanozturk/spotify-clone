import Sidebar from "components/Sidebar";
import Content from "components/Content";
import BottomBar from "components/BottomBar";
import MobileBottomBar from "components/MobileBottomBar";
import MobilePlayer from "components/BottomBar/MobilePlayer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
      <MobilePlayer />
      <MobileBottomBar />
    </>
  );
}

export default App;
