import { useRoutes } from "react-router";
import routes from "./routes";
import TopBar from "./components/TopBar";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <TopBar />
      {router}
    </>
  );
}

export default App;
