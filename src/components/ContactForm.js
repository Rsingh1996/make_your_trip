import "./ContactFormStyles.css";

export const ContactForm = () => {
  return (
    <div className="form-container">
      <h1>Send Message to Us!</h1>
      <form>
        <input placeholder="Name" type="text" name="name" id="name" />
        <input placeholder="Email" type="email" name="email" id="email" />
        <input placeholder="Subject" type="text" name="subject" id="subject" />
        <textarea
          placeholder="Your Message"
          name="message"
          id="message"
          rows="5"
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
