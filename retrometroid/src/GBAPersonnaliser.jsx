import Image2 from "./assets/GBA/SIDE/GBA-Side-GBA_Button_ClearPink0027-side.png";
import { useState } from "react";
import "./GBAPersonnaliser.css";
import DatabaseCoque, { dataCoque } from "./data/GBA1/SIDE/coque";
import DatabaseDessous, { dataDessous } from "./data/GBA1/SIDE/GBADessous";
import DatabaseEcran, { dataEcran } from "./data/GBA1/SIDE/Ecran";
import DatabaseButon, { dataButton } from "./data/GBA1/SIDE/Button";
import DatatabasePad, { dataPads } from "./data/GBA1/SIDE/PAD";
import DatabaseStrap, { dataStrap } from "./data/GBA1/SIDE/Strap";
//////////////////////////////////////////////////////////////////////////////////

function GBAPersonnaliser() {
  // State pour gérer l'image affichée

  const [currentImage, setCurrentImage] = useState(DatabaseCoque[0].image); // Par défaut, on affiche la première image
  const [currentImage1, setCurrentImage1] = useState(DatabaseDessous[0].image);
  const [currentImage2, setCurrentImage2] = useState(DatabaseEcran[0].image);
  const [currentButton, setCurrentButton] = useState(DatabaseButon[0].image);
  const [currentPad, setCurrentPad] = useState(DatatabasePad[0].image);
  const [currentStrap, setCurrentStap] = useState(DatabaseStrap[0].image);
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
    const filtred = DatabaseButon.filter((item) => item.couleur === e);
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

  return (
    <div className="menu-container">
      <img
        src={currentImage}
        className="logo"
        alt="Logo Retrometroid"
        width={400}
        height={400}
      />
      <img src={Image2} className="Overlay" width={400} height={400}></img>
      <img
        src={currentImage1}
        className="Overlay"
        width={400}
        height={400}
      ></img>
      <img
        src={currentImage2}
        className="Overlay"
        width={400}
        height={400}
      ></img>
      <img
        src={currentButton}
        className="Overlay"
        width={400}
        height={400}
      ></img>
      <img src={currentPad} className="Overlay" width={400} height={400}></img>
      <img
        src={currentStrap}
        className="Overlay"
        width={400}
        height={400}
      ></img>

      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-header">
            BASE CONSOLE <br /> Création à partir d une console que vous
            fournissez
          </div>
          <div className="accordion-body">
            <button className="custom-button">Je fournis la console</button>
            <button className="custom-button">
              Je n'ai pas de console à fournir (+40€)
            </button>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header">
            COQUE <br /> Comprend avant et arrière
          </div>{" "}
          {/* Missing closing div added here */}
          <div className="accordion-body">
            {dataCoque.map((button, index) => (
              <button
                key={index}
                className="color-button"
                style={{ backgroundColor: button.color }}
                onClick={() => changeColor(button.label)}
              ></button>
            ))}
          </div>
        </div>

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
                onClick={() => changeDessous(button.label)}
              ></button>
            ))}
            <button className="custom-button">Sans</button>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header">ECRAN IPS RETROECLAIRE</div>
          <div className="accordion-body">
            {dataEcran.map((button, index) => (
              <button
                key={index}
                className="color-button"
                style={{ backgroundColor: button.color }}
                onClick={() => changeEcran(button.label)}
              ></button>
            ))}
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header">Boutons</div>
          <div className="accordion-body">
            {dataButton.map((button, index) => (
              <button
                key={index}
                className="color-button"
                style={{ backgroundColor: button.color }}
                onClick={() => changeButton(button.label)}
              ></button>
            ))}
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header">Pads</div>
          <div className="accordion-body">
            {dataPads.map((button, index) => (
              <button
                key={index}
                className="color-button"
                style={{ backgroundColor: button.color }}
                onClick={() => changePads(button.label)}
              ></button>
            ))}
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header">Strap</div>
          <div className="accordion-body">
            {dataStrap.map((button, index) => (
              <button
                key={index}
                className="color-button"
                style={{ backgroundColor: button.color }}
                onClick={() => changeStrap(button.label)}
              ></button>
            ))}
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header">ACCESSOIRES</div>
          <div className="accordion-body">
            <button className="custom-button">
              Saccoche Retrometroid (+12,90€)
            </button>
            <br />
            <button className="custom-button">Verre trempé (+4,90€)</button>
            <br />
            <button className="custom-button">Coque silicone (+6,90€)</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GBAPersonnaliser;
