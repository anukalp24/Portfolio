import "./Contact.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, seterrors] = useState({});
  const [message, setmessage] = useState("");
  const [loader, setloader] = useState(false);

  const handlechange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    seterrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let newErrors = {};

    if (formData.name === "") {
      newErrors.name = "Name is required";
    }

    if (formData.email === "") {
      newErrors.email = "Email is required";
    } else if (!emailpattern.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.message === "") {
      newErrors.message = "Message is required";
    }

    seterrors(newErrors);

    if (Object.keys(newErrors).length !== 0) {
      return;
    }

    setloader(true);

    emailjs
      .send(
        "service_6cjyd8e",
        "template_u73vlxr",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "psqELKAWxq4KOiuWA"
      )
      .then(() => {
        setmessage("message sent successfully");

        setformData({
          name: "",
          email: "",
          message: "",
        });

        setloader(false);
      })
      .catch((error) => {
        console.log("EmailJS Error:", error);
        alert("Failed: " + error.text);

        setloader(false);
      });
  };

  return (
    <div>
      <div className="contact-parent-container">

        <div className="contact-form-content">

          <div id="contact" className="contact-intro-info">

            <h1 id="contact-sec1">
              Lets connect & build together!
            </h1>

            <h3 id="contact-sec2">
              Fill the form to contact!
            </h3>

          </div>

        </div>

        <div className="contact-login-page">

          <h2 id="contact-info">
            Name
          </h2>

          <input
            name="name"
            value={formData.name}
            onChange={handlechange}
            id="contact-name2"
            type="text"
            placeholder="Enter your name"
          />

          {errors.name && (
            <p id="contact-error">
              {errors.name}
            </p>
          )}


          <h2 id="contact-info">
            Email
          </h2>

          <input
            name="email"
            value={formData.email}
            onChange={handlechange}
            id="contact-email"
            type="text"
            placeholder="Enter Your email"
          />

          {errors.email && (
            <p id="contact-error">
              {errors.email}
            </p>
          )}


          <h2 id="contact-info">
            Your message
          </h2>

          <div className="contact-message-parent">

            <input
              name="message"
              value={formData.message}
              onChange={handlechange}
              id="contact-message"
              type="text"
              placeholder="Enter your message"
            />

            {errors.message && (
              <p id="contact-error">
                {errors.message}
              </p>
            )}

            <button
              onClick={handleSubmit}
              id="contact-shoot"
              disabled={loader}
            >
              {loader ? (
                <div className="contact-loader"></div>
              ) : (
                "Shoot!"
              )}
            </button>

          </div>

          {message && (
            <p className="contact-success-message">
              {message}
            </p>
          )}

          <div className="contact-seperation-2"></div>

        </div>

      </div>
    </div>
  );
};

export default Contact;