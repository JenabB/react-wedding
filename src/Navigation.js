import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import WeddingDetail from "./pages/WeddingDetail";
import AllPhoto from "./pages/AllPhoto";

export default function Navigation() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="wedding/:id" element={<WeddingDetail />} />
          <Route path="photograf" element={<AllPhoto />} />
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
