import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uxzpogu",
        "template_e31kw8x",
        form.current,
        "eyRkh1VlWP2yQqSPh"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Message failed to send!");
        }
      );
  };

  return (
    <section id="contact">
      <a className="titleContact">
        <span>Contact Me</span>
      </a>
      <a className="desContact">
        <p>Feel free to reach out to us for any inquiries or questions.</p>
      </a>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" id="user_name" />

        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" id="user_email" />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows={4} />

        <button type="submit" value="Send">
          submit{" "}
        </button>
      </form>
    </section>
  );
};


export default Contact;
