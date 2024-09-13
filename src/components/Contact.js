import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fp3a69p', 'template_y614lgm', form.current, {
        publicKey: '4Xj6Js_zUJGu5s8d9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); // Clear form fields after successful message send
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-4xl bg-gray-800 rounded-sm shadow-lg p-8">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <p className="text-center text-lg mb-12 text-gray-200">
            We'd love to hear from you! Please fill out the form below, and we'll get in touch with you as soon as possible.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="from_name"
                  className="w-full p-3 border border-gray-200 rounded bg-gray-200 text-black"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email_id"
                  className="w-full p-3 border border-gray-300 rounded bg-gray-200 text-black"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="your_subject"
                className="w-full p-3 border border-gray-300 rounded bg-gray-200 text-black"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                className="w-full p-3 border border-gray-300 rounded bg-gray-200 text-black h-32 resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-8 rounded hover:bg-blue-700 transition duration-300 w-full md:w-auto"
              >
                Send Message
              </button>
              <div className="text-center text-gray-400">
                <p>Or reach us directly at</p>
                <a href="mailto:jadoonafzal027@gmail.com" className="text-blue-400 cursor-pointer">jadoonafzal027@gmail.com</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
