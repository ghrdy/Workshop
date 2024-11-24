import "./App.css";
import GameboyList from "./components/GameboyList"; // Path to your GameboyList component
import CarousselSlide from "./components/CarousselSlide";

function Navbar() {
  return (
    <nav className="navbar">
      <button> {"X"}</button>
      <div className="logo">
        <span>RETROMETROID</span>
        <span className="subtitle">Customs Creation</span>
      </div>

      <div className="menu">
        <button className="link-button">Personnalisation</button>
        <button className="link-button">PSVita - OLED</button>
        <button className="link-button">Éditions Limitées</button>
        <button className="link-button">Accessoires</button>
        <button className="link-button">Fonds d Écran</button>
      </div>

      <div className="user-cart">
        <button className="user-icon" aria-label="User Icon">
          👤
        </button>
        <button className="cart-icon" aria-label="Cart Icon">
          🛒
        </button>
      </div>
    </nav>
  );
}

function Livraison() {
  return <div className="livraison">Livraison offerte à partir de 140€</div>;
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
          <a href="/mentions-legales">MENTIONS LÉGALES</a>
          <a href="/conditions-generales-de-vente">
            CONDITIONS GÉNÉRALES DE VENTE
          </a>
          <a href="/politique-de-confidentialite">
            POLITIQUE DE CONFIDENTIALITÉ
          </a>
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

function App() {
  return (
    <>
      <Navbar />
      <Livraison />
      <Caroussel />
      <Bandeau />
      <CadrePhoto />
      <Footer />
    </>
  );
}

export default App;