import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
