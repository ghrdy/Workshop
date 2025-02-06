import GameboyCard from "./GameboyCard"; // Import the GameboyCard component
import "./style/GameboyList.css"; // Corresponding CSS for the grid layout
import telechargementImage from "../assets/GB-Console-isole.png";
import telechargementImage1 from "../assets/GBA-Console-isole.png";
import telechargementImage2 from "../assets/GBASP-Console-isole.png";
import telechargementImage3 from "../assets/GBC-Console-isole.png";

const GameboyList = () => {
  // You can replace these image URLs with actual paths or imported images
  const gameboyData = [
    {
      title: "GAMEBOY COLOR",
      subtitle: "LE PLUS GRAND ÉCRAN",
      imageUrl: telechargementImage,
    },
    {
      title: "GAMEBOY ADVANCE",
      subtitle: "LA PLUS POLYVALENTE",
      imageUrl: telechargementImage1,
    },
    {
      title: "ADVANCE SP",
      subtitle: "LA PLUS PRATIQUE",
      imageUrl: telechargementImage2,
    },
    {
      title: "GAMEBOY DMG",
      subtitle: "L'ORIGINALE",
      imageUrl: telechargementImage3,
    },
  ];

  return (
    <div className="gameboy-list">
      {gameboyData.map((gameboy, index) => (
        <GameboyCard
          key={gameboy.id}
          title={gameboy.title}
          subtitle={gameboy.subtitle}
          imageUrl={gameboy.imageUrl}
        />
      ))}
    </div>
  );
};

export default GameboyList;
