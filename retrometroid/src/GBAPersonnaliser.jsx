//import './GBAPersonnaliser.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function MenuCustom() {   
  return (
    <div className="position-relative top-0 start-100">
        images console
        <Accordion defaultActiveKey="0" className="position-relative top-0 start-50 w-75 p-3"> 
            <div>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>BASE CONSOLE <br/> Création à partir d&apos;une console que vous fournissez</Accordion.Header>
                    <Accordion.Body>
                        <Button variant="outline-dark m-1 rounded-pill">Je fournis la console</Button>{' '}
                        <Button variant="outline-dark m-1 rounded-pill">Je n&apos;ai pas de console à fournir (+40€)</Button>{' '}                 
                    </Accordion.Body>
                </Accordion.Item>                
            </div>
            <div className="item">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>COQUE <br/> Comprend avant et arrière</Accordion.Header>
                    <Accordion.Body>
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                        <Image className="p-1" width="25" height="25" src="./public/couleurs/BLACK.png" roundedCircle />
                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="2">
                    <Accordion.Header>COQUE ARRIERE <br/> Uniquement si la coque arrière est différente de l&apos;avant</Accordion.Header>
                    <Accordion.Body>
                        <Button variant="outline-dark m-1 rounded-pill">Sans</Button>{' '}
                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="3">
                    <Accordion.Header>ECRAN IPS RETROECLAIRE</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="4">
                    <Accordion.Header>BOUTONS</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="5">
                    <Accordion.Header>PADS</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="6">
                    <Accordion.Header>LANIERE</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="7">
                    <Accordion.Header>COQUE SPECIAL EDITION</Accordion.Header>
                    <Accordion.Body>
                        <Button variant="outline-dark m-1 rounded-pill">SNES Edition (+ 16,50€)</Button>{' '}
                        <Button variant="outline-dark m-1 rounded-pill">Famicom Edition (+ 16,50€)</Button>{' '}
                        <Button variant="outline-dark m-1 rounded-pill">Sans</Button>{' '}
                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="8">
                    <Accordion.Header>STICKERS*</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="9">
                    <Accordion.Header>INSTALLATION BATTERIE <br/> Pose d&apos;une batterie rechargeable - 1800 mAh</Accordion.Header>
                    <Accordion.Body>
                        <Button variant="outline-dark m-1 rounded-pill">Batterie + Câble USB-C (+ 40€)</Button>{' '}
                        <Button variant="outline-dark m-1 rounded-pill">Sans</Button>{' '}
                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="10">
                    <Accordion.Header>INSTALLATION LED RGB <br/> Nécessite des boutons en Clear ou coque en Clear</Accordion.Header>
                    <Accordion.Body>
                        <Button variant="outline-dark m-1 rounded-pill">Led RGB (+ 50€)</Button>{' '}
                        <Button variant="outline-dark m-1 rounded-pill">Sans</Button>{' '}
                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="11">
                    <Accordion.Header>INSTALLATION LED TRIGGER <br/> Lumière qui s&apos;enclenche à chaque appui sur L/R - Nécessite des boutons en Clear</Accordion.Header>
                    <Accordion.Body>
                        <Button variant="outline-dark m-1 rounded-pill">Sans</Button>{' '}
                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="12">
                    <Accordion.Header>INSTALLATION D-PAD TACTILE <br/> Installation de boutons tactiles identiques à ceux de la GBA-SP</Accordion.Header>
                    <Accordion.Body>
                        <Button variant="outline-dark m-1 rounded-pill">D-Pad GBA-SP (+ 25€)</Button>{' '}
                        <Button variant="outline-dark m-1 rounded-pill">Sans</Button>{' '}
                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="13">
                    <Accordion.Header>INSTALLATION AMP AUDIO <br/> Amplifie le son à 200%</Accordion.Header>
                    <Accordion.Body>
                        <Button variant="outline-dark m-1 rounded-pill">Audio Amp (+ 25€)</Button>{' '}
                        <Button variant="outline-dark m-1 rounded-pill">Sans</Button>{' '}
                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div className="item">
                <Accordion.Item eventKey="14">
                    <Accordion.Header>ACCESSOIRES</Accordion.Header>
                    <Accordion.Body>
                        <Button variant="outline-dark m-1 rounded-pill">Saccoche Retrometroid (+ 12,90€)</Button>{' '}<br/>
                        <Button variant="outline-dark m-1 rounded-pill">Verre trempé (+ 4,90€)</Button>{' '}<br/>
                        <Button variant="outline-dark m-1 rounded-pill">Coque silicone (+ 6,90€)</Button>{' '}
                    </Accordion.Body>
                </Accordion.Item>
            </div>
        </Accordion>
    </div>
  );
}
export default MenuCustom;