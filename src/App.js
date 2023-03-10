import Sidebar from "components/Sidebar";
import Content from "components/Content";
import BottomBar from "components/BottomBar";
import MobileBottom from "components/BottomBar/MobileBottom";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
      <MobileBottom />
    </>
  );
}

export default App;
