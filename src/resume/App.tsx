import React from 'react'

type Link = { label: string; href: string }
type Bullet = string

type Experience = {
  role: string
  org: string
  location: string
  start: string
  end: string
  bullets: Bullet[]
}

type Project = {
  name: string
  stack: string
  bullets: Bullet[]
  href?: string
}

const links: Link[] = [
  { label: 'GitHub', href: 'https://github.com/sohammirajkar' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/soham-mirajkar-8443a0270' },
  { label: 'Email', href: 'mailto:sohammirajkar222@gmail.com' },
  { label: 'Download PDF', href: './Soham_Mirajkar_IB_Resume.pdf' }
]

const skills = [
  'Python', 'TypeScript', 'SQL', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy',
  'Tableau', 'Matplotlib', 'Power BI', 'PostgreSQL', 'MySQL', 'Docker', 'Git', 'LangChain',
  'Hypothesis Testing', 'A/B Testing', 'Time Series', 'Classification', 'Regression', 'EDA',
  'DCF Modeling', 'Portfolio Optimization', 'Options Pricing (Black-Scholes, Binomial)',
  'Value at Risk (VaR)', 'Monte Carlo Simulation', 'Stochastic Processes',
  'Correlation & Covariance Analysis', 'Sensitivity & Scenario Analysis', 'Financial Time Series Forecasting'
]


const experiences: Experience[] = [
  {
    role: 'Research Assistant — Quantitative Methods',
    org: 'MedKind Pharma',
    location: 'Thane, India',
    start: 'Jul 2024',
    end: 'Present',
    bullets: [
      'Applied computational statistics to analyze molecular datasets; co-authored a peer‑reviewed study on Moringa Oleifera Lam.',
      'Built reproducible data pipelines and documentation improving experiment traceability and audit readiness.'
    ]
  },
  {
    role: 'Business Intelligence Volunteer',
    org: 'Hertz Car Sales',
    location: 'Pleasanton, CA',
    start: 'Jan 2023',
    end: 'Dec 2023',
    bullets: [
      'Modeled demand and pricing signals; surfaced opportunities that informed sales strategy.',
      'Built dashboards to monitor funnel metrics and cohort behaviors for data‑driven decisions.'
    ]
  },
  {
    role: 'Sales Data Analyst (Contract)',
    org: 'Google / Bleep‑Press',
    location: 'Cupertino, CA',
    start: 'Sep 2022',
    end: 'Dec 2022',
    bullets: [
      'Optimized CRM‑driven campaigns; improved lead‑to‑conversion by ~15% via segmentation and A/B tests.',
      'Automated KPI reporting to reduce manual effort and increase timeliness of insights.'
    ]
  },
  {
    role: 'Operations Analyst',
    org: 'Chevron',
    location: 'Sunnyvale, CA',
    start: 'Jan 2021',
    end: 'Jan 2022',
    bullets: [
      'Forecasted inventory and demand using statistical models, reducing stockouts and overages.',
      'Defined quality metrics and instituted monitoring for process improvements.'
    ]
  }
]

// Updated GitHub + existing highlight projects
const projects: Project[] = [
  {
    name: 'Kuber AI — AI Agent for Enterprise Financial Analysis',
    stack: 'Python · LangChain · FAISS · FastAPI · Retrieval‑Augmented Generation',
    href: 'https://github.com/sohammirajkar/Kuber_AI',
    bullets: [
      'Experimental platform inspired by BlackRock’s Aladdin using open‑source tooling.',
      'Modular agents for portfolio analytics, risk monitoring, and market intelligence.',
      'Document parsing + vector search for rapid insight retrieval across research corpora.'
    ]
  },
  {
    name: 'PrivateEquity Deal Screener',
    stack: 'JavaScript · Node.js · Puppeteer · Google Sheets API',
    href: 'https://github.com/sohammirajkar/PrivateEquity_DealScreener',
    bullets: [
      'Automated PE deal sourcing across multiple data providers and IR portals.',
      'Filtering by sector, geography, AUM and deal size; structured output to GSheets for analyst review.'
    ]
  },
  {
    name: 'Black‑Scholes EKF Demo',
    stack: 'JavaScript · D3.js · Math.js',
    href: 'https://github.com/sohammirajkar/BlackScholes_EKF_Demo',
    bullets: [
      'Interactive option pricing demo (Black‑Scholes) with Extended Kalman Filter for volatility estimation.',
      'Live visualization of price surfaces and dynamic volatility updates.'
    ]
  },
  {
    name: 'JPMorgan Data Science Project',
    stack: 'Python · Pandas · scikit‑learn · Plotly',
    href: 'https://github.com/sohammirajkar/jpmorgan_data_science_project',
    bullets: [
      'Modeled financial time series and risk factors using sample datasets.',
      'Built classification/regression models and dashboards to visualize performance and drivers.'
    ]
  },
  {
    name: 'MCP Server (Modular Chat Protocol)',
    stack: 'Python · FastAPI',
    href: 'https://github.com/sohammirajkar/MCP_Server',
    bullets: [
      'Server enabling AI agents to integrate with external data sources via a structured protocol.',
      'Supports context persistence and multi‑turn flows for analytics queries.'
    ]
  },
  {
    name: 'Debank — Payment Risk & Fraud Analytics',
    stack: 'Python · Hyperledger Fabric · APIs (Plaid, Sentry, Dwolla)',
    bullets: [
      'Integrated real‑time transaction monitoring and anomaly detection for risk scoring.',
      'Exposed REST endpoints and dashboards for finance analytics and audit workflows.'
    ]
  },
  {
    name: 'HAL‑3001 — Conversational AI',
    stack: 'PyTorch · Transformers · LangChain · Streamlit',
    bullets: [
      'Built NLP pipelines for intent classification and response generation; rapid iteration with Colab.',
      'Deployed an interactive interface to test models and latency characteristics.'
    ]
  },
  {
    name: '#Cali_on_Film — Visual Analytics',
    stack: 'Computer Vision · Statistics',
    bullets: [
      'Applied unsupervised learning to image metadata and features for content categorization.'
    ]
  }
]

const publications = [
  {
    title: 'Moringa Oleifera Lam: Pharmacologically Efficient Herb',
    venue: 'ABR International Journal, 2024',
    summary: 'Co‑authored peer‑reviewed research on phytochemistry, pharmacokinetics, and therapeutic efficacy of Moringa Oleifera.',
    link: ' https://www.abrinternationaljournal.org/articles/emmoringa-oleiferaem-lam-pharmacologically-efficient-herb.pdf' // replace with actual DOI/URL
  }
]

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="name">Soham Mirajkar</div>
        <div className="title">Data Scientist / AI Engineer — focused on Risk, Analytics, and Markets</div>
        <div className="toplinks">
          {links.map(l => <a key={l.href} className="pill" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
        </div>
      </header>

      <div className="grid">
        <main className="section">
          <section className="card">
            <h2>Professional Summary</h2>
            <p>
              Data and ML specialist with experience building analytics and risk systems, from anomaly detection in payments to
              demand and pricing models. Comfortable across Python/TS stacks, statistics, experiment design, and stakeholder‑ready
              dashboards. Seeking roles in investment banking or fintech where quant‑minded product and data impact real P&L.
            </p>
          </section>

          <section className="card">
            <h2>Experience</h2>
            {experiences.map((e, idx) => (
              <div className="item" key={idx}>
                <div className="dot" />
                <div>
                  <div className="role">{e.role}</div>
                  <div className="org">{e.org} · {e.location}</div>
                  <div className="meta">{e.start} – {e.end}</div>
                  <ul>
                    {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </section>

          <section className="card">
            <h2>Selected Projects</h2>
            {projects.map((p, idx) => (
              <div className="item" key={idx}>
                <div className="dot" />
                <div>
                  <div className="role">
                    {p.href ? <a href={p.href} target="_blank" rel="noreferrer">{p.name}</a> : p.name}
                  </div>
                  <div className="meta">{p.stack}</div>
                  <ul>
                    {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </section>
        </main>

        <aside className="section">
          <section className="card">
            <h2>Skills</h2>
            <div className="skills">
              {skills.map(s => <span key={s} className="skill">{s}</span>)}
            </div>
          </section>
          <section className="card">
            <h2>Education</h2>
            <ul>
              <li>B.Tech (pursuing) — Data Science & Applied A.I, IIT Jodhpur</li>
              <li>A.S. Mathematics — Foothill‑De Anza College, Cupertino, CA</li>
              <li>MCPHS (coursework): Biostatistics, Pharmacokinetics, Clinical Research Methods</li>
              <li>XII Science (PCM) — Fergusson College, Pune (94.5%)</li>
            </ul>
          </section>
          <section className="card">
            <h2>Certifications</h2>
            <ul>
              <li>Google Digital Marketing & Analytics (1–6)</li>
              <li>Wharton Entrepreneurship (1–3)</li>
              <li>U. Michigan Negotiation & Communication (1–3)</li>
            </ul>
          </section>
          <section className="card">
            <h2>Publications</h2>
            <ul>
              {publications.map((p, i) => (
                <li key={i}>
                  <div className="role">
                    {p.link ? <a href={p.link} target="_blank" rel="noreferrer">{p.title}</a> : p.title}
                  </div>
                  <div className="meta">{p.venue}</div>
                  <p className="org">{p.summary}</p>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>

      <div className="footer">
        <span>© {new Date().getFullYear()} Soham Mirajkar</span>
        <a className="btn" href="https://github.com/sohammirajkar" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  )
}
