import { useState } from 'react'
import resume from '../data/resume'

export default function Contact() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section>
      <h2 className="text-3xl font-extrabold">Get in touch</h2>
      <p className="mt-3 text-slate-700 max-w-2xl">I'd love to hear about your project or opportunities. Below are the best ways to reach me — pick whichever works for you.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg bg-white dark:bg-slate-800">
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Prefer email? Send a message directly.</p>
          <a href={`mailto:${resume.email}`} className="mt-3 inline-block text-slate-900 dark:text-slate-100 font-medium">{resume.email}</a>
        </div>

        <div className="p-4 border rounded-lg bg-white dark:bg-slate-800">
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Call or text me during business hours.</p>
          <a href={`tel:${resume.phone}`} className="mt-3 inline-block text-slate-900 dark:text-slate-100 font-medium">{resume.phone}</a>
        </div>

        <div className="p-4 border rounded-lg bg-white dark:bg-slate-800">
          <h3 className="text-lg font-semibold">LinkedIn</h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Connect with me on LinkedIn for updates and networking.</p>
          <a href={resume.linkedin} target="_blank" rel="noreferrer" className="mt-3 inline-block text-slate-900 dark:text-slate-100 font-medium">{resume.linkedin}</a>
        </div>

        <div className="p-4 border rounded-lg bg-white dark:bg-slate-800">
          <h3 className="text-lg font-semibold">Location</h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Based in:</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resume.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-medium text-slate-900 dark:text-slate-100"
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
