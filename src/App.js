import { useRoutes } from "react-router";
import routes from "./routes";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;
