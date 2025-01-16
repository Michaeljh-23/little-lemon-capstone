import Card from "./Card";

const FoodCards = () => {
  function openAlert() {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.classList.add("visible");
  }
  const foodData = [
    {
      itemName: "Greek Salad",
      price: "$14.99",
      description:
        "A Greek salad with fresh mix of cucumbers, tomatoes, olives, red onions, and feta cheese, dressed with olive oil and herbs.",
      imgSrc: "greeksalad.jpg",
    },
    {
      itemName: "Bruchetta",
      price: "$6.49",
      description:
        "A toasted baguette topped with a blend of diced tomatoes, garlic, basil, and olive oil.",
      imgSrc: "bruchetta.svg",
    },
    {
      itemName: "Lemon Cake",
      price: "$10.49",
      description:
        "A light, zesty cake with a tangy lemon flavor, often topped with a sweet glaze.",
      imgSrc: "lemondessert.jpg",
    },
  ];

  return (
    <div className="container top-padding-xl btm-padding-xl" id="menu">
      <div className="flex-between">
        <h3>Featured Menu Items</h3>
        <button onClick={openAlert}>Full Menu</button>
      </div>
      <div className="cards-grid">
        {foodData.map((foodItem) => (
          <Card item={foodItem} />
        ))}
      </div>
    </div>
  );
};

export default FoodCards;
