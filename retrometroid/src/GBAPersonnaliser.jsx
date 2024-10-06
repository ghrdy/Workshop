import "./GBAPersonnaliser.css";

import DatabaseCoque, { dataCoque } from "./dataGBA/Side/Coque.js";
import DatabaseDessous, { dataDessous } from "./dataGBA/Side/GBADessous.js";
import DatabaseEcran, { dataEcran } from "./dataGBA/Side/Ecran.js";
import DatabaseButton, { dataButton } from "./dataGBA/Side/Button.js";
import DatatabasePad, { dataPads } from "./dataGBA/Side/PAD.js";
import DatabaseStrap, { dataStrap } from "./dataGBA/Side/Strap.js";
import { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";

const handleAccessoryChange = (accessory) => {
    // Ajouter ou retirer l'accessoire sélectionné
    setCustomOptions((prevOptions) => {
      const accessories = [...prevOptions.accessories];
      if (accessories.includes(accessory)) {
        // Supprime l'accessoire si déjà sélectionné
        return { ...prevOptions, accessories: accessories.filter((a) => a !== accessory) };
      } else {
        // Ajoute l'accessoire
        return { ...prevOptions, accessories: [...accessories, accessory] };
      }
    });
  };

const handleOptionChange = (option) => {
    setCustomOptions((prevOptions) => ({
      ...prevOptions,
      case: option, 
    }));
  };

const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: productName,
          customOptions: customOptions,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi des données au backend.");
      }

      const data = await response.json();
      console.log("Réponse du serveur:", data);

      // Si tu veux rediriger vers l'URL du produit ajouté au panier
      if (data.product && data.product.finalPrice) {
        window.location.href = await sendProductToWooCommerce(data.product);
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

function MenuCustom() {
  const [currentImage, setCurrentImage] = useState(DatabaseCoque[0].image); // Par défaut, on affiche la première image
  const [currentImage1, setCurrentImage1] = useState(DatabaseDessous[0].image);
  const [currentImage2, setCurrentImage2] = useState(DatabaseEcran[0].image);
  const [currentButton, setCurrentButton] = useState(DatabaseButton[0].image);
  const [currentPad, setCurrentPad] = useState(DatatabasePad[0].image);
  const [currentStrap, setCurrentStap] = useState(DatabaseStrap[0].image);
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
  function changeDessous(e) {
    const filtred = DatabaseDessous.filter((item) => item.couleur === e);
    console.log(filtred);
    if (filtred[0] !== undefined) setCurrentImage1(filtred[0].image);
  }

  function changeEcran(e) {
    const filtred = DatabaseEcran.filter((item) => item.couleur === e);
    console.log(filtred);
    if (filtred[0] !== undefined) setCurrentImage2(filtred[0].image);
  }

  function changeColor(e) {
    console.log(e);
    const filtred = DatabaseCoque.filter((item) => item.value === e);
    console.log(filtred);
    if (filtred[0] !== undefined) setCurrentImage(filtred[0].image);
  }

  function changeButton(e) {
    const filtred = DatabaseButton.filter((item) => item.couleur === e);
    if (filtred[0] !== undefined) setCurrentButton(filtred[0].image);
  }

  function changePads(e) {
    const filtred = DatatabasePad.filter((item) => item.couleur === e);
    if (filtred[0] !== undefined) setCurrentPad(filtred[0].image);
  }
  function changeStrap(e) {
    const filtred = DatabaseStrap.filter((item) => item.couleur === e);
    if (filtred[0] !== undefined) setCurrentStap(filtred[0].image);
  }

  function selectSpecialEdition(option) {
    let price = 0;
    if (option === "SNES Edition") {
      price = 16.5;
    } else if (option === "Famicom Edition") {
      price = 16.5;
    }

    updatePrice("specialEdition", price);
  }
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
    if (option === "Sacoche") {
      price = 12.9;
      updatePrice("Sacoche", price);
    } else if (option === "Verre") {
      price = 4.9;
      updatePrice("Verre", price);
    } else if (option === "coqueSilicone"){
      price = 6.9;
      updatePrice("coqueSilicone", price);
    }
  }

  return (
    <div className="page">
      <nav className="navbar">
        <div className="logo">
          <a href="#">
            <img className="imgLogo" src="../../../public/logo-RM-2024-1.png" alt="logo de Retrometroid"/>
          </a>
        </div>

        <div className="menu">
          <ul>
            <li className="listePersonnalisation">
              <a className="aPersonnalisation" href="#">
                <span>PERSONNALISATION</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="user-cart">
          <a href="#" className="iconPersonnalisation">👤</a>
          <a href="#" className="iconPersonnalisation">🛒</a>
        </div>
      </nav>

      <div className="menu-container">
        <img src={currentImage} className="baseImage" alt="Logo Retrometroid" width={650} height={417}/>

        <img src={currentImage1} className="Overlay" width={650} height={417} />

        <img src={currentImage2} className="Overlay" width={650} height={417} />

        <img src={currentButton} className="Overlay" width={650} height={417} />

        <img src={currentPad} className="Overlay" width={650} height={417} />

        <img src={currentStrap} className="Overlay" width={650} height={417} />

        <div className="divConfig">
          <h2 className="text-center fw-bold">CONFIGURATION</h2>
          <br/>
          <Accordion defaultActiveKey="0">
            <Accordion.Item id="item" eventKey="0">
              <Accordion.Header id="textConfig">
                <p>BASE CONSOLE (+ 40,00€)<br /> Création à partir d&apos;une console que vous fournissez</p>
              </Accordion.Header>
              <Accordion.Body>
                <button
                  onClick={() => {selectConsole("Fourni ")}}
                  className="boutons"
                  type="button"
                  aria-pressed="true"
                >Je fournis la console</button>{" "}
                
                <button 
                    onClick={() => {selectConsole("Fourni Pas"); setSelectedItems((prevState) => ({...prevState, consoleToBuy: true,}));}}
                    className="boutons"
                    type="button"
                >Je n&apos;ai pas de console à fournir (+40€)</button>{" "}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <p>COQUE <br /> Comprend avant et arrière</p>
              </Accordion.Header>
              <Accordion.Body>
                {dataCoque.map((button, index) => (
                  <button
                    id="boutonCouleurs"
                    key={index}
                    className="color-button"
                    style={{
                      backgroundColor: button.color,
                      borderRadius: "50%",
                      height: "25px",
                      margin: "1px",
                    }}
                    onClick={() => {
                      selectConsole("Fourni pas");
                      changeColor(button.label); // Première action
                      setSelectedItems((prevState) => ({
                        ...prevState,
                        case: 1, // Mise à jour de consoleToBuy
                      })); // Deuxième action
                    }}
                  ></button>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <p>COQUE ARRIERE (+ 11,90€)<br /> Uniquement si la coque arrière est différente de l&apos;avant</p>
              </Accordion.Header>
              <Accordion.Body>
                {dataDessous.map((button, index) => (
                  <button
                    id="boutonCouleurs"
                    key={index}
                    className="color-button"
                    style={{
                      backgroundColor: button.color,
                      borderRadius: "50%",
                      height: "25px",
                      margin: "1px",
                    }}
                    onClick={() => {
                      changeDessous(button.label); // Première action
                      setSelectedItems((prevState) => ({
                        ...prevState,
                        backCase: 1,
                      }));
                    }}
                  ></button>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <p>ECRAN IPS RETROECLAIRE</p>
              </Accordion.Header>
              <Accordion.Body>
                {dataEcran.map((button, index) => (
                  <button
                    id="boutonCouleurs"
                    key={index}
                    className="color-button"
                    style={{
                      backgroundColor: button.color,
                      borderRadius: "50%",
                      height: "25px",
                      margin: "1px",
                    }}
                    onClick={() => {
                      changeEcran(button.label);
                      setSelectedItems((prevState) => ({
                        ...prevState,
                        screen: 1,
                      }));
                    }}
                  ></button>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <p>BOUTONS</p>
              </Accordion.Header>
              <Accordion.Body>
                {dataButton.map((button, index) => (
                  <button
                    id="boutonCouleurs"
                    key={index}
                    className="color-button"
                    style={{
                      backgroundColor: button.color,
                      borderRadius: "50%",
                      height: "25px",
                      margin: "1px",
                    }}
                    onClick={() => {
                      changeButton(button.label);
                      setSelectedItems((prevState) => ({
                        ...prevState,
                        pads: 1,
                      }));
                    }}
                  ></button>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <p>PADS</p>
              </Accordion.Header>
              <Accordion.Body>
                {dataPads.map((button, index) => (
                  <button
                    id="boutonCouleurs"
                    key={index}
                    className="color-button"
                    style={{
                      backgroundColor: button.color,
                      borderRadius: "50%",
                      height: "25px",
                      margin: "1px",
                    }}
                    onClick={() => changePads(button.label)}
                  ></button>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <p>LANIERE</p>
              </Accordion.Header>
              <Accordion.Body>
                {dataStrap.map((button, index) => (
                  <button
                    id="boutonCouleurs"
                    key={index}
                    className="color-button"
                    style={{
                      backgroundColor: button.color,
                      borderRadius: "50%",
                      height: "25px",
                      margin: "1px",
                    }}
                    onClick={() => changeStrap(button.label)}
                  ></button>
                ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <p>COQUE SPECIAL EDITION (+ 16,50€)</p>
              </Accordion.Header>
              <Accordion.Body>
                <button
                  className="boutons"
                  onClick={() => selectSpecialEdition("SNES Edition")}
                >
                  SNES Edition (+16,50€)
                </button>
                <button
                  className="boutons"
                  onClick={() => selectSpecialEdition("Famicom Edition")}
                >
                  Famicom Edition (+16,50€)
                </button>
                <button
                  className="boutons"
                  onClick={() => selectSpecialEdition("Sans")}
                >
                  Sans
                </button>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <p>STICKERS* (+ 20,00€)</p>
              </Accordion.Header>
              <Accordion.Body>
                <Image
                  id="black"
                  title="HOLO NOIR"
                  className="m-1"
                  width="20"
                  height="20"
                  src="./public/couleursStickers/NOIR.png"
                  roundedCircle
                />
                <Image
                  title="HOLO BLANC"
                  className="m-1"
                  width="20"
                  height="20"
                  src="./public/couleursStickers/BLANC.png"
                  roundedCircle
                />
                <Image
                  title="STICKERS PERSONNALISES + 20,00€"
                  className="m-1"
                  width="20"
                  height="20"
                  src="./public/couleursStickers/PERSONNALISE.png"
                  roundedCircle
                />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>
                <p>INSTALLATION BATTERIE (+ 40,00€)<br /> Pose d&apos;une batterie rechargeable - 1800 mAh</p>
              </Accordion.Header>
              <Accordion.Body>
                <button className="boutons" onClick={() => selectBatterie("Batterie")}>
                  Batterie 2000 mAh (+40€)
                </button>
                <button className="boutons" onClick={() => selectBatterie("Sans")}>
                  Sans
                </button>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="10">
              <Accordion.Header>
                <p>INSTALLATION LED RGB (+ 50,00€)<br /> Nécessite des boutons en Clear ou coque en Clear</p>
              </Accordion.Header>
              <Accordion.Body>
                <button className="boutons" onClick={() => selectLed("LED RGB")}>Led RGB (+ 50€)</button>{" "}
                <button className="boutons" onClick={() => selectLed("Sans")}>Sans</button>{" "}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="11">
              <Accordion.Header>
                <p>INSTALLATION LED TRIGGER (+ 18,00€)<br /> Lumière qui s&apos;enclenche à chaque appui sur L/R - Nécessite des boutons en Clear</p>
              </Accordion.Header>
              <Accordion.Body>
                <Image
                  title="TRIGGER ROUGE + 18,00€"
                  className="m-1"
                  width="20"
                  height="20"
                  src="./public/couleursTrigger/TRIGGER_ROUGE.png"
                  roundedCircle
                />
                <Image
                  title="TRIGGER BLEU + 18,00€"
                  className="m-1"
                  width="20"
                  height="20"
                  src="./public/couleursTrigger/TRIGGER_BLEU.png"
                  roundedCircle
                />
                <Image
                  title="TRIGGER VERT + 18,00€"
                  className="m-1"
                  width="20"
                  height="20"
                  src="./public/couleursTrigger/TRIGGER_VERT.png"
                  roundedCircle
                />
                <Image
                  title="TRIGGER VIOLET + 18,00€"
                  className="m-1"
                  width="20"
                  height="20"
                  src="./public/couleursTrigger/TRIGGER_VIOLET.png"
                  roundedCircle
                />
                <Image
                  title="TRIGGER ROSE + 18,00€"
                  className="m-1"
                  width="20"
                  height="20"
                  src="./public/couleursTrigger/TRIGGER_ROSE.png"
                  roundedCircle
                />
                <Image
                  title="TRIGGER ORANGE + 18,00€"
                  className="m-1"
                  width="20"
                  height="20"
                  src="./public/couleursTrigger/TRIGGER_ORANGE.png"
                  roundedCircle
                />
                <button className="boutons" type="button">Sans</button>{" "}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="12">
              <Accordion.Header>
                <p>
                  INSTALLATION D-PAD TACTILE (+ 25,00€)<br /> Installation de boutons
                  tactiles identiques à ceux de la GBA-SP
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <button
                  className="boutons"
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
                <button className="boutons" onClick={() => selectDPAD("Sans")}>Sans</button>{" "}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="13">
              <Accordion.Header>
                <p>
                  INSTALLATION AMP AUDIO (+ 25,00€)<br /> Amplifie le son à 200%
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <button
                  className="boutons"
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
                <button className="boutons" onClick={() => selectAMP("Sans")}>
                  Sans
                </button>{" "}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="14">
              <Accordion.Header>
                <p>ACCESSOIRES (à partir de 4,90€)</p>
              </Accordion.Header>
              <Accordion.Body>
                <button className="boutons" onClick={() => selectAcces("Sacoche")}>
                  Sacoche Retrometroid (+12,90€)
                </button>
                <br />
                <button className="boutons" onClick={() => selectAcces("Verre")}>
                  Verre trempé (+4,90€)
                </button>
                <br />
                <button className="boutons" onClick={() => selectAcces("coqueSilicone")}>
                  Coque silicone (+6,90€)
                </button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="divPaiement">
            <h2 id="paiement">{totalPrice} €</h2>
            <p id="paiement" className="fw-light">Prix total</p>
            
            <p id="paiement">Accompte versé (30%) : {(totalPrice*0.3).toFixed(2)} €</p>
            <p id="paiement">Livraison dans 35-40 jours</p>
            <br />
            <button className="boutons" id="boutonPaiement" type="submit">
                Ajouter au panier
            </button>{" "}
        </div>
      </div>

      <footer className="footer">
        <p>TOUS DROITS RÉSERVÉS - RETROMETROID 2024</p>
        {/*<div className="footer-content">
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
            <span>&#8593;</span> 
          </a>
        </div>*/}
      </footer>
    </div>
  );
}
export default MenuCustom;