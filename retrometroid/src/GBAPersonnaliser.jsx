import './GBAPersonnaliser.css';

import DatabaseCoque, {dataCoque} from "./dataGBA/Side/Coque.js";
import DatabaseDessous, {dataDessous} from "./dataGBA/Side/GBADessous.js";
import DatabaseEcran, {dataEcran} from "./dataGBA/Side/Ecran.js";
import DatabaseButton, {dataButton} from "./dataGBA/Side/Button.js";
import DatatabasePad, {dataPads} from "./dataGBA/Side/PAD.js";
import DatabaseStrap, {dataStrap} from "./dataGBA/Side/Strap.js";

import { useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';

function MenuCustom() {  
    
    const [currentImage, setCurrentImage] = useState(DatabaseCoque[0].image); // Par défaut, on affiche la première image
    const [currentImage1, setCurrentImage1] = useState(DatabaseDessous[0].image);
    const [currentImage2, setCurrentImage2] = useState(DatabaseEcran[0].image);
    const [currentButton, setCurrentButton] = useState(DatabaseButton[0].image);
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

    function activateButton(e) {
        if(e.id == 'bouton1'){
            document.getElementById("bouton1").style.backgroundColor = "#F1EFEF";
        }
      }

  return (
    <div className="menu-container">
        <img src={currentImage} className="logo" alt="Logo Retrometroid" width={650} height={417}/>

        <img src={currentImage1} className="Overlay" width={650} height={417}/>

        <img src={currentImage2} className="Overlay" width={650} height={417}/>

        <img src={currentButton} className="Overlay" width={650} height={417}/>

        <img src={currentPad} className="Overlay" width={650} height={417}/>

        <img src={currentStrap} className="Overlay" width={650} height={417}/>
        
        <div className="divConfig">
            <h2 className="text-center fw-bold">CONFIGURATION</h2><br/>
            <Accordion defaultActiveKey="0" > 

                <Accordion.Item id="item" eventKey="0">
                    <Accordion.Header id="textConfig">
                        <p>BASE CONSOLE <br/> Création à partir d&apos;une console que vous fournissez</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <button onClick={activateButton} className='boutons' id="bouton1" type='button'>Je fournis la console</button>{' '}
                        <button onClick={activateButton} className='boutons' id="bouton2" type='button'>Je n&apos;ai pas de console à fournir (+40€)</button>{' '}                 
                    </Accordion.Body>
                </Accordion.Item>                

                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <p>COQUE <br/> Comprend avant et arrière</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        {dataCoque.map((button, index) => (
                            <button
                                id="boutonCouleurs"
                                key={index}
                                className="color-button"
                                style={{ backgroundColor: button.color, borderRadius: '50%', height: '25px', margin: '1px'}}
                                onClick={() => changeColor(button.label)}
                            ></button>
                            ))}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <p>COQUE ARRIERE <br/> Uniquement si la coque arrière est différente de l&apos;avant</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        {dataDessous.map((button, index) => (
                            <button
                                id="boutonCouleurs"
                                key={index}
                                className="color-button"
                                style={{ backgroundColor: button.color, borderRadius: '50%', height: '25px', margin: '1px'}}
                                onClick={() => changeDessous(button.label)}
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
                                style={{ backgroundColor: button.color, borderRadius: '50%', height: '25px', margin: '1px'}}
                                onClick={() => changeEcran(button.label)}
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
                                style={{ backgroundColor: button.color, borderRadius: '50%', height: '25px', margin: '1px'}}
                                onClick={() => changeButton(button.label)}
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
                                style={{ backgroundColor: button.color, borderRadius: '50%', height: '25px', margin: '1px'}}
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
                                style={{ backgroundColor: button.color, borderRadius: '50%', height: '25px', margin: '1px'}}
                                onClick={() => changeStrap(button.label)}
                            ></button>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                    <Accordion.Header>
                        <p>COQUE SPECIAL EDITION</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>SNES Edition (+ 16,50€)</button>{' '}
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Famicom Edition (+ 16,50€)</button>{' '}
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Sans</button>{' '}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                    <Accordion.Header>
                        <p>STICKERS*</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Image id="black" title="HOLO NOIR" className="m-1" width="20" height="20" src="./public/couleursStickers/NOIR.png" roundedCircle />
                        <Image title="HOLO BLANC" className="m-1" width="20" height="20" src="./public/couleursStickers/BLANC.png" roundedCircle />
                        <Image title="STICKERS PERSONNALISES + 20,00€" className="m-1" width="20" height="20" src="./public/couleursStickers/PERSONNALISE.png" roundedCircle />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                    <Accordion.Header>
                        <p>INSTALLATION BATTERIE <br/> Pose d&apos;une batterie rechargeable - 1800 mAh</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Batterie + Câble USB-C (+ 40€)</button>{' '}
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Sans</button>{' '}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                    <Accordion.Header>
                        <p>INSTALLATION LED RGB <br/> Nécessite des boutons en Clear ou coque en Clear</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Led RGB (+ 50€)</button>{' '}
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Sans</button>{' '}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                    <Accordion.Header>
                        <p>INSTALLATION LED TRIGGER <br/> Lumière qui s&apos;enclenche à chaque appui sur L/R - Nécessite des boutons en Clear</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Image title="TRIGGER ROUGE + 18,00€" className="m-1" width="20" height="20" src="./public/couleursTrigger/TRIGGER_ROUGE.png" roundedCircle />
                        <Image title="TRIGGER BLEU + 18,00€" className="m-1" width="20" height="20" src="./public/couleursTrigger/TRIGGER_BLEU.png" roundedCircle />
                        <Image title="TRIGGER VERT + 18,00€" className="m-1" width="20" height="20" src="./public/couleursTrigger/TRIGGER_VERT.png" roundedCircle />
                        <Image title="TRIGGER VIOLET + 18,00€" className="m-1" width="20" height="20" src="./public/couleursTrigger/TRIGGER_VIOLET.png" roundedCircle />
                        <Image title="TRIGGER ROSE + 18,00€" className="m-1" width="20" height="20" src="./public/couleursTrigger/TRIGGER_ROSE.png" roundedCircle />
                        <Image title="TRIGGER ORANGE + 18,00€" className="m-1" width="20" height="20" src="./public/couleursTrigger/TRIGGER_ORANGE.png" roundedCircle />
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Sans</button>{' '}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                    <Accordion.Header>
                        <p>INSTALLATION D-PAD TACTILE <br/> Installation de boutons tactiles identiques à ceux de la GBA-SP</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>D-Pad GBA-SP (+ 25€)</button>{' '}
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Sans</button>{' '}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                    <Accordion.Header>
                        <p>INSTALLATION AMP AUDIO <br/> Amplifie le son à 200%</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Audio Amp (+ 25€)</button>{' '}
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Sans</button>{' '}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                    <Accordion.Header>
                        <p>ACCESSOIRES</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Saccoche Retrometroid (+ 12,90€)</button>{' '}<br/>
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Verre trempé (+ 4,90€)</button>{' '}<br/>
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Coque silicone (+ 6,90€)</button>{' '}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

        <div className="divPaiement">
            <h2 id="paiement">€</h2>
            <p id="paiement" className="fw-light">Prix total</p>

            <p id="paiement">Accompte versé (30%) : €</p>
            <p id="paiement">Livraison dans 35-40 jours</p>
<br/>
            <button className='boutons' id="boutonPaiement" type='submit'>Ajouter au panier</button>{' '}
        </div>
    </div>
  );
}
export default MenuCustom;