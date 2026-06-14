"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navSections = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "journey", label: "Journey" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const LEGACY_ASSET_BASE = "https://zenwong.vercel.app";
const PROFILE_IMAGE_SRC = "/api/profile-photo";

type Project = {
  title: string;
  categories: string[];
  descTitle?: string;
  description: string;
  youtubeId?: string;
  codeUrl?: string;
  siteUrl?: string;
  demoUrl?: string;
  imagePath?: string;
  siteImagePath?: string;
};

const timeline = [
  {
    company: "Ant International",
    role: "Senior Frontend Engineer",
    date: "March 2024 - Present",
    location: "Federal Territory of Kuala Lumpur, Malaysia",
    spotlight: "Agentic SDLC on Antom",
    details:
      "Driving frontend delivery for Antom, a B2B payment platform at Ant International. I focus on agentic SDLC and spec-driven development to turn product requirements into reliable, scalable experiences with faster execution and stronger release confidence.",
  },
  {
    company: "Corplabs",
    role: "Frontend Engineer",
    date: "Jan 2024 - Feb 2024",
    location: "Selangor, Malaysia",
    spotlight: "Fast-Track Product Shipments",
    details:
      "Delivered high-impact frontend features in a fast-moving setup while maintaining strong quality standards.",
  },
  {
    company: "Freelance",
    role: "React Developer",
    date: "August 2020 - February 2022",
    location: "Malaysia",
    spotlight: "Client Experience Excellence",
    details:
      "Mainly focused on frontend development for React applications while collaborating with cross-functional teams. Developed and maintained frontend web applications, implementing responsive design techniques to enhance user experience across various devices.",
  },
  {
    company: "I Concept Digital",
    role: "Senior Web Developer",
    date: "2017 - 2020",
    location: "Selangor, Malaysia",
    spotlight: "Brand-Centric Platform Design",
    details:
      "Involved in high-value or government tender projects such as Education Malaysia (EMGS), KDU University (now UOWKDU), KL Summit 2019 and more. Started as a Junior Web Developer using Bootstrap and WordPress, working with designers to build websites for startups and SMEs while writing clean, readable, and reusable code.",
  },
];

const strengths = [
  "Agentic AI Development",
  "Spec-Driven Development",
  "Mentoring",
  "React.js",
  "Web Application Development",
  "Frontend Development",
];

