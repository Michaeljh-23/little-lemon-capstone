import { useAlert } from "../contexts/AlertContext";

const Card = ({ item }) => {
  const { openAlert } = useAlert();

  return (
    <div className="gap-4 card">
      <img src={item.imgSrc} alt={item.altText} />
      <div className="gap-4 card-padding">
        <div className="flex-between ">
          <h3>{item.itemName}</h3>
          <h3>
            <span>{item.price}</span>
          </h3>
        </div>
        <p>{item.description}</p>
      </div>
      <div className="flex order-container">
        <div role="button" onClick={() => openAlert(false)}>
          <p>Order Delivery</p>
        </div>
        <img src="delivery.svg" className="delivery" alt="scooter icon" />
      </div>
    </div>
  );
};
export default Card;
