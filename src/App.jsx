import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const tags = ["Generative AI","Multi-Agent Systems","RAG Pipelines","LLM Orchestration","Google Cloud","FastAPI","Next.js 15","Redis","Vector Embeddings","Computer Vision","Docker","PostgreSQL","IIT BHU Winner","15+ Hackathons","CGPA 9.07","RabbitMQ","Full-Stack","CI/CD","Python","State Rank 616"];
    const m = document.getElementById('mq');
    if (m) {
      const html = [...tags,...tags,...tags,...tags].map(t => `<span class="mtag"><span class="mdot"></span>${t}</span>`).join('');
      m.innerHTML = html + html;
    }

    const obs = new IntersectionObserver(e => {
      e.forEach(x => {
        if (x.isIntersecting) {
          x.target.classList.add('in');
          obs.unobserve(x.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
    
    document.querySelectorAll('.r, .r2, .r3').forEach(el => obs.observe(el));

    const bobs = new IntersectionObserver(e => {
      e.forEach(x => {
        if (x.isIntersecting) {
          const target = x.target;
          const w = target.style.width;
          target.style.width = '0';
          requestAnimationFrame(() => {
            target.style.width = w;
          });
          bobs.unobserve(target);
        }
      });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skbf').forEach(b => bobs.observe(b));

    return () => {
      obs.disconnect();
      bobs.disconnect();
    };
  }, []);

  return (
    <>
      <div className="glow g1"></div>
      <div className="glow g2"></div>
      <div className="glow g3"></div>

      <nav id="nav">
        <div className="nlogo">
          <div className="nlogo-mark">N</div>
          <span className="nlogo-txt">nikitha.dev</span>
        </div>
        <nav className="nmenu">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#hackathons">Hackathons</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>
        <a href="mailto:anikitha.kunapareddy@srmap.edu.in" className="nhire">Hire Me ↗</a>
      </nav>

      <main>
        {/* HERO */}
        <section id="hero">
          <div className="hw">
            <div>
              <div className="heyebrow">
                <div className="hpulse"></div>
                <span className="heyebrow-txt">Available for Opportunities</span>
                <div className="heyebrow-line"></div>
              </div>
              <h1 className="hh1">
                <span className="ln1">Nikitha</span>
                <span className="ln2">Kunapareddy</span>
              </h1>
              <p className="hrole">Generative AI · Full-Stack · Cloud Engineer</p>
              <p className="hdesc">
                I build <strong>production-grade AI systems</strong> — multi-agent platforms, RAG pipelines, full-stack apps deployed at scale on Google Cloud. <strong>Hackathon winner</strong> at IIT BHU & SRM AP. 9.07 CGPA at SRM AP University.
              </p>
              <div className="hbtns">
                <a href="mailto:anikitha.kunapareddy@srmap.edu.in" className="btn btf">Get in Touch ↗</a>
                <a href="#hackathons" className="btn btg">🏆 View Achievements →</a>
              </div>
              <div className="hsocials">
                <a href="https://github.com/NikithaKunapareddy" target="_blank" rel="noreferrer" className="soc">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/nikitha-kunapareddy" target="_blank" rel="noreferrer" className="soc">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
                <a href="tel:+919390471597" className="soc">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg>
                  +91 93904 71597
                </a>
              </div>
            </div>

            <div className="hcard">
              <div className="hcbar">
                <div className="hcdots"><div className="hcd cr"></div><div className="hcd cy"></div><div className="hcd cg"></div></div>
                <div className="hctab">profile_overview.json</div>
              </div>
              <div className="hcbody">
                <div className="profilerow">
                  <div className="av">N</div>
                  <div>
                    <div className="pname">Nikitha Kunapareddy</div>
                    <div className="psub">anikitha.kunapareddy@srmap.edu.in</div>
                  </div>
                </div>
                <div className="statg">
                  <div className="hst"><div className="hstn">9.07</div><div className="hstl">CGPA</div></div>
                  <div className="hst"><div className="hstn">7+</div><div className="hstl">AI Platforms</div></div>
                  <div className="hst"><div className="hstn">15+</div><div className="hstl">Hackathons</div></div>
                </div>
                <div className="winbadge">
                  <div className="winbadge-icon">🏆</div>
                  <div>
                    <div className="winbadge-title">Hackathon Winner & Finalist</div>
                    <div className="winbadge-sub">1st in HaXplore, 7th in Vista · IIT BHU</div>
                  </div>
                </div>
                <div className="skbars">
                  <div className="skb"><span className="skbl">GenAI</span><div className="skbr"><div className="skbf" style={{ width: '92%', background: 'linear-gradient(90deg,#7c6af7,#b8adff)' }}></div></div><span className="skbp">92%</span></div>
                  <div className="skb"><span className="skbl">Python</span><div className="skbr"><div className="skbf" style={{ width: '88%', background: 'linear-gradient(90deg,#2dd4a0,#6ee7b7)' }}></div></div><span className="skbp">88%</span></div>
                  <div className="skb"><span className="skbl">Cloud</span><div className="skbr"><div className="skbf" style={{ width: '80%', background: 'linear-gradient(90deg,#fb923c,#fbbf24)' }}></div></div><span className="skbp">80%</span></div>
                  <div className="skb"><span className="skbl">FullStack</span><div className="skbr"><div className="skbf" style={{ width: '85%', background: 'linear-gradient(90deg,#f87171,#fb923c)' }}></div></div><span className="skbp">85%</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="mstrip">
          <div className="minner" id="mq"></div>
        </div>

        {/* ABOUT */}
        <section id="about" className="sp">
          <div className="wrap">
            <div className="agrid">
              <div className="r">
                <p className="slabel">About Me</p>
                <h2 className="sh2">Building AI that works<br/><em style={{ fontStyle: 'italic', color: 'var(--v2)' }}>in production</em></h2>
                <p className="atxt">I'm a <span className="hl">CS student at SRM AP University</span>, passionate about building AI systems that go beyond demos — systems that run reliably, scale gracefully, and deliver real value.</p>
                <p className="atxt">During my internship at <span className="hlv">CultureVO</span>, I designed and shipped 7+ full-stack AI platforms, deployed on <span className="hlg">Google Cloud</span>. I've also competed in 15+ national hackathons, securing 1st in <span className="hlgold">HaXplore</span> and 7th in <span className="hlgold">Vista</span> at IIT BHU.</p>
                <p className="atxt">I thrive at the intersection of AI research and real engineering — turning RAG, LLM orchestration, and vector retrieval into fast, reliable, user-facing products.</p>
                <div className="aachs">
                  <div className="ach"><div className="ach-ic av3">⭐</div><div><div className="ach-t">CGPA 9.07 / 10.0</div><div className="ach-s">B.Tech CS · SRM AP University</div></div></div>
                  <div className="ach"><div className="ach-ic agold2">🏆</div><div><div className="ach-t">Hackathon Winner & Finalist</div><div className="ach-s">1st in HaXplore, 7th in Vista · IIT BHU</div></div></div>
                  <div className="ach"><div className="ach-ic ag2">🚀</div><div><div className="ach-t">7+ AI Platforms Shipped</div><div className="ach-s">Production · Google Cloud Run</div></div></div>
                  <div className="ach"><div className="ach-ic av3">📜</div><div><div className="ach-t">15+ Hackathon Certificates</div><div className="ach-s">IIT BHU, IIT Kharagpur, SRM, BITS & more</div></div></div>
                </div>
              </div>
              <div className="skcats r" style={{ transitionDelay: '0.15s' }}>
                <div className="skcat"><div className="skcath"><div className="skcatd vi"></div><span className="skcatn">AI / ML / GenAI</span></div><div className="pills"><span className="p pv">Generative AI</span><span className="p pv">LLMs</span><span className="p pv">RAG Systems</span><span className="p pv">Multi-Agent</span><span className="p pv">Transformers</span><span className="p pv">NLP</span><span className="p pv">Computer Vision</span><span className="p pv">Vector DBs</span></div></div>
                <div className="skcat"><div className="skcath"><div className="skcatd gi"></div><span className="skcatn">Web & Backend</span></div><div className="pills"><span className="p pg">Next.js 15</span><span className="p pg">React.js</span><span className="p pg">FastAPI</span><span className="p pg">Node.js</span><span className="p pg">Flask</span><span className="p pg">Streamlit</span><span className="p pg">REST APIs</span></div></div>
                <div className="skcat"><div className="skcath"><div className="skcatd oi"></div><span className="skcatn">Cloud & DevOps</span></div><div className="pills"><span className="p po">GCP Cloud Run</span><span className="p po">Docker</span><span className="p po">CI/CD</span><span className="p po">Redis</span><span className="p po">RabbitMQ</span><span className="p po">Linux</span></div></div>
                <div className="skcat"><div className="skcath"><div className="skcatd ri"></div><span className="skcatn">Languages & Data</span></div><div className="pills"><span className="p pr">Python</span><span className="p pr">JavaScript</span><span className="p pr">Java</span><span className="p pn">C/C++</span><span className="p pn">SQL</span><span className="p pn">PostgreSQL</span><span className="p pn">MongoDB</span><span className="p pn">FAISS</span></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="sp">
          <div className="wrap">
            <div className="r" style={{ marginBottom: '3rem' }}>
              <p className="slabel">Work Experience</p>
              <h2 className="sh2">Where I've Worked</h2>
            </div>
            <div className="exlayout">
              <div className="extl r2">
                <div className="exstep">
                  <div className="exsy">2024 – Present</div>
                  <div className="exsc">CultureVO</div>
                  <div className="exsr">AI/ML Intern</div>
                </div>
              </div>
              <div className="exmain r">
                <div className="extrow">
                  <div><div className="exco">CultureVO</div><div className="excos">// Generative AI Division · Full-Stack Engineering</div></div>
                  <span className="exbdg">Active Intern</span>
                </div>
                <div className="exitems">
                  <div className="exitem"><div className="exid"><svg fill="none" strokeWidth="2.5"><polyline points="2,7 5,10 10,4"/></svg></div><div className="exitxt">Engineered <strong>full-stack Generative AI platforms</strong> integrating multi-agent ecosystems — built and deployed 7 production systems including Aura LLM, RAG Chat, ImageInsight, and more.</div></div>
                  <div className="exitem"><div className="exid"><svg fill="none" strokeWidth="2.5"><polyline points="2,7 5,10 10,4"/></svg></div><div className="exitxt">Implemented <strong>event-driven pipelines with long-term memory</strong> and latency-optimized orchestration for personalized, context-aware AI experiences at scale.</div></div>
                  <div className="exitem"><div className="exid"><svg fill="none" strokeWidth="2.5"><polyline points="2,7 5,10 10,4"/></svg></div><div className="exitxt">Deployed microservices on <strong>Google Cloud Run and VM instances</strong>, enabling high-availability interoperability across all AI platforms with Docker and CI/CD pipelines.</div></div>
                  <div className="exitem"><div className="exid"><svg fill="none" strokeWidth="2.5"><polyline points="2,7 5,10 10,4"/></svg></div><div className="exitxt">Built real-time <strong>Grafana monitoring dashboards</strong> and a Python REPL + SQL Agent for dynamic data analysis workflows integrated across the platform ecosystem.</div></div>
                </div>
                <div className="exdep">
                  <div className="exdepl">Platforms Shipped</div>
                  <div className="exchips">
                    <span className="exchip">Aura LLM</span><span className="exchip">RAG Chat Assistant</span><span className="exchip">ImageInsight LLM</span><span className="exchip">Python REPL Agent</span><span className="exchip">SQL Agent</span><span className="exchip">Tiny Agents</span><span className="exchip">MultiMind RAG</span><span className="exchip">Grafana Dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HACKATHONS */}
        <section id="hackathons" className="sp">
          <div className="wrap">
            <div className="hacks-intro r">
              <div>
                <p className="slabel">Achievements</p>
                <h2 className="sh2">Hackathons & Competitions</h2>
                <p className="ssub">Competed at 15+ national events across India's top institutions.</p>
              </div>
              <div className="win-banner">
                <div className="win-banner-icon">🏆</div>
                <div>
                  <div className="win-banner-title">Hackathon Winner & Finalist</div>
                  <div className="win-banner-sub">IIT BHU · HaXplore (1st) & Vista (7th)</div>
                </div>
              </div>
            </div>

            {/* WINNER CARDS */}
            <div className="winners-row r" style={{ transitionDelay: '0.1s' }}>
              <div className="wcard wcard-gold">
                <span className="wc-crown">🥇</span>
                <div className="wc-place">🏆 Winner — 1st Place</div>
                <div className="wc-name">HaXplore Hackathon</div>
                <div className="wc-org">IIT BHU (Varanasi) · CodeFest</div>
                <div className="wc-tags">
                  <span className="wctag">IIT BHU</span>
                  <span className="wctag">National Level</span>
                  <span className="wctag">CodeFest</span>
                </div>
              </div>
              <div className="wcard wcard-silver">
                <span className="wc-crown">🎖️</span>
                <div className="wc-place">🎖️ Finalist — 7th Place</div>
                <div className="wc-name">Vista Hackathon</div>
                <div className="wc-org">IIT BHU (Varanasi) · CodeFest</div>
                <div className="wc-tags">
                  <span className="wctag">IIT BHU</span>
                  <span className="wctag">National Level</span>
                  <span className="wctag">CodeFest</span>
                </div>
              </div>
            </div>

            {/* PARTICIPATION GRID */}
            <div className="partgrid">
              <div className="pcard r" style={{ transitionDelay: '0.05s' }}>
                <span className="pcard-badge bdg-part">Participant</span>
                <div className="pcard-name">ENIGMA Hackathon</div>
                <div className="pcard-org">IIT BHU · CodeFest</div>
              </div>
              <div className="pcard r" style={{ transitionDelay: '0.08s' }}>
                <span className="pcard-badge bdg-part">Participant</span>
                <div className="pcard-name">HaXplore — Participation</div>
                <div className="pcard-org">IIT BHU · CodeFest</div>
              </div>
              <div className="pcard r" style={{ transitionDelay: '0.11s' }}>
                <span className="pcard-badge bdg-part">Participant</span>
                <div className="pcard-name">DataScience Hackathon</div>
                <div className="pcard-org">IIT Kharagpur</div>
              </div>
              <div className="pcard r" style={{ transitionDelay: '0.14s' }}>
                <span className="pcard-badge bdg-part">Participant</span>
                <div className="pcard-name">CTF — IIT BHU CodeFest</div>
                <div className="pcard-org">IIT BHU</div>
              </div>
              <div className="pcard r" style={{ transitionDelay: '0.17s' }}>
                <span className="pcard-badge bdg-part">Participant</span>
                <div className="pcard-name">HACKFORCE INDIA</div>
                <div className="pcard-org">National Hackathon</div>
              </div>
              <div className="pcard r" style={{ transitionDelay: '0.2s' }}>
                <span className="pcard-badge bdg-part">Participant</span>
                <div className="pcard-name">Hack MSC 1.0 & 2.0</div>
                <div className="pcard-org">Microsoft · SRM</div>
              </div>
              <div className="pcard r" style={{ transitionDelay: '0.23s' }}>
                <span className="pcard-badge bdg-part">Participant</span>
                <div className="pcard-name">HACK SRM 7.0</div>
                <div className="pcard-org">SRM University</div>
              </div>
              <div className="pcard r" style={{ transitionDelay: '0.26s' }}>
                <span className="pcard-badge bdg-part">Participant</span>
                <div className="pcard-name">Hackathon Skills & Strategies</div>
                <div className="pcard-org">National Event</div>
              </div>
              <div className="pcard r" style={{ transitionDelay: '0.29s' }}>
                <span className="pcard-badge bdg-part">Participant</span>
                <div className="pcard-name">ZERO JAM — Microsoft</div>
                <div className="pcard-org">Microsoft India</div>
              </div>
              <div className="pcard r" style={{ transitionDelay: '0.32s' }}>
                <span className="pcard-badge bdg-part">Participant</span>
                <div className="pcard-name">TechXcelerate — BITS</div>
                <div className="pcard-org">BITS Pilani</div>
              </div>
              <div className="pcard r" style={{ transitionDelay: '0.35s' }}>
                <span className="pcard-badge bdg-part">Participant</span>
                <div className="pcard-name">AISEC Hack4SDG</div>
                <div className="pcard-org">National Level</div>
              </div>
              <div className="pcard r" style={{ transitionDelay: '0.38s' }}>
                <span className="pcard-badge bdg-part">Participant</span>
                <div className="pcard-name">Campus To Corporate</div>
                <div className="pcard-org">SRM AP University</div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="sp">
          <div className="wrap">
            <div className="cert-intro">
              <div className="r2">
                <p className="slabel">Certifications</p>
                <h2 className="sh2">Verified<br/>Achievements</h2>
                <p className="ssub" style={{ marginTop: '0.5rem' }}>Certificates from top institutions and national competitions across India.</p>
              </div>
              <div className="cert-grid r">
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">Algorithm University</div><div className="cert-org">Programming Certification</div></div></div>
                <div className="cert-card"><div className="cert-dot" style={{ background: 'var(--gold)' }}></div><div><div className="cert-name">HaXplore IIT BHU — Winner</div><div className="cert-org">IIT BHU CodeFest</div></div></div>
                <div className="cert-card"><div className="cert-dot" style={{ background: 'var(--v)' }}></div><div><div className="cert-name">Vista IIT BHU — 7th Place</div><div className="cert-org">IIT BHU CodeFest</div></div></div>
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">ENIGMA IIT BHU</div><div className="cert-org">IIT BHU CodeFest</div></div></div>
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">DataScience — IIT Kharagpur</div><div className="cert-org">IIT Kharagpur</div></div></div>
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">CTF — IIT BHU CodeFest</div><div className="cert-org">IIT BHU</div></div></div>
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">Code For Connection</div><div className="cert-org">SRM AP</div></div></div>
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">Hack MSC 1.0 & 2.0</div><div className="cert-org">Microsoft · SRM</div></div></div>
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">HACK SRM 7.0</div><div className="cert-org">SRM University</div></div></div>
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">HACKFORCE INDIA</div><div className="cert-org">National Hackathon</div></div></div>
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">ZERO JAM Microsoft</div><div className="cert-org">Microsoft India</div></div></div>
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">TechXcelerate — BITS</div><div className="cert-org">BITS Pilani</div></div></div>
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">AISEC Hack4SDG</div><div className="cert-org">National Level</div></div></div>
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">Hackathon Skills & Strategies</div><div className="cert-org">National Event</div></div></div>
                <div className="cert-card"><div className="cert-dot"></div><div><div className="cert-name">Campus To Corporate</div><div className="cert-org">SRM AP University</div></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="sp">
          <div className="wrap">
            <div className="projhd r">
              <div><p className="slabel">Featured Projects</p><h2 className="sh2">What I've Built</h2></div>
              <p className="ssub" style={{ margin: 0 }}>Production systems combining AI research with solid engineering.</p>
            </div>
            <div className="projgrid">
              <div className="proj r" style={{ transitionDelay: '0.05s' }}>
                <div className="projnum">01</div>
                <div className="projtop"><div className="projic piv">🧠</div><a href="https://github.com/NikithaKunapareddy/MultiMind-RAG-Agent" target="_blank" rel="noreferrer" className="projarr" style={{ textDecoration: 'none' }}>↗</a></div>
                <h3 className="projtitle">MultiMind RAG Agent</h3>
                <p className="projdesc">AI-driven knowledge orchestration unifying 10,000+ documents, conversational memory, and live web research. Custom RFM scoring for personalized retrieval, sub-50ms Redis cache, async RabbitMQ processing.</p>
                <div className="projkpis">
                  <div className="kpi"><span className="kpiv">10K+</span><span className="kpik">documents</span></div>
                  <div className="kpi"><span className="kpiv">&lt;50ms</span><span className="kpik">retrieval</span></div>
                  <div className="kpi"><span className="kpiv">5K+</span><span className="kpik">tasks/day</span></div>
                  <div className="kpi"><span className="kpiv">+30%</span><span className="kpik">relevance</span></div>
                </div>
                <div className="projtech"><span className="tech">RAG</span><span className="tech">Redis</span><span className="tech">RabbitMQ</span><span className="tech">Vector DB</span><span className="tech">LLMs</span></div>
              </div>
              <div className="proj r" style={{ transitionDelay: '0.1s' }}>
                <div className="projnum">02</div>
                <div className="projtop"><div className="projic pig">🌍</div><a href="https://github.com/NikithaKunapareddy/cfc_Familya" target="_blank" rel="noreferrer" className="projarr" style={{ textDecoration: 'none' }}>↗</a></div>
                <h3 className="projtitle">Familia — Connection Platform</h3>
                <p className="projdesc">Cross-cultural social platform with verified digital family relationships, 10-level trust progression, real-time multilingual messaging with idiom-aware translation, and bonding games.</p>
                <div className="projkpis">
                  <div className="kpi"><span className="kpiv">15+</span><span className="kpik">DB tables</span></div>
                  <div className="kpi"><span className="kpiv">Real-time</span><span className="kpik">multilingual</span></div>
                </div>
                <div className="projtech"><span className="tech">Next.js 15</span><span className="tech">FastAPI</span><span className="tech">Supabase</span><span className="tech">PostgreSQL</span><span className="tech">JWT</span></div>
              </div>
              <div className="proj r" style={{ transitionDelay: '0.15s' }}>
                <div className="projnum">03</div>
                <div className="projtop"><div className="projic pio">🖼️</div><a href="https://github.com/NikithaKunapareddy/Adaptive-Photo-Restoration-Pipeline" target="_blank" rel="noreferrer" className="projarr" style={{ textDecoration: 'none' }}>↗</a></div>
                <h3 className="projtitle">Adaptive Photo Restoration</h3>
                <p className="projdesc">Deep learning pipeline for real-time restoration of degraded historical photos. Multi-scale CLAHE, Hough Transform fold detection, intelligent inpainting, CNN noise estimation with BRISQUE scoring.</p>
                <div className="projkpis">
                  <div className="kpi"><span className="kpiv">Real-time</span><span className="kpik">processing</span></div>
                  <div className="kpi"><span className="kpiv">BRISQUE</span><span className="kpik">adaptive</span></div>
                </div>
                <div className="projtech"><span className="tech">Python</span><span className="tech">OpenCV</span><span className="tech">CNN</span><span className="tech">CLAHE</span><span className="tech">NumPy</span></div>
              </div>
              <div className="proj r" style={{ transitionDelay: '0.2s' }}>
                <div className="projnum">04</div>
                <div className="projtop"><div className="projic pir">👤</div><a href="https://github.com/NikithaKunapareddy/Facial-Recognition-Attendance-System" target="_blank" rel="noreferrer" className="projarr" style={{ textDecoration: 'none' }}>↗</a></div>
                <h3 className="projtitle">Facial Recognition Attendance</h3>
                <p className="projdesc">Touchless AI attendance system with sub-second inference. Real-time face detection via OpenCV, KNN classification, secure local biometric storage, automated CSV audit logging — zero proxy attendance.</p>
                <div className="projkpis">
                  <div className="kpi"><span className="kpiv">&lt;1s</span><span className="kpik">inference</span></div>
                  <div className="kpi"><span className="kpiv">Zero</span><span className="kpik">proxy</span></div>
                </div>
                <div className="projtech"><span className="tech">Python</span><span className="tech">OpenCV</span><span className="tech">KNN</span><span className="tech">ML</span><span className="tech">CSV Logging</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="sp">
          <div className="wrap">
            <div className="edulayout">
              <div className="r2">
                <p className="slabel">Education</p>
                <h2 className="sh2">Academic<br/>Excellence</h2>
                <p className="ssub">Consistent top performance at every stage.</p>
                <div className="eamcet-card">
                  <div className="ecl">AP EAMCET Rank</div>
                  <div className="ecr">616</div>
                  <div className="ecs">State Rank · 200K+ candidates</div>
                </div>
              </div>
              <div className="educards r">
                <div className="educ">
                  <div><div className="eduyr">2023 – Present</div><div className="edudeg">B.Tech — Computer Science & Engineering</div><div className="edusch">SRM AP University, Amaravati</div></div>
                  <div className="edusw"><div className="edus edus1">9.07</div><div className="edust">CGPA / 10</div></div>
                </div>
                <div className="educ">
                  <div><div className="eduyr">2021 – 2023</div><div className="edudeg">Class XII — MPC Stream</div><div className="edusch">Narayana Junior College</div></div>
                  <div className="edusw"><div className="edus edus2">96.3%</div><div className="edust">Percentage</div></div>
                </div>
                <div className="educ">
                  <div><div className="eduyr">2021</div><div className="edudeg">Class X — Secondary Education</div><div className="edusch">Narayana School</div></div>
                  <div className="edusw"><div className="edus edus3">100%</div><div className="edust">Percentage</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="sp">
          <div className="wrap">
            <div className="cbox r">
              <div className="cglow"></div>
              <div className="cey"><div style={{ width: '6px', height: '6px', background: 'var(--g)', borderRadius: '50%', animation: 'pulse 2.2s infinite' }}></div>Open · Full-Time · Internships · Collaborations</div>
              <h2 className="ch2">Let's build something<br/><em style={{ fontStyle: 'italic', color: 'var(--v2)' }}>remarkable</em></h2>
              <p className="csub">Whether you're hiring an AI engineer, need a full-stack developer, or want to collaborate on something exciting — I'd love to hear from you.</p>
              <div className="cgrid">
                <a href="mailto:anikitha.kunapareddy@srmap.edu.in" className="clink cp"><span className="clink-i">✉</span>anikitha.kunapareddy@srmap.edu.in</a>
                <a href="https://linkedin.com/in/nikitha-kunapareddy" target="_blank" rel="noreferrer" className="clink"><span className="clink-i">in</span>LinkedIn Profile</a>
                <a href="https://github.com/NikithaKunapareddy" target="_blank" rel="noreferrer" className="clink"><span className="clink-i">⌥</span>GitHub Portfolio</a>
              </div>
              <p className="cnote">📍 Vijayawada, Andhra Pradesh · Open to Remote & Relocation</p>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="ftl">© 2025 Nikitha Kunapareddy · Built with precision</div>
        <div className="ftr">
          <a href="#hero">Top ↑</a>
          <a href="mailto:anikitha.kunapareddy@srmap.edu.in">Email</a>
          <a href="https://github.com/NikithaKunapareddy" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/nikitha-kunapareddy" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}

export default App;
