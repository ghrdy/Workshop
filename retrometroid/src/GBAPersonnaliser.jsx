import './GBAPersonnaliser.css';

import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';

function MenuCustom() {  
    
    function activateButton(e) {
        if(e.id == 'bouton1'){
            document.getElementById("bouton1").style.backgroundColor = "#F1EFEF";
        }
        
      }

  return (
    <div className="position-relative top-0">
        images console

        <div id="divConfig">
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
                        <Image id="black" title="NOIR" className="m-1" width="20" height="20" src="./public/couleurs/NOIR.png" roundedCircle />
                        <Image title="BLANC" className="m-1" width="20" height="20" src="./public/couleurs/BLANC.png" roundedCircle />
                        <Image title="ROSE" className="m-1" width="20" height="20" src="./public/couleurs/ROSE.png" roundedCircle />
                        <Image title="TURQUOISE" className="m-1" width="20" height="20" src="./public/couleurs/TURQUOISE.png" roundedCircle />
                        <Image title="JAUNE" className="m-1" width="20" height="20" src="./public/couleurs/JAUNE.png" roundedCircle />
                        <Image title="GHOST" className="m-1" width="20" height="20" src="./public/couleurs/GHOST.png" roundedCircle />
                        <Image title="CLEAR VIOLET" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_VIOLET.png" roundedCircle />
                        <Image title="CLEAR ORANGE" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_ORANGE.png" roundedCircle />
                        <Image title="CLEAR NOIR" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_NOIR.png" roundedCircle />
                        <Image title="CLEAR BLEU" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_BLEU.png" roundedCircle />
                        <Image title="CLEAR GLASS" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_GLASS.png" roundedCircle />
                        <Image title="CLEAR VERT" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_VERT.png" roundedCircle />
                        <Image title="CLEAR ROUGE" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_ROUGE.png" roundedCircle />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <p>COQUE ARRIERE <br/> Uniquement si la coque arrière est différente de l&apos;avant</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Image id="black" title="NOIR + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/NOIR.png" roundedCircle />
                        <Image title="BLANC + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/BLANC.png" roundedCircle />
                        <Image title="ROSE + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/ROSE.png" roundedCircle />
                        <Image title="TURQUOISE + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/TURQUOISE.png" roundedCircle />
                        <Image title="JAUNE + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/JAUNE.png" roundedCircle />
                        <Image title="GHOST + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/GHOST.png" roundedCircle />
                        <Image title="CLEAR VIOLET + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_VIOLET.png" roundedCircle />
                        <Image title="CLEAR ORANGE + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_ORANGE.png" roundedCircle />
                        <Image title="CLEAR NOIR + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_NOIR.png" roundedCircle />
                        <Image title="CLEAR BLEU + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_BLEU.png" roundedCircle />
                        <Image title="CLEAR GLASS + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_GLASS.png" roundedCircle />
                        <Image title="CLEAR VERT + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_VERT.png" roundedCircle />
                        <Image title="CLEAR ROUGE + 11,90€" className="m-1" width="20" height="20" src="./public/couleurs/CLEAR_ROUGE.png" roundedCircle />
                        <button onClick={activateButton} className='boutons' id="bouton" type='button'>Sans</button>{' '}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <p>ECRAN IPS RETROECLAIRE</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Image id="black" title="NOIR" className="m-1" width="20" height="20" src="./public/couleurs/NOIR.png" roundedCircle />
                        <Image title="BLANC" className="m-1" width="20" height="20" src="./public/couleurs/BLANC.png" roundedCircle />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <p>BOUTONS</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Image id="black" title="NOIR" className="m-1" width="20" height="20" src="./public/couleursBoutons/NOIR.png" roundedCircle />
                        <Image title="BLANC" className="m-1" width="20" height="20" src="./public/couleursBoutons/BLANC.png" roundedCircle />
                        <Image title="SNES" className="m-1" width="20" height="20" src="./public/couleursBoutons/SNES.png" roundedCircle />
                        <Image title="BLEU" className="m-1" width="20" height="20" src="./public/couleursBoutons/BLEU.png" roundedCircle />
                        <Image title="ORANGE" className="m-1" width="20" height="20" src="./public/couleursBoutons/ORANGE.png" roundedCircle />
                        <Image title="JAUNE" className="m-1" width="20" height="20" src="./public/couleursBoutons/JAUNE.png" roundedCircle />
                        <Image title="VIOLET" className="m-1" width="20" height="20" src="./public/couleursBoutons/VIOLET.png" roundedCircle />
                        <Image title="ROSE" className="m-1" width="20" height="20" src="./public/couleursBoutons/ROSE.png" roundedCircle />
                        <Image title="ROUGE" className="m-1" width="20" height="20" src="./public/couleursBoutons/ROUGE.png" roundedCircle />
                        <Image title="LEMON" className="m-1" width="20" height="20" src="./public/couleursBoutons/LEMON.png" roundedCircle />
                        <Image title="CLEAR NOIR" className="m-1" width="20" height="20" src="./public/couleursBoutons/CLEAR_NOIR.png" roundedCircle />
                        <Image title="CLEAR BLEU" className="m-1" width="20" height="20" src="./public/couleursBoutons/CLEAR_BLEU.png" roundedCircle />
                        <Image title="CLEAR GLASS" className="m-1" width="20" height="20" src="./public/couleursBoutons/CLEAR_GLASS.png" roundedCircle />
                        <Image title="CLEAR VERT" className="m-1" width="20" height="20" src="./public/couleursBoutons/CLEAR_VERT.png" roundedCircle />
                        <Image title="CLEAR ROSE" className="m-1" width="20" height="20" src="./public/couleursBoutons/CLEAR_ROSE.png" roundedCircle />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        <p>PADS</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Image id="black" title="NOIR" className="m-1" width="20" height="20" src="./public/couleursPads/NOIR.png" roundedCircle />
                        <Image title="BLEU CLAIR" className="m-1" width="20" height="20" src="./public/couleursPads/BLEU_CLAIR.png" roundedCircle />
                        <Image title="BLEU" className="m-1" width="20" height="20" src="./public/couleursPads/BLEU.png" roundedCircle />
                        <Image title="VERT" className="m-1" width="20" height="20" src="./public/couleursPads/VERT.png" roundedCircle />
                        <Image title="ORANGE" className="m-1" width="20" height="20" src="./public/couleursPads/ORANGE.png" roundedCircle />
                        <Image title="ROUGE" className="m-1" width="20" height="20" src="./public/couleursPads/ROUGE.png" roundedCircle />
                        <Image title="ROSE" className="m-1" width="20" height="20" src="./public/couleursPads/ROSE.png" roundedCircle />
                        <Image title="BLANC" className="m-1" width="20" height="20" src="./public/couleursPads/BLANC.png" roundedCircle />
                        <Image title="JAUNE" className="m-1" width="20" height="20" src="./public/couleursPads/JAUNE.png" roundedCircle />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        <p>LANIERE</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Image id="black" title="NOIR" className="m-1" width="20" height="20" src="./public/couleursLaniere/NOIR.png" roundedCircle />
                        <Image title="ROSE" className="m-1" width="20" height="20" src="./public/couleursLaniere/ROSE.png" roundedCircle />
                        <Image title="BLANC" className="m-1" width="20" height="20" src="./public/couleursLaniere/BLANC.png" roundedCircle />
                        <Image title="JAUNE" className="m-1" width="20" height="20" src="./public/couleursLaniere/JAUNE.png" roundedCircle />
                        <Image title="VIOLET" className="m-1" width="20" height="20" src="./public/couleursLaniere/VIOLET.png" roundedCircle />
                        <Image title="ORANGE" className="m-1" width="20" height="20" src="./public/couleursLaniere/ORANGE.png" roundedCircle />
                        <Image title="ROUGE" className="m-1" width="20" height="20" src="./public/couleursLaniere/ROUGE.png" roundedCircle />
                        <Image title="BLEU" className="m-1" width="20" height="20" src="./public/couleursLaniere/BLEU.png" roundedCircle />
                        <Image title="VERT" className="m-1" width="20" height="20" src="./public/couleursLaniere/VERT.png" roundedCircle />
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
<br/><br/>
        <div id="divPaiement">
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