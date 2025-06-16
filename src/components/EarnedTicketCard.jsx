import "./EarnedTicketCard.scss"

const EarnedTicketCard = ({ data }) => {
  return (
    <div className="earned-ticket-card mb-2">
      <h6 className="nft-type mb-1">
        <span className="italic">{data.label}</span>
      </h6>
      <div className="d-flex justify-center mb-1 flex-wrap">
        {data.images.map((image) => (
          <img
            src={image}
            key={image}
            alt={image}
            width="14%"
            className="nft-image"
          />
        ))}
      </div>
      <div className="d-flex flex-column gap-1">
        <div className="length-ticket">
          weight in POOL:{" "}
          <span className="italic">
            {data.weight}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EarnedTicketCard;
