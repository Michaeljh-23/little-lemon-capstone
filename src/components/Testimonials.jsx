const Testimonials = () => {
  const testimonialData = [
    {
      name: "Reagan Woodle",
      quote:
        "A dining experience that exceeded all expectations. Every bite was perfect!",
      imageSrc: "user-four.png",
    },

    {
      name: "Liam Turner",
      quote:
        "The food was incredible, and the service made the night unforgettable.",
      imageSrc: "user-two.png",
    },
    {
      name: "Sophia Bennett",
      quote:
        "A hidden gem. The atmosphere is warm, and the flavors are unmatched!",
      imageSrc: "user-three.png",
    },
    {
      name: "Oliver Scott",
      quote:
        "From start to finish, it was flawless. I can’t wait to come back!",
      imageSrc: "user-one.png",
    },
    {
      name: "Ava Mitchell",
      quote:
        "A delightful evening with great food and wonderful company. Highly recommend!",
      imageSrc: "user-five.png",
    },
  ];

  return (
    <div className="container h-large btm-padding-xl top-padding-lg">
      <div>
        <h3>Testimonials</h3>
        <div className="cards-grid-lg">
          {testimonialData.map((data) => {
            return (
              <div className="card center-flex-col card-padding">
                <div>
                  <img src={data.imageSrc} className="selfie" />
                </div>
                <div>
                  <h3>{data.name}</h3>
                </div>
                <div>
                  <p className="quote regular-size">"{data.quote}"</p>
                </div>
                <img src="rating.png" className="rating" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
