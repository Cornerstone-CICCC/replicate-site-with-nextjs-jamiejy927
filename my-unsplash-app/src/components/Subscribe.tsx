"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="advertise" className="bg-gray-900 text-white py-20 px-4 mt-16">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center justify-center p-3 bg-gray-800 rounded-full text-white mb-2">
          <Mail className="w-6 h-6" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Get the best photos delivered to your inbox</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Join our community of over 3 million creators. No spam, unsubscribe at any time.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 py-4 px-6 rounded-xl font-medium">
            <CheckCircle2 className="w-5 h-5" />
            <span>Thank you for subscribing! We've saved your email.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-white transition"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}