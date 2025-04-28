import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-primary to-secondary opacity-20"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration opportunities? Feel free to reach out to me. I'd love to hear from you!
          </p>
        </div>

        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail size={18} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:pooja.nagal@example.com" className="text-gray-600 hover:text-primary">
                      nagalpooja33@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Phone size={18} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-primary">
                      +91 8168505611
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin size={18} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">
                      Lovely Professional University,<br />
                      Phagwara, Punjab, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex space-x-3">
                  <a href="https://github.com/nagalpooja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/poojanagal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0077B5] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/its_pooja0911/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#db1ac5] text-black rounded-full flex items-center justify-center hover:opacity-50 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M17 2h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M17.5 6.5h.01"></path>
                    </svg>


                  </a>
                  <a
                    href="https://x.com/PoojaNagal39124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 px-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Send Me a Message</h3>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Your message has been sent successfully. I'll get back to you soon!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="xyz@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Hello Pooja, I'd like to discuss a project with you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-primary text-white px-6 py-3 rounded-md flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'
                      } transition-all w-full sm:w-auto`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;