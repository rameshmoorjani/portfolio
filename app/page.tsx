import Image from "next/image";

export default function Home() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Blogs", href: "#blogs" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  const experiences = [
    {
      period: "Apr 2024 - Present",
      role: "Senior Software Engineer / Acting Staff Engineer",
      company: "Verra Mobility, Mesa, AZ",
    },
    {
      period: "Jul 2018 - Apr 2024",
      role: "Software Engineer (Premium) -> Technical Lead Contributor",
      company: "IntraEdge Inc (Client: American Express), Phoenix, AZ",
    },
    {
      period: "Oct 2017 - Jul 2018",
      role: "Sr. Java Developer / Technology Architect",
      company: "Vantage ERP LLC (Client: JB Hunt), Houston, TX",
    },
  ];
  const skills = [
    { name: "Java", mark: "J" },
    { name: "Kotlin", mark: "KT" },
    { name: "Golang", mark: "GO" },
    { name: "TypeScript", mark: "TS" },
    { name: "Node.js", mark: "ND" },
    { name: "React", mark: "R" },
    { name: "Spring Boot", mark: "SB" },
    { name: "GraphQL", mark: "GQ" },
    { name: "AWS", mark: "AWS" },
    { name: "Kafka", mark: "KF" },
    { name: "Docker", mark: "DK" },
    { name: "Kubernetes", mark: "K8" },
    { name: "MongoDB", mark: "MG" },
  ];
  const education = [
    "Post Graduate Program in Cloud Computing - Great Learning (UT Austin)",
    "Supervised Machine Learning: Regression and Classification - DeepLearning.AI (Stanford)",
    "Oracle 9i Certification - SQL STAR International",
    "Microsoft Exam 70-480: Programming in HTML5 with JavaScript and CSS3",
  ];
  const projects = [
    {
      title: "Vehicle Classification using KITTI + TensorFlow",
      summary: "Trained a CNN model for vehicle type classification and served real-time inference with FastAPI.",
      stack: "Python, TensorFlow, FastAPI, Computer Vision",
    },
    {
      title: "Tolling Web App",
      summary: "Built a map-driven tolling interface with secure auth and payment integration.",
      stack: "React, MapLibre, Stripe, AWS Amplify, Cognito",
    },
    {
      title: "FastAPI Chatbot with Feedback Loop",
      summary: "Developed a conversational AI service with iterative prompt tuning and response validation pipeline.",
      stack: "FastAPI, Prompt Engineering, Python",
    },
  ];
  const blogs = [
    {
      title: "Architecting Event-Driven Systems in AWS",
      excerpt: "Practical lessons from shipping serverless workflows using Lambda, Step Functions, and EventBridge.",
    },
    {
      title: "From Full Stack to AI-Enabled Engineering",
      excerpt: "How to blend product engineering fundamentals with modern AI tooling without sacrificing quality.",
    },
  ];
  const profileSnippet = `const developer = {
  name: "Ramesh Moorjani",
  role: "Staff-Level Full-Stack Engineer",
  stack: [
    "Java", "Kotlin", "Golang",
    "Node.js", "React", "TypeScript",
    "GraphQL", "Kafka", "AWS"
  ],
  qualities: {
    ownership: true,
    problemSolver: true,
    teamPlayer: true
  },
  availableFor: "Interesting product challenges"
};`;

  return (
    <div className="portfolio-shell">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(26,232,193,0.14),transparent_40%),radial-gradient(circle_at_75%_0%,rgba(95,90,255,0.26),transparent_38%),radial-gradient(circle_at_80%_50%,rgba(255,72,173,0.1),transparent_45%)]" />

      <header className="portfolio-header portfolio-reveal">
        <a href="#top" className="brand-mark">
          Ramesh Moorjani
        </a>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="portfolio-main">
        <section className="hero-copy portfolio-reveal" style={{ animationDelay: "90ms" }}>
          <p className="eyebrow">Hello,</p>
          <h1 className="hero-title">
            This is <span className="text-pink">Ramesh Moorjani</span>, a
            <span className="block text-mint">Senior Software Developer</span>
          </h1>
          <p className="hero-summary">
            Staff-level engineer with 18+ years delivering secure, scalable, event-driven platforms across finance, mobility,
            and logistics using Java, Kotlin, Golang, Node.js, React, and AWS.
          </p>

          <div className="social-strip" aria-label="Social links">
            <a href="https://github.com/rameshmoorjani" aria-label="GitHub" className="social-pill" target="_blank" rel="noreferrer">
              GH
            </a>
            <a href="https://www.linkedin.com/in/rmoorjani/" aria-label="LinkedIn" className="social-pill" target="_blank" rel="noreferrer">
              IN
            </a>
          </div>

          <div className="cta-row">
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
            <a href="/resume-ramesh.docx" download className="btn-solid">
              Get Resume
            </a>
          </div>
        </section>

        <section className="hero-code portfolio-reveal" style={{ animationDelay: "140ms" }}>
          <div className="code-head">
            <span className="code-dot bg-[#ff6f7d]" />
            <span className="code-dot bg-[#ffb347]" />
            <span className="code-dot bg-[#66df9a]" />
          </div>
          <pre className="code-block" aria-label="Developer profile code snippet">
            <code>{profileSnippet}</code>
          </pre>
        </section>

        <div className="about-media-row portfolio-reveal" style={{ animationDelay: "180ms" }}>
          <div id="about" className="about-card">
            <p className="about-label">Who I Am?</p>
            <p className="about-copy">
              My name is Ramesh Moorjani. I am a professional and enthusiastic engineer in my daily work, with a quick-learning
              and self-driven attitude. I enjoy exploring new technologies, solving complex problems, and building scalable web
              platforms with modern stacks. My core strength is full-stack and backend engineering with strong architecture
              ownership, and I am always open to impactful opportunities where I can contribute and mentor teams.
            </p>
          </div>

          <div className="hero-profile-wrap">
            <Image
              src="/profile-ramesh.jpg"
              alt="Ramesh Moorjani profile photo"
              width={280}
              height={300}
              className="hero-profile-image"
              priority
            />
          </div>

          <a href="#about" className="vertical-tag about-side-tag" aria-label="About section indicator">
            ABOUT ME
          </a>
        </div>
      </main>

      <section id="experience" className="experience-wrap">
        <div className="experience-heading portfolio-reveal">
          <span className="experience-pill">Experiences</span>
        </div>

        <div className="experience-grid">
          <div className="experience-art portfolio-reveal" style={{ animationDelay: "120ms" }} aria-hidden="true">
            <div className="art-cup" />
            <div className="art-laptop">
              <div className="art-screen" />
              <div className="art-base" />
            </div>
          </div>

          <div className="experience-list portfolio-reveal" style={{ animationDelay: "170ms" }}>
            {experiences.map((experience) => (
              <article key={experience.role} className="experience-card">
                <p className="experience-period">({experience.period})</p>
                <div className="experience-row">
                  <span className="experience-icon" aria-hidden="true">
                    &#128100;
                  </span>
                  <div>
                    <h3 className="experience-role">{experience.role}</h3>
                    <p className="experience-company">{experience.company}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <a className="back-to-top" href="#top" aria-label="Back to top">
          ↑
        </a>
      </section>

      <section id="skills" className="content-section">
        <div className="section-header portfolio-reveal">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Core technologies I use to build resilient, scalable products.</p>
        </div>
        <div className="skills-carousel-shell portfolio-reveal" aria-label="Skills carousel" role="region">
          <div className="skills-carousel-track">
            {[...skills, ...skills].map((skill, index) => (
              <article className="skill-slide" key={`${skill.name}-${index}`}>
                <span className="skill-mark" aria-hidden="true">
                  {skill.mark}
                </span>
                <h3>{skill.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="content-section">
        <div className="section-header portfolio-reveal">
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">Continuous learning to keep engineering depth and breadth up to date.</p>
        </div>
        <div className="card-grid single-column">
          <article className="content-card portfolio-reveal">
            <ul className="timeline-list">
              {education.map((item) => (
                <li key={item} className="timeline-item">
                  <span className="timeline-dot" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="projects" className="content-section">
        <div className="section-header portfolio-reveal">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Selected work across AI, web engineering, and cloud-native architecture.</p>
        </div>
        <div className="card-grid project-grid">
          {projects.map((project) => (
            <article key={project.title} className="content-card portfolio-reveal">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="meta-line">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="blogs" className="content-section">
        <div className="section-header portfolio-reveal">
          <h2 className="section-title">Blogs</h2>
          <p className="section-subtitle">Writing ideas I share with engineering teams and the community.</p>
        </div>
        <div className="card-grid blog-grid">
          {blogs.map((blog) => (
            <article key={blog.title} className="content-card portfolio-reveal">
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <a href="#top" className="text-link">
                Read more
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-wrap">
        <div className="contact-grid">
          <div className="contact-form-card portfolio-reveal">
            <h2 className="section-title">Contact With Me</h2>
            <p className="contact-intro">
              If you have any questions or opportunities, feel free to reach out. I am open to impactful engineering roles and
              consulting collaborations.
            </p>

            <form className="contact-form">
              <label htmlFor="name">Your Name:</label>
              <input id="name" name="name" type="text" />

              <label htmlFor="email">Your Email:</label>
              <input id="email" name="email" type="email" />

              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" rows={5} />

              <button type="button" className="btn-solid contact-submit">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-card portfolio-reveal" style={{ animationDelay: "120ms" }}>
            <a href="mailto:rameshmoorjani@gmail.com" className="contact-line">
              <span className="contact-icon" aria-hidden="true">
                @
              </span>
              <span>rameshmoorjani@gmail.com</span>
            </a>

            <a href="tel:+14143348976" className="contact-line">
              <span className="contact-icon" aria-hidden="true">
                ☎
              </span>
              <span>+1 (414) 334-8976</span>
            </a>

            <p className="contact-line">
              <span className="contact-icon" aria-hidden="true">
                ⌂
              </span>
              <span>Phoenix, Arizona, United States</span>
            </p>

            <div className="contact-socials" aria-label="Contact social links">
              <a href="https://github.com/rameshmoorjani" target="_blank" rel="noreferrer" className="contact-social" aria-label="GitHub">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.35 1.09 2.92.83.09-.64.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.42.2 2.46.1 2.72.64.7 1.03 1.6 1.03 2.68 0 3.83-2.34 4.67-4.58 4.92.36.32.68.95.68 1.91v2.84c0 .26.18.58.69.48A10 10 0 0 0 12 2z" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/rmoorjani/" target="_blank" rel="noreferrer" className="contact-social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5zm-1.69-5A1.97 1.97 0 0 0 3.3 5.47c0 1.08.87 1.95 1.95 1.95h.02c1.1 0 1.96-.87 1.96-1.95A1.96 1.96 0 0 0 5.25 3.5zM20 13.3c0-3.1-1.65-5.05-4.45-5.05-2.04 0-2.95 1.12-3.46 1.9V8.5H8.72c.04 1.1 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.69.12-.94.26-.69.86-1.4 1.86-1.4 1.3 0 1.82 1 1.82 2.47V20H20v-6.7z" />
                </svg>
              </a>
            </div>
          </div>

          <a href="#contact" className="vertical-tag contact-side-tag" aria-label="Contact section indicator">
            CONTACT
          </a>
        </div>
      </section>
    </div>
  );
}
