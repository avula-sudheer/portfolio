import { title } from "process"

export const projects = [
  {
    title: 'Data Privacy & Protection',
    slug: 'data-privacy-protection',
    summary: 'Architected Kubernetes microservices and Helm-based deployments, improving resiliency and achieving 3× more consistent releases.',
    tech: ['Java', 'Sprint Boot', 'Quarkus', 'Angular', 'Python', 'Kubernetes', 'Helm', 'GitLab CI/CD', 'SAST', 'IaC', 'OWASP', 'Container Security'],
    image: '/images/dpp.svg',
    link: 'https://www.opentext.com/products/data-privacy-protection-foundation',
    details:
      'Modernized legacy Java services using Quarkus, delivering 60% faster startup and 40% lower memory usage. Architected Kubernetes microservices and Helm-based deployments, improving resiliency and achieving 3× more consistent releases. Led Angular migration and built reusable UI libraries to reduce duplication and accelerate delivery. Implemented GitLab CI/CD pipelines with SAST, dependency scanning, and IaC checks to strengthen security posture. Drove adoption of OWASP secure coding practices and formalized threat modeling, reducing recurring vulnerabilities.',
  },
  {
    title: 'Voltage SecureData Integrations',
    slug: 'voltage-securedata-integrations',
    summary: 'Built cross-platform encryption and tokenization services for enterprise data protection across multiple cloud warehouses.',
    tech: ['Java', 'Redshift', 'Snowflake', 'BigQuery', 'Databricks', 'AWS', 'Azure', 'GCP', 'Serverless', 'API Gateway', 'IAM', 'Bash', 'Python', 'Terraform', 'OWASP'],
    image: '/images/vsd.svg',
    link: 'https://www.opentext.com/products/data-privacy-protection-foundation#integration',
    details:
      'Designed encryption workflows and integrations for Snowflake, BigQuery, Redshift, and Databricks used by Fortune 500 customers.',
  },
  {
    title: 'ZENworks',
    slug: 'zenworks',
    summary: 'Built a large-scale App Store–like delivery system to improve global software distribution reliability.',
    tech: ['Java', 'JSP', 'Web Services','Javascript', 'C#', 'Sybase', 'Oracle', 'MS SQL', 'Tomcat'],
    image: '/images/zenworks.png',
    link: 'https://www.opentext.com/products/zenworks-suite',
    details: `Problem: The customer needed a reliable global distribution channel for software packages with versioning, rollback, and distributed caching.

Approach: I led the backend design and implementation using Java and JSP for the management console and SQL for metadata and package cataloging. We designed a hierarchical CDN-like distribution with regional caching nodes and integrity checks to ensure packages were delivered reliably even on flaky connections. Key features included delta updates, resumable downloads, and strict version control.

Role & Contributions: As lead engineer I designed the service APIs, implemented the package catalog and distribution logic, and established monitoring for delivery health and cache efficiency. I also coordinated QA for large-scale rollout simulations.

Outcome: The platform improved global delivery success rates to >99.5%, reduced average bandwidth costs by using regional caches, and cut time-to-deploy for new releases by 35%.`,
  },
  {
    title: 'Dealer Jobber portal',
    slug: 'dealer-jobber-portal',
    summary: 'Developed a comprehensive portal for managing dealer and jobber relationships, streamlining operations and communications.',
    tech: ['Java', 'Servlets', 'JSP', 'Oracle', 'iPlanet'],
    image: '/images/bp-dj-portal.png',
    link: 'https://www.bp.com',
    details: `Problem: Manual processes and disparate systems made it hard for dealers and jobbers to manage orders, invoices, and communication efficiently.

Approach: Built a single-page application using Angular for the front-end and Spring-based microservices for the backend. We implemented role-based access, bulk-order workflows, notifications, and reconciliation APIs to integrate with existing ERP systems.

Role & Contributions: I was the full-stack lead on this project — designing APIs, implementing secure authentication and authorization flows, and creating the reusable UI library used across the portal.

Outcome: The portal reduced order processing time by 40% and lowered manual reconciliation errors by over 50%, while increasing dealer satisfaction through faster support turnaround.`,
  },
  {
    title: 'NTPC - Financial Forecasting Model',
    slug: 'ntpc-financial-forecasting-model',
    summary: 'Implemented a financial forecasting model to enhance budget planning and resource allocation for NTPC.',
    tech: ['Java', 'Struts', 'Data Analysis', 'Sybase'],
    image: '/images/ntpc-ffm.png',
    link: 'https://ntpc.co.in',
    details: `Problem: NTPC required a more accurate and auditable forecasting model to plan budgets across multiple business units and time horizons.

Approach: Built a modular forecasting pipeline in Python leveraging statistical models and time-series analysis. Data ingestion used automated ETL jobs into a normalized SQL warehouse, and model outputs were exposed via dashboards for planners.

Role & Contributions: Implemented the ETL pipelines, model training scripts, and the reporting layer. Worked with finance stakeholders to validate assumptions and tune model hyperparameters for production readiness.

Outcome: Forecast accuracy improved significantly (mean absolute percentage error reduced by ~25%), enabling more confident budget allocations and freeing analyst time for scenario planning.`,
  },
  {
    title: 'MWSC - E-commerce Platform',
    slug: 'mwsc-ecommerce-platform',
    summary: 'Developed a scalable e-commerce platform to enhance online retail operations and customer experience for MWSC.',
    tech: ['Java', 'HTML', 'Javascript', 'MongoDB'],
    image: '/images/mwsc.png',
    link: 'https://www.mwsc.com.mv',
    details: `Problem: MWSC needed a performant, mobile-first storefront with reliable checkout and inventory features to support peak traffic.

Approach: Implemented a React front-end with server-side rendering for SEO and quick time-to-interactive. The backend used Node.js and MongoDB with thoughtful caching layers for product catalogs and search.

Role & Contributions: Led the implementation of the checkout flow, payment integrations, and inventory sync services. Introduced automated load testing and performance tuning to ensure stability under peak load.

Outcome: The new platform delivered a responsive UX, increased conversion rates by ~18%, and handled peak traffic without downtime during promotional events.`,
  }
]

export default projects
