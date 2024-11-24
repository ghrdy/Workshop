function createButton(image, couleur) {
  return { image, couleur };
}
const DatabaseButton = [
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_Black0027-side.png",
    "NOIR"
  ),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_White0027-side.png",
    "BLANC"
  ),
  createButton("../../../public/GBA/SIDE/GBA-Side-GBA_Button_Snes.png", "SNES"),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_Blue0027-side.png",
    "BLEU"
  ),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_Orange0027-side.png",
    "ORANGE"
  ),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_Yellow0027-side.png",
    "JAUNE"
  ),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_Violet0027-side.png",
    "VIOLET"
  ),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_Rose0027-side.png",
    "ROSE"
  ),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_Red0027-side.png",
    "ROUGE"
  ),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_Lemon0027-side.png",
    "LEMON"
  ),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_ClearBlack0027-side.png",
    "CLEAR NOIR"
  ),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_ClearBlue0027-side.png",
    "CLEAR BLEU"
  ),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_ClearGlass0027-side.png",
    "CLEAR GLASS"
  ),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_ClearGreen0027-side.png",
    "CLEAR VERT"
  ),
  createButton(
    "../../../public/GBA/SIDE/GBA-Side-GBA_Button_ClearPink0027-side.png",
    "CLEAR ROSE"
  ),
];

export const dataButton = [
  { label: "NOIR", color: "rgb(0, 0, 0)" },
  { label: "BLANC", color: "rgb(255, 255, 255)" },
  { label: "SNES", color: "rgb(217, 118, 242)" },
  { label: "BLEU", color: "rgb(36, 159, 230)" },
  { label: "ORANGE", color: "rgb(244, 143, 43)" },
  { label: "JAUNE", color: "rgb(249, 249, 116)" },
  { label: "VIOLET", color: "rgb(139, 44, 190)" },
  { label: "ROSE", color: "rgb(252, 184, 227)" },
  { label: "ROUGE", color: "rgb(255, 0, 0)" },
  { label: "LEMON", color: "rgb(193, 234, 118)" },
  { label: "CLEAR NOIR", color: "rgb(57, 56, 56)" },
  { label: "CLEAR BLEU", color: "rgb(0, 0, 255)" },
  { label: "CLEAR GLASS", color: "rgb(197,205,216)" },
  { label: "CLEAR VERT", color: "rgb(0, 128, 0)" },
  { label: "CLEAR ROSE", color: "rgb(205, 21, 168)" },
];

export default DatabaseButton;
