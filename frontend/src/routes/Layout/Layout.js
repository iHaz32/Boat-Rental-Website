import { Outlet } from "react-router-dom";
import Navbar from "../Helpers/Navbar/Navbar";
import Footer from "../Helpers/Footer/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="flex-1 bg-slate-200">
        <Outlet />
      </main>
      <footer>
       <Footer />
      </footer>
    </div>
  )
};

export default Layout;