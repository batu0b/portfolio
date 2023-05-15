import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
export default function Router() {
  return (
    <Routes>
      <Route path="/portfolio" element={<HomePage />} />
      <Route path="/portfolio/about-me" element={<AboutPage />} />
      <Route path="/portfolio/contact" element={<ContactPage />} />
    </Routes>
  );
}
