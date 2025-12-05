
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { PROFILE } from '../constants';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const mailtoLink = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
      {/* Contact Info Side */}
      <div className="bg-slate-900 text-white p-10 md:w-2/5 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Ready to transform your communication skills or leadership style? 
            Reach out today to schedule a consultation.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <Mail className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Email</p>
                <a href={`mailto:${PROFILE.email}`} className="font-medium hover:text-blue-300 transition-colors">{PROFILE.email}</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <Phone className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Phone</p>
                <a href={`tel:${PROFILE.phone}`} className="font-medium hover:text-blue-300 transition-colors">{PROFILE.phone}</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600/20 p-3 rounded-lg">
                <MapPin className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Location</p>
                <p className="font-medium">{PROFILE.location}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500">
            I typically respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="p-10 md:w-3/5">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
            >
              <option value="">Select a topic...</option>
              <option value="Pronunciation Coaching">English Pronunciation Coaching</option>
              <option value="Leadership Coaching">Leadership Coaching</option>
              <option value="Corporate Training">Corporate Training</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 group"
          >
            Send Message
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
