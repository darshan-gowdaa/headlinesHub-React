import { Link } from "react-router-dom";
import logos from "../assets/logos.png";

function Navbar() {
  return (
    <nav className="navbar custom-navbar navbar-expand-lg mb-4 sticky-top" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logos} alt="Logo" className="navbar-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            {["Technology", "Business", "Sports", "Entertainment", "Science", "Health"].map((name, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link" to={`/${name.toLowerCase()}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;