/* eslint-disable react/prop-types */
import "./style/GameBoyCard.css"; // You'll need to create a corresponding CSS file.

const GameboyCard = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="gameboy-card">
      <div className="card-content">
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
        <button className="button ">Personnaliser</button>
      </div>
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default GameboyCard;
