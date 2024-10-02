import "./App.css";
import GameboyList from "./components/GameboyList";
import CarousselSlide from "./components/CarousselSlide";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import GBApersonnaliser from "./GBApersonnaliser"; // Page Personnalisation

// Composants de ta page
function Navbar() {
  return (
    <nav className="navbar">
      <button> {"X"}</button>
      <div className="logo">
        <span>RETROMETROID</span>
        <span className="subtitle">Customs Creation</span>
      </div>

      <div className="menu">
        <Link to="/">Accueil</Link>
        <Link to="/personnalisation">Personnalisation</Link>
        <Link to="/psvita-oled">PSVita - OLED</Link>
        <Link to="/editions-limitees">Éditions Limitées</Link>
        <Link to="/accessoires">Accessoires</Link>
        <Link to="/fonds-ecran">Fonds d Écran</Link>
      </div>

      <div className="user-cart">
        <Link to="/user" className="user-icon">
          👤
        </Link>
        <Link to="/cart" className="cart-icon">
          🛒
        </Link>
      </div>
    </nav>
  );
}

function Livraison() {
  return <div className="livraison">Livraison offerte à partir de 140€</div>;
}

function HomePage() {
  return (
    <>
      <Livraison />
      <CarousselSlide />
      <section className="bandeau">
        <Bandeau />
      </section>
      <section className="CadrePhoto">
        <GameboyList />
      </section>
    </>
  );
}

function Bandeau() {
  return (
    <section className="bandeau">
      Construit ta propre console <span>CUSTOMISATION</span>
    </section>
  );
}

function CadrePhoto() {
  return (
    <section className="CadrePhoto">
      <GameboyList />
    </section>
  );
}

function Caroussel() {
  return (
    <div className="caroussel">
      <CarousselSlide />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>TOUS DROITS RÉSERVÉS - RETROMETROID 2024</p>
          <div className="footer-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="path_to_instagram_icon" alt="Instagram" />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="path_to_tiktok_icon" alt="TikTok" />
            </a>
            <a href="mailto:someone@example.com">
              <img src="path_to_email_icon" alt="Email" />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <Link to="/mentions-legales">MENTIONS LÉGALES</Link>
          <Link to="/conditions-generales-de-vente">
            CONDITIONS GÉNÉRALES DE VENTE
          </Link>
          <Link to="/politique-de-confidentialite">
            POLITIQUE DE CONFIDENTIALITÉ
          </Link>
        </div>
      </div>
      <div className="scroll-up">
        <a href="#top">
          <span>&#8593;</span> {/* Up arrow */}
        </a>
      </div>
    </footer>
  );
}

// Fonction App principale
function App() {
  const location = useLocation(); // Utiliser useLocation pour vérifier la route active

  const isPersonnalisationPage = location.pathname === "/personnalisation"; // Détecter la route de personnalisation

  return (
    <>
      {!isPersonnalisationPage && <Navbar />}{" "}
      {/* N'afficher la Navbar que si on n'est pas sur la page de personnalisation */}
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        {/* Route de la page d'accueil */}
        <Route path="/personnalisation" element={<GBApersonnaliser />} />{" "}
        {/* Route pour Personnalisation */}
      </Routes>
      {!isPersonnalisationPage && <Footer />}{" "}
      {/* N'afficher le Footer que si on n'est pas sur la page de personnalisation */}
    </>
  );
}

export default App;
