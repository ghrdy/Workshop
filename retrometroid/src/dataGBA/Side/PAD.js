function createPad(image, couleur) {
  return { image, couleur };
}

const DatatabasePad = [
  createPad(
    "../../../public/GBA/SIDE/GBA-Side-GBA_PAD_Black0027-side.png",
    "NOIR"
  ),
  createPad(
    "../../../public/GBA/SIDE/GBA-Side-GBA_PAD_Blue0027-side.png",
    "BLEU CLAIR"
  ),
  createPad(
    "../../../public/GBA/SIDE/GBA-Side-GBA_PAD_DarkBlue0027-side.png",
    "BLEU"
  ),
  createPad(
    "../../../public/GBA/SIDE/GBA-Side-GBA_PAD_Green0027-side.png",
    "VERT"
  ),
  createPad(
    "../../../public/GBA/SIDE/GBA-Side-GBA_PAD_Orange0027-side.png",
    "ORANGE"
  ),
  createPad(
    "../../../public/GBA/SIDE/GBA-Side-GBA_PAD_Red0027-side.png",
    "ROUGE"
  ),
  createPad(
    "../../../public/GBA/SIDE/GBA-Side-GBA_PAD_Rose0027-side.png",
    "ROSE"
  ),
  createPad(
    "../../../public/GBA/SIDE/GBA-Side-GBA_PAD_White0027-side.png",
    "BLANC"
  ),
  createPad(
    "../../../public/GBA/SIDE/GBA-Side-GBA_PAD_Yellow0027-side.png",
    "JAUNE"
  ),
];

export const dataPads = [
  { label: "NOIR", color: "rgb(0, 0, 0)" },
  { label: "BLEU CLAIR", color: "rgb(93, 213, 244)" },
  { label: "BLEU", color: "rgb(0, 0, 255)" },
  { label: "VERT", color: "rgb(0, 128, 0)" },
  { label: "ORANGE", color: "rgb(244, 143, 43)" },
  { label: "ROUGE", color: "rgb(255, 0, 0)" },
  { label: "ROSE", color: "rgb(252, 184, 227)" },
  { label: "BLANC", color: "rgb(255, 255, 255)" },
  { label: "JAUNE", color: "rgb(249, 249, 116)" },
];

export default DatatabasePad;
