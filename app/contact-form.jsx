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

    // Simple client-side validation
    const fullName = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const company = form.company.value.trim();
    const message = form.message.value.trim();

    if (!fullName || !email || !message) {
      setStatus('❌ Full Name, Email, and Message are required.');
      setLoading(false);
      return;
    }

    try {
      const token = await grecaptcha.execute('6Le7Z4grAAAAADQHrgivW_qnuaMexQzcHWLVJJFM', { action: 'submit' });

      const payload = {
        fullName,
        email,
        phone,
        company,
        message,
        form_token: 'jhfiuw&^uiwher^E#(hsaidufh',
        recaptchaToken: token,
      };

      const res = await fetch('https://hirondev.com/send/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setStatus('✅ Message sent successfully! I’ll get back to you shortly.');
        form.reset();
      } else {
        setStatus(`❌ ${result.error || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error(error);
      setStatus('❌ Failed to send message.');
    }

    setLoading(false);
  };

  return (
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

      {status && <p className="text-sm mt-2 text-gray-300 transition-all">{status}</p>}
    </form>
  );
}
