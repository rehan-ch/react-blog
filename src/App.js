import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <div className="App">
      < TopBar />
      {/* <Home/> */}
      < Settings />
    </div>
  );
}

export default App;
