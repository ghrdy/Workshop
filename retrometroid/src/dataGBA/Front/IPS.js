function createIps(image, couleur) {
  return { image, couleur };
}
const DatabaseIps = [
  createIps("./public/GBA/Front/GBA-Front-GBA_IPS_BLACK.png", "Black"),
  createIps("./public/GBA/Front/GBA-Front-GBA_IPS_DMG.png", "DMG"),
  createIps("./public/GBA/Front/GBA-Front-GBA_IPS_SNES_JAP.png", "SNES"),
  createIps("./public/GBA/Front/GBA-Front-GBA_IPS_SNES_US.png", "SNES_US"),
  createIps(
    "./public/GBA/Front/GBA-Front-GBA_IPS_SNES_US_Black.png",
    "SNES_US_Black"
  ),
  createIps("./public/GBA/Front/GBA-Front-GBA_IPS_WHITE.png", "White"),
];

export default DatabaseIps;
