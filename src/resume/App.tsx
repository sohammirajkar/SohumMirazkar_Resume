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
  'Python', 'R', 'C++', 'SQL', 'MATLAB', 'Bloomberg Terminal', 'Refinitiv Eikon', 'Capital IQ',
  'PyTorch', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'SciPy', 'QuantLib', 'Streamlit',
  'Fixed Income Analytics', 'Equity Derivatives', 'Credit Risk Models', 'Market Risk (VaR, CVaR)',
  'GARCH Models', 'LSTM Networks', 'ARIMA', 'Copula Theory', 'Jump-Diffusion Models', 'Regime-Switching Models',
  'Monte Carlo Simulation', 'Quasi-Monte Carlo', 'MCMC Methods', 'Bootstrap Sampling',
  'Black-Scholes-Merton', 'Heston Model', 'Hull-White Model', 'Vasicek Model',
  'Factor Models (Fama-French)', 'CAPM', 'APT', 'Risk Parity', 'Mean Reversion',
  'Pairs Trading', 'Statistical Arbitrage', 'High-Frequency Data Analysis',
  'Volatility Surface Construction', 'Greeks Calculation', 'Exotic Options Pricing',
  'Credit Default Swaps', 'Interest Rate Swaps', 'FX Derivatives',
  'Backtesting', 'Walk-Forward Analysis', 'Sharpe Optimization', 'Maximum Drawdown',
  'Stress Testing', 'Scenario Analysis', 'PnL Attribution', 'Performance Attribution',
  'Multi-Broker Data Integration', 'Real-time Market Data', 'API Management', 'Financial Data Vendors'
]


const experiences: Experience[] = [
  {
    role: 'Quantitative Research Associate',
    org: 'MedKind Pharma',
    location: 'Thane, India',
    start: 'Jul 2024',
    end: 'Present',
    bullets: [
      'Applied advanced statistical modeling and Monte Carlo simulation to analyze complex datasets; co-authored peer-reviewed research with quantitative rigor',
      'Developed automated data pipelines with statistical validation, improving model accuracy by 25% and reducing computation time by 40%',
      'Implemented risk management frameworks and stress testing protocols for pharmaceutical investment analysis'
    ]
  },
  {
    role: 'Quantitative Analyst (Pro Bono)',
    org: 'Hertz Car Sales',
    location: 'Pleasanton, CA',
    start: 'Jan 2023',
    end: 'Dec 2023',
    bullets: [
      'Built predictive pricing models using time-series analysis and volatility forecasting, identifying revenue optimization opportunities worth $2M+',
      'Developed real-time risk dashboards with automated alerts for demand volatility and inventory exposure',
      'Implemented cohort analysis and customer lifetime value models to optimize pricing strategies and reduce churn by 18%'
    ]
  },
  {
    role: 'Quantitative Marketing Analyst (Contract)',
    org: 'Google / Bleep‑Press',
    location: 'Cupertino, CA',
    start: 'Sep 2022',
    end: 'Dec 2022',
    bullets: [
      'Applied statistical hypothesis testing and multivariate analysis to optimize conversion funnels, achieving 15% improvement in ROI',
      'Built automated reporting systems with real-time risk metrics and performance attribution analysis',
      'Implemented A/B testing frameworks with statistical significance testing and power analysis'
    ]
  },
  {
    role: 'Financial Operations Analyst',
    org: 'Chevron',
    location: 'Sunnyvale, CA',
    start: 'Jan 2021',
    end: 'Jan 2022',
    bullets: [
      'Developed stochastic demand forecasting models using ARIMA and GARCH, reducing inventory carrying costs by $3.2M annually',
      'Implemented risk management protocols with VaR calculations and stress testing for commodity price exposure',
      'Built automated monitoring systems for operational risk metrics and early warning indicators'
    ]
  }
]

