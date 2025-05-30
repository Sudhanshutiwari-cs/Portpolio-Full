import React from 'react';

const ContactCard = () => (
  <div className="bg-[#111] p-6 rounded-2xl shadow-lg border border-gray-800 text-center">
    <h3 className="text-xl font-semibold mb-4">📬 Let's work together</h3>
    <a href="mailto:hello@ayushbharti.in" className="inline-block bg-white text-black px-6 py-2 rounded-full transition hover:bg-gray-200">
      hello@ayushbharti.in
    </a>
  </div>
);

export default ContactCard;
