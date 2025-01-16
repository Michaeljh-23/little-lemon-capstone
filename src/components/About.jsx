const About = () => {
  return (
    <div
      className="grid-container h-large btm-padding-xl top-padding-lg"
      id="about"
    >
      <div>
        <h3>About</h3>
        <div className="vert-center-flex">
          <p className="lineh-lg">
            Little Lemon is your go-to neighborhood bistro, brimming with charm
            and character. We specialize in serving wholesome, flavorful dishes
            crafted from locally-sourced ingredients that celebrate the
            simplicity of great food. Our menu is thoughtfully curated to offer
            a blend of comforting classics and exciting daily specials, ensuring
            there’s always something fresh to discover. Whether you’re stopping
            by for a cozy dinner with friends or enjoying a casual evening out,
            our lively yet welcoming atmosphere sets the perfect stage.
          </p>
        </div>
      </div>
      <div className="split-img-column">
        <img src="maa.jpg" className="split-img-one" alt="Large image" />
        <img
          src="restauranfood.jpg"
          className="split-img-two"
          alt="Small overlay image"
        />
      </div>
    </div>
  );
};

export default About;
