export const dataDessous = [
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

function createDessous(image, couleur) {
  return { image, couleur };
}

const DatabaseDessous = [
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-Black_Shell_GBA_0027-side-02.png",
    "NOIR"
  ),
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-White_Shell_GBA_0027-side-02.png",
    "BLANC"
  ),
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-Rose_Shell_GBA_0027-side-02.png",
    "ROSE"
  ),
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-Turquoise_Shell_GBA_0027-side-02.png",
    "TURQUOISE"
  ),
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-Yellow_Shell_GBA_0027-side-02.png",
    "JAUNE"
  ),
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-ClearGhost_Shell_GBA_0027-side-02.png",
    "GHOST"
  ),
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-ClearViolet_Shell_GBA_0027-side-02.png",
    "CLEAR VIOLET"
  ),
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-ClearOrange_Shell_GBA_0027-side-02.png",
    "CLEAR ORANGE"
  ),
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-ClearBlack_Shell_GBA_0027-side-02.png",
    "CLEAR NOIR"
  ),
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-ClearBlue_Shell_GBA_0027-side-02.png",
    "CLEAR BLEU"
  ),
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-ClearGlassShell_GBA_0027-side-02.png",
    "CLEAR GLASS"
  ),
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-ClearGreen_Shell_GBA_0027-side-02.png",
    "CLEAR VERT"
  ),
  createDessous(
    "../../../public/GBA/SIDE/GBA-Side-ClearRED_Shell_GBA_0027-side-02.png",
    "CLEAR ROUGE"
  ),
];

export default DatabaseDessous;
