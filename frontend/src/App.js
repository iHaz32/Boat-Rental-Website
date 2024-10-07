import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./routes/Home/Home";
import NoPage from "./routes/NoPage";
import Layout from "./routes/Layout/Layout";
import About from "./routes/About/About";
import Boats from "./routes/Boats/Boats";
import BoatDisplay from "./routes/BoatDisplay/BoatDisplay";
import RentalTerms from "./routes/RentalTerms/RentalTerms";
import PrivacyPolicy from "./routes/PrivacyPolicy/PrivacyPolicy";
import AdminLogin from "./routes/AdminLogin/AdminLogin";
import AdminPage from "./routes/AdminPage/AdminPage";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/boats" element={<Boats />} />
            <Route path="/boats/:slug" element={<BoatDisplay />} />
            <Route path="/rentalterms" element={<RentalTerms />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/t5CMGlu2bMyZM5KyMe6EK160I968Ex4cGH1yqkg73wnBoNFolr7geHFslgVvEmyFqwGnymXdlpsEGKvw1dpucb41inMmtQH1LKqR" element={<AdminLogin />} />
            <Route path="/qJa2nORB6w1VSjWF5G0vbNE1qPAdjtITGX0WyoQjPkFCqTXVhGxqKjCSSeLEuR9rWeYq84Xt9gZXARuNuve1BOYrw5DBk9g0M9Hz" element={<AdminPage />} />
            <Route path="*" element={<NoPage error={"The page you’re looking for doesn’t exist."} />} />
          </Route>
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
