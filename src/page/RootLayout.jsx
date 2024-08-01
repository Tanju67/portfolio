import { Outlet } from "react-router-dom";
import Navigation from "../shared/navigation/Navigation";
import Footer from "../shared/footer/Footer";

function RootLayout() {
  return (
    <div className="rootLayout">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
