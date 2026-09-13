import React from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-6 pb-12 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-10 shadow-xs space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Get in Touch</h1>
          <p className="text-xs text-gray-500 mt-1">
            Have feedback, product partnership inquiries, or general questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border border-gray-200 bg-gray-50 text-center space-y-1">
            <Mail className="w-5 h-5 text-indigo-600 mx-auto" />
            <h3 className="text-xs font-bold text-gray-900">Email Us</h3>
            <p className="text-xs text-indigo-600 font-medium">support@dealfind.in</p>
          </div>
          <div className="p-4 rounded-lg border border-gray-200 bg-gray-50 text-center space-y-1">
            <MessageSquare className="w-5 h-5 text-indigo-600 mx-auto" />
            <h3 className="text-xs font-bold text-gray-900">Partnerships</h3>
            <p className="text-xs text-indigo-600 font-medium">affiliates@dealfind.in</p>
          </div>
          <div className="p-4 rounded-lg border border-gray-200 bg-gray-50 text-center space-y-1">
            <MapPin className="w-5 h-5 text-indigo-600 mx-auto" />
            <h3 className="text-xs font-bold text-gray-900">Location</h3>
            <p className="text-xs text-gray-600">Bengaluru, KA, India</p>
          </div>
        </div>

        <form className="space-y-4 pt-4 border-t border-gray-100 max-w-xl mx-auto text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Rahul Sharma"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="rahul@example.com"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
