import React, { useRef, useEffect } from "react";
import "./ServicesSection.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { motion } from "framer-motion";

/* ─── Services Data (from business card) ─── */
const SERVICES_DATA = [
  {
    id: "web-app-dev",
    title: "Web Application Development",
    desc: "Custom web apps, SaaS platforms, and responsive websites with modern technologies.",
    iconClass: "fa-solid fa-code",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
  {
    id: "education-solutions",
    title: "Education Solutions",
    desc: "LMS platforms, e-learning tools, and educational systems for institutions.",
    iconClass: "fa-solid fa-graduation-cap",
    gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    desc: "Online stores with payment integration, inventory management, and analytics.",
    iconClass: "fa-solid fa-cart-shopping",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
  },
  {
    id: "custom-software",
    title: "Custom Software Solution",
    desc: "Tailor-made software designed to solve your unique business challenges.",
    iconClass: "fa-solid fa-gear",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
  },
  {
    id: "mobile-app-dev",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps using Flutter and modern frameworks.",
    iconClass: "fa-solid fa-mobile-screen-button",
    gradient: "linear-gradient(135deg, #ec4899, #f472b6)",
  },
  {
    id: "web-consultant",
    title: "Online Web Consultant",
    desc: "Expert consulting for web strategy, architecture, and technology selection.",
    iconClass: "fa-solid fa-headset",
    gradient: "linear-gradient(135deg, #ef4444, #f87171)",
  },
  {
    id: "training-internship",
    title: "Training & Internship",
    desc: "Hands-on training programs and internships in web technologies.",
    iconClass: "fa-solid fa-chalkboard-user",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
  },
  {
    id: "open-source-dev",
    title: "Open Source Development",
    desc: "Building open-source WordPress plugins, themes, and developer tools.",
    iconClass: "fa-brands fa-github",
    gradient: "linear-gradient(135deg, #6b7280, #9ca3af)",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    desc: "SEO, SMO, content strategy, and performance marketing for growth.",
    iconClass: "fa-solid fa-bullhorn",
    gradient: "linear-gradient(135deg, #f97316, #fb923c)",
  },
];

/* ─── Animated Floating Particles Canvas ─── */
function FloatingCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, particles, shapes;

    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      w = r.width; h = r.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      const count = Math.min(Math.floor(w * 0.03), 35);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 2.5 + 1, opacity: Math.random() * 0.25 + 0.05,
          type: Math.floor(Math.random() * 3), rotation: Math.random() * 6.28,
          rotSpeed: (Math.random() - 0.5) * 0.01, phase: Math.random() * 6.28,
        });
      }
      shapes = [
        { x: w * 0.12, y: h * 0.25, s: 55, o: 0.03, t: 0, rs: 0.003, vy: -0.12 },
        { x: w * 0.88, y: h * 0.18, s: 70, o: 0.025, t: 1, rs: -0.004, vy: 0.08 },
        { x: w * 0.72, y: h * 0.78, s: 45, o: 0.03, t: 0, rs: 0.005, vy: -0.1 },
        { x: w * 0.22, y: h * 0.82, s: 60, o: 0.02, t: 2, rs: -0.003, vy: -0.1 },
        { x: w * 0.5, y: h * 0.12, s: 40, o: 0.025, t: 2, rs: 0.004, vy: 0.07 },
      ];
      shapes.forEach(s => { s.rot = 0; });
    };

    const poly = (cx, cy, r, sides, rot) => {
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const a = (Math.PI * 2 / sides) * i + rot;
        const px = cx + r * Math.cos(a), py = cy + r * Math.sin(a);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.016;
      const mx = mouseRef.current.x, my = mouseRef.current.y;

      // Large shapes
      shapes.forEach(s => {
        s.rot += s.rs; s.y += s.vy;
        if (s.y < -s.s) s.y = h + s.s;
        if (s.y > h + s.s) s.y = -s.s;
        const px = s.x + (mx - 0.5) * 20, py = s.y + (my - 0.5) * 12;
        ctx.strokeStyle = `rgba(167,139,250,${s.o})`;
        ctx.lineWidth = 1.2;
        const sides = s.t === 0 ? 6 : s.t === 1 ? 3 : 4;
        poly(px, py, s.s, sides, s.rot);
        ctx.stroke();
      });

      // Particles
      particles.forEach(p => {
        p.x += p.vx + (mx - 0.5) * 0.25;
        p.y += p.vy + (my - 0.5) * 0.12;
        p.rotation += p.rotSpeed;
        if (p.x < -8) p.x = w + 8; if (p.x > w + 8) p.x = -8;
        if (p.y < -8) p.y = h + 8; if (p.y > h + 8) p.y = -8;
        const pulse = Math.sin(t * 1.5 + p.phase) * 0.5 + 0.5;
        const a = p.opacity * (0.6 + pulse * 0.4);
        ctx.fillStyle = `rgba(167,139,250,${a})`;
        if (p.type === 0) {
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, 6.28); ctx.fill();
        } else if (p.type === 1) {
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rotation);
          ctx.beginPath(); ctx.moveTo(0, -p.size); ctx.lineTo(p.size, 0);
          ctx.lineTo(0, p.size); ctx.lineTo(-p.size, 0); ctx.closePath();
          ctx.fill(); ctx.restore();
        } else {
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 1.5, 0, 6.28);
          ctx.strokeStyle = `rgba(167,139,250,${a * 0.7})`;
          ctx.lineWidth = 0.7; ctx.stroke();
        }
      });

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(167,139,250,${(1 - d / 140) * 0.05})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    resize(); init(); draw();

    const onMouse = (e) => {
      const r = canvas.parentElement.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - r.left) / r.width;
      mouseRef.current.y = (e.clientY - r.top) / r.height;
    };

    window.addEventListener("resize", () => { resize(); init(); }, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="services-3d-canvas" />;
}

/* ─── Card Variants ─── */
const cardV = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── Main Component ─── */
export default function ServicesSection({ theme }) {
  const sectionStyle = {
    "--services-bg-start": theme?.body || "#f8fafc",
    "--services-bg-end": theme?.highlight || "#eef6ff",
    "--services-text": theme?.text || "#0f172a",
    "--services-subtitle": theme?.secondaryText || "#475569",
    "--services-highlight": theme?.imageHighlight || "#6366f1",
    "--services-card-bg": "rgba(255,255,255,0.82)",
    "--services-card-border": "rgba(148,163,184,0.22)",
    "--services-card-shadow": "rgba(99,102,241,0.12)",
  };

  return (
    <section className="services-section-wrap" id="services" style={sectionStyle}>
      <FloatingCanvas />
      <div className="services-container">
        <SectionHeader
          overline="SERVICES"
          title="What I "
          highlight="Offer"
          subtitle="Comprehensive web development, consulting, and digital solutions to transform your business."
          align="center"
          theme={theme}
          
        />
        <div className="services-grid-3d">
          {SERVICES_DATA.map((s, i) => (
            <motion.div key={s.id} className="service-card-3d"
              custom={i} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardV} whileHover={{ y: -10 }}>
              <span className="service-card-number">{String(i + 1).padStart(2, "0")}</span>
              <div className="service-card-icon-wrap" style={{ background: s.gradient }}>
                <i className={s.iconClass}></i>
              </div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-desc">{s.desc}</p>
              <div className="service-card-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