const projects: Project[] = [
  {
    title: "GUSTOSO",
    categories: ["react", "nextjs"],
    descTitle: "Technology involved:",
    description:
      "Next.js React Framework, Tailwind CSS and responsive design, Prisma database, PostgreSQL, Functional components, Auth.js google authentication, Next.js data fetching (getData), zustand state management tool, React query by TanStack, Slick slider",
    youtubeId: "l702OToZaEQ",
    codeUrl: "https://github.com/zh3nhua94/food-app",
    demoUrl: "https://gustoso-food-app.vercel.app/",
    imagePath: "/react/food/food.jpg",
  },
  {
    title: "Zen Enterprise",
    categories: ["react", "nextjs"],
    descTitle: "Technology involved:",
    description:
      "Next.js React Framework, Functional components, Dark/Light more toggle, Auth.js authentication, Next.js data fetching (getData), Next.js Context API actions and reducers, Next.js SWR mutation, CRUD operations to MongoDB",
    youtubeId: "47gkKwgTv4c",
    codeUrl: "https://github.com/zh3nhua94/nextjs-company",
    demoUrl: "https://zenenterprise.vercel.app/",
    imagePath: "/react/company/company-5.jpg",
  },
  {
    title: "Flow Club",
    categories: ["react"],
    descTitle: "Technology involved:",
    description:
      "React router DOM, Functional components, Google Fonts, Express, Node.js request query, Dynamic data fetching with Axios and hooks, React Context API actions and reducers, CRUD operations to MongoDB",
    youtubeId: "rmbOb2yn048",
    codeUrl: "https://github.com/zh3nhua94/flowclub-blog",
    demoUrl: "https://flowclub.vercel.app/",
    imagePath: "/react/blog/blog-pic-1.jpg",
  },
  {
    title: "Challenge by Corplabs",
    categories: ["react", "nextjs"],
    descTitle: "Challenge:",
    description:
      "Using any framework build on React and the provided JSON file, create a page that includes a table fulfilling the following: can be filtered by (isInProduction, brand, model, color), has pagination with flexible page size, and sorted or filtered results can be shared by link.",
    youtubeId: "PBPHF1M4lFU",
    codeUrl: "https://github.com/zh3nhua94/car-listing",
    siteUrl: "https://carpool-coral.vercel.app/",
    imagePath: "/react/car/corplabs-carpool.jpg",
  },
  {
    title: "ZenSocial",
    categories: ["react"],
    descTitle: "Technology involved:",
    description:
      "React router DOM, Functional components, Material icons, Dynamic data fetching with Axios and hooks, React Context API actions and reducers, CRUD operations to MongoDB",
    youtubeId: "L4xl12YKM9g",
    codeUrl: "https://github.com/zh3nhua94/zen-social-api",
    imagePath: "/react/social/social-pic2.jpg",
  },
  {
    title: "Autumn. Ecommerce Shop",
    categories: ["react", "frontend"],
    descTitle: "Technology involved:",
    description:
      "React router DOM, Functional components, Material icons, Dynamic data fetching with Axios and hooks, React Context API actions and reducers, CRUD operations to MongoDB",
    codeUrl: "https://github.com/zh3nhua94/autumn-ecommerce",
    imagePath: "/react/ecommerce/autumn-shop.jpg",
    siteImagePath: "/react/ecommerce/autumn-shop.jpg",
  },
  {
    title: "Mobile Job Search App",
    categories: ["react-native"],
    descTitle: "Technology involved:",
    description:
      "React Native, Expo Router, Functional components, Dynamic data fetching with custom useFetch hook, axios, rapid API",
    codeUrl: "https://github.com/zh3nhua94/mobile-job-app",
    imagePath: "/mobile/mobile-job-app-img.jpg",
    siteImagePath: "/mobile/mobile-job-app-img.jpg",
  },
  {
    title: "Sweather Weather",
    categories: ["vuejs", "frontend"],
    descTitle: "Technology involved:",
    description:
      "Vue.js, Vite, Tailwind CSS, Dynamic data fetching with Axios and hooks, Open Weather Map API, MapBox API",
    codeUrl: "https://github.com/zh3nhua94/weather/",
    siteUrl: "https://sweather-weather.vercel.app/",
    imagePath: "/vuejs/weather/weather.jpg",
    siteImagePath: "/vuejs/weather/weather_2.jpg",
  },
  {
    title: "VitaHealth",
    categories: ["frontend"],
    description:
      "Vitahealth did a brand refresh by featuring dynamic people of different life stages and vibrant lifestyles. We also featured a diversity of visual elements curated to set apart different life stages in a vibrant way. Our creative elevated the entire brand and is now communicated throughout all regions for branding consistency purposes.",
    siteUrl: "https://www.vitahealth.com.my/",
    imagePath: "/portfolio/vitahealth.jpg",
    siteImagePath: "/portfolio/Vitahealth-Ecommerce.jpeg",
  },
  {
    title: "UOW Malaysia KDU",
    categories: ["frontend"],
    description:
      "This was a rebranding exercise in line with the transition of KDU University Colleges into University of Wollongong (UOW) Malaysia KDU that will now see new international education and research opportunities through the UOW Global Network. UOW's consistent branding would help to distinguish its offerings and institutions in the competitive higher education space, helping audiences find, choose and trust UOW.",
    siteUrl: "https://www.uow.edu.my/",
    imagePath: "/portfolio/uow.jpg",
    siteImagePath: "/portfolio/uow-1.jpeg",
  },
  {
    title: "Securities Industry Development Corporation",
    categories: ["frontend"],
    description:
      "SIDC is the leading capital market learning and development solutions provider for industry participants in Malaysia. In order to demonstrate value to its target market, we created a unique navigation solution that lets visitors explore different content tailored to their specific needs. We also introduced a versatile calendar and filtering feature to promote all programmes dynamically. All in all, we achieved a seamless user and browsing experience.",
    siteUrl: "https://www.sidc.com.my/",
    imagePath: "/portfolio/sidc.jpg",
    siteImagePath: "/portfolio/sidc-1.jpeg",
  },
  {
    title: "Avenue K",
    categories: ["frontend"],
    description:
      "At the core of the Avenue K brand is its experience with customers, being Kuala Lumpur's coolest urban hub that aims to indulge retail desires, entertainment needs and food enthusiasts. As a result, the website is designed to associate with excitement and happenings, portraying that boundless good times and great company are what make life celebrated.",
    siteUrl: "https://www.avenuek.com.my/",
    imagePath: "/portfolio/ak.jpg",
    siteImagePath: "/portfolio/ak-1.jpeg",
  },
  {
    title: "Hua Yang Berhad",
    categories: ["frontend"],
    description:
      "In order to exceed the expectations of Hua Yang's existing customers and attract new prospects, the client needed to deliver an optimised web experience with a facelift. Hence we united all parts of its brand and corporate identity, while offering a premium look and effortless usability. Cloud motifs are also used in order to create a stronger impact in line with its brand tagline, 'Your Dreams, Made Affordable'.",
    siteUrl: "https://huayang.com.my/",
    imagePath: "/portfolio/huayang.jpg",
    siteImagePath: "/portfolio/huayang-1.jpeg",
  },
  {
    title: "Land Pacific Group",
    categories: ["frontend"],
    description:
      "In an effort to develop a corporate branding campaign, the client seeks to be recognised as not only a builder of quality homes, but also the builder of dreams and the creator of the perfect abode. The night sky design depicts dreams taking shape and Land Pacific is here to make your dream of owning a home come true.",
    siteUrl: "https://landpacific.com/",
    imagePath: "/portfolio/land.jpg",
    siteImagePath: "/portfolio/land-pacific-1.jpeg",
  },
  {
    title: "Technigroup Far East Pte Ltd",
    categories: ["frontend"],
    description:
      "Corporate website project focused on clear service presentation and a trustworthy professional brand experience.",
    siteUrl: "https://www.technigroup.com.sg/",
    imagePath: "/portfolio/technigroup.jpg",
    siteImagePath: "/portfolio/technigroup.jpg",
  },
  {
    title: "C.S.Yap",
    categories: ["frontend"],
    description:
      "Professional services website delivery with a clean information architecture and modern responsive layout.",
    siteUrl: "https://www.csyap.com.my/",
    imagePath: "/portfolio/csyap.jpg",
    siteImagePath: "/portfolio/csyap.jpg",
  },
];

