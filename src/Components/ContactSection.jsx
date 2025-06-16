// import { Phone, Mail } from 'lucide-react'

// const ContactSection = () => {
//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
//           <p className="text-xl text-gray-600">Get in touch to start your pet's personalized care journey</p>
//         </div>
//           <div className="bg-white rounded-xl py-8 px-8 md:px-45">

//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
//                   <input
//                     type="text"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Pet Name</label>
//                   <input
//                     type="text"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                 <textarea
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Tell us about your pet and what kind of care plan you're looking for..."
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>        
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  /* ---------- form state ---------- */
  const [form, setForm] = useState({
    name: '',
    petName: '',
    email: '',
    message: '',
  });

  /* ---------- UI feedback ---------- */
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  /* ---------- handlers ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',                 // required for anonymous Apps Script POST
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      setStatus({ loading: false, success: true, error: '' });
      setForm({ name: '', petName: '', email: '', message: '' }); // clear form
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'Something went wrong. Please try again.',
      });
    }
  };

  /* ---------- UI ---------- */
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">
            Get in touch to start your pet&apos;s personalized care journey
          </p>
        </div>

        {/*   OPTIONAL static contact cards (uncomment if you need them)
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-600">+91 9958655743</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-gray-600">hello@petcarehub.com</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* feedback banners */}
        {status.success && (
          <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-700 text-center">
            🎉 Message sent! We’ll get back to you soon.
          </div>
        )}
        {status.error && (
          <div className="mb-6 rounded-lg bg-red-100 p-4 text-red-700 text-center">
            {status.error}
          </div>
        )}

        <div className="bg-white rounded-xl py-8 px-8 md:px-45">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pet Name
                </label>
                <input
                  name="petName"
                  type="text"
                  value={form.petName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us about your pet and what kind of care plan you're looking for..."
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
            >
              {status.loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
