import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GbaResume.css";
import img from "../../assets/GBA/IMAGES/GBASP_SHELL_INSERT-02-1024x801.jpg";
function GbaResume() {
  const [itemSelected, setItemSelected] = useState(0);
  return (
    <section className="main-container">
      <div className="stickers-container">
        <div className="stickers-text">
          <h4>Stickers personnalisés</h4>
          <p>
            Il est possible de personnaliser les stickers arrière avec le texte
            ou le thème que vous souhaitez. Pour parler du projet, veuillez me
            contacter sur Instagram
          </p>
        </div>
        <div className="bga-img-container">
          <img alt="GBA" src={img} className="bga-img" />
        </div>
      </div>
      <div className="resume-carousel-container">
        <ul className="resume-carousel-btn-container">
          {data.map((item, index) => (
            <motion.li
              key={index}
              onClick={() => setItemSelected(index)}
              transition={{ duration: 0.5 }}
              className={`${itemSelected === index ? "selected" : ""} `}
            >
              {item.label}
            </motion.li>
          ))}
        </ul>
        <AnimatePresence mode="wait">
          {data.map(
            (item, index) =>
              index === itemSelected && (
                <motion.p
                  key={index}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.text}
                </motion.p>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

const data = [
  {
    id: 0,
    label: "Description",
    text: "Chaque console que je propose est moddée à partir de cartes mères officielles restaurées. Les composants neufs tels que l'écran, la coque et les boutons sont neufs, bien que non officiels Nintendo. Cela me permet de garantir des consoles personnalisées de haute qualité, alliant fiabilité et esthétique unique.",
  },
  {
    id: 1,
    label: "Acompte",
    text: "Un acompte de 30 % sera demandé pour confirmer chaque commande, le solde restant sera à régler une fois la console terminé.",
  },
  {
    id: 2,
    label: "Fournir une console",
    text: "Vous pouvez me fournir une console fonctionnelle sur laquelle je pourrais travailler. Merci de me contacter directement sur Instagram pour organiser l'expédition de votre console.",
  },
  {
    id: 3,
    label: "Délais et expeditions",
    text: "Les consoles sont préparées sur commande, nécessitant jusqu'à 40 jours avant l'expédition. Nous offrons des options d'expédition rapides et fiables : Colissimo, Mondial Relay ou Chronopost Express.",
  },
  {
    id: 4,
    label: "Garantie",
    text: "Les consoles sont garanties 3 mois. Cependant, nous restons disponible pour toutes réparations ou remplacement si besoin.",
  },
];

export default GbaResume;
