"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "./two.css";

const LEGACY_ASSET_BASE = "https://zenwong.vercel.app";

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

const navSections = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "journey", label: "Journey" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const strengths = [
  "Agentic AI Development",
  "Spec-Driven Development",
  "Mentoring",
  "React.js",
  "Web Application Development",
  "Frontend Development",
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

const journeyTextOptions = {
  optionA: {
    heading: "Crafted to Deliver",
    intro:
      "From agency websites to enterprise payments, each role sharpened how I design, ship, and scale frontend experiences.",
  },
  optionB: {
    heading: "Years of building, one clear direction: meaningful frontend work.",
    intro:
      "Each chapter added a stronger lens on product thinking, user experience, and dependable engineering execution.",
  },
  optionC: {
    heading: "A steady climb from web foundations to high-impact product engineering.",
    intro:
      "I grew through real client and product environments, consistently balancing speed, craft, and long-term maintainability.",
  },
};

const timeline = [
  {
    company: "Ant International",
    role: "Senior Frontend Engineer",
    date: "March 2024 - Present",
    location: "Federal Territory of Kuala Lumpur, Malaysia",
    spotlight: "Agentic SDLC on Antom",
    details:
      "Leading frontend delivery for Antom, a B2B payment platform at Ant International. I use agentic and spec-driven workflows to turn complex requirements into scalable product experiences with faster execution and stronger release confidence.",
  },
  {
    company: "Corplabs",
    role: "Frontend Engineer",
    date: "Jan 2024 - Feb 2024",
    location: "Selangor, Malaysia",
    spotlight: "Fast-Track Product Shipments",
    details:
      "Delivered high-impact frontend features in a fast-moving environment while maintaining product quality and implementation consistency.",
  },
  {
    company: "Freelance",
    role: "React Developer",
    date: "August 2020 - February 2022",
    location: "Malaysia",
    spotlight: "Client Experience Excellence",
    details:
      "Built and maintained React applications for clients, collaborating closely with cross-functional teams. Focused on responsive interfaces and practical UX improvements across different devices and user contexts.",
  },
  {
    company: "I Concept Digital",
    role: "Senior Web Developer",
    date: "2017 - 2020",
    location: "Selangor, Malaysia",
    spotlight: "Brand-Centric Platform Design",
    details:
      "Contributed to high-value and public-sector projects, including Education Malaysia (EMGS), KDU University (now UOW Malaysia KDU), and KL Summit 2019. Grew from junior to senior by building production websites with designers using Bootstrap and WordPress, with a focus on clean, reusable code.",
  },
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

export default function PageTwo() {
  const [visibleProjectCount, setVisibleProjectCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const modalCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalTriggerRef = useRef<HTMLElement | null>(null);
  const visibleProjects = projects.slice(0, visibleProjectCount);
  const hasMoreProjects = projects.length > visibleProjects.length;
  const journeyContent = journeyTextOptions.optionA;
  const modalActions = selectedProject ? getProjectActions(selectedProject) : [];

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

  return (
    <main className="two-page">
      <div className="two-content">
        <aside className="two-sidebar" aria-label="Page navigation">
          <Link href="#about" className="two-logo">
            Zen Wong
          </Link>
          <nav className="two-side-links" aria-label="Section links">
            {navSections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.label}
              </a>
            ))}
          </nav>
          <div className="two-social">
            <a
              href="mailto:zenwong.dev@gmail.com"
              className="two-social-icon"
              aria-label="Send email"
              title="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="5.5" width="17" height="13" rx="1.8" />
                <path d="M4.5 7L12 12.5L19.5 7" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/zen-wong"
              target="_blank"
              rel="noreferrer"
              className="two-social-icon"
              aria-label="Open LinkedIn profile"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="2.3" />
                <circle cx="8.2" cy="9" r="1.1" />
                <path d="M7.2 11.2V16.6" />
                <path d="M11.2 16.6V11.2" />
                <path d="M11.2 12.5C11.9 11.5 12.8 11 13.9 11C15.4 11 16.4 12 16.4 13.8V16.6" />
              </svg>
            </a>
          </div>
          <div className="two-sidebar-actions">
            <a href="/api/resume" download className="two-resume-btn">
              Resume
            </a>
          </div>
        </aside>
        <div className="two-main">
          <header className="two-hero">
            <p className="two-kicker">Senior Frontend Engineer</p>
            <h1>
              I am
              <br />
              Zen
              <br />
              Wong
            </h1>
            <p className="two-hero-copy">Building interfaces that move brands forward.</p>
            <p className="two-intro">
              Senior Frontend Engineer at Ant International, Kuala Lumpur. I work
              on frontend delivery using React.js, with experience in mentoring,
              cross-functional communication, and web application development.
            </p>
            <div className="two-hero-actions">
              <a href="#portfolio">See Latest Works</a>
            </div>
          </header>

          <section id="about" className="two-section">
            <p className="two-kicker">About</p>
            <h2>Web development is my passion and focus.</h2>
            <p className="two-copy">
              I am a Senior Frontend Engineer currently working at Ant
              International in Kuala Lumpur, Malaysia. Previously, I worked at
              Corplabs, took freelance React projects, and served as a Web
              Developer at I Concept Digital, with strong project experience in
              React.js. I graduated from Monash University with a Bachelor of
              Electrical and Computer Systems Engineering (Honours).
            </p>
            <ul className="two-strengths" aria-label="Strengths">
              {strengths.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section id="services" className="two-section">
            <p className="two-kicker">Working With Me</p>
            <h2>Practical React development, clear communication, steady delivery.</h2>
            <div className="two-services">
              {servicePillars.map((pillar) => (
                <article key={pillar.title} className="two-service-card">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="journey" className="two-section">
            <p className="two-kicker">Journey</p>
            <h2>{journeyContent.heading}</h2>
            <p className="two-copy">{journeyContent.intro}</p>
            <VerticalTimeline
              className="two-award-timeline"
              lineColor="rgba(255, 255, 255, 0.16)"
              animate={false}
            >
              {timeline.map((item, index) => (
                <VerticalTimelineElement
                  key={`${item.company}-${item.date}`}
                  position={index % 2 === 0 ? "left" : "right"}
                  icon={<span className="two-timeline-marker" />}
                >
                  <article className="two-timeline-item">
                    <div className="two-timeline-top">
                      <p className="two-timeline-date">{item.date}</p>
                      <p className="two-timeline-index">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <h3>{item.role}</h3>
                    <p className="two-timeline-company">{item.company}</p>
                    <p className="two-timeline-location">{item.location}</p>
                    <p className="two-timeline-spotlight">{item.spotlight}</p>
                    <p>{item.details}</p>
                  </article>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </section>

          <section id="portfolio" className="two-section">
            <p className="two-kicker">Work</p>
            <h2>Portfolio Projects</h2>
            <div className="two-project-grid">
              {visibleProjects.map((project, index) => (
                <button
                  key={project.title}
                  className="two-project-card two-project-button"
                  type="button"
                  onClick={(event) => openProjectModal(project, event.currentTarget)}
                >
                  <div className="two-project-image-wrap">
                    <Image
                      src={getProjectCardThumbnail(project)}
                      alt={`${project.title} preview`}
                      width={900}
                      height={560}
                    />
                    <div className="two-project-overlay">
                      <span>Open Project</span>
                    </div>
                  </div>
                  <div className="two-project-meta">
                    <p className="two-project-tag">{project.categories.join(" · ")}</p>
                    <p className="two-project-index">{String(index + 1).padStart(2, "0")}</p>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="two-project-cta">View project details</p>
                </button>
              ))}
            </div>
            {hasMoreProjects ? (
              <div className="two-project-load-more">
                <button
                  type="button"
                  className="two-load-more-btn"
                  onClick={() => setVisibleProjectCount((prev) => prev + 6)}
                >
                  Load More
                </button>
              </div>
            ) : null}
          </section>

          <section id="contact" className="two-section two-contact">
            <p className="two-kicker">Contact</p>
            <h2>Let&apos;s work together and build something people remember.</h2>
            <p className="two-copy">
              Pop me an email today. I am always open for a chat and opportunities
              to be part of your vision.
            </p>
            <div className="two-contact-actions">
              <a href="mailto:zenwong.dev@gmail.com">Let&apos;s talk</a>
              <a href="https://www.linkedin.com/in/zen-wong" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </section>
        </div>

        {isProjectModalOpen && selectedProject ? (
          <div
            className="two-project-modal-backdrop"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closeProjectModal();
              }
            }}
          >
            <section
              className="two-project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="two-project-modal-title"
            >
              <header className="two-project-modal-header">
                <p className="two-project-tag">{selectedProject.categories.join(" · ")}</p>
                <button
                  ref={modalCloseButtonRef}
                  type="button"
                  className="two-project-modal-close"
                  onClick={closeProjectModal}
                  aria-label="Close project popup"
                >
                  x
                </button>
              </header>
              <h3 id="two-project-modal-title" className="two-project-modal-title">
                {selectedProject.title}
              </h3>
              <div className="two-project-modal-media">
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
              <div className="two-project-modal-copy">
                {selectedProject.descTitle ? (
                  <p className="two-project-desc-title">{selectedProject.descTitle}</p>
                ) : null}
                <p className="two-project-description">{selectedProject.description}</p>
              </div>
              <div className="two-project-modal-actions">
                {modalActions.map((action) => (
                  <a key={`${action.href}-${action.label}`} href={action.href} target="_blank" rel="noreferrer">
                    {action.label}
                  </a>
                ))}
                {!modalActions.length ? <span>No external links available</span> : null}
              </div>
            </section>
          </div>
        ) : null}
      </div>
    </main>
  );
}
