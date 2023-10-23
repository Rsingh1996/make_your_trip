import React, { useState } from "react";
import "./TripStyles.css";

import { BookingPrompt } from "./BookingPrompt";
import { PaymentPrompt } from "./PaymentPrompt";

export const InternationalTripData = (props) => {
  const [showBookingPrompt, setShowBookingPrompt] = useState(false);
  const [showPaymentPrompt, setShowPaymentPrompt] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(null);

  const handleBookNowClick = () => {
    setShowBookingPrompt(true);
  };

  const handleModalClose = () => {
    setShowBookingPrompt(false);
    setShowPaymentPrompt(false);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handlePaymentAmountChange = (event) => {
    setPaymentAmount(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleBookNowConfirm = () => {
    setShowBookingPrompt(false);
    setShowPaymentPrompt(true);
  };

  const handlePaymentConfirm = () => {
    // Perform payment processing logic here
    // ...
    setShowPaymentPrompt(false);
  };

  return (
    <div className="tripData-card">
      <div className="tripData-image">
        <img alt="image" src={props.image} />
      </div>
      <h4>{props.heading} </h4>
      <p>{props.text} </p>
      <hr />
      <div className="info">
        <div className="services">
          <i className="fa-solid fa-plane-up"></i>
          <i className="fa-solid fa-hotel"></i>
          <i className="fa-solid fa-utensils"></i>
        </div>
        <h4>{props.cost}</h4>
      </div>
      <div className="distance">
        <button onClick={handleBookNowClick}>Book now</button>
        <span>{props.duration}</span>
      </div>
      {showBookingPrompt && (
        <BookingPrompt
          heading={props.heading}
          cost={props.cost}
          duration={props.duration}
          handleModalClose={handleModalClose}
          handleDateChange={handleDateChange}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneChange={handlePhoneChange}
          handleMessageChange={handleMessageChange}
          handleBookNowConfirm={handleBookNowConfirm}
        />
      )}
      {showPaymentPrompt && (
        <PaymentPrompt
          amount={paymentAmount}
          name={name}
          email={email}
          phone={phone}
          message={message}
          handleModalClose={handleModalClose}
          handlePaymentAmountChange={handlePaymentAmountChange}
          handlePaymentConfirm={handlePaymentConfirm}
        />
      )}
    </div>
  );
};
