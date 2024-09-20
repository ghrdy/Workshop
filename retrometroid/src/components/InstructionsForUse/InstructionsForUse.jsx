/* eslint-disable react/no-unescaped-entities */
import "./InstructionsForUse.css";
import gba_05 from "../../assets/GBA/IMAGES/GBA-05.jpg";
import gba_03 from "../../assets/GBA/IMAGES/GBA-03.jpg";
import gba_01 from "../../assets/GBA/IMAGES/GBA-01.jpg";
import gba_02 from "../../assets/GBA/IMAGES/GBA-02.jpg";
import gba_04 from "../../assets/GBA/IMAGES/GBA-04.jpg";
function InstructionsForUse() {
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div className="instructions-of-use-container">
        <div className="left-container">
          <div className="left-case-one">
            <p>Pour que ca march mieux</p>
            <h4>Mode d'emploi</h4>
          </div>
          <div className="left-case-second">
            <h4>LED RGB</h4>
            <div className="img-container">
              <img alt="led rbg" src={gba_05} className="img" />
            </div>
            <p>
              Pour régler la luminosité des LED, maintenir{" "}
              <strong>SELECT + Flèche droite</strong>. Et droite ou gauche pour
              régler la luminosité.
            </p>
            <p>Il existe 4 mods de couleurs :</p>
            <ul>
              {colorMod.map((item) => (
                <li key={item}>
                  <strong>{item.prefixe}</strong>
                  {item.text}
                </li>
              ))}
            </ul>
            <p>Pour choisir la couleur en STATIC :</p>
            <ul>
              {colorStatic.map((item) => (
                <li key={item}>
                  <strong>{item.prefixe}</strong>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="left-case-third">
            <h4>Batterie rechargeable USB-C</h4>
            <div className="img-container">
              <img alt="led rbg" src={gba_03} className="img" />
            </div>
            <p>
              La batterie a une capacité de
              <strong> 1800mAh.</strong>
            </p>
            <p>
              Il est important d’utiliser uniquement le câble de charge fournis
              avec la console. Pour le dock de charge,
              <strong> ne dépassez pas 5 W.</strong>
            </p>
            <p>
              <strong>
                Il est conseillé de ne pas utiliser de charge rapide.
              </strong>{" "}
              En termes d’autonomie, la batterie propose une durée de jeu en
              moyenne de 10h.
            </p>
            <p>
              Le voyant bleu indique la charge, et le voyant vert, la charge est
              pleine.
            </p>
          </div>
        </div>
        <div className="rigth-container">
          <div className="rigth-case-one">
            <h4>Régler la luminosité de l’écran</h4>
            <div className="img-container">
              <img alt="led rbg" src={gba_01} className="img" />
            </div>
            <p>
              Pour régler la luminosité, un pad tactile se trouve en bas de la
              console en dessous de l’écran. Vous pouvez maintenir le tactile
              pour ouvrir le menu.
            </p>
          </div>
          <div className="rigth-case-second">
            <h4>Accéder au menu de l’écran</h4>
            <div className="img-container">
              <img alt="led rbg" src={gba_02} className="img" />
            </div>
            <p>
              Pour accéder au menu de la console, maintenez le tactile pendant 3
              s.
            </p>
            <p>Le menu intègre 4 catégories :</p>
            <ul>
              {categories.map((item) => (
                <li key={item}>
                  <strong>{item.prefixe}</strong>
                  {item.text}
                </li>
              ))}
            </ul>
            <p>
              Pour passer d’une catégorie à une autre, maintenir le tactile 1s.
            </p>
          </div>
          <div className="rigth-case-third">
            <h4>TRIGGERs PERSONNALISés</h4>
            <div className="img-container">
              <img alt="led rbg" src={gba_04} className="img" />
            </div>
            <p>
              Permet d’activer une LED à chaque clique sur le <strong>R</strong>
              ou <strong>L</strong>
            </p>
            <p>
              Il sera nécessaire de choisir des boutons type CLEAR pour laisser
              passer la lumière au travers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
const colorMod = [
  {
    prefixe: "STATIC",
    text: ": LED fixe sur la couleur que vous avez choisis.",
  },
  {
    prefixe: "BREATH",
    text: ": Les LED vont baisser et monter en intensité.",
  },
  {
    prefixe: "RAINBOW",
    text: ": Les LED changeront de couleur de gauche à droite.",
  },
  {
    prefixe: "OFF",
    text: ": Les LED sont éteintes.",
  },
];
const colorStatic = [
  {
    prefixe: "SELECT + Flèche droit",
    text: " 2 fois, puis ensuite gauche ou droite pour régler la couleurs.",
  },
  {
    prefixe: "SELECT + Flèche droite",
    text: " (avoir un flash bleu) pour sauvegarder le mode.",
  },
];
const categories = [
  {
    prefixe: "BRT",
    text: ": Niveau de luminosité entre 01 et 15.",
  },
  {
    prefixe: "CLR",
    text: ": 4 filtres d’écran différents",
  },
  {
    prefixe: "DSP",
    text: ": Simule les pixels sur l’écran.",
  },
  {
    prefixe: "OFF",
    text: ": Simule un flou de mouvement. (Off par defaut)",
  },
];
export default InstructionsForUse;
