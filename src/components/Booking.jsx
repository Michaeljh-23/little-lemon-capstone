import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Booking = () => {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: today,
    time: "12:00",
    guests: 1,
    occasion: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values) => {
    setSubmitted(true);
  };

  const timeOptions = Array.from({ length: 24 * 4 }, (_, i) => {
    const hour = String(Math.floor(i / 4)).padStart(2, "0");
    const minutes = String((i % 4) * 15).padStart(2, "0");
    return `${hour}:${minutes}`;
  });

  return (
    <section className="booking-container">
      <h2 className="booking-title">Book Your Reservation</h2>
      <Formik
        initialValues={formData}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.name) errors.name = "Name is required";
          if (!values.email) errors.email = "Email is required";
          if (!values.guests || values.guests <= 0 || values.guests >= 12)
            errors.guests = "At least 1 guest is required";
          return errors;
        }}
      >
        <Form className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="input-field" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="input-field"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group date-time-group">
            <div className="date-group">
              <label htmlFor="date">Date</label>
              <Field
                type="date"
                id="date"
                name="date"
                className="input-field"
                min={today}
              />
            </div>

            <div className="time-group">
              <label htmlFor="time">Time</label>
              <Field as="select" id="time" name="time" className="input-field">
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <Field
              type="number"
              id="guests"
              name="guests"
              min="1"
              className="input-field"
            />
            <ErrorMessage
              name="guests"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion (Optional)</label>
            <Field
              as="select"
              id="occasion"
              name="occasion"
              className="input-field"
            >
              <option value="">Select an Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="celebration">Celebration</option>
            </Field>
          </div>

          <div className="form-group">
            <button type="submit" disabled={submitted}>
              {!submitted ? "Book Now" : "Can't wait to see you!"}
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default Booking;
