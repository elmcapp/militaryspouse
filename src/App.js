// import SiteBreadcrumbs from "./components/Breadcrumbs";
import TopHeaderBar from "./components/TopHeaderBar";
import TopMenuBar from "./components/TopMenuBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import WizardPage from "./pages/wizard";
import { California } from "./pages/documentResults/rn/California";
import { Alaska } from "./pages/documentResults/rn/Alaska";

function App() {
  return (
    <div>
      <TopHeaderBar />
      <TopMenuBar />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/start" element={<WizardPage />} />
        <Route path="/california" element={<California />} />
        <Route path="/alaska" element={<Alaska />} />
      </Routes>
    </div>
  );
}

export default App;

const Layout = () => {
  <div>
    <h2>Home</h2>
  </div>;
};
