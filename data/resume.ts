export const resume = {
  name: 'Sudheer Avula',
  location: 'Provo, Utah',
  phone: '385-204-3339',
  email: 'sudheer.avula@gmail.com',
  linkedin: 'https://linkedin.com/in/sudheer-avula',
  github: 'https://github.com/avula-sudheer',
  headline:
    'Staff Software Engineer',
  summary:
    'Driving cloud-native modernization and secure, scalable enterprise platforms. Skilled in building distributed systems and high-performance applications using backend, frontend, and Kubernetes-based technologies. Proven in technical leadership, mentoring, and delivering measurable platform and business improvements.',
  skills: {
    frontend: ['Angular', 'TypeScript', 'HTML', 'CSS', 'JSP'],
    backend: ['Java', 'Spring Boot', 'Quarkus', 'REST', 'GraphQL', 'Python', 'C#', 'Node.js'],
    cloud: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Helm', 'Serverless', 'Microservices'],
    dbms: ['Oracle', 'MS SQL', 'Sybase', 'PostgreSQL', 'MySQL', 'MongoDB'],
    warehouse: ['Amazon Redshift', 'Google BigQuery', 'Snowflake', 'Databricks'],
    security: ['Encryption', 'Tokenization', 'FPE', 'Masking'],
    scripting: ['Bash', 'PowerShell', 'Ruby'],
    devops: ['Ant', 'Maven', 'Gradle', 'Make', 'npm', 'Webpack', 'pip', 'MSBuild'],
    secops: ['GitLab CI/CD', 'Jenkins', 'OWASP', 'SAST', 'Container Security'],
    messaging: ['Redis', 'RabbitMQ', 'Kafka'],
    leadership: ['Technical Strategy', 'Mentorship', 'Agile', 'Cross-Team Influence'],
  },
  experience: [
    {
      role: 'Lead Software Engineer',
      company: 'OpenText',
      location: 'Provo, UT',
      start: 'Jan 2023',
      end: 'Present',
      bullets: [
        'Modernized legacy Java services using Quarkus, delivering 60% faster startup and 40% lower memory usage.',
        'Architected Kubernetes microservices and Helm-based deployments, improving resiliency and achieving 3× more consistent releases.',
        'Led Angular migration and built reusable UI libraries to reduce duplication and accelerate delivery.',
        'Implemented GitLab CI/CD pipelines with SAST, dependency scanning, and IaC checks to strengthen security posture.',
        'Drove adoption of OWASP secure coding practices and formalized threat modeling, reducing recurring vulnerabilities.',
      ],
    },
    {
      role: 'Senior Member of Technical Staff',
      company: 'Micro Focus',
      location: 'Provo, UT',
      start: 'Jun 2018',
      end: 'Jan 2023',
      bullets: [
        'Designed and implemented encryption workflows and SecureData Integrations for Snowflake, BigQuery, Redshift, and Databricks.',
        'Built cross-platform encryption and tokenization services adopted by multiple Fortune 500 clients.',
        'Automated Jenkins pipelines with static analysis and container scanning, increasing release reliability by 30%.',
        'Led architecture reviews, performance tuning, and threat modeling initiatives to improve system stability.',
      ],
    },
    {
      role: 'Software Consultant',
      company: 'Novell',
      location: 'Bangalore, India',
      start: 'Jul 2007',
      end: 'Jun 2018',
      bullets: [
        'Built a large-scale App Store–like delivery system to improve global software distribution reliability.',
        'Modernized endpoint agent update processes to improve deployment efficiency.',
        'Mentored developers and introduced Agile practices to improve productivity and code quality.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Satyam Computer Services',
      location: 'Hyderabad, India',
      start: 'Apr 2006',
      end: 'Jul 2007',
      bullets: ['Enhanced enterprise applications and optimized SQL workflows.'],
    },
    {
      role: 'Java Developer',
      company: 'Adroit Claretdene Infotech',
      location: 'Bangalore, India',
      start: 'Jun 2004',
      end: 'Mar 2006',
      bullets: ['Developed Java backend modules and JSP-based UI components.'],
    },
    {
      role: 'Junior Software Engineer',
      company: 'Babutech R&D',
      location: 'Hyderabad, India',
      start: 'Jul 2003',
      end: 'Apr 2004',
      bullets: ['Built UI features and managed XML-based configuration tooling.'],
    },
  ],
  certifications: ['Microsoft Certified: Azure Fundamentals (AZ-900)', 'Google Cloud Certified: Cloud Digital Leader', 'Google Cloud Certified: Gen AI Leader'],
  education: { school: 'University of Madras', degree: 'B.E. in Computer Science', start: 'Oct 1999', end: 'Nov 2003' },
  awards: [
    {
      title: 'CEO Excellence Award',
      description:
        'Recognized for technical leadership and platform modernization efforts that directly contributed to a major customer win.',
    },
    {
      title: 'Leadership & Excellence Recognitions',
      description:
        'Earned management recognition for leading the rollout of secure software supply chain practices and driving cross-team alignment.',
    },
  ],
}

export type Resume = typeof resume

export default resume
