function createCoque(image, value) {
  return { image, value };
}

const DatabaseCoque = [
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-Black_Shell_GBA_0027.jpg",
    "NOIR"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-White_Shell_GBA_0027.jpg",
    "BLANC"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-Rose_Shell_GBA_0027.jpg",
    "ROSE"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-Turquoise_Shell_GBA_0027.jpg",
    "TURQUOISE"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-Yellow_Shell_GBA_0027.jpg",
    "JAUNE"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-ClearGhost_Shell_GBA_0027.jpg",
    "GHOST"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-ClearViolet_Shell_GBA_0027.jpg",
    "CLEAR VIOLET"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-ClearOrange_Shell_GBA_0027.jpg",
    "CLEAR ORANGE"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-ClearBlack_Shell_GBA_0027.jpg",
    "CLEAR NOIR"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-ClearBlue_Shell_GBA_0027.jpg",
    "CLEAR BLEU"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-ClearGlassShell_GBA_0027.jpg",
    "CLEAR GLASS"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-ClearGreen_Shell_GBA_0027.jpg",
    "CLEAR VERT"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-ClearRED_Shell_GBA_0027.jpg",
    "CLEAR ROUGE"
  ),
  createCoque(
    "../../../public/GBA/SIDE/GBA-Side-GBA-Side-FAMICOM.jpg",
    "FAMICOM"
  ),
  createCoque("../../../public/GBA/SIDE/GBA-Side-GBA-Side-SNES.jpg", "SNES"),
];

export const dataCoque = [
  { label: "NOIR", color: "rgb(0, 0, 0)" },
  { label: "BLANC", color: "rgb(255, 255, 255)" },
  { label: "ROSE", color: "rgb(252, 184, 227)" },
  { label: "TURQUOISE", color: "rgb(118, 215, 234)" },
  { label: "JAUNE", color: "rgb(249, 249, 116)" },
  { label: "GHOST", color: "rgb(169, 249, 249)" },
  { label: "CLEAR VIOLET", color: "rgb(139, 44, 190)" },
  { label: "CLEAR ORANGE", color: "rgb(244, 143, 43)" },
  { label: "CLEAR NOIR", color: "rgb(57, 56, 56)" },
  { label: "CLEAR BLEU", color: "rgb(0, 0, 255)" },
  { label: "CLEAR GLASS", color: "rgb(197,205,216)" },
  { label: "CLEAR VERT", color: "rgb(0, 128, 0)" },
  { label: "CLEAR ROUGE", color: "rgb(255, 0, 0)" },
];

export default DatabaseCoque;
