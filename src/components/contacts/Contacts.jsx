import React, { useState } from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.jsx";
// import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_kpzxgqz', 'template_kk9ipl8', form.current, 'uKELRhBOpArKOozDJ')
  //   e.target.reset()

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const formData = new FormData(e.target);
      const contactData = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        timestamp: serverTimestamp(),
      };

      console.log("Submitting contact data:", contactData);

      const docRef = await addDoc(collection(db, "contacts"), contactData);
      console.log("Document written with ID:", docRef.id);

      setSubmitStatus("success");
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);

      // Provide specific error messages based on error type
      if (error.code === "permission-denied") {
        setSubmitStatus("permission-error");
      } else if (error.code === "unavailable") {
        setSubmitStatus("connection-error");
      } else {
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ganeshaofficial01@gmail.com</h5>
            <a href="mailto:ganeshaofficial01@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />{" "}
          {/* client side validation */}
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {submitStatus === "success" && (
            <p style={{ color: "green", marginTop: "10px" }}>
              Message sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Failed to send message. Please try again.
            </p>
          )}
          {submitStatus === "permission-error" && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Permission denied. Please check Firebase security rules.
            </p>
          )}
          {submitStatus === "connection-error" && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Connection error. Please check your internet connection and try
              again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contacts;
