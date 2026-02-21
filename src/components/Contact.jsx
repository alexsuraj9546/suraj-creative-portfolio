import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // Pop-up ke liye
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const loadingToast = toast.loading("Sending your message...");

    try {
     // Contact.jsx mein fetch function ko update karein
const response = await fetch("https://portfolio-backend-1-8iq8.onrender.com/send-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData), // Ensure user_name, user_email, subject, message isme ho
});
      

      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent Successfully! ✅", { id: loadingToast });
        setFormData({ user_name: "", user_email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. ❌", { id: loadingToast });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error: Server is not responding. ⚠️", { id: loadingToast });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Pop-up Notification Container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">
            GET IN <span className="highlight">TOUCH</span>
          </h2>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <span className="yellow-text">Email:</span>
              <p>sr6447868@gmail.com</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn" disabled={isSending}>
            <span>{isSending ? "Sending..." : "Send Message"}</span>
            <div className="btn-icon">→</div>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;