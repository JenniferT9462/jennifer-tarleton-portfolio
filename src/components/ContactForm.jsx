"use client"; 
import { useState } from "react";
import emailjs from '@emailjs/browser';

//Import environment variables for EmailJS
const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const emailjsUserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // to show success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("All fields are required.");
      return;
    }

    try {
        // You can connect this form to an API or a service to send emails.
        // For now, we'll simulate a successful form submission.
        // Send email with EmailJS (replace with your service and template ID)
        const result = await emailjs.send(
            emailjsServiceId, // Your EmailJS service ID
            emailjsTemplateId, // Your EmailJS template ID
            formData,
            emailjsUserId // Your EmailJS user ID
        );

      setStatus("Submitting...");

      // Simulate success
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setStatus("Thank you for reaching out! I will get back to you soon.");
      }, 2000);
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-teal-900 font-bold mb-8">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white text-teal-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              rows="6"
              placeholder="Your Message"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </div>

          {status && <p className="text-lg mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
