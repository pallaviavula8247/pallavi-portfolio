import React, { useMemo, useState } from 'react';

const profile = {
  name: 'Pallavi',
  fullName: 'Pallavi Avula',
  role: 'Aspiring AI ',
  email: 'avulapallavi06@gmail.com',
  phone: '+91 82475 15807',
  github: 'https://github.com/pallaviavula8247',
  linkedin: 'https://linkedin.com/in/pallavi-avula-434145357',
  resume: '/assets/Pallavi_Avula_Resume.pdf',
};

const academicPath = [
  { year: '2023 — 2027', title: 'B.Tech — CSE (Artificial Intelligence)', place: 'Annamacharya University, Rajampet, Andhra Pradesh', score: 'CGPA 8.9 / 10', icon: 'AI' },
  { year: '2021 — 2023', title: 'Intermediate Education', place: 'Government Junior College, Banganapalli, Andhra Pradesh', score: '94%', icon: '12' },
  { year: '2021', title: 'Secondary School Certificate (SSC)', place: 'Government High School, Andhra Pradesh', score: '98%', icon: '10' },
];

const experiences = [
  { title: 'Artificial Intelligence Intern', company: 'Alpha Innovation', duration: '2 Months', date: 'Dec 2025 — Feb 2026', text: 'Worked on Artificial Intelligence concepts and practical implementation of AI technologies while developing problem-solving and teamwork skills through project collaboration.' },
  { title: 'Python with Machine Learning Intern', company: 'RVNS Solutions', duration: '3 Months', date: 'Feb 2026 — May 2026', text: 'Worked on Python programming and Machine Learning model implementation, including data processing, model building, and AI application development concepts.' },
];

const skills = [
  { name: 'React.js', cat: 'Frontend', icon: '⚛' },
  { name: 'HTML', cat: 'Frontend', icon: 'HTML' },
  { name: 'CSS', cat: 'Frontend', icon: 'CSS' },
  { name: 'JavaScript', cat: 'Frontend', icon: 'JS' },
  { name: 'Python', cat: 'AI & Backend', icon: 'PY' },
  { name: 'Django', cat: 'AI & Backend', icon: 'DJ' },
  { name: 'NLP', cat: 'AI & Backend', icon: 'NLP' },
  { name: 'Machine Learning', cat: 'AI & Backend', icon: 'ML' },
  { name: 'REST APIs', cat: 'AI & Backend', icon: 'API' },
  { name: 'MySQL', cat: 'AI & Backend', icon: 'SQL' },
  { name: 'GitHub', cat: 'Tools & Cloud', icon: 'GH' },
  { name: 'Vercel', cat: 'Tools & Cloud', icon: 'VC' },
  { name: 'Render', cat: 'Tools & Cloud', icon: 'RE' },
];

const projects = [
  { number: '01', title: 'AI Resume Analyzer', type: 'AI / MACHINE LEARNING', image: '/assets/projects/ai-resume-analyzer.png', description: 'Django web application for resume parsing, ATS analysis, skill-gap analysis and job matching using NLP, TF-IDF and similarity matching.', tags: ['Python','Django','Django REST','NLP','TF-IDF','Scikit-learn'], github: 'https://github.com/pallaviavula8247/resume_analyzer', live: 'https://resume-analyzer-pld8.onrender.com/' },
  { number: '02', title: 'EduPath Tech', type: 'FULL-STACK / EDTECH', image: '/assets/projects/edupath-tech.png', description: 'Education pathway platform that provides step-by-step roadmaps, scholarships, college recommendations and location-based nearby college search.', tags: ['HTML','CSS','JavaScript','Django','REST API','PostgreSQL','Vercel','Render'], github: 'https://github.com/pallaviavula8247/Edupath-tech', live: 'https://frontend-dun-nine-gw4g22alnr.vercel.app/' },
  { number: '03', title: 'ScamGuard', type: 'WEB / RULE-BASED NLP', image: '/assets/projects/scamguard.png', description: 'Responsive rental and PG scam-risk checker with dynamic risk scoring, scam classification, explainable warnings and safety recommendations.', tags: ['HTML','CSS','JavaScript','NLP','localStorage'], github: 'https://github.com/pallaviavula8247/Rental_PG_Scam_Checker', live: 'https://rental-pg-scam-checker.vercel.app/' },
];

