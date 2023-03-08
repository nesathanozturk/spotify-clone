import Sidebar from "components/Sidebar";
import Content from "components/Content";
import BottomBar from "components/BottomBar";

function App() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </>
  );
}

export default App;
