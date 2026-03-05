import { useEffect, useState, useRef, CSSProperties } from "react";

interface Service {
  num: string;
  icon: string;
  title: string;
  desc: string;
  points: string[];
}

interface Skill {
  icon: string;
  label: string;
}

interface PortfolioItem {
  img: string;
  title: string;
  cat: string;
}

interface ContactItem {
  icon: string;
  label: string;
  val: string;
  href: string;
}

const NAV_LINKS: string[] = ["Home", "About", "Services", "Skills", "Work", "Contact"];

const SERVICES: Service[] = [
  {
    num: "01",
    icon: "✦",
    title: "Graphic Design",
    desc: "Creative visual design solutions for your brand identity",
    points: ["Logo design & branding", "Marketing materials", "Custom illustrations", "Brand guidelines"],
  },
  {
    num: "02",
    icon: "◈",
    title: "Frontend Dev",
    desc: "Modern, responsive web experiences using latest technologies",
    points: ["React & modern frameworks", "Responsive web design", "UI/UX implementation", "Performance optimization"],
  },
  {
    num: "03",
    icon: "◎",
    title: "UX Design",
    desc: "User-centered design that drives engagement and conversions",
    points: ["User research & analysis", "Wireframing & prototyping", "User testing", "Information architecture"],
  },
  {
    num: "04",
    icon: "⬡",
    title: "Tech Support",
    desc: "Reliable ongoing support to keep your digital solutions running",
    points: ["Bug fixes & debugging", "Performance monitoring", "Security updates", "Technical docs"],
  },
];

const SKILLS: Skill[] = [
  { icon: "🎨", label: "Photoshop" },
  { icon: "✏️", label: "Illustrator" },
  { icon: "📐", label: "Figma" },
  { icon: "🖌️", label: "Adobe XD" },
  { icon: "</>", label: "HTML" },
  { icon: "🎭", label: "CSS" },
  { icon: "⚡", label: "JavaScript" },
  { icon: "⚛️", label: "React" },
  { icon: "💙", label: "TypeScript" },
  { icon: "🛠️", label: "Tailwind" },
  { icon: "📱", label: "WordPress" },
  { icon: "✅", label: "Git" },
];

const PORTFOLIO: PortfolioItem[] = [
  { img: "desert.jpg", title: "Desert Design", cat: "DESIGN" },
  { img: "loginportal.png", title: "Login Portal", cat: "FRONTEND" },
  { img: "products.png", title: "Next Platform", cat: "BRANDING" },
  { img: "laptops.png", title: "Magazine Layout", cat: "DESIGN" },
  { img: "palettes.png", title: "Merger Project", cat: "BRANDING" },
  { img: "logos.png", title: "Architecture Logo", cat: "LOGO" },
];

