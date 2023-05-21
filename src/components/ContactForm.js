import { useState } from "react";
import "./ContactFormStyles.css";

export const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = user;
    if (name && email && subject && message) {
      const res = await fetch(
        "https://makeyourtrip-749fd-default-rtdb.firebaseio.com/usercontact.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        alert("Message sent");
      }
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="form-container">
      <h1>Send Message to Us!</h1>
      <form method="POST">
        <input
          value={user.name}
          onChange={getUserData}
          placeholder="Name"
          type="text"
          name="name"
          id="name"
        />
        <input
          value={user.email}
          onChange={getUserData}
          placeholder="Email"
          type="email"
          name="email"
          id="email"
        />
        <input
          value={user.subject}
          onChange={getUserData}
          placeholder="Subject"
          type="text"
          name="subject"
          id="subject"
        />
        <textarea
          value={user.message}
          onChange={getUserData}
          placeholder="Your Message"
          name="message"
          id="message"
          rows="5"
        ></textarea>
        <button type="submit" onClick={sendMessage}>
          Send Message
        </button>
      </form>
    </div>
  );
};