const servicePillars = [
  {
    title: "Frontend Development",
    description:
      "Build responsive and interactive user interfaces with React.js across devices.",
  },
  {
    title: "Web Application Delivery",
    description:
      "Develop and deliver web applications using HTML, CSS, and JavaScript with a strong implementation focus.",
  },
  {
    title: "Mentoring",
    description:
      "Guide junior web developers through hands-on supervision and targeted skill development support.",
  },
  {
    title: "Communication",
    description:
      "Work closely with clients and cross-functional teams to align requirements and execution clearly.",
  },
];

const impactStats = [
  { label: "Current Role", value: "Senior Frontend Engineer" },
  { label: "Company", value: "Ant International" },
  { label: "Core Stack", value: "React.js" },
];

export default function Home() {
  const [activeProjectTag, setActiveProjectTag] = useState("All");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [visibleProjectCount, setVisibleProjectCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const modalCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalTriggerRef = useRef<HTMLElement | null>(null);

  const projectTags = ["All", "React", "Frontend Projects", "React Native"];
  const filteredProjects = projects.filter((project) => {
    if (activeProjectTag === "All") {
      return true;
    }
    if (activeProjectTag === "React") {
      return project.categories.some((cat) => cat === "react" || cat === "nextjs");
    }
    if (activeProjectTag === "Frontend Projects") {
      return project.categories.some((cat) => cat === "frontend" || cat === "vuejs");
    }
    if (activeProjectTag === "React Native") {
      return project.categories.includes("react-native");
    }
    return true;
  });
  const visibleProjects = filteredProjects.slice(0, visibleProjectCount);
  const hasMoreProjects = filteredProjects.length > visibleProjects.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(".reveal")
        .forEach((node) => node.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.16 },
    );

    const revealNodes = document.querySelectorAll(".reveal");
    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const projectRevealNodes = document.querySelectorAll(".project-grid .reveal");
    if (!projectRevealNodes.length) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      projectRevealNodes.forEach((node) => node.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.16 },
    );

    projectRevealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [activeProjectTag, visibleProjects.length]);

  useEffect(() => {
    setVisibleProjectCount(6);
  }, [activeProjectTag]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      },
    );

    navSections.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node) {
        sectionObserver.observe(node);
      }
    });

    return () => sectionObserver.disconnect();
  }, []);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [activeSection]);

  useEffect(() => {
    const onViewportChange = () => {
      if (window.innerWidth > 760) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener("resize", onViewportChange);
    return () => window.removeEventListener("resize", onViewportChange);
  }, []);

  useEffect(() => {
    const magneticNodes = Array.from(document.querySelectorAll<HTMLElement>(".magnetic"));
    const magneticMoveHandlers = new Map<HTMLElement, EventListener>();
    const magneticLeaveHandlers = new Map<HTMLElement, EventListener>();

    magneticNodes.forEach((node) => {
      const onMove: EventListener = (event) => {
        const pointerEvent = event as PointerEvent;
        const rect = node.getBoundingClientRect();
        const offsetX = pointerEvent.clientX - (rect.left + rect.width / 2);
        const offsetY = pointerEvent.clientY - (rect.top + rect.height / 2);
        node.style.setProperty("--mx", `${offsetX * 0.14}px`);
        node.style.setProperty("--my", `${offsetY * 0.14}px`);
      };
      const onLeave: EventListener = () => {
        node.style.setProperty("--mx", "0px");
        node.style.setProperty("--my", "0px");
      };
      magneticMoveHandlers.set(node, onMove);
      magneticLeaveHandlers.set(node, onLeave);
      node.addEventListener("pointermove", onMove);
      node.addEventListener("pointerleave", onLeave);
    });

    return () => {
      magneticNodes.forEach((node) => {
        const moveHandler = magneticMoveHandlers.get(node);
        const leaveHandler = magneticLeaveHandlers.get(node);
        if (moveHandler) {
          node.removeEventListener("pointermove", moveHandler);
        }
        if (leaveHandler) {
          node.removeEventListener("pointerleave", leaveHandler);
        }
        node.style.setProperty("--mx", "0px");
        node.style.setProperty("--my", "0px");
      });
    };
  }, []);

  async function copyEmailAddress() {
    try {
      await navigator.clipboard.writeText("zenwong.dev@gmail.com");
      setCopiedEmail(true);
      window.setTimeout(() => {
        setCopiedEmail(false);
      }, 1800);
    } catch {
      window.location.href = "mailto:zenwong.dev@gmail.com";
    }
  }

  function getProjectCardThumbnail(project: Project) {
    if (project.imagePath) {
      return `${LEGACY_ASSET_BASE}${project.imagePath}`;
    }
    if (project.siteImagePath) {
      return `${LEGACY_ASSET_BASE}${project.siteImagePath}`;
    }
    if (project.youtubeId) {
      return `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
    }
    return `${LEGACY_ASSET_BASE}/portfolio/technigroup.jpg`;
  }

  function getProjectPopupImage(project: Project) {
    if (project.siteImagePath) {
      return `${LEGACY_ASSET_BASE}${project.siteImagePath}`;
    }
    if (project.imagePath) {
      return `${LEGACY_ASSET_BASE}${project.imagePath}`;
    }
    if (project.youtubeId) {
      return `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
    }
    return `${LEGACY_ASSET_BASE}/portfolio/technigroup.jpg`;
  }

  function getProjectActions(project: Project) {
    const actions: { label: string; href: string }[] = [];
    const websiteUrl = project.siteUrl || project.demoUrl;
    if (websiteUrl) {
      actions.push({ label: "View Demo", href: websiteUrl });
    }
    if (project.youtubeId) {
      actions.push({
        label: "Watch Video",
        href: `https://www.youtube.com/watch?v=${project.youtubeId}`,
      });
    }
    if (project.codeUrl) {
      actions.push({ label: "Source Code", href: project.codeUrl });
    }

    return actions.filter(
      (action, index, all) => all.findIndex((candidate) => candidate.href === action.href) === index,
    );
  }

  function openProjectModal(project: Project, trigger?: HTMLElement | null) {
    if (trigger) {
      modalTriggerRef.current = trigger;
    }
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  }

  function closeProjectModal() {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
    const triggerNode = modalTriggerRef.current;
    if (triggerNode) {
      window.setTimeout(() => {
        triggerNode.focus();
      }, 0);
    }
  }

  useEffect(() => {
    if (!isProjectModalOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modalCloseButtonRef.current?.focus();

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProjectModal();
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [isProjectModalOpen]);

  const modalActions = selectedProject ? getProjectActions(selectedProject) : [];

  return (
    <main className="page-root">
      <div className="noise-overlay" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <button
        type="button"
        className={`mobile-nav-toggle mobile-nav-floating-toggle ${isMobileNavOpen ? "open" : ""}`}
        onClick={() => setIsMobileNavOpen((prev) => !prev)}
        aria-expanded={isMobileNavOpen}
        aria-controls="mobile-nav-links"
        aria-label={isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <span className="mobile-nav-toggle-icon" aria-hidden>
          <span />
          <span />
          <span />
        </span>
      </button>
      <button
        type="button"
        className={`mobile-nav-backdrop ${isMobileNavOpen ? "open" : ""}`}
        onClick={() => setIsMobileNavOpen(false)}
        aria-label="Close navigation menu"
        tabIndex={isMobileNavOpen ? 0 : -1}
      />
      <div
        id="mobile-nav-links"
        className={`mobile-nav-links ${isMobileNavOpen ? "open" : ""}`}
      >
        <p className="mobile-nav-title">Navigation</p>
        {navSections.map((section, index) => (
          <a
            key={`mobile-${section.id}`}
            href={`#${section.id}`}
            className={activeSection === section.id ? "active" : ""}
            aria-current={activeSection === section.id ? "page" : undefined}
            data-cursor-label="Jump"
            onClick={() => setIsMobileNavOpen(false)}
            style={{ ["--nav-item-delay" as string]: `${index * 58}ms` }}
          >
            {section.label}
          </a>
        ))}
      </div>
      <header className="hero">
        <div className="hero-nav-container">
          <nav className="top-nav">
            <span className="brand">ZEN WONG</span>
            <div className="nav-links desktop-nav-links">
              {navSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={activeSection === section.id ? "active" : ""}
                  aria-current={activeSection === section.id ? "page" : undefined}
                  data-cursor-label="Jump"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <section className="hero-content reveal">
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Senior Frontend Engineer</p>
              <h1>
                <span className="hero-line">I am Zen Wong.</span>
                <span className="hero-line hero-highlight">
                  Building interfaces that move brands forward.
                </span>
              </h1>
              <p className="intro">
                Senior Frontend Engineer at Ant International, Kuala Lumpur. I
                work on frontend delivery using React.js, with experience in
                mentoring, cross-functional communication, and web application
                development.
              </p>
              <div className="hero-stats">
                {impactStats.map((item, index) => (
                  <article
                    key={item.label}
                    className="hero-stat reveal"
                    style={{ ["--delay" as string]: `${120 + index * 90}ms` }}
                  >
                    <p>{item.label}</p>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>
              <div className="cta-row">
                <a className="btn btn-primary magnetic" href="mailto:zenwong.dev@gmail.com" data-cursor-label="Email">
                  Email
                </a>
                <a className="btn btn-ghost magnetic" href="#portfolio" data-cursor-label="Explore">
                  See Latest Works
                </a>
                <a className="btn btn-ghost magnetic" href="/api/resume" download data-cursor-label="Download">
                  Download Resume
                </a>
                <a
                  className="btn btn-ghost magnetic"
                  href="https://www.linkedin.com/in/zen-wong"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-label="Profile"
                >
                  In
                </a>
              </div>
              <a className="scroll-cue" href="#about">
                Scroll to explore
              </a>
            </div>

            <aside className="hero-visual reveal" style={{ ["--delay" as string]: "180ms" }}>
              <div className="hero-photo-shell">
                <div className="hero-photo-frame">
                  <Image
                    src={PROFILE_IMAGE_SRC}
                    alt="Portrait of Zen Wong"
                    width={620}
                    height={760}
                    priority
                    className="hero-photo"
                  />
                </div>
              </div>
            </aside>
          </div>
        </section>
      </header>

      <div className="page-shell">
        <section id="about" className="panel reveal">
          <div>
            <p className="section-kicker">About Me</p>
            <h2>Web development is my passion and focus.</h2>
            <p>
              I am a Senior Frontend Engineer currently working at Ant
              International in Kuala Lumpur, Malaysia. Previously, I worked at
              Corplabs, took freelance React projects, and served as a Web
              Developer at I Concept Digital, with strong project experience in
              React.js. I graduated from Monash University with a Bachelor of
              Electrical and Computer Systems Engineering (Honours).
            </p>
          </div>
          <div className="chips">
            {strengths.map((skill, index) => (
              <span
                key={skill}
                className="reveal"
                style={{ ["--delay" as string]: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

      <section id="services" className="panel reveal">
        <p className="section-kicker">Working With Me</p>
        <h2>Practical React development, clear communication, steady delivery.</h2>
        <div className="service-grid">
          {servicePillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="service-card reveal"
              style={{ ["--delay" as string]: `${index * 80}ms` }}
            >
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="panel reveal">
        <p className="section-kicker">Career Journey</p>
        <h2>Professional Experience</h2>
        <p>A summary of my professional frontend experience.</p>
        <div className="timeline">
          {timeline.map((item, index) => (
            <article
              key={`${item.company}-${item.date}`}
              className="timeline-item reveal"
              style={{ ["--delay" as string]: `${index * 70}ms` }}
            >
              <span className="timeline-node" aria-hidden />
              <div className="timeline-glow" />
              <p className="timeline-date">{item.date}</p>
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-location">{item.location}</p>
              <span className="timeline-spotlight">{item.spotlight}</span>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="panel portfolio-panel reveal">
        <p className="section-kicker">Project Experience</p>
        <h2>Portfolio Projects</h2>
        <p>
          A curated selection of projects that reflects my frontend development
          experience across product, platform, and client-focused work.
        </p>
        <div className="project-filters">
          {projectTags.map((tag) => (
            <button
              key={tag}
              className={`filter-chip ${activeProjectTag === tag ? "active" : ""}`}
              type="button"
              onClick={() => setActiveProjectTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <button
              key={project.title}
              className="project-card project-card-button reveal magnetic"
              style={{ ["--delay" as string]: `${index * 40}ms` }}
              type="button"
              onClick={(event) => openProjectModal(project, event.currentTarget)}
              data-cursor-label="View"
            >
              <div className="project-media-button">
                <div className="project-media">
                  <Image
                    src={getProjectCardThumbnail(project)}
                    alt={`${project.title} preview`}
                    width={800}
                    height={500}
                  />
                  <div className="project-media-overlay">
                    <span>Open Project</span>
                  </div>
                  {project.youtubeId ? (
                    <span className="project-video-badge">Video Preview</span>
                  ) : null}
                </div>
              </div>
              <p className="project-tag">{project.categories.join(" · ")}</p>
              <h3>{project.title}</h3>
            </button>
          ))}
        </div>
        {hasMoreProjects ? (
          <div className="project-load-more">
            <button
              type="button"
              className="btn btn-ghost magnetic"
              onClick={() => setVisibleProjectCount((prev) => prev + 6)}
              data-cursor-label="LoadMore"
            >
              Load More
            </button>
          </div>
        ) : null}
      </section>

      <section id="contact" className="panel reveal">
        <p className="section-kicker">Contact</p>
        <h2>Let&apos;s work together.</h2>
        <p>
          Pop me an email today. I am always open for a chat and opportunities
          to be part of your vision.
        </p>
        <div className="contact-actions">
          <button className="btn btn-ghost" type="button" onClick={copyEmailAddress}>
            {copiedEmail ? "Email copied!" : "Copy Email"}
          </button>
          <a className="btn btn-primary magnetic" href="mailto:zenwong.dev@gmail.com" data-cursor-label="Email">
            Email Me Directly
          </a>
        </div>
      </section>

        {isProjectModalOpen && selectedProject ? (
          <div
            className="project-modal-backdrop"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closeProjectModal();
              }
            }}
          >
            <section
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <header className="project-modal-header">
                <p className="project-tag">{selectedProject.categories.join(" · ")}</p>
                <button
                  ref={modalCloseButtonRef}
                  type="button"
                  className="project-modal-close"
                  onClick={closeProjectModal}
                  aria-label="Close project popup"
                >
                  x
                </button>
              </header>

              <h3 id="project-modal-title" className="project-modal-title">
                {selectedProject.title}
              </h3>

              <div className="project-modal-media">
                {selectedProject.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                    title={`${selectedProject.title} video preview`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <Image
                    src={getProjectPopupImage(selectedProject)}
                    alt={`${selectedProject.title} preview`}
                    width={1000}
                    height={620}
                  />
                )}
              </div>

              <div className="project-modal-copy">
                {selectedProject.descTitle ? (
                  <div className="project-modal-detail">
                    <p className="project-desc-title">{selectedProject.descTitle}</p>
                  </div>
                ) : null}
                <p className="project-modal-description">{selectedProject.description}</p>
              </div>

              <div className="project-modal-actions">
                {modalActions.map((action, actionIndex) => (
                  <a
                    key={`${action.href}-${action.label}`}
                    className={`btn magnetic ${actionIndex === 0 ? "btn-primary" : "btn-ghost"}`}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {action.label}
                  </a>
                ))}
                {!modalActions.length ? (
                  <span className="project-note">No external links available</span>
                ) : null}
              </div>
            </section>
          </div>
        ) : null}
      </div>
    </main>
  );
}
