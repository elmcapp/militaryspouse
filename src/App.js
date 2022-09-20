import SiteBreadcrumbs from "./components/Breadcrumbs";
import TopHeaderBar from "./components/TopHeaderBar";
import TopMenuBar from "./components/TopMenuBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <TopHeaderBar />
      <TopMenuBar />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Layout />} />
          <Route path="dashboard" element={<Layout />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Layout />} />
        </Route>
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
