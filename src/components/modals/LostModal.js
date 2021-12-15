import "./style.css";
import WinStar from "../../assets/images/lost-star.png";
import WinDollor from "../../assets/images/lost-bnb.png";
import Gif from "../../assets/images/loss.gif";
import GifOverlay from "../../assets/images/loss-overlay.png";
const GameLostModal = ({ activeGame, setActiveGame, gameHandler }) => {
  return (
    <div className={`modal lost-modal ${activeGame ? "flex" : "hidden"} `}>
      <div className="modal-content flex justify-center items-end text-center pb-20 relative">
        <div className="close-modal" onClick={gameHandler}>
          <i className="fas fa-times"></i>
        </div>
        <img src={Gif} className="gif" alt="" />
        <img src={GifOverlay} className="gif-overlay" alt="" />
        <div className="lost-modal-btm">
          <p className="font-bold text-xl md:text-3xl mb-6">Your Bet: Even</p>
          <h2 className="font-bold  mb-6 sm:text-2xl  md:text-5xl lg:text-7xl">
            Result: Even
          </h2>
          <div className="flex items-center justify-center md:mt-4 score">
            <div className="flex items-center justify-end mr-4 ">
              <img src={WinStar} alt="" />
              <p className="ml-2 font-bold">- 23</p>
            </div>
            <div className="flex items-center">
              <img src={WinDollor} alt="" />
              <p className="ml-2 font-bold">- 512 SQM</p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 text-lg text-white">
        Unfortunately you lost, better luck next time
      </p>
    </div>
  );
};

export default GameLostModal;
