const Card = ({ item }) => {
  return (
    <div className="gap-4 card">
      <img src={item.imgSrc} />
      <div className="gap-4 card-padding">
        <div className="flex-between ">
          <h3>{item.itemName}</h3>
          <h3>
            <span>{item.price}</span>
          </h3>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
export default Card;
