import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Layouts/Header/Header";
import TopHeader from "./components/Layouts/Header/TopHeader";
import Footer from "./components/Layouts/Footer/Footer";

// Lazy-loaded components should be wrapped in Suspense
const ContactUs = React.lazy(() => import("./components/Pages/Contact/ContactUs"));
const Service = React.lazy(() => import("./components/Pages/Service/Service"));
const About = React.lazy(() => import("./components/Pages/AboutUs/About"));
const Industry = React.lazy(() => import("./components/Pages/Industry/Industry"));
const Home = React.lazy(() => import("./components/Pages/Home/Home"));
const Landing = React.lazy(() => import("./components/Landing/Landing"));

const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooterRoutes = ["/web-design-development-company"];

  return (
    <>
      {!hideHeaderFooterRoutes.includes(location.pathname) && (
        <>
          <TopHeader />
          <Header />
        </>
      )}

      {/* Wrap lazy-loaded components inside Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/web-design-development-company" element={<Landing />} />
        </Routes>
      </Suspense>

      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
