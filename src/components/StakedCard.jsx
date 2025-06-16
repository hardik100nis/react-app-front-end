import './StakedCard.scss'
import CircularArrowImg from "assets/images/Arrow.png";
import XImage from "assets/images/XLight.png";

const StakedCard = ({
  nft,
  selectStatusStaked,
  index,
  handleSelectNFTStaked,
}) => {
  return (
    <div className="staked-card">
      <div className="img-container">
        <img src={nft.image} alt={`${nft.image}`} width="100%" />
      </div>
      <div>
        <p className="text-secondary uppercase mb-1">
          NFT #: <br />
          <span className="text-primary italic">
            {nft.name} #{nft.id}
          </span>
        </p>
        <p className="text-secondary uppercase mb-1">
          auto restake:{" "}
          <button className="auto-restake-btn">
            <img
              src={nft.autoRestake === true ? CircularArrowImg : XImage}
              alt="arrow.png"
              width="100%"
            />
          </button>
        </p>
        <p className="text-secondary uppercase mb-1">
          next reward:{" "}
          <span className="text-primary italic">
            {nft.nextTicket} loh tickets
          </span>
        </p>
        <p className="text-secondary uppercase mb-1">
          claimable reward:{" "}
          <span className="text-primary italic">
            {nft.claimableTicket} loh tickets
          </span>
        </p>
      </div>
      <div className="loh-checkbox">
        <input
          type="checkbox"
          id={`lohCheckbox-${index}`}
          checked={selectStatusStaked[index] === true}
          onChange={() => handleSelectNFTStaked(index)}
          value={selectStatusStaked[index]}
        />
        <label htmlFor={`lohCheckbox-${index}`}></label>
      </div>
    </div>
  );
};

export default StakedCard;
