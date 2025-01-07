const Main = () => {
  return (
    <main>
      <div className="grid green height-holder">
        <div className="half flex flex-col">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="half flex center-flex">
          <img src="restaurant.jpg" className="center-img" />
        </div>
      </div>
    </main>
  );
};

export default Main;
