//import './GBAPersonnaliser.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function MenuCustom() {   
  return (
    <div className="produit">
        images console
        <Accordion defaultActiveKey="0">  
        <div className="config">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Base console</Accordion.Header>
                <Accordion.Body>
                    <Button variant="outline-light">Je fournis la console</Button>{' '}
                    <Button variant="outline-light">Je n&apos;ai pas de console à fournir (+40€)</Button>{' '}                 
                </Accordion.Body>
            </Accordion.Item>                
        </div>
        <div className="config">
            <Accordion.Item eventKey="1">
                <Accordion.Header>Coque</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="2">
                <Accordion.Header>Coque arrière</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="3">
                <Accordion.Header>Ecran IPS rétroéclairé</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="4">
                <Accordion.Header>Boutons</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="5">
                <Accordion.Header>Pads</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="6">
                <Accordion.Header>Lanière</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="7">
                <Accordion.Header>Coque spécial édition</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="8">
                <Accordion.Header>Stickers*</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="9">
                <Accordion.Header>Installation batterie</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="10">
                <Accordion.Header>Installation led RGB</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="11">
                <Accordion.Header>Installation led trigger</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="12">
                <Accordion.Header>Installation D-PAD tactile</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="13">
                <Accordion.Header>Installation AMP audio</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        <div className="config">
            <Accordion.Item eventKey="14">
                <Accordion.Header>Accessoires</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </div>
        </Accordion>
    </div>
  );
}
export default MenuCustom;