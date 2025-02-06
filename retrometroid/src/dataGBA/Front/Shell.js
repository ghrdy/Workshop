import Black from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_BLACK.jpg";
import Clear_Black from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_CLEAR_BLACK.jpg";
import Blue from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_CLEAR_BLUE.jpg";
import Clear_GLass from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_CLEAR-GLASS.jpg";
import Green from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_CLEAR-GREEN.jpg";
import Orange from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_CLEAR-ORANGE.jpg";
import Red from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_CLEAR-RED.jpg";
import Violet from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_CLEAR-VIOLET.jpg";
import Famicon from "../../../public/GBA/FRONT/GBA-Front-GBC_LEDGBA_SHELL_FAMICOM.jpg";
import Ghost from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_GHOST.jpg";
import Grey from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_GREY.jpg";
import Rose from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_ROSE.jpg";
import SNES from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_SNES.jpg";
import Turquoise from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_TURQUOISE.jpg";
import White from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_WHITE.jpg";
import Yellow from "../../../public/GBA/Front/GBA-Front-GBC_LEDGBA_SHELL_YELLOW.jpg";

function createShell(image, couleur) {
  return { image, couleur };
}

const DatabaseShell = [
  createShell(Black, "Black"),
  createShell(Clear_Black, "Clear_Black"),
  createShell(Blue, "Blue"),
  createShell(Clear_GLass, "Clear_GLass"),
  createShell(Green, "Green"),
  createShell(Orange, "Orange"),
  createShell(Red, "Red"),
  createShell(Violet, "Violet"),
  createShell(Famicon, "Famicon"),
  createShell(Ghost, "Ghost"),
  createShell(Grey, "Grey"),
  createShell(Rose, "Rose"),
  createShell(SNES, "SNES"),
  createShell(Turquoise, "Turquoise"),
  createShell(White, "White"),
  createShell(Yellow, "Yellow"),
];

export const dataShell = [
  { label: "Yellow", color: "rgb(255, 255, 0)" },
  { label: "Red", color: "rgb(255, 0, 0)" },
  { label: "Black", color: "rgb(0, 0, 0)" },
  { label: "Rose", color: "rgb(128, 0, 128)" },
  { label: "Green", color: "rgb(0, 128, 0)" },
  { label: "Blue", color: "rgb(0, 0, 255)" },
  { label: "White", color: "rgb(255, 255, 255)" },
  { label: "Orange", color: "rgb(255, 165, 0)" },
  { label: "Turquoise", color: "rgb(175,238,238)" },
  { label: "Ghost", color: "rgb(197,205,216)" },
  { label: "Ghost", color: "rgb(197,205,216)" },
];

export default DatabaseShell;
