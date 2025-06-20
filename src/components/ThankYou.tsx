import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100 px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Thank You!</h1>
        <p className="text-slate-600 mb-6">
          Your message has been sent successfully. I’ll get back to you soon.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;
