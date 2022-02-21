import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import WeddingDetail from "./pages/WeddingDetail";
import AllPhoto from "./pages/AllPhoto";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";
import Info from "./pages/Info";
import Karya from "./pages/Karya";

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="wedding/:id" element={<WeddingDetail />} />
          <Route path="photograf" element={<AllPhoto />} />
          <Route path="tentang" element={<TentangKami />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="karya" element={<Karya />} />
          <Route path="info" element={<Info />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

function MainLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
