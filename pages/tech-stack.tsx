import resume from '../data/resume'

export default function TechStack() {
  return (
    <section>
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
      </div>

      <p className="mt-4 secondary-text">A concise overview of technologies and domains I work in.</p>

      <h3 className="mt-6 text-lg font-semibold">Core Skills</h3>
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
          <strong>Cloud & Infra:</strong>
          <div className="mt-1 secondary-text">{resume.skills.cloud.join(', ')}</div>
        </div>
        <div>
          <strong>Database Management Systems:</strong>
          <div className="mt-1 secondary-text">{resume.skills.dbms.join(', ')}</div>
        </div>
        <div>
          <strong>Data Warehouse:</strong>
          <div className="mt-1 secondary-text">{resume.skills.warehouse.join(', ')}</div>
        </div>
        <div>
          <strong>Data Security:</strong>
          <div className="mt-1 secondary-text">{resume.skills.security.join(', ')}</div>
        </div>
        <div>
          <strong>BuildOps:</strong>
          <div className="mt-1 secondary-text">{resume.skills.devops.join(', ')}</div>
        </div>
        <div>
          <strong>SecOps:</strong>
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

      <h3 className="mt-6 text-lg font-semibold">Certifications</h3>
      <ul className="mt-2 list-disc list-inside secondary-text">
        {resume.certifications.map((cert) => (
          <li key={cert.name}>
            {cert.credly ? (
              <a
                href={cert.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
              >
                {cert.name}
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
