import resume from '../data/resume'

export default function TechStack() {
  return (
    <section>
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-semibold">Expertise</h1>
      </div>

      <p className="mt-4 secondary-text">A concise overview of technologies and domains I work in.</p>

      <h2 className="mt-8 text-2xl font-semibold">Core Skills</h2>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <strong>Frontend:</strong>
          <div className="mt-1 secondary-text">{resume.skills.frontend.join(', ')}</div>
        </div>
        <div>
          <strong>Backend:</strong>
          <div className="mt-1 secondary-text">{resume.skills.backend.join(', ')}</div>
        </div>
        <div>
          <strong>Cloud & Infrastructure:</strong>
          <div className="mt-1 secondary-text">{resume.skills.cloud.join(', ')}</div>
        </div>
        <div>
          <strong>Database Management Systems:</strong>
          <div className="mt-1 secondary-text">{resume.skills.dbms.join(', ')}</div>
        </div>
        <div>
          <strong>Data Warehouses:</strong>
          <div className="mt-1 secondary-text">{resume.skills.warehouse.join(', ')}</div>
        </div>
        <div>
          <strong>Data Security:</strong>
          <div className="mt-1 secondary-text">{resume.skills.security.join(', ')}</div>
        </div>
        <div>
          <strong>Build Tools:</strong>
          <div className="mt-1 secondary-text">{resume.skills.devops.join(', ')}</div>
        </div>
        <div>
          <strong>Secure Delivery:</strong>
          <div className="mt-1 secondary-text">{resume.skills.secops.join(', ')}</div>
        </div>
        <div>
          <strong>Caching & Messaging:</strong>
          <div className="mt-1 secondary-text">{resume.skills.messaging.join(', ')}</div>
        </div>
        <div>
          <strong>Leadership:</strong>
          <div className="mt-1 secondary-text">{resume.skills.leadership.join(', ')}</div>
        </div>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Certifications</h2>
      <ul className="mt-2 list-disc list-inside secondary-text">
        {resume.certifications.map((cert) => (
          <li key={cert.name}>
            {cert.credly ? (
              <a
                href={cert.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                {cert.name} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              cert.name
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
