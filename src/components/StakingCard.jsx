import './StakingCard.scss'

const StakingCard = ({
  nft,
  index,
  selectStatus,
  handleSelectNFT,
}) => {
  return (
    <div className="staking-card">
      <div className="card-header">
        <p className="text-secondary uppercase mb-1">
          NFT #:&nbsp;
          <span className="text-primary italic">
            {nft.name} #{nft.id}
          </span>
        </p>
      </div>
      <div className={`card-body ${selectStatus[index] ? "opacity-1" : ""}`}>
        <div className="img-container">
          <img src={nft.image} alt={`${nft.image}`} width="100%" />
        </div>
      </div>
      <div className="card-footer">
        <div className="loh-checkbox">
          <input
            type="checkbox"
            id={`lohCheckbox-${index}`}
            checked={selectStatus[index] === true}
            onChange={() => handleSelectNFT(index)}
            value={selectStatus[index]}
          />
          <label htmlFor={`lohCheckbox-${index}`}></label>
        </div>
      </div>
    </div>
  );
};

export default StakingCard;
