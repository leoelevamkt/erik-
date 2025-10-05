import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import GoogleAnalytics from "@/react-app/components/GoogleAnalytics";

export default function App() {
  // Substitua por seu ID de medição do Google Analytics
  // Exemplo: G-XXXXXXXXXX
  const GA_MEASUREMENT_ID = "G-55NBP0G2MP";

  return (
    <Router>
      <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
