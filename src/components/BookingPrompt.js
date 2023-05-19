import React, { useState } from "react";

export const BookingPrompt = ({
  heading,
  cost,
  duration,
  handleModalClose,
  handleDateChange,
  handleNameChange,
  handleEmailChange,
  handlePhoneChange,
  handleMessageChange,
  handleBookNowConfirm,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      handleBookNowConfirm();
    }
  };

  const validateForm = () => {
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      date.trim() !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleNameInputChange = (e) => {
    setName(e.target.value);
    validateForm();
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };

  const handlePhoneInputChange = (e) => {
    setPhone(e.target.value);
    validateForm();
  };

  const handleDateInputChange = (e) => {
    setDate(e.target.value);
    validateForm();
  };

  const today = new Date().toISOString().split("T")[0]; // get the current date

  return (
    <div className="modal-container">
      <div className="modal">
        <button type="button" className="close-btn" onClick={handleModalClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="booking-details">
          <h2>{heading}</h2>
        </div>
        <div className="distance">
          <p>{cost}</p>
          <p>{duration}</p>
        </div>
        <label htmlFor="date">Select date:</label>
        <input
          type="date"
          id="date"
          onChange={handleDateInputChange}
          min={today}
          required
        />

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              onChange={handleNameInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              onChange={handleEmailInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              onChange={handlePhoneInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" onChange={handleMessageChange}></textarea>
          </div>
          <button type="submit" disabled={!formValid}>
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};