export default function Portfolio() {
  const [active, setActive] = useState<string>("Home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredPortfolio, setHoveredPortfolio] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMouse = (e: MouseEvent): void => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  const scrollTo = (id: string): void => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.root}>
      <style>{css}</style>

      {/* Cursor glow */}
      <div style={{ ...styles.cursorGlow, left: mousePos.x, top: mousePos.y }} />

      {/* NAV */}
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <div style={styles.logo}>
          <span style={styles.logoText}>YASIR</span>
          <span style={styles.logoDot}>.</span>
        </div>
        <div style={styles.navLinks}>
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{ ...styles.navLink, ...(active === l ? styles.navLinkActive : {}) }}
            >
              {l}
              {active === l && <span style={styles.navUnderline} />}
            </button>
          ))}
        </div>
        <button style={styles.ctaBtn} className="pulse-btn">Hire Me</button>
      </nav>

      {/* HERO */}
      <section id="home" ref={heroRef} style={styles.hero}>
        <div style={styles.heroGrid}>
          {/* Left */}
          <div style={styles.heroLeft} className="slide-in-left">
            <div style={styles.heroBadge}>
              <span style={styles.heroBadgeDot} />
              Available for work
            </div>
            <h1 style={styles.heroName}>
              Yasir<br />
              <span style={styles.heroNameAccent}>ALRAWI</span><br />
              <span style={styles.heroNameLight}>DAHBi</span>
            </h1>
            <p style={styles.heroRole}>
              Graphic Designer &amp; <span style={styles.accent}>Frontend Developer</span>
            </p>
            <p style={styles.heroDesc}>
              I craft visual identities and digital experiences that leave a lasting impression.
            </p>
            <div style={styles.heroBtns}>
              <button style={styles.primaryBtn} className="glow-btn">
                ↓ Download CV
              </button>
              <button style={styles.ghostBtn}>
                Let's talk →
              </button>
            </div>
            <div style={styles.heroStats}>
              {[["3+", "Years Exp."], ["40+", "Projects"], ["25+", "Clients"]].map(([n, l]) => (
                <div key={l} style={styles.stat}>
                  <span style={styles.statNum}>{n}</span>
                  <span style={styles.statLabel}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={styles.heroRight} className="slide-in-right">
            <img src="kar.png" alt="charechtar" />
          </div>
        </div>

        {/* Marquee */}
        <div style={styles.marqueeWrap}>
          <div style={styles.marqueeTrack} className="marquee">
            {Array(3).fill(["Graphic Design", "Frontend Dev", "UX Design", "Branding", "React", "Figma"]).flat().map((t, i) => (
              <span key={i} style={styles.marqueeItem}>
                <span style={styles.marqueeDot}>✦</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <div style={styles.aboutGrid}>
          <div style={styles.aboutVisual}>
            <div style={styles.aboutImgBox}>
              <div style={styles.aboutImgInner}>
                <img src="kar.png" alt="charechtar" />
              </div>
              <div style={styles.aboutTag1}>Design</div>
              <div style={styles.aboutTag2}>Code</div>
            </div>
            <div style={styles.aboutYears}>
              <span style={styles.aboutYearsNum}>3</span>
              <span style={styles.aboutYearsLabel}>Years of<br/>Excellence</span>
            </div>
          </div>

          <div style={styles.aboutText}>
            <div style={styles.sectionLabel}>— About Me</div>
            <h2 style={styles.sectionTitle}>
              Where creativity<br />meets <span style={styles.accent}>code</span>
            </h2>
            <p style={styles.bodyText}>
              I'm passionate about design and frontend development. I combine creativity
              and technical skills to create impactful visual experiences. With a background
              in graphic design and experience in web development, I create aesthetic, intuitive,
              and performant digital solutions.
            </p>
            <p style={styles.bodyText}>
              My expertise bridges design and development, enabling me to create seamless
              digital experiences that are both beautiful and functional.
            </p>
            <div style={styles.aboutTags}>
              {["Creative Thinker", "Detail-Oriented", "Fast Learner", "Team Player"].map(t => (
                <span key={t} style={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ ...styles.section, background: "rgba(255,140,0,0.03)" }}>
        <div style={styles.sectionHead}>
          <div style={styles.sectionLabel}>— Services</div>
          <h2 style={styles.sectionTitle}>What I <span style={styles.accent}>offer</span></h2>
        </div>
        <div style={styles.servicesGrid}>
          {SERVICES.map((s, i) => (
            <div
              key={i}
              style={{
                ...styles.serviceCard,
                ...(hoveredCard === i ? styles.serviceCardHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="service-card"
            >
              <div style={styles.serviceNum}>{s.num}</div>
              <div style={styles.serviceIcon}>{s.icon}</div>
              <h3 style={styles.serviceTitle}>{s.title}</h3>
              <p style={styles.serviceDesc}>{s.desc}</p>
              <ul style={styles.serviceList}>
                {s.points.map((p, j) => (
                  <li key={j} style={styles.servicePoint}>
                    <span style={styles.accent}>→</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={styles.section}>
        <div style={styles.sectionHead}>
          <div style={styles.sectionLabel}>— Skills & Tools</div>
          <h2 style={styles.sectionTitle}>My <span style={styles.accent}>toolkit</span></h2>
        </div>
        <div style={styles.skillsGrid}>
          {SKILLS.map((s, i) => (
            <div key={i} style={styles.skillCard} className="skill-card">
              <div style={styles.skillIcon}>{s.icon}</div>
              <div style={styles.skillLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ ...styles.section, background: "rgba(255,140,0,0.03)" }}>
        <div style={styles.sectionHead}>
          <div style={styles.sectionLabel}>— Portfolio</div>
          <h2 style={styles.sectionTitle}>Selected <span style={styles.accent}>work</span></h2>
        </div>
        <div style={styles.portfolioGrid}>
          {PORTFOLIO.map((p, i) => (
            <div
              key={i}
              style={styles.portfolioCard}
              onMouseEnter={() => setHoveredPortfolio(i)}
              onMouseLeave={() => setHoveredPortfolio(null)}
              className="portfolio-card"
            >
              <img src={p.img} alt={p.title} style={styles.portfolioImg} />
              <div style={{
                ...styles.portfolioOverlay,
                opacity: hoveredPortfolio === i ? 1 : 0,
              }}>
                <span style={styles.portfolioCat}>{p.cat}</span>
                <h3 style={styles.portfolioTitle}>{p.title}</h3>
                <span style={styles.portfolioArrow}>↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <div style={styles.contactWrap}>
          <div style={styles.sectionLabel}>— Contact</div>
          <h2 style={{ ...styles.sectionTitle, fontSize: 52, textAlign: "center" }}>
            Let's create something<br /><span style={styles.accent}>remarkable</span>
          </h2>
          <p style={{ ...styles.bodyText, textAlign: "center", maxWidth: 500, margin: "0 auto 48px" }}>
            I'm always open to new opportunities and interesting projects. Feel free to reach out!
          </p>
          <div style={styles.contactCards}>
            {([
              { icon: "✉️", label: "Email", val: "yasir7alrawi23@gmail.com", href: "mailto:yasir7alrawi23@gmail.com" },
              { icon: "📍", label: "Location", val: "Turkey", href: "#" },
              { icon: "📱", label: "Phone", val: "+212 651 405 939", href: "tel:+212651405939" },
            ] as ContactItem[]).map((c) => (
              <a key={c.label} href={c.href} style={styles.contactCard} className="contact-card">
                <span style={styles.contactIcon}>{c.icon}</span>
                <span style={styles.contactLabel}>{c.label}</span>
                <span style={styles.contactVal}>{c.val}</span>
              </a>
            ))}
          </div>
          <button style={{ ...styles.primaryBtn, margin: "0 auto", display: "block" }} className="glow-btn">
            Get in Touch →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span style={styles.footerLogo}>YASIR<span style={styles.accent}>.</span></span>
        <span style={styles.footerText}>© 2024 Yasir Alrawi Dahbi. All rights reserved.</span>
        <div style={styles.footerLinks}>
          {["LinkedIn", "Behance", "GitHub", "Dribbble"].map(l => (
            <a key={l} href="#" style={styles.footerLink}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}

/* ─── Styles ─── */
const C = {
  bg: "#0a0a0a",
  card: "#111111",
  border: "#1e1e1e",
  accent: "#ff8c00",
  accentDim: "rgba(255,140,0,0.12)",
  accentGlow: "rgba(255,140,0,0.25)",
  text: "#f0f0f0",
  muted: "#888",
  white: "#ffffff",
};

const styles: Record<string, CSSProperties> = {
  root: {
    background: C.bg,
    color: C.text,
    fontFamily: "'DM Serif Display', 'Garamond', Georgia, serif",
    minHeight: "100vh",
    position: "relative",
    overflowX: "hidden",
  },
  cursorGlow: {
    position: "fixed",
    width: 400,
    height: 400,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,140,0,0.06) 0%, transparent 70%)",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 0,
    transition: "left 0.1s ease, top 0.1s ease",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 60px",
    transition: "all 0.4s ease",
  },
  navScrolled: {
    background: "rgba(10,10,10,0.9)",
    backdropFilter: "blur(20px)",
    borderBottom: `1px solid ${C.border}`,
    padding: "14px 60px",
  },
  logo: { display: "flex", alignItems: "center" },
  logoText: { fontSize: 28, fontWeight: 800, color: C.white, letterSpacing: -1 },
  logoDot: { fontSize: 36, color: C.accent, lineHeight: 1 },
  navLinks: { display: "flex", gap: 8 },
  navLink: {
    position: "relative",
    background: "none",
    border: "none",
    color: C.muted,
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: 0.5,
    padding: "6px 16px",
    cursor: "pointer",
    transition: "color 0.2s",
  },
  navLinkActive: { color: C.white },
  navUnderline: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 4,
    height: 4,
    borderRadius: "50%",
    background: C.accent,
    display: "block",
  },
  ctaBtn: {
    background: C.accent,
    color: "#000",
    border: "none",
    borderRadius: 100,
    padding: "10px 28px",
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "'DM Sans', sans-serif",
    cursor: "pointer",
    letterSpacing: 0.5,
  },
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "120px 60px 0",
    position: "relative",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 60,
    alignItems: "center",
    maxWidth: 1200,
    margin: "0 auto",
    width: "100%",
  },
  heroLeft: { display: "flex", flexDirection: "column", gap: 24 },
  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: C.accentDim,
    border: `1px solid ${C.accent}40`,
    borderRadius: 100,
    padding: "6px 16px",
    fontSize: 13,
    color: C.accent,
    width: "fit-content",
    fontFamily: "'DM Sans', sans-serif",
  },
  heroBadgeDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: C.accent,
    display: "inline-block",
    animation: "pulse 2s infinite",
  },
  heroName: {
    fontSize: 72,
    fontWeight: 900,
    lineHeight: 1,
    margin: 0,
    letterSpacing: -3,
    color: C.white,
  },
  heroNameAccent: { color: C.accent },
  heroNameLight: { color: C.muted, fontStyle: "italic" },
  heroRole: {
    fontSize: 18,
    color: C.muted,
    fontFamily: "'DM Sans', sans-serif",
    margin: 0,
  },
  heroDesc: {
    fontSize: 15,
    color: "#666",
    lineHeight: 1.7,
    maxWidth: 420,
    fontFamily: "'DM Sans', sans-serif",
  },
  heroBtns: { display: "flex", gap: 16, alignItems: "center" },
  primaryBtn: {
    background: C.accent,
    color: "#000",
    border: "none",
    borderRadius: 100,
    padding: "14px 36px",
    fontSize: 15,
    fontWeight: 700,
    fontFamily: "'DM Sans', sans-serif",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  ghostBtn: {
    background: "transparent",
    color: C.white,
    border: `1px solid ${C.border}`,
    borderRadius: 100,
    padding: "14px 36px",
    fontSize: 15,
    fontFamily: "'DM Sans', sans-serif",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  heroStats: {
    display: "flex",
    gap: 32,
    borderTop: `1px solid ${C.border}`,
    paddingTop: 24,
  },
  stat: { display: "flex", flexDirection: "column", gap: 2 },
  statNum: { fontSize: 28, fontWeight: 800, color: C.accent },
  statLabel: { fontSize: 12, color: C.muted, fontFamily: "'DM Sans', sans-serif" },
  heroRight: { display: "flex", justifyContent: "center", alignItems: "center" },
  avatarWrap: {
    position: "relative",
    width: 380,
    height: 380,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarRing: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    border: `2px dashed ${C.accent}40`,
  },
  avatarRing2: {
    position: "absolute",
    inset: 20,
    borderRadius: "50%",
    border: `1px solid ${C.border}`,
  },
  avatar: {
    width: 280,
    height: 280,
    borderRadius: "50%",
    background: `radial-gradient(circle at 30% 30%, ${C.accentDim}, ${C.card})`,
    border: `2px solid ${C.accent}30`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 100,
    zIndex: 1,
  },
  floatBadge1: {
    position: "absolute",
    top: 30,
    right: -10,
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    padding: "10px 16px",
    fontSize: 13,
    fontFamily: "'DM Sans', sans-serif",
    display: "flex",
    alignItems: "center",
    gap: 8,
    zIndex: 2,
  },
  floatBadge2: {
    position: "absolute",
    bottom: 40,
    left: -20,
    background: C.card,
    border: `1px solid ${C.accent}40`,
    borderRadius: 12,
    padding: "10px 16px",
    fontSize: 13,
    fontFamily: "'DM Sans', sans-serif",
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: C.accent,
    zIndex: 2,
  },
  marqueeWrap: {
    overflow: "hidden",
    borderTop: `1px solid ${C.border}`,
    borderBottom: `1px solid ${C.border}`,
    marginTop: 60,
    padding: "16px 0",
  },
  marqueeTrack: {
    display: "flex",
    gap: 0,
    whiteSpace: "nowrap",
  },
  marqueeItem: {
    fontSize: 13,
    fontFamily: "'DM Sans', sans-serif",
    color: C.muted,
    padding: "0 32px",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  marqueeDot: { color: C.accent },
  section: {
    padding: "100px 60px",
    maxWidth: 1300,
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  },
  sectionHead: { marginBottom: 60 },
  sectionLabel: {
    color: C.accent,
    fontSize: 13,
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 44,
    fontWeight: 900,
    lineHeight: 1.1,
    letterSpacing: -1.5,
    margin: 0,
    color: C.white,
  },
  accent: { color: C.accent },
  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: 80,
    alignItems: "center",
  },
  aboutVisual: { position: "relative" },
  aboutImgBox: {
    width: "100%",
    aspectRatio: "1",
    background: `linear-gradient(135deg, ${C.card}, ${C.accentDim})`,
    borderRadius: 32,
    border: `1px solid ${C.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  aboutImgInner: {
    fontSize: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  aboutTag1: {
    position: "absolute",
    top: 20,
    left: 20,
    background: C.accent,
    color: "#000",
    borderRadius: 8,
    padding: "6px 14px",
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "'DM Sans', sans-serif",
  },
  aboutTag2: {
    position: "absolute",
    bottom: 20,
    right: 20,
    background: C.card,
    color: C.white,
    borderRadius: 8,
    padding: "6px 14px",
    fontSize: 12,
    fontFamily: "'DM Sans', sans-serif",
    border: `1px solid ${C.border}`,
  },
  aboutYears: {
    position: "absolute",
    bottom: -24,
    left: -24,
    background: C.accent,
    borderRadius: 20,
    padding: "20px 28px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  aboutYearsNum: {
    fontSize: 48,
    fontWeight: 900,
    color: "#000",
    lineHeight: 1,
  },
  aboutYearsLabel: {
    fontSize: 12,
    color: "#000",
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: 1.3,
    textAlign: "center",
    fontWeight: 600,
  },
  aboutText: { display: "flex", flexDirection: "column", gap: 20 },
  bodyText: {
    color: C.muted,
    lineHeight: 1.8,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    margin: 0,
  },
  aboutTags: { display: "flex", flexWrap: "wrap", gap: 10 },
  tag: {
    background: C.accentDim,
    color: C.accent,
    border: `1px solid ${C.accent}30`,
    borderRadius: 100,
    padding: "6px 16px",
    fontSize: 13,
    fontFamily: "'DM Sans', sans-serif",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20,
  },
  serviceCard: {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 24,
    padding: 36,
    position: "relative",
    transition: "all 0.3s ease",
    overflow: "hidden",
    cursor: "default",
  },
  serviceCardHover: {
    border: `1px solid ${C.accent}50`,
    background: `linear-gradient(135deg, ${C.card}, rgba(255,140,0,0.05))`,
    transform: "translateY(-4px)",
  },
  serviceNum: {
    position: "absolute",
    top: 24,
    right: 28,
    fontSize: 48,
    fontWeight: 900,
    color: C.border,
    lineHeight: 1,
  },
  serviceIcon: {
    fontSize: 28,
    color: C.accent,
    marginBottom: 16,
  },
  serviceTitle: {
    fontSize: 22,
    fontWeight: 700,
    margin: "0 0 10px",
    color: C.white,
  },
  serviceDesc: {
    fontSize: 14,
    color: C.muted,
    margin: "0 0 20px",
    lineHeight: 1.6,
    fontFamily: "'DM Sans', sans-serif",
  },
  serviceList: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 },
  servicePoint: {
    fontSize: 13,
    color: "#777",
    fontFamily: "'DM Sans', sans-serif",
    display: "flex",
    gap: 8,
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: 16,
  },
  skillCard: {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 20,
    padding: "24px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    transition: "all 0.3s ease",
    cursor: "default",
  },
  skillIcon: { fontSize: 32 },
  skillLabel: {
    fontSize: 12,
    color: C.muted,
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: 0.5,
  },
  portfolioGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
  },
  portfolioCard: {
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    aspectRatio: "4/3",
    cursor: "pointer",
  },
  portfolioImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  portfolioOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 24,
    transition: "opacity 0.3s ease",
  },
  portfolioCat: {
    fontSize: 11,
    color: C.accent,
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: 3,
    marginBottom: 6,
  },
  portfolioTitle: {
    fontSize: 22,
    fontWeight: 700,
    margin: 0,
    color: C.white,
  },
  portfolioArrow: {
    position: "absolute",
    top: 20,
    right: 20,
    fontSize: 24,
    color: C.accent,
    background: "rgba(0,0,0,0.5)",
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
  },
  contactWrap: {
    textAlign: "center",
    maxWidth: 800,
    margin: "0 auto",
  },
  contactCards: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    marginBottom: 40,
    flexWrap: "wrap",
  },
  contactCard: {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 20,
    padding: "28px 36px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
    transition: "all 0.3s ease",
    flex: "1",
    minWidth: 160,
  },
  contactIcon: { fontSize: 32 },
  contactLabel: {
    fontSize: 12,
    color: C.muted,
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  contactVal: {
    fontSize: 14,
    color: C.white,
    fontFamily: "'DM Sans', sans-serif",
  },
  footer: {
    borderTop: `1px solid ${C.border}`,
    padding: "32px 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: C.bg,
  },
  footerLogo: {
    fontSize: 22,
    fontWeight: 800,
    color: C.white,
  },
  footerText: {
    fontSize: 13,
    color: C.muted,
    fontFamily: "'DM Sans', sans-serif",
  },
  footerLinks: { display: "flex", gap: 24 },
  footerLink: {
    fontSize: 13,
    color: C.muted,
    textDecoration: "none",
    fontFamily: "'DM Sans', sans-serif",
    transition: "color 0.2s",
  },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

  * { box-sizing: border-box; }

  body { margin: 0; }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }

  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes spin-r { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
  @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }

  .spin-slow { animation: spin 20s linear infinite; }
  .spin-reverse { animation: spin-r 15s linear infinite; }
  .float-anim { animation: float 4s ease-in-out infinite; }
  .float-anim-delay { animation: float 4s ease-in-out infinite 1.5s; }
  .marquee { animation: marquee 20s linear infinite; }
  .slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
  .slide-in-right { animation: slideInRight 0.8s ease-out forwards; }

  .glow-btn:hover {
    box-shadow: 0 0 40px rgba(255,140,0,0.4), 0 8px 24px rgba(255,140,0,0.2);
    transform: translateY(-2px);
  }

  .pulse-btn:hover {
    box-shadow: 0 0 20px rgba(255,140,0,0.3);
    transform: scale(1.03);
    transition: all 0.2s ease;
  }

  .skill-card:hover {
    border-color: rgba(255,140,0,0.4) !important;
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(255,140,0,0.1);
  }

  .portfolio-card:hover img {
    transform: scale(1.08);
  }

  .contact-card:hover {
    border-color: rgba(255,140,0,0.4) !important;
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(255,140,0,0.1);
  }

  a.footerLink:hover { color: #ff8c00 !important; }
`;