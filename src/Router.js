import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { routes } from "./routes";
import { Detail } from "./pages/Detail";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default Router;