// Updated GitHub + existing highlight projects
const projects: Project[] = [
  {
    name: 'UARPO Implementation - Uncertainty-Aware Reinforcement Policy Optimization for Financial Decision Making',
    stack: 'Python · Reinforcement Learning · PyTorch · FinZero · Machine Learning · Financial Modeling',
    href: 'https://github.com/sohammirajkar/UARPO_Implementation',
    bullets: [
      'Developed UARPO-LoRA: Implemented Uncertainty-Aware Reinforcement Policy Optimization with Low-Rank Adaptation for efficient fine-tuning of BLIP2 vision-language models on financial prediction tasks, reducing trainable parameters by 99% while maintaining performance.',
      'Built end-to-end pipeline combining computer vision and NLP for automated financial chart analysis and market prediction.',
      'Engineered ML training infrastructure optimized for M1/M2 MacBooks with native MPS support and cross-platform compatibility.'
    ]
  },
  {
    name: 'Hybrid Volatility Forecasting Dashboard - Advanced econometric and ML platform for commodity volatility prediction',
    stack: 'Python · GARCH Models · LSTM · Streamlit · Multi-Broker APIs · PyTorch',
    href: 'https://github.com/sohammirajkar/Hybrid_vol_dashboard',
    bullets: [
      'Built hybrid forecasting system combining GARCH(1,1) econometric models with LSTM neural networks for crude oil volatility prediction',
      'Integrated 6+ financial data providers (Yahoo Finance, Alpha Vantage, Finnhub, Tiingo) with automatic failover mechanisms',
      'Developed real-time trading signals generation with volatility clustering analysis and risk-adjusted performance metrics',
      'Implemented robust data pipeline with synthetic data generation for testing and model validation in market downtime',
      'Created interactive Streamlit dashboard with configurable forecasting horizons and comprehensive error handling'
    ]
  },
  {
    name: 'Advanced Derivatives Pricing Engine - Production-ready quantitative finance platform with sophisticated pricing models and real-time risk analytics',
    stack: 'Python · QuantLib · NumPy · FastAPI · Redis · Docker · Streamlit',
    href: 'https://github.com/sohammirajkar/Advanced_Valuation_Engine',
    bullets: [
      'Implemented Black-Scholes, Heston, and Hull-White models with full Greeks calculation (Delta, Gamma, Vega, Theta, Rho)',
      'Built exotic options pricing engine (Asian, Barrier, Lookback) using advanced Monte Carlo with variance reduction techniques',
      'Developed fixed income analytics: bond pricing, yield curves, duration/convexity, and credit risk models',
      'Optimized computation performance by 10x using vectorization and parallel processing with Celery/Redis',
      'Created interactive volatility surfaces and real-time portfolio VaR/CVaR calculations with stress testing capabilities'
    ]
  },
  {
    name: 'Quantitative M&A Valuation Platform - End-to-end financial analysis pipeline for investment decision support',
    stack: 'Python · Monte Carlo · DCF · Machine Learning · NLP · Streamlit',
    href: 'https://github.com/sohammirajkar/MnA_medkind',
    bullets: [
      'Built comprehensive DCF model with Monte Carlo simulation for probabilistic valuation and sensitivity analysis',
      'Implemented customer analytics: RFM segmentation, lifetime value modeling, and churn prediction using ML',
      'Developed sentiment analysis pipeline for market intelligence and competitive positioning',
      'Created automated comparable company analysis with multiples valuation and peer benchmarking'
    ]
  },
  {
    name: 'FX Volatility & Risk Management System - Advanced forex analytics for institutional trading',
    stack: 'Python · GARCH Models · Monte Carlo · VaR · Matplotlib · Streamlit',
    href: 'https://github.com/sohammirajkar/FX_vol_risk',
    bullets: [
      'Implemented GARCH(1,1) and EGARCH models for volatility clustering and regime detection in INR currency pairs',
      'Built Monte Carlo simulation engine for FX path generation and stress testing of hedging strategies',
      'Developed real-time VaR/CVaR calculation with backtesting framework for portfolio risk management',
      'Created volatility surface construction and term structure analysis for options pricing and risk assessment'
    ]
  },
  {
    name: 'Algorithmic Trading Research Platform - Multi-strategy backtesting and portfolio optimization system',
    stack: 'Python · Pandas · NumPy · Zipline · Machine Learning · Plotly',
    href: 'https://github.com/sohammirajkar/jpmorgan_data_science_project',
    bullets: [
      'Developed mean reversion and momentum strategies with statistical significance testing and walk-forward analysis',
      'Implemented Markowitz portfolio optimization with risk parity and Black-Litterman model enhancements',
      'Built comprehensive backtesting framework with transaction costs, slippage, and market impact modeling',
      'Created performance attribution analysis with factor decomposition and risk-adjusted return metrics'
    ]
  },
  {
    name: 'Private Equity Deal Sourcing Platform - Automated investment opportunity identification and screening',
    stack: 'JavaScript · Node.js · Puppeteer · APIs · Google Sheets',
    href: 'https://github.com/sohammirajkar/PrivateEquity_DealScreener',
    bullets: [
      'Automated deal flow analysis across multiple data providers with sector/geography/AUM filtering',
      'Built financial metrics screening (Revenue growth, EBITDA margins, Debt/Equity ratios) for investment criteria',
      'Implemented real-time market data integration and competitive analysis for deal sourcing efficiency'
    ]
  }
]

const publications = [
  {
    title: 'Quantitative Analysis of Moringa Oleifera: Statistical Modeling in Pharmaceutical Research',
    venue: 'ABR International Journal, 2024',
    summary: 'Co‑authored peer‑reviewed research applying advanced statistical methods and computational modeling to pharmaceutical efficacy analysis.',
    link: 'https://www.abrinternationaljournal.org/articles/emmoringa-oleiferaem-lam-pharmacologically-efficient-herb.pdf'
  }
]

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="name">Sohum Mirazkar</div>
        <div className="title">Quantitative Finance • Data Science • Risk Analytics</div>
        <div className="toplinks">
          {links.map(l => <a key={l.href} className="pill" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
        </div>
      </header>

      <div className="grid">
        <main className="section">
          <section className="card">
            <h2>Professional Summary</h2>
            <p>
              Quantitative Finance specialist with expertise in derivatives pricing, risk modeling, and portfolio optimization. Proven track record building production-grade financial models, implementing advanced statistical methods, and delivering data-driven insights for investment decisions. Strong mathematical foundation with hands-on experience in options pricing, VaR modeling, and algorithmic trading strategies.
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
              <li><strong>B.Tech (Data Science)</strong> — IIT Jodhpur (pursuing)</li>
              <li><strong>A.S. Mathematics</strong> — Foothill‑De Anza College, CA</li>
              <li><strong>Relevant Coursework:</strong> Stochastic Calculus, Econometrics, Financial Engineering, Derivative Securities, Portfolio Theory, Risk Management, Time Series Analysis, Mathematical Finance</li>
              <li><strong>Additional:</strong> Biostatistics, Pharmacokinetics, Clinical Research Methods (MCPHS)</li>
            </ul>
          </section>
          <section className="card">
            <h2>Certifications & Training</h2>
            <ul>


              <li>
                <a href="https://drive.google.com/file/d/1ziS9qW2DboExWAQBDK5XgvHFVXF0Tk2T/view?usp=sharing"
                  target="_blank" rel="noreferrer">
                  Advanced Quantitative Modeling — Insilico Medicine School, Dec 2024
                </a>
              </li>

              <li><strong>Wharton Finance Specialization</strong> — Corporate Finance, Valuation</li>
              <li><strong>Options Trading & Risk Management</strong> — Self-Study</li>
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
