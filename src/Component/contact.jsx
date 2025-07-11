import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const serviceID = 'service_4286amq';
        const templateID = 'template_majv57n';
        const userID = 'HFLbOf4-N6RIC2DUZ';

        emailjs.send(serviceID, templateID, form, userID)
            .then(() => {
                setFormSubmitted(true);
                setLoading(false);
                setForm({ name: '', email: '', message: '' });

                // Auto-reset formSubmitted after 5 seconds
                setTimeout(() => {
                    setFormSubmitted(false);
                }, 5000);
            })
            .catch((error) => {
                setLoading(false);
                alert('Error sending message, please try again.');
                console.error(error);
            });
    };

    return (
        <div id="contact" className="bg-gray-900 text-white py-20 px-6 md:px-16">
            <div className="flex justify-center mt-20">
                <div className="bg-gray-800 rounded-2xl p-8 shadow-xl w-full max-w-lg">

                    <h2 className="text-3xl font-bold text-blue-500 text-center mb-6">Contact Me</h2>

                    {formSubmitted ? (
                        <p className="text-green-400 text-center text-lg font-semibold animate-pulse">
                            ✅ Your message has been sent successfully!
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                    className="bg-white text-black border border-blue-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                    className="bg-white text-black border border-blue-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your message"
                                    className="bg-white text-black border border-blue-300 rounded-lg p-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
