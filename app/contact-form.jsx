'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    // Simple client-side validation
    const requiredFields = ['fullName', 'email', 'message'];
    for (let field of requiredFields) {
      if (!formData.get(field)?.toString().trim()) {
        setStatus(`Please fill out the ${field} field.`);
        setLoading(false);
        return;
      }
    }

    formData.append('form_token', 'jhfiuw&^uiwher^E#(hsaidufh');

    try {
      const res = await fetch('https://hirondev.com/send/send-email.php', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        setStatus('✅ Message sent successfully!');
        form.reset();
      } else {
        setStatus(`❌ ${result.message || 'Something went wrong.'}`);
      }
    } catch (error) {
      setStatus('❌ Failed to send message.');
      console.log(error)
    }

    setLoading(false);
  };

  return(
    <form
        onSubmit={handleSubmit}
        className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-md space-y-4"
        data-aos="fade-right"
        data-aos-delay="100"
        >
        <div className="grid md:grid-cols-2 gap-4">
            <input
            type="text"
            name="fullName"
            placeholder="Full Name *"
            className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
            />
            <input
            type="email"
            name="email"
            placeholder="Email *"
            className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
            />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
            <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
            />
            <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
            />
        </div>
        <textarea
            name="message"
            rows="5"
            placeholder="Message *"
            className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-400"
        ></textarea>

        <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md transition disabled:opacity-50"
            disabled={loading}
        >
            {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status && (
            <p className="text-sm mt-2 text-gray-300 transition-all">{status}</p>
        )}
        </form>

  )
}
