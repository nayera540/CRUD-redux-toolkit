import { BrowserRouter as Router } from "react-router-dom";
import MainNav from "./MainNav";
import './style.css'
import AppRoutes from "../../routes/AppRoutes";


function Header() {
  return (
    <Router>
      <MainNav />
      <div className="mainContainer">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default Header;
