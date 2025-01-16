import { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Booking = () => {
  const today = new Date().toISOString().split("T")[0];
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState(today);
  const [timeOptions, setTimeOptions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: date,
    time: "12:00",
    guests: 1,
    occasion: "",
  });

  const updateTimes = (e) => {
    const selectedDate =
      e === undefined ? new Date() : new Date(e.target.value);
    const availableTimes = window.fetchAPI(selectedDate);
    setDate(selectedDate.toISOString().split("T")[0]);
    setTimeOptions(availableTimes);
  };

  const handleSubmit = (values) => {
    setSubmitted(true);
    setTimeout(() => {
      window.submitAPI(formData);
    }, 1500);
  };
  useEffect(() => {
    updateTimes();
  }, []);
  return (
    <section className="booking-container" aria-labelledby="booking">
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
        {({ values, setFieldValue }) => (
          <Form className="booking-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="input-field"
              />
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
                  value={date}
                  min={today}
                  onChange={updateTimes}
                />
              </div>

              <div className="time-group">
                <label htmlFor="time">Time</label>
                <Field
                  as="select"
                  id="time"
                  name="time"
                  className="input-field"
                >
                  {timeOptions.length > 0 ? (
                    timeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))
                  ) : (
                    <option disabled>No available times</option>
                  )}
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
        )}
      </Formik>
    </section>
  );
};

export default Booking;
