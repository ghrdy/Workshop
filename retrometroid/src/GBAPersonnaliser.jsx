/* eslint-disable no-unused-vars */
import Image2 from "./assets/GBA/SIDE/GBA-Side-GBA_Button_ClearPink0027-side.png";
import { useState } from "react";
import "./GBAPersonnaliser.css";
import DatabaseCoque, { dataCoque } from "./data/GBA1/SIDE/coque";
import DatabaseDessous, { dataDessous } from "./data/GBA1/SIDE/GBADessous";
import DatabaseEcran, { dataEcran } from "./data/GBA1/SIDE/Ecran";
import DatabaseButon, { dataButton } from "./data/GBA1/SIDE/Button";
import DatatabasePad, { dataPads } from "./data/GBA1/SIDE/PAD";
import DatabaseStrap, { dataStrap } from "./data/GBA1/SIDE/Strap";
import GbaResume from "./components/GbaResume/GbaResume";
import InstructionsForUse from "./components/InstructionsForUse/InstructionsForUse";
function GBAPersonnaliser() {
  const [currentImage, setCurrentImage] = useState(DatabaseCoque[0].image); // Par défaut, on affiche la première image
  const [currentImage1, setCurrentImage1] = useState(DatabaseDessous[0].image);
  const [currentImage2, setCurrentImage2] = useState(DatabaseEcran[0].image);
  const [currentButton, setCurrentButton] = useState(DatabaseButon[0].image);
  const [currentPad, setCurrentPad] = useState(DatatabasePad[0].image);
  const [currentStrap, setCurrentStap] = useState(DatabaseStrap[0].image);
  const [selectedOption, setSelectedOption] = useState("Sans");

  // Prix initial de base et objet pour stocker les prix des items sélectionnés
  const [totalPrice, setTotalPrice] = useState(149);
  const [selectedItems, setSelectedItems] = useState({
    consoleToBuy: false,
    case: 0,
    backCase: 0,
    screen: 0,
    buttons: 0,
    pads: 0,
    gurt: 0,
    specialCase: 0,
    stickers: 0,
    batteryInstall: false,
    ledInstall: false,
    ledTriggerInstall: false,
    dpadInstall: false,
    ampAudio: false,
  });
  console.log([selectedItems]);
  // Fonction pour mettre à jour le prix total en fonction des items sélectionnés
  function updatePrice(category, price) {
    setSelectedItems((prevItems) => {
      const newItems = { ...prevItems, [category]: price };

      // Calcul du prix total
      const newTotalPrice = Object.values(newItems).reduce(
        (acc, itemPrice) => acc + itemPrice,
        149 // Prix de base
      );
      setTotalPrice(newTotalPrice);

      return newItems;
    });
  }

  // Fonction pour gérer le changement de couleur de la coque
  function changeColor(e) {
    const filtred = DatabaseCoque.filter((item) => item.value === e);
    if (filtred[0] !== undefined) {
      setCurrentImage(filtred[0].image);
      updatePrice("coque", 11);
    }
  }

  // Fonction pour gérer le changement du dessous
  function changeDessous(e) {
    const filtred = DatabaseDessous.filter((item) => item.couleur === e);
    if (filtred[0] !== undefined) {
      setCurrentImage1(filtred[0].image);
    }
  }

  // Fonction pour gérer le changement d'écran
  function changeEcran(e) {
    const filtred = DatabaseEcran.filter((item) => item.couleur === e);
    if (filtred[0] !== undefined) {
      setCurrentImage2(filtred[0].image);
    }
  }

  // Fonction pour gérer le changement de bouton
  function changeButton(e) {
    const filtred = DatabaseButon.filter((item) => item.couleur === e);
    if (filtred[0] !== undefined) {
      setCurrentButton(filtred[0].image);
    }
  }

  // Fonction pour gérer le changement de pad
  function changePads(e) {
    const filtred = DatatabasePad.filter((item) => item.couleur === e);
    if (filtred[0] !== undefined) {
      setCurrentPad(filtred[0].image);
    }
  }

  // Fonction pour gérer le changement de strap
  function changeStrap(e) {
    const filtred = DatabaseStrap.filter((item) => item.couleur === e);
    if (filtred[0] !== undefined) {
      setCurrentStap(filtred[0].image);
    }
  }

  // Gestion de la sélection d'édition spéciale
  function selectSpecialEdition(option) {
    let price = 0;
    if (option === "SNES Edition") {
      price = 16.5;
    } else if (option === "Famicom Edition") {
      price = 16.5;
    }

    setSelectedOption(option);
    updatePrice("specialEdition", price);
  }

  // Gestion des accessoires
  function selectConsole(option) {
    let price = 0;
    if (option === "Fourni Pas") {
      price = 40;
    } else if (option === "Fourni") {
      price = 0;
    }
    updatePrice("Fourni Pas", price);
  }
  function selectBatterie(option) {
    let price = 0;
    if (option === "Batterie") {
      price = 40;
    }
    updatePrice("batterie", price);
  }
  function selectLed(option) {
    let price = 0;
    if (option === "LED RGB") {
      price = 50;
    }
    updatePrice("ledRGB", price);
  }
  function selectDPAD(option) {
    let price = 0;
    if (option === "D-Pad") {
      price = 25;
    }
    updatePrice("dPad", price);
  }
  function selectAMP(option) {
    let price = 0;
    if (option === "Amplificateur Audio") {
      price = 25;
    }
    updatePrice("ampAudio", price);
  }
  function selectAcces(option) {
    let price = 0;
    if (option === "Saccoche") {
      price = 12.9;
      updatePrice("Saccoche", price);
    } else {
      if (option === "Verre") {
        price = 4.9;
      }
      updatePrice("Verre", price);
    }
    {
      if (option === "Coque") {
        price = 6.9;
      }
      updatePrice("Coque", price);
    }
  }

  // Rendu de la page
  return (
    <div>
      <nav className="navbar">
        <button>X</button> {/* Tu n'as pas besoin d'utiliser {"X"}, X suffit */}
        <div className="logo">
          <span>RETROMETROID</span>
          <span className="subtitle">Customs Creation</span>
        </div>
        <div className="menu">
          <a href="#">Personnalisation</a>
          <a href="#">PSVita - OLED</a>
          <a href="#">Éditions Limitées</a>
          <a href="#">Accessoires</a>
          <a href="#">Fonds d Écran</a> {/* Corrige les apostrophes */}
        </div>
        <div className="user-cart">
          <a href="#" className="user-icon">
            👤
          </a>
          <a href="#" className="cart-icon">
            🛒
          </a>
        </div>
      </nav>

      <div className="menu-container">
        <img
          src={currentImage}
          className="logo"
          alt="Logo Retrometroid"
          width={400}
          height={400}
        />
        <img src={Image2} className="Overlay" width={400} height={400} alt="" />
        <img
          src={currentImage1}
          className="Overlay"
          width={400}
          height={400}
          alt=""
        />
        <img
          src={currentImage2}
          className="Overlay"
          width={400}
          height={400}
          alt=""
        />
        <img
          src={currentButton}
          className="Overlay"
          width={400}
          height={400}
          alt=""
        />
        <img
          src={currentPad}
          className="Overlay"
          width={400}
          height={400}
          alt=""
        />
        <img
          src={currentStrap}
          className="Overlay"
          width={400}
          height={400}
          alt=""
        />

        <div className="accordion">
          {/* Base Console */}
          <div className="accordion-item">
            <div className="accordion-header">
              BASE CONSOLE <br /> Création à partir d une console que vous
              fournissez
            </div>
            <div className="accordion-body">
              <button id="button" onClick={() => selectConsole("Fourni ")}>
                Je fournis la console
              </button>
              <button
                id="button"
                onClick={() => {
                  selectConsole("Fourni Pas"); // Appelle la fonction pour toute autre logique
                  setSelectedItems((prevState) => ({
                    ...prevState,
                    consoleToBuy: true, // Par exemple, ici, 40€ si la console n'est pas fournie
                  }));
                }}
              >
                Je n ai pas de console à fournir (+40€)
              </button>
            </div>
          </div>

          {/* Coque */}
          <div className="accordion-item">
            <div className="accordion-header">
              COQUE <br /> Comprend avant et arrière
            </div>
            <div className="accordion-body">
              {dataCoque.map((button, index) => (
                <button
                  key={index}
                  className="color-button"
                  style={{ backgroundColor: button.color }}
                  onClick={() => {
                    changeColor(button.label); // Première action
                    setSelectedItems((prevState) => ({
                      ...prevState,
                      case: 1, // Mise à jour de consoleToBuy
                    })); // Deuxième action
                  }}
                ></button>
              ))}
            </div>
          </div>

          {/* Coque Arrière */}
          <div className="accordion-item">
            <div className="accordion-header">
              COQUE ARRIERE <br /> Uniquement si la coque arrière est différente
              de l avant
            </div>
            <div className="accordion-body">
              {dataDessous.map((button, index) => (
                <button
                  key={index}
                  className="color-button"
                  style={{ backgroundColor: button.color }}
                  onClick={() => {
                    changeDessous(button.label); // Première action
                    setSelectedItems((prevState) => ({
                      ...prevState,
                      backCase: 1,
                    }));
                  }}
                ></button>
              ))}
              <button className="custom-button">Sans</button>
            </div>
          </div>

          {/* Ecran */}
          <div className="accordion-item">
            <div className="accordion-header">ECRAN IPS RETROECLAIRE</div>
            <div className="accordion-body">
              {dataEcran.map((button, index) => (
                <button
                  key={index}
                  className="color-button"
                  style={{ backgroundColor: button.color }}
                  onClick={() => {
                    changeEcran(button.label);
                    setSelectedItems((prevState) => ({
                      ...prevState,
                      screen: 1,
                    }));
                  }}
                ></button>
              ))}
            </div>
          </div>

          {/* Boutons */}
          <div className="accordion-item">
            <div className="accordion-header">Boutons</div>
            <div className="accordion-body">
              {dataButton.map((button, index) => (
                <button
                  key={index}
                  className="color-button"
                  style={{ backgroundColor: button.color }}
                  onClick={() => {
                    changeButton(button.label);

                    setSelectedItems((prevState) => ({
                      ...prevState,
                      buttons: 1,
                    }));
                  }}
                ></button>
              ))}
            </div>
          </div>

          {/* PAD */}
          <div className="accordion-item">
            <div className="accordion-header">D-PAD</div>
            <div className="accordion-body">
              {dataPads.map((button, index) => (
                <button
                  key={index}
                  className="color-button"
                  style={{ backgroundColor: button.color }}
                  onClick={() => {
                    changePads(button.label);
                    setSelectedItems((prevState) => ({
                      ...prevState,
                      pads: 1,
                    }));
                  }}
                ></button>
              ))}
            </div>
          </div>

          {/* Strap */}
          <div className="accordion-item">
            <div className="accordion-header">Strap</div>
            <div className="accordion-body">
              {dataStrap.map((button, index) => (
                <button
                  key={index}
                  className="color-button"
                  style={{ backgroundColor: button.color }}
                  onClick={() => {
                    changeStrap(button.label);
                    setSelectedItems((prevState) => ({
                      ...prevState,
                      gurt: 1,
                    }));
                  }}
                ></button>
              ))}
            </div>
          </div>

          {/* Edition spéciale */}
          <div className="accordion-item">
            <div className="accordion-header">Edition spéciale</div>
            <div className="accordion-body">
              <button
                id="button"
                onClick={() => {
                  selectSpecialEdition("SNES Edition");
                  setSelectedItems((prevState) => ({
                    ...prevState,
                    specialCase: 1,
                  }));
                }}
              >
                SNES Edition (+16,50€)
              </button>
              <button
                id="button"
                onClick={() => {
                  selectSpecialEdition("Famicom Edition");
                  setSelectedItems((prevState) => ({
                    ...prevState,
                    specialCase: 1,
                  }));
                }}
              >
                Famicom Edition (+16,50€)
              </button>
              <button id="button" onClick={() => selectSpecialEdition("Sans")}>
                Sans
              </button>
            </div>
          </div>

          {/* Batterie */}
          <div className="accordion-item">
            <div className="accordion-header">Batterie</div>
            <div className="accordion-body">
              <button
                id="button"
                onClick={() => {
                  selectBatterie("Batterie");
                  setSelectedItems((prevState) => ({
                    ...prevState,
                    batteryInstall: true,
                  }));
                }}
              >
                Batterie 2000 mAh (+40€)
              </button>
              <button id="button" onClick={() => selectBatterie("Sans")}>
                Sans
              </button>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">Installation Led RGB</div>
            <div className="accordion-body">
              <button
                id="button"
                onClick={() => {
                  selectLed("LED RGB");
                  setSelectedItems((prevState) => ({
                    ...prevState,
                    ledInstall: 1,
                  }));
                }}
              >
                Led RGB (+ 50€)
              </button>{" "}
              <button id="button" onClick={() => selectLed("Sans")}>
                Sans
              </button>{" "}
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">Installation D-Pad Tactile</div>
            <div className="accordion-body">
              <button
                id="button"
                onClick={() => {
                  selectDPAD("D-Pad");
                  setSelectedItems((prevState) => ({
                    ...prevState,
                    dpadInstall: true,
                  }));
                }}
              >
                D-Pad GBA-SP (+ 25€)
              </button>{" "}
              <button id="button" onClick={() => selectDPAD("Sans")}>
                Sans
              </button>{" "}
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header">Installation AMP Audio</div>
            <div className="accordion-body">
              <button
                id="button"
                onClick={() => {
                  selectAMP("Amplificateur Audio");
                  setSelectedItems((prevState) => ({
                    ...prevState,
                    ampAudio: true,
                  }));
                }}
              >
                AMP Audio (+ 25€)
              </button>{" "}
              <button id="button" onClick={() => selectAMP("Sans")}>
                Sans
              </button>{" "}
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header">ACCESSOIRES</div>
            <div className="accordion-body">
              <button id="button" onClick={() => selectAcces("Saccoche")}>
                Saccoche Retrometroid (+12,90€)
              </button>
              <br />
              <button id="button" onClick={() => selectAcces("Verre")}>
                Verre trempé (+4,90€)
              </button>
              <br />
              <button id="button" onClick={() => selectAcces("Coque ")}>
                Coque silicone (+6,90€)
              </button>
            </div>
          </div>
        </div>

        {/* Paiement */}
        <div className="divPaiement">
          <p id="paiement" className="fw-light">
            Prix total
          </p>
          <h2 id="paiement">{totalPrice}€</h2>

          <p id="paiement">
            Accompte versé (30%) : {(totalPrice * 0.3).toFixed(2)}€
          </p>
          <p id="paiement">Livraison dans 35-40 jours</p>
          <br />
          <button id="boutonPaiement">Ajouter au panier</button>
        </div>
      </div>
      <GbaResume />
      <InstructionsForUse />
    </div>
  );
}

export default GBAPersonnaliser;
