function createStrap(image, couleur) {
  return { image, couleur };
}

const DatabaseStrap = [
  createStrap(
    "../../../public/GBA/SIDE/GBA-Side-GBA_SIDE_Strap_Black-02.png",
    "NOIR"
  ),
  createStrap(
    "../../../public/GBA/SIDE/GBA-Side-GBA_SIDE_Strap_Rose.png",
    "ROSE"
  ),
  createStrap(
    "../../../public/GBA/SIDE/GBA-Side-GBA_SIDE_Strap_White.png",
    "BLANC"
  ),
  createStrap(
    "../../../public/GBA/SIDE/GBA-Side-GBA_SIDE_Strap_Yellow.png",
    "JAUNE"
  ),
  createStrap(
    "../../../public/GBA/SIDE/GBA-Side-GBA_SIDE_Strap_Violet.png",
    "VIOLET"
  ),
  createStrap(
    "../../../public/GBA/SIDE/GBA-Side-GBA_SIDE_Strap_Orange.png",
    "ORANGE"
  ),
  createStrap(
    "../../../public/GBA/SIDE/GBA-Side-GBA_SIDE_Strap_Red.png",
    "ROUGE"
  ),
  createStrap(
    "../../../public/GBA/SIDE/GBA-Side-GBA_SIDE_Strap_Blue.png",
    "BLEU"
  ),
  createStrap(
    "../../../public/GBA/SIDE/GBA-Side-GBA_SIDE_Strap_Green.png",
    "VERT"
  ),
];

export const dataStrap = [
  { label: "NOIR", color: "rgb(0, 0, 0)" },
  { label: "ROSE", color: "rgb(252, 184, 227)" },
  { label: "BLANC", color: "rgb(255, 255, 255)" },
  { label: "JAUNE", color: "rgb(249, 249, 116)" },
  { label: "VIOLET", color: "rgb(139, 44, 190)" },
  { label: "ORANGE", color: "rgb(244, 143, 43)" },
  { label: "ROUGE", color: "rgb(255, 0, 0)" },
  { label: "BLEU", color: "rgb(36, 159, 230)" },
  { label: "VERT", color: "rgb(0, 128, 0)" },
];

export default DatabaseStrap;
