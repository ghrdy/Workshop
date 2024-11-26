/* eslint-disable react/react-in-jsx-scope */
import "./GBAPersonnaliser.css";
import DatabaseCoque, { dataCoque } from "../dataGBA/Side/Coque.js";
import DatabaseDessous, { dataDessous } from "../dataGBA/Side/GBADessous.js";
import DatabaseEcran, { dataEcran } from "../dataGBA/Side/Ecran.js";
import DatabaseButton, { dataButton } from "../dataGBA/Side/Button.js";
import DatabasePad, { dataPads } from "../dataGBA/Side/PAD.js";
import DatabaseStrap, { dataStrap } from "../dataGBA/Side/Strap.js";
import { useState } from "react";

import Image from "react-bootstrap/Image";

const handleAccessoryChange = (accessory) => {
  // Ajouter ou retirer l'accessoire sélectionné
  setCustomOptions((prevOptions) => {
    const accessories = [...prevOptions.accessories];
    if (accessories.includes(accessory)) {
      // Supprime l'accessoire si déjà sélectionné
      return {
        ...prevOptions,
        accessories: accessories.filter((a) => a !== accessory),
      };
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
    if (data.product?.finalPrice) {
      window.location.href = await sendProductToWooCommerce(data.product);
    }
  } catch (error) {
    console.error("Erreur:", error);
  }
};

const MenuCustom = () => {
  const [currentImage, setCurrentImage] = useState(DatabaseCoque[0].image); // Par défaut, on affiche la première image
  const [currentImage1, setCurrentImage1] = useState(DatabaseDessous[0].image);
  const [currentImage2, setCurrentImage2] = useState(DatabaseEcran[0].image);
  const [currentButton, setCurrentButton] = useState(DatabaseButton[0].image);
  const [currentPad, setCurrentPad] = useState(DatabasePad[0].image);
  const [currentStrap, setCurrentStrap] = useState(DatabaseStrap[0].image);
  const [totalPrice, setTotalPrice] = useState(149);
  const [isOpen, setIsOpen] = useState(false);
  const [dessousOpen, setDessousOpen] = useState(false);
  const [coqueOpen, setCoqueOpen] = useState(false);
  const [strapOpen, setStrapOpen] = useState(false);
  const [padsOpen, setPadsOpen] = useState(false);
  const [ecranOpen, setEcranOpen] = useState(false);
  const [buttonOpen, setButtonOpen] = useState(false);
  const [batterieOpen, setBatterieOpen] = useState(false);
  const [stickersOpen, setStickersOpen] = useState(false);
  const [ledRgbOpen, setLedRgbOpen] = useState(false);
  const [ledTriggerOpen, setLedTriggerOpen] = useState(false);
  const [specialEditionOpen, setSpecialEditionOpen] = useState(false);
  const [accesOpen, setAccesOpen] = useState(false);
  const [ampOpen, setAmpOpen] = useState(false);
  const [dpadOpen, setDpadOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
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
    const filtred = DatabasePad.filter((item) => item.couleur === e);
    if (filtred[0] !== undefined) setCurrentPad(filtred[0].image);
  }
  function changeStrap(e) {
    const filtred = DatabaseStrap.filter((item) => item.couleur === e);
    if (filtred[0] !== undefined) setCurrentStrap(filtred[0].image);
  }

  function selectSpecialEdition(option) {
    let price = 0;
    if (option === "SNES Edition" || option === "Famicom Edition") {
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
  }

  return (
    <div className="page ">
      <nav className="navbar">
        <div className="logo">
          <span>RETROMETROID</span>
          <br />
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
          <button className="user-icon" aria-label="User">
            👤
          </button>
          <button className="cart-icon" aria-label="Cart">
            🛒
          </button>
        </div>
      </nav>
      <div className="menu-container">
        <img
          src={currentImage}
          className="baseImage"
          alt="Logo Retrometroid"
          width={650}
          height={417}
        />

        <img src={currentImage1} className="Overlay" width={650} height={417} alt="" />
        <img src={currentImage2} className="Overlay" width={650} height={417} alt="" />
        <img src={currentButton} className="Overlay" width={650} height={417} alt="" />
        <img src={currentPad} className="Overlay" width={650} height={417} alt="" />
        <img src={currentStrap} className="Overlay" width={650} height={417} alt="" />

        <div className="divConfig  sm:p-6 lg:p-8">
          <div className="mx-auto p-4 sm:p-6 lg:p-8">
            <h2 className="text-center font-bold text-lg">CONFIGURATION</h2>
            <br />
            <div className="border border-gray-300 rounded mb-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setIsOpen(!isOpen);
                  }
                }}
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  isOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
                aria-expanded={isOpen}
              >
                <p className="text-sm md:text-base font-medium">
                  BASE CONSOLE (+ 40,00€)
                  <br /> Création à partir d'une console que vous fournissez
                  <span
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {isOpen ? "▲" : "▼"}
                  </span>
                </p>
              </button>
              {isOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b">
                  <button
                    onClick={() => selectConsole("Fourni")}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full mb-2"
                    type="button"
                  >
                    Je fournis la console
                  </button>
                  <button
                    onClick={() => {
                      selectConsole("Fourni Pas");
                      setSelectedItems((prevState) => ({
                        ...prevState,
                        consoleToBuy: true,
                      }));
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition w-full"
                    type="button"
                  >
                    Je n ai pas de console à fournir (+40€)
                  </button>
                </div>
              )}
            </div>

            {/* Coque */}
            <div className="border border-gray-300 rounded mb-2">
              <button
                onClick={() => setCoqueOpen(!coqueOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setCoqueOpen(!coqueOpen);
                  }
                }}
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  coqueOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">
                  COQUE <br /> Comprend avant et arrière
                </p>
                <span
                  className={`transform transition-transform duration-300 ${
                    coqueOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {coqueOpen ? "▲" : "▼"}
                </span>
              </button>
              {coqueOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b">
                  <div className="flex flex-wrap">
                    {dataCoque.map((button, index) => (
                      <button
                        id="boutonCouleurs"
                        key={button.label}
                        className="color-button m-1"
                        style={{
                          backgroundColor: button.color,
                          borderRadius: "130%",
                          height: "25px",
                          width: "25px", // Ajoute une largeur pour le rendre circulaire
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
                  </div>
                </div>
              )}
            </div>

            {/* Coque Arrière */}
            <div className="border border-gray-300 rounded mb-2">
              <button
                onClick={() => setDessousOpen(!dessousOpen)}
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  dessousOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">
                  COQUE ARRIERE (+ 11,90€)
                  <br /> Uniquement si la coque arrière est différente de
                  l&apos;avant
                </p>
                <span
                  className={`transform transition-transform duration-300 ${
                    dessousOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {dessousOpen ? "▲" : "▼"}
                </span>
              </button>
              {dessousOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b">
                  <div className="flex flex-wrap">
                    {dataDessous.map((button, index) => (
                      <button
                        id="boutonCouleurs"
                        key={button.label}
                        className="color-button m-1"
                        style={{
                          backgroundColor: button.color,
                          borderRadius: "50%",
                          height: "25px",
                          width: "25px", // Ajoute une largeur pour le rendre circulaire
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
                  </div>
                </div>
              )}
            </div>
            <div className="border border-gray-300 rounded mb-2">
              <button
                onClick={() => setEcranOpen(!ecranOpen)}
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  ecranOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">
                  ECRAN IPS RETROECLAIRE
                </p>
                <span
                  className={`transform transition-transform duration-300 ${
                    ecranOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {ecranOpen ? "▲" : "▼"}
                </span>
              </button>
              {ecranOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b">
                  <div className="flex flex-wrap">
                    {dataEcran.map((button, index) => (
                      <button
                        id="boutonCouleurs"
                        key={button.label}
                        className="color-button m-1"
                        style={{
                          backgroundColor: button.color,
                          borderRadius: "50%",
                          height: "25px",
                          width: "25px", // Ajoute une largeur pour le rendre circulaire
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
                  </div>
                </div>
              )}
            </div>

            {/* Boutons */}
            <div className="border border-gray-300 rounded mb-2">
              <button
                onClick={() => setButtonOpen(!buttonOpen)}
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  buttonOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">BOUTONS</p>
                <span
                  className={`transform transition-transform duration-300 ${
                    buttonOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {buttonOpen ? "▲" : "▼"}
                </span>
              </button>
              {buttonOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b">
                  <div className="flex flex-wrap">
                    {dataButton.map((button, index) => (
                      <button
                        id="boutonCouleurs"
                        key={button.label}
                        className="color-button m-1"
                        style={{
                          backgroundColor: button.color,
                          borderRadius: "50%",
                          height: "25px",
                          width: "25px", // Ajoute une largeur pour le rendre circulaire
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
                  </div>
                </div>
              )}
            </div>

            {/* Pads */}
            <div className="border border-gray-300 rounded mb-2">
              <button
                onClick={() => setPadsOpen(!padsOpen)}
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  padsOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">PADS</p>
                <span
                  className={`transform transition-transform duration-300 ${
                    padsOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {padsOpen ? "▲" : "▼"}
                </span>
              </button>
              {padsOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b">
                  <div className="flex flex-wrap">
                    {dataPads.map((button, index) => (
                      <button
                        id="boutonCouleurs"
                        key={button.label}
                        className="color-button m-1"
                        style={{
                          backgroundColor: button.color,
                          borderRadius: "50%",
                          height: "25px",
                          width: "25px", // Ajoute une largeur pour le rendre circulaire
                        }}
                        onClick={() => changePads(button.label)}
                      ></button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Lanière */}
            <div className="border border-gray-300 rounded mb-2">
              <button
                onClick={() => setStrapOpen(!strapOpen)}
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  strapOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">LANIERE</p>
                <span
                  className={`transform transition-transform duration-300 ${
                    strapOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {strapOpen ? "▲" : "▼"}
                </span>
              </button>
              {strapOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b">
                  <div className="flex flex-wrap">
                    {dataStrap.map((button, index) => (
                      <button
                        id="boutonCouleurs"
                        key={button.label}
                        className="color-button m-1"
                        style={{
                          backgroundColor: button.color,
                          borderRadius: "50%",
                          height: "25px",
                          width: "25px", // Ajoute une largeur pour le rendre circulaire
                        }}
                        onClick={() => changeStrap(button.label)}
                      ></button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="border border-gray-300 rounded mb-2">
              <button
                onClick={() => setSpecialEditionOpen(!specialEditionOpen)}
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  specialEditionOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">
                  COQUE SPECIAL EDITION (+ 16,90€)
                </p>
                <span
                  className={`transform transition-transform duration-300 ${
                    specialEditionOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {specialEditionOpen ? "▲" : "▼"}
                </span>
              </button>
              {specialEditionOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b flex flex-col">
                  <button
                    className="boutons mb-2"
                    onClick={() => selectSpecialEdition("SNES Edition")}
                  >
                    SNES Edition (+16,50€)
                  </button>
                  <button
                    className="boutons mb-2"
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
                </div>
              )}
            </div>

            {/* Stickers */}
            <div className="border border-gray-300 rounded mb-2">
              <button
                onClick={() => setStickersOpen(!stickersOpen)}
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  stickersOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">
                  STICKERS* (+ 20,00€)
                </p>
                <span
                  className={`transform transition-transform duration-300 ${
                    stickersOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {stickersOpen ? "▲" : "▼"}
                </span>
              </button>
              {stickersOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b flex flex-wrap">
                  <Image
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
                </div>
              )}
            </div>

            {/* Installation Batterie */}
            <div className="border border-gray-300 rounded mb-2">
              <button
                onClick={() => setBatterieOpen(!batterieOpen)}
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  batterieOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">
                  INSTALLATION BATTERIE (+ 40,00€)
                </p>
                <span
                  className={`transform transition-transform duration-300 ${
                    batterieOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {batterieOpen ? "▲" : "▼"}
                </span>
              </button>
              {batterieOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b flex flex-col">
                  <button
                    className="boutons mb-2"
                    onClick={() => selectBatterie("Batterie")}
                  >
                    Batterie 2000 mAh (+40€)
                  </button>
                  <button
                    className="boutons"
                    onClick={() => selectBatterie("Sans")}
                  >
                    Sans
                  </button>
                </div>
              )}
            </div>

            {/* Installation LED RGB */}
            <div className="border border-gray-300 rounded mb-2">
              <button
                onClick={() => setLedRgbOpen(!ledRgbOpen)}
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  ledRgbOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">
                  INSTALLATION LED RGB (+ 50,00€)
                </p>
                <span
                  className={`transform transition-transform duration-300 ${
                    ledRgbOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {ledRgbOpen ? "▲" : "▼"}
                </span>
              </button>
              {ledRgbOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b flex flex-col">
                  <button
                    className="boutons mb-2"
                    onClick={() => selectLed("LED RGB")}
                  >
                    Led RGB (+ 50€)
                  </button>
                  <button className="boutons" onClick={() => selectLed("Sans")}>
                    Sans
                  </button>
                </div>
              )}
            </div>

            {/* Installation LED Trigger */}
            <div className="border border-gray-300 rounded mb-2">
              <button
                onClick={() => setLedTriggerOpen(!ledTriggerOpen)}
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  ledTriggerOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">
                  INSTALLATION LED TRIGGER (+ 18,00€)
                </p>
                <span
                  className={`transform transition-transform duration-300 ${
                    ledTriggerOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {ledTriggerOpen ? "▲" : "▼"}
                </span>
              </button>
              {ledTriggerOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b flex flex-wrap">
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
                  <button className="boutons mt-2" type="button">
                    Sans
                  </button>
                </div>
              )}
            </div>
            <div className="border border-gray-300 rounded mb-2">
              {/* INSTALLATION D-PAD TACTILE */}
              <button
                onClick={() => setDpadOpen(!dpadOpen)} // Utiliser un état pour gérer l'ouverture
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  dpadOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">
                  INSTALLATION D-PAD TACTILE (+ 25,00€)
                  <br /> Installation de boutons tactiles identiques à ceux de
                  la GBA-SP
                </p>
                <span
                  className={`transform transition-transform duration-300 ${
                    dpadOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {dpadOpen ? "▲" : "▼"}
                </span>
              </button>
              {dpadOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b flex flex-col space-y-2">
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
                  </button>
                  <button
                    className="boutons"
                    onClick={() => selectDPAD("Sans")}
                  >
                    Sans
                  </button>
                </div>
              )}

              {/* INSTALLATION AMP AUDIO */}
              <button
                onClick={() => setAmpOpen(!ampOpen)} // Utiliser un état pour gérer l'ouverture
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  ampOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">
                  INSTALLATION AMP AUDIO (+ 25,00€)
                  <br /> Amplifie le son à 200%
                </p>
                <span
                  className={`transform transition-transform duration-300 ${
                    ampOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {ampOpen ? "▲" : "▼"}
                </span>
              </button>
              {ampOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b flex flex-col space-y-2">
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
                  </button>
                  <button className="boutons" onClick={() => selectAMP("Sans")}>
                    Sans
                  </button>
                </div>
              )}

              {/* ACCESSOIRES */}
              <button
                onClick={() => setAccesOpen(!accesOpen)} // Utiliser un état pour gérer l'ouverture
                className={`cursor-pointer p-4 rounded-t flex justify-between items-center transition-all duration-300 ${
                  accesOpen ? "bg-blue-200 shadow-lg" : "bg-gray-200"
                }`}
              >
                <p className="text-sm md:text-base font-medium">
                  ACCESSOIRES (à partir de 4,90€)
                </p>
                <span
                  className={`transform transition-transform duration-300 ${
                    accesOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {accesOpen ? "▲" : "▼"}
                </span>
              </button>
              {accesOpen && (
                <div className="p-4 bg-white border-t border-gray-300 rounded-b flex flex-col space-y-2">
                  <button
                    className="boutons"
                    onClick={() => selectAcces("Saccoche")}
                  >
                    Saccoche Retrometroid (+12,90€)
                  </button>
                  <button
                    className="boutons"
                    onClick={() => selectAcces("Verre")}
                  >
                    Verre trempé (+4,90€)
                  </button>
                  <button className="boutons">Coque silicone (+6,90€)</button>
                </div>
              )}
            </div>

            <div className="divPaiement h-width-[400px]">
              <h2 id="paiement">{totalPrice} €</h2>
              <p id="paiement" className="fw-light">
                Prix total
              </p>
              <p id="paiement">
                Accompte versé (30%) : {(totalPrice * 0.3).toFixed(2)} €
              </p>
              <p id="paiement">Livraison dans 35-40 jours</p>
              <br />
              <button className="boutons" id="boutonPaiement" type="submit">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCustom;
