function createEcran(image, couleur) {
  return { image, couleur };
}
const DatabaseEcran = [
  createEcran(
    "../../../public/GBA/SIDE/GBA-Side-GBA_SIDE_IPS_BLACK.png",
    "NOIR"
  ),
  createEcran(
    "../../../public/GBA/SIDE/GBA-Side-GBA_SIDE_IPS_WHITE.png",
    "BLANC"
  ),
];
export const dataEcran = [
  { label: "BLANC", color: "rgb(255, 255, 255)" },
  { label: "NOIR", color: "rgb(0, 0, 0)" },
];

export default DatabaseEcran;
