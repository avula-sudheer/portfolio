import { useState } from 'react'
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react'
import resume from '../data/resume'

export default function Contact() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section>
      <h2 className="text-3xl font-extrabold">Get in touch</h2>
      <p className="mt-3 secondary-text max-w-2xl">I'd love to hear about your project or opportunities. Below are the best ways to reach me — pick whichever works for you.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg bg-white dark:bg-slate-800 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-5 h-5 text-slate-900 dark:text-slate-100" />
            <h3 className="text-lg font-semibold">Email</h3>
          </div>
          <p className="mt-2 secondary-text">Prefer email? Send a message directly.</p>
          <a href={`mailto:${resume.email}`} className="mt-3 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors">{resume.email}</a>
        </div>

        <div className="p-4 border rounded-lg bg-white dark:bg-slate-800 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <Phone className="w-5 h-5 text-slate-900 dark:text-slate-100" />
            <h3 className="text-lg font-semibold">Phone</h3>
          </div>
          <p className="mt-2 secondary-text">Call or text me during business hours.</p>
          <a href={`tel:${resume.phone}`} className="mt-3 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors">{resume.phone}</a>
        </div>

        <div className="p-4 border rounded-lg bg-white dark:bg-slate-800 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <Linkedin className="w-5 h-5 text-slate-900 dark:text-slate-100" />
            <h3 className="text-lg font-semibold">LinkedIn</h3>
          </div>
          <p className="mt-2 secondary-text">Connect with me on LinkedIn for updates and networking.</p>
          <a href={resume.linkedin} target="_blank" rel="noreferrer" className="mt-3 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors">{resume.linkedin}</a>
        </div>

        <div className="p-4 border rounded-lg bg-white dark:bg-slate-800 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-slate-900 dark:text-slate-100" />
            <h3 className="text-lg font-semibold">Location</h3>
          </div>
          <p className="mt-2 secondary-text">Based in:</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resume.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            {resume.location}
          </a>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Prefer to send a quick note?</h3>
        <p className="text-slate-600 mt-2">You can use the contact form below — or click the email link above to open your mail client.</p>
        <button onClick={() => setShowForm((s) => !s)} className="mt-4 px-4 py-2 bg-slate-900 text-white rounded">{showForm ? 'Hide form' : 'Open contact form'}</button>

        {showForm && (
          <form className="mt-4 max-w-lg">
            <label className="block">Name
              <input name="name" className="mt-1 w-full border rounded px-2 py-1" />
            </label>
            <label className="block mt-3">Email
              <input name="email" type="email" className="mt-1 w-full border rounded px-2 py-1" />
            </label>
            <label className="block mt-3">Message
              <textarea name="message" className="mt-1 w-full border rounded px-2 py-1" rows={4} />
            </label>
            {/* <div className="mt-3 text-sm text-slate-500">This form is a demo; to enable submissions set <code>NEXT_PUBLIC_FORMSPREE_ID</code> in your environment.</div> */}
            <button type="button" className="mt-4 px-4 py-2 bg-slate-900 text-white rounded">Send</button>
          </form>
        )}
      </div>
    </section>
  )
}
