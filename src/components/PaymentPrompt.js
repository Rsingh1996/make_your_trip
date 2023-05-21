import React, { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function PaymentPrompt({ handleModalClose }) {
  const [paymentOption, setPaymentOption] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [googlePayEmail, setGooglePayEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [upiId, setUpiId] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const navigate = useNavigate();

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const currentDate = new Date().toISOString().split("T")[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (paymentOption === "card") {
      const cardNumberRegex = /^\d+$/;
      if (!cardNumberRegex.test(cardNumber) || cardNumber.length < 16) {
        alert("Please enter a valid card number");
        isValid = false;
      }
      const currentDate = new Date();
      const expirationDate = new Date(
        `${expirationYear}-${expirationMonth}-01`
      );
      if (expirationDate <= currentDate) {
        alert("Please enter a valid expiration date");
        isValid = false;
      }
      const cvvRegex = /^\d{3}$/;
      if (!cvvRegex.test(cvv)) {
        alert("Please enter a valid CVV");
        isValid = false;
      }
    } else if (paymentOption === "googlePay") {
      const googlePayEmail = event.target.googlePayEmail.value;
      const mobileNumber = event.target.mobileNumber.value;
      const upiId = event.target.upiId.value;

      if (!googlePayEmail && !mobileNumber && !upiId) {
        alert("Please enter at least one payment detail");
        isValid = false;
      }

      const isValidMobileNumber = /^[0-9]{10}$/.test(mobileNumber);
      if (mobileNumber && !isValidMobileNumber) {
        alert("Please enter a valid mobile number");
        isValid = false;
      }

      const isValidUPI = /^[a-zA-Z0-9.-]{2,256}@[a-zA-Z][a-zA-Z]{2,64}$/.test(
        upiId
      );
      if (upiId && !isValidUPI) {
        alert("Please enter a valid UPI ID");
        isValid = false;
      }
    }

    if (isValid) {
      if (paymentOption === "card") {
        const cardNumber = event.target.cardNumber
          ? event.target.cardNumber.value
          : "";
        const expirationDate = event.target.expirationDate
          ? event.target.expirationDate.value
          : "";
        const cvv = event.target.cvv ? event.target.cvv.value : "";

        console.log(
          "Submitting card payment details:",
          "Card Number:",
          cardNumber,
          "Expiration Date:",
          expirationDate,
          "CVV:",
          cvv
        );
      } else if (paymentOption === "googlePay") {
        const googlePayEmail = event.target.googlePayEmail.value;
        const mobileNumber = event.target.mobileNumber.value;
        const upiId = event.target.upiId.value;

        console.log(
          "Submitting Google Pay payment details:",
          "Google Pay Email:",
          googlePayEmail,
          "Mobile Number:",
          mobileNumber,
          "UPI ID:",
          upiId
        );
      } else {
        console.error("Invalid payment option selected");
      }

      setBookingConfirmed(true);
    }
  };
  const handleOkButtonClick = () => {
    navigate("/contact");
  };

  if (bookingConfirmed) {
    const bookingNumber = Math.floor(Math.random() * 1000000); // Generate random booking number
    return (
      <div className="modal-container">
        <div className="modal">
          <h2>Booking Confirmed!</h2>
          <p>Your booking number is: {bookingNumber}</p>
          <button type="button" onClick={handleOkButtonClick}>
            OK
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <button type="button" className="close-btn" onClick={handleModalClose}>
          <i className="fas fa-times"></i>
        </button>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="paymentOption">Payment Option</label>
            <div className="radio-group">
              <div className="radio">
                <input
                  type="radio"
                  id="card"
                  name="paymentOption"
                  value="card"
                  checked={paymentOption === "card"}
                  onChange={handlePaymentOptionChange}
                />
                <label htmlFor="card">Card</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  id="googlePay"
                  name="paymentOption"
                  value="googlePay"
                  checked={paymentOption === "googlePay"}
                  onChange={handlePaymentOptionChange}
                />
                <label htmlFor="googlePay">Google Pay</label>
              </div>
            </div>
          </div>
          {paymentOption === "card" && (
            <>
              <div className="form-group">
                <label htmlFor="cardNumber">
                  <FaCreditCard /> Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(event) => setCardNumber(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="expirationDate">Expiration Date</label>
                <div className="expiration-input">
                  <select
                    name="month"
                    id="expirationMonth"
                    value={expirationMonth}
                    onChange={(event) => setExpirationMonth(event.target.value)}
                  >
                    <option value="" disabled>
                      Month
                    </option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <select
                    name="year"
                    id="expirationYear"
                    value={expirationYear}
                    onChange={(event) => setExpirationYear(event.target.value)}
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {Array.from(
                      { length: 10 },
                      (_, i) => i + new Date().getFullYear()
                    ).map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  value={cvv}
                  onChange={(event) => setCvv(event.target.value)}
                />
              </div>
            </>
          )}
          {paymentOption === "googlePay" && (
            <>
              <div className="form-group">
                <label htmlFor="googlePayEmail">Email</label>
                <input
                  type="email"
                  id="googlePayEmail"
                  name="googlePayEmail"
                  value={googlePayEmail}
                  onChange={(event) => setGooglePayEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  required
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={mobileNumber}
                  onChange={(event) => setMobileNumber(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="upiId">UPI ID</label>
                <input
                  required
                  type="text"
                  id="upiId"
                  name="upiId"
                  value={upiId}
                  onChange={(event) => setUpiId(event.target.value)}
                />
              </div>
            </>
          )}
          <button type="submit">Pay</button>
        </form>
      </div>
    </div>
  );
}