const certificates = [
  { title: 'Artificial Intelligence Internship', issuer: 'Alpha Innovation', date: 'Dec 05, 2025 — Feb 05, 2026', image: '/assets/certificates/alpha-ai-internship.jpeg' },
  { title: 'Certification on DevOps', issuer: 'JobPrep', date: 'Mar 24, 2025 — May 24, 2025', image: '/assets/certificates/jobprep-devops-aws.jpeg' },
  { title: 'Python with Machine Learning Internship', issuer: 'RVNS Solutions Pvt. Ltd.', date: 'Feb 2026 — May 2026', image: '/assets/certificates/rvns-ml.jpeg' },
  { title: 'AI / Machine Learning Internship', issuer: 'RVNS Solutions Pvt. Ltd.', date: 'May 2026 — July 2026', image: '/assets/certificates/rvns-internship.jpeg' },
  { title: 'Python & Machine Learning', issuer: 'JobPrep', date: '2025', image: '/assets/certificates/jobprep-ml.jpeg' },
  { title: 'Artificial Intelligence in IT — Workshop', issuer: 'Sri Vensy Technologies Pvt. Ltd.', date: '18 — 19 Sep 2024', image: '/assets/certificates/sri-vensy.jpeg' },
];

function Arrow(){ return <span className="arrow">↗</span>; }

