import React, {useState} from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitting form data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Contact Us</h2>
        <p className="text-center text-gray-600 mt-2 mb-6">
          Have questions or need help? Get in touch with our support team.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-600 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-gray-600 font-semibold">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-600 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact