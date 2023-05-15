import "./App.css";
import Router from "./Router";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <>
      <div className="h-full overflow-x-hidden  ">
        <NavBar />
        <Router />
      </div>
    </>
  );
}

export default App;