export default function App(){
  const [menuOpen,setMenuOpen]=useState(false);
  const [chatOpen,setChatOpen]=useState(false);
  const [skillTab,setSkillTab]=useState('All');
  const [preview,setPreview]=useState(null);
  const filteredSkills=useMemo(()=>skillTab==='All'?skills:skills.filter(s=>s.cat===skillTab),[skillTab]);
  const closeMenu=()=>setMenuOpen(false);

  return <div className="portfolio">
    <div className="grid-bg" />
    <header className="topbar">
      <a href="#home" className="brand" onClick={closeMenu}>Pallavi</a>
      <div className="brand-divider" />
      <div className="tagline"><em>"Engineering Intelligence"</em> <span>– AI &amp; ML</span></div>
      <button className="menu-toggle" onClick={()=>setMenuOpen(v=>!v)} aria-label="Open navigation">☰</button>
      <nav className={menuOpen?'nav open':'nav'}>
        {['home','about','education','certifications','skills','projects','contact'].map((id)=><a key={id} href={'#'+id} onClick={closeMenu}>{id==='home'?'Home':id==='about'?'About Me':id==='education'?'Academic Path':id==='certifications'?'Certifications':id==='skills'?'Skills & Projects':id==='projects'?'Projects':'Contact Me'}</a>)}
      </nav>
    </header>

    <main>
      <section id="home" className="hero-ref">
        <p className="hello">HELLO,</p>
        <h1>I'm <span>{profile.name}</span></h1>
        <h2>And I'm an <span>{profile.role}</span></h2>
        <p className="hero-desc">Aspiring AI &amp; ML engineer pursuing B.Tech in CSE, passionate about merging technology with design to create intelligent, visually immersive, and meaningful web experiences.</p>
        <div className="hero-buttons">
          <a href={profile.resume} download className="light-btn">↓ &nbsp; GET MY CV</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="round-social">GH</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="round-social">in</a>
        </div>
        <div className="hero-glow glow-a"/><div className="hero-glow glow-b"/>
      </section>

      <section id="about" className="ref-section about-ref">
        <div className="section-kicker">01 / ABOUT ME</div>
        <h2>Building with <span>curiosity.</span><br/>Learning with <span>purpose.</span></h2>
        <p className="section-lead">I'm a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence, focused on building practical AI applications and full-stack web experiences.</p>
        <div className="about-grid">
          <div className="about-copy"><p>I enjoy turning ideas into working products — from Django REST APIs and responsive frontends to NLP and machine-learning applications.</p><p>My current interests include <strong>AI applications, machine learning, full-stack development and intelligent web products.</strong></p></div>
          <div className="stats-grid"><div><b>8.9</b><small>CGPA</small></div><div><b>03</b><small>PROJECTS</small></div><div><b>02+</b><small>INTERNSHIPS</small></div></div>
        </div>
      </section>

      <section id="education" className="ref-section dark-panel education-section">
        <div className="section-kicker">02 / ACADEMIC PATH</div>
        <h2>My education <span>journey.</span></h2>
        <p className="section-lead">A clear path from school foundations to a B.Tech specialization in Artificial Intelligence.</p>
        <div className="timeline">
          {academicPath.map((item,i)=><article className="timeline-item" key={item.title}><div className="timeline-line"><span>{item.icon}</span>{i<academicPath.length-1&&<i/>}</div><div className="timeline-card"><div className="timeline-year">{item.year}</div><h3>{item.title}</h3><p>{item.place}</p><strong>{item.score}</strong></div></article>)}
        </div>
      </section>

      <section id="certifications" className="ref-section cert-section">
        <div className="section-kicker">03 / CERTIFICATIONS &amp; EXPERIENCE</div>
        <h2>Proof of <span>learning.</span></h2>
        <div className="experience-grid">{experiences.map(e=><article className="experience-card" key={e.title}><div className="experience-top"><span className="mini-icon">AI</span><span>{e.duration}</span></div><small>{e.date}</small><h3>{e.title}</h3><h4>{e.company}</h4><p>{e.text}</p></article>)}</div>
        <div className="cert-heading"><span>MY CERTIFICATES</span><span>CLICK TO VIEW</span></div>
        <div className="certificate-grid">{certificates.map(c=><button className="certificate-card" key={c.title} onClick={()=>setPreview(c)}><img src={c.image} alt={c.title}/><div className="certificate-overlay"><strong>{c.title}</strong><span>{c.issuer}</span><small>{c.date} · View credential ↗</small></div></button>)}</div>
      </section>

      <section id="skills" className="ref-section skills-ref">
        <div className="section-kicker">04 / TECH STACK</div>
        <h2>Tech <span>Arsenal.</span></h2>
        <p className="section-lead">The core technologies and tools I leverage to build scalable and intelligent solutions.</p>
        <div className="skill-tabs">{['All','Frontend','AI & Backend','Tools & Cloud'].map(tab=><button className={skillTab===tab?'active':''} key={tab} onClick={()=>setSkillTab(tab)}>{tab}</button>)}</div>
        <div className="skill-grid">{filteredSkills.map(s=><div className="skill-card" key={s.name}><div className="skill-icon">{s.icon}</div><strong>{s.name}</strong><small>{s.cat}</small></div>)}</div>
      </section>

      <section id="projects" className="ref-section projects-section">
        <div className="section-kicker">05 / SELECTED WORK</div>
        <div className="project-title-row"><h2>Projects that <span>matter.</span></h2><a href={profile.github} target="_blank" rel="noreferrer">VIEW GITHUB <Arrow/></a></div>
        <div className="project-gallery">{projects.map(p=><article className="project-card" key={p.title}><button className="project-image" onClick={()=>setPreview({title:p.title,issuer:p.type,image:p.image,date:'Project preview'})}><img src={p.image} alt={p.title}/><span className="image-expand">↗</span></button><div className="project-meta"><span>{p.number}</span><small>{p.type}</small></div><h3>{p.title}</h3><p>{p.description}</p><div className="project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-links"><a href={p.live} target="_blank" rel="noreferrer">LIVE DEMO <Arrow/></a><a href={p.github} target="_blank" rel="noreferrer">SOURCE CODE <Arrow/></a></div></article>)}</div>
      </section>

      <section id="contact" className="contact-ref">
        <div className="section-kicker">06 / CONTACT</div>
        <h2>Let's create something <span>intelligent.</span></h2>
        <p>Open to internships, entry-level opportunities, collaborations and interesting software projects.</p>
        <div className="contact-links"><a href={'mailto:'+profile.email}>{profile.email} <Arrow/></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow/></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow/></a></div>
        <a href={profile.resume} download className="gradient-btn">GET MY CV <Arrow/></a>
      </section>
    </main>

    <button className="ask-btn" onClick={()=>setChatOpen(v=>!v)}><span>□</span> Ask Pallavi</button>
    {chatOpen&&<div className="chat-box"><strong>Hi! I'm Pallavi's portfolio assistant.</strong><p>Explore my academic path, skills, certificates and projects above.</p><a href={'mailto:'+profile.email}>Contact Pallavi <Arrow/></a></div>}
    {preview&&<div className="modal-backdrop" onClick={()=>setPreview(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setPreview(null)}>×</button><img src={preview.image} alt={preview.title}/><div><h3>{preview.title}</h3><p>{preview.issuer}</p><small>{preview.date}</small></div></div></div>}
    <footer><span>© {new Date().getFullYear()} Pallavi Avula</span><span>AI • ML • FULL-STACK</span><a href="#home">BACK TO TOP ↑</a></footer>
  </div>;
}
