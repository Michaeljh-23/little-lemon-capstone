const ResyHero = () => {
  return (
    <section className="grid-container cards-grid h-large btm-padding-xl top-padding-lg white-text">
      <div className="two-cols flex-col">
        <div>
          <h2>Reservations Available</h2>
          <p>
            Secure your spot at Little Lemon with easy reservations for an
            unforgettable dining experience. Whether you're planning a cozy
            evening or a special celebration, we’ve got you covered.
          </p>
        </div>
        <div>
          <h3>Hours of Operation:</h3>
          <ul>
            <li>
              <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
            </li>
            <li>
              <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
            </li>
            <li>
              <p>Sunday: 12:00 PM - 8:00 PM</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Cancellation Policy:</h3>
          <p>
            Kindly notify us at least 24 hours in advance if you need to cancel
            or adjust your reservation. This helps us accommodate other guests.
          </p>
        </div>
        <div>
          <h3>Private Events:</h3>
          <p>
            We also host private events! Reach out for booking details and
            available dates for your next celebration.
          </p>
        </div>
      </div>
      <div className="m-auto">
        <img src="chef.jpg" className="" alt="Large image" />
      </div>
    </section>
  );
};

export default ResyHero;
