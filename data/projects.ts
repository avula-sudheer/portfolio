import { title } from "process"

export const projects = [
  {
    title: 'Data Privacy & Protection',
    slug: 'data-privacy-protection',
    description: 'Data Privacy & Protection helps to reduce risk, enable compliance, and secure data at scale. With quantum-ready, format-preserving protection, stateless key management, and deep integrations across cloud and hybrid IT, you can protect sensitive data without breaking workflows or analytics.',
    tech: ['Java', 'Sprint Boot', 'Quarkus', 'Angular', 'Python', 'Kubernetes', 'Helm', 'GitLab CI/CD', 'SAST', 'IaC', 'OWASP', 'Container Security'],
    image: '/images/dpp.svg',
    link: 'https://www.opentext.com/products/data-privacy-protection-foundation',
    role: 'Lead Software Engineer',
    responsibilities: [
      'Legacy Modernization: Transformed monolithic Java applications into cloud-native microservices using Quarkus, achieving 60% faster startup times and 40% reduced memory consumption, significantly enhancing application performance and scalability.',
      'Cloud Architecture: Designed and implemented robust Kubernetes microservices architectures with Helm-based deployments, resulting in a threefold increase in release consistency and improved system resiliency.',
      'Frontend Revamp: Spearheaded the migration to Angular, developing reusable UI component libraries that minimized code duplication and accelerated feature delivery across multiple projects.',
      'SecOps: Championed the adoption of OWASP secure coding standards and formalized threat modeling processes, leading to a significant reduction in recurring security vulnerabilities and enhancing overall application security.',
      'DevOps: Established comprehensive GitLab CI/CD pipelines incorporating SAST, dependency scanning, and Infrastructure as Code (IaC) security checks, thereby fortifying the security posture of the development lifecycle.',
    ],
  },
  {
    title: 'Voltage SecureData Integrations',
    slug: 'voltage-securedata-integrations',
    description: 'Voltage SecureData Integration provides data-centric security solutions that protect sensitive information across various platforms and data warehouses. By leveraging advanced encryption, tokenization, and key management techniques, it ensures data privacy and compliance with regulatory requirements while maintaining data usability for analytics and operations.',
    tech: ['Java', 'Redshift', 'Snowflake', 'BigQuery', 'Databricks', 'AWS', 'Azure', 'GCP', 'Serverless', 'API Gateway', 'IAM', 'Bash', 'Python', 'Terraform', 'OWASP'],
    image: '/images/vsd.svg',
    link: 'https://www.opentext.com/products/data-privacy-protection-foundation#integration',
    role: 'Senior Member of Technical Staff',
    responsibilities: [
      // 'Designed and implemented encryption workflows and SecureData Integrations for Snowflake, BigQuery, Redshift, and Databricks.',
      // 'Built cross-platform encryption and tokenization services adopted by multiple Fortune 500 clients.',
      // 'Automated Jenkins pipelines with static analysis and container scanning, increasing release reliability by 30%.',
      // 'Led architecture reviews, performance tuning, and threat modeling initiatives to improve system stability.',
      
      'Cross-Platform Security Architecture: Designed and implemented complex encryption workflows and SecureData Integrations across heterogeneous environments ',
      'Data Warehouses: Snowflake, Google BigQuery, Amazon Redshift, and Databricks.',
      'Streaming & ETL: Kafka, AWS Glue.',
      'Serverless Compute: AWS Lambda, Azure Functions, Google Cloud Functions.',
      'Service Development: Built robust, cross-platform encryption and tokenization services adopted by multiple Fortune 500 clients, significantly improving data protection and accelerating secure application onboarding.',
      'Quality & Stability Leadership: Led architecture reviews, performance tuning, and threat modeling initiatives, directly improving system stability, scalability, and security posture across integrated platforms.'
    ],
  },
  {
    title: 'ZENworks',
    slug: 'zenworks',
    description: 'ZENworks is a comprehensive suite of endpoint management solutions that streamline IT operations and enhance security across diverse device environments. It offers robust features for software distribution, patch management, asset tracking, and remote control, enabling organizations to efficiently manage and secure their endpoints while ensuring compliance with corporate policies.',
    tech: ['Java', 'JSP', 'Web Services','Javascript', 'C#', 'Sybase', 'Oracle', 'MS SQL', 'Tomcat'],
    image: '/images/zenworks.png',
    link: 'https://www.opentext.com/products/zenworks-suite',
    role: 'Software Consultant',
    responsibilities: [
      'Large-Scale Infrastructure: Built a large-scale, App Store-like delivery system to address rollout inefficiencies, resulting in improved global software distribution reliability.',
      'Deployment Optimization: Modernized the endpoint agent update process, significantly improving deployment efficiency and minimizing customer operational overhead.',
      'Design & Quality Assurance: Involved across the entire SDLC, contributing to design, development, and maintenance; systematically performed rigorous review of design documents, code, unit test cases, and product documentation.',
      'Technical Improvement: Identified critical design limitations and led efforts to prototype and implement significant improvement areas within the existing product architecture.',
    ],
  },
  {
    title: 'Dealer Jobber portal',
    slug: 'dealer-jobber-portal',
    description: 'The Dealer Jobber portal is a comprehensive platform designed to streamline operations and communications between dealers and jobbers. It offers features such as order management, role-based access, bulk-order workflows, notifications, and reconciliation APIs, all aimed at enhancing efficiency and collaboration within the supply chain.',
    tech: ['Java', 'Servlets', 'JSP', 'Oracle', 'iPlanet'],
    image: '/images/bp-dj-portal.png',
    link: 'https://www.bp.com',
    role: 'Software Engineer',
    responsibilities: [
      'Feature Development: Developed and maintained key front-end components and back-end logic for the partner portal using JSP and Servlets.',
      'Process Automation: Implemented modules for core business processes enabling BP to reduce operational costs and increase efficiency for channel partners.',
      'Secure Data Handling: Ensured secure, role-based access to the platform, managing data and communication flows to provide strategic and timely information to partners.',
    ],
  },
  {
    title: 'NTPC - Financial Forecasting Model',
    slug: 'ntpc-financial-forecasting-model',
    description: 'Developed an internal automation system to support Corporate Finance Strategies for National Thermal Power Corporation (NTPC), enabling robust scenario planning and high-level analytical reporting for future expansion initiatives.',
    tech: ['Java', 'Struts', 'Data Analysis', 'Stored Procedures', 'Oracle'],
    image: '/images/ntpc-ffm.png',
    link: 'https://ntpc.co.in',
    role: 'Software Engineer',
    responsibilities: [
      'Data Visualization & Reporting: Developed user interfaces and backend logic for generating high-level financial dashboards, providing strategic insights into future expansion plan viability.',
      'Modeling Automation: Wrote database store procedures and implemented modules to automate complex financial calculations, specifically for Sensitivity Analysis and Scenario Analysis.',
      'System Integration: Integrated the analytical system with core financial data sources to ensure accuracy and real-time refresh of metrics used for strategy formulation.',
    ],
  },
  {
    title: 'MWSC - Utility Billing System',
    slug: 'mwsc-utility-billing-system',
    description: 'To modernize the utility billing infrastructure for Maldives Water and Sewerage Company (MWSC) by implementing "Equip," a third-party billing engine. The goal was to automate revenue cycles and establish seamless data synchronization between the new billing tool, the existing Oracle ERP ecosystem, and field hardware.',
    tech: ['Java', 'HTML', 'Javascript', 'MongoDB'],
    image: '/images/mwsc.png',
    link: 'https://www.mwsc.com.mv',
    role: 'Software Engineer',
    responsibilities: [
      'Billing Logic Implementation: Implemented core utility billing logic and specific rate configurations within the \'Equip\' system using Java, and SQL.',
      'API Development: Developed API interfaces to facilitate bi-directional data exchange with Oracle Accounts Receivable (AR) (for financial posting) and CRM (for customer management).',
      'AMR Data Layer: Contributed to the development of the data communication layer responsible for ingesting and validating usage data from AMR (Automated Meter Reading) devices.',
    ],
  }
]

export default projects
