import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Professional Portfolio",
      url: "https://koxland.dev/",
      description:
        "A fully responsive and interactive developer portfolio built with Astro, React, and Tailwind CSS. Showcases professional experience, featured projects, and tech stack with a clean UI and animated 3D avatar, designed to highlight frontend skills and ongoing growth in full-stack web development.",
      technologies: ["React", "Astro", "Tailwind CSS", "Modern UI", "Responsive"],
    },
    {
      title: "TicTacToe Game",
      url: "https://tictactoe.koxland.dev/",
      description:
        "A classic turn-based game built with React, Tailwind CSS, and Framer Motion, featuring smooth animations, user turn tracking, and a clean, responsive UI for fun and fast matches using modern frontend technologies.",
      technologies: ["React", "Tailwind CSS", "UI/UX", "Responsive"],
    },
    {
      title: "KX Library - Tailwind/React Component Library",
      url: "https://components.koxland.dev/",
      description:
        "A React and Tailwind component library featuring live previews, ready-to-use code snippets, and a growing collection of animated UI elements. Allows browsing, previewing, and copying components easily to accelerate building beautiful, responsive interfaces.",
      technologies: ["React", "Tailwind CSS", "Under Development"],
    },
    {
      title: "Sacbé Tours - Cancun & Riviera Maya Tour Booking",
      url: "https://tours.koxland.dev/",
      description:
        "A modern, responsive web application built with React and Tailwind CSS for booking tours in Mexico and globally. Features real-time tour availability, dynamic pricing, and a seamless booking flow powered by a custom API, providing users with a clean, intuitive experience across all devices.",
      technologies: ["React", "Tailwind CSS", "Responsive", "Under Development"],
    },
    {
      title: "Planet Facts",
      url: "https://planetfacts.koxland.tech/",
      description:
        "A responsive web app built with React and Tailwind CSS, featuring smooth animations and bite-sized facts about each planet in the solar system. Designed to be visually engaging and educational across all devices.",
      technologies: ["React", "Tailwind CSS", "Clean Code"],
    },
    {
      title: "Sacbe Coupon Generator",
      url: "https://coupons.koxland.dev/",
      description:
        "A responsive web app built with React, Tailwind CSS, and a custom REST API. Includes authentication, secure endpoint integration, and dynamic coupon rendering based on user input, designed for seamless mobile and desktop use with a clean, modern interface.",
      technologies: ["Next.js", "API", "Business", "Responsive"],
    },
    {
      title: "KoxNotes - Note Taking App",
      url: "https://koxnotes.koxland.dev/",
      description:
        "A note-taking app inspired by iOS Notes, built with Next.js, Tailwind CSS, and Firebase. Features authentication, Firestore-based data storage, file attachments, light/dark theme toggle, custom font selection, and optional password protection, designed for simplicity, security, and user personalization.",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "Authentication", "Under Development"],
    },
    {
      title: "KxChat - WhatsApp-style Chat",
      url: "https://kxchat.koxland.dev/",
      description:
        "A real-time private messaging app built with Next.js, Tailwind CSS, and Firebase. Features authentication, Firestore-based chat persistence, and end-to-end encrypted messages within a sleek, WhatsApp-style UI optimized for performance and responsiveness.",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "Encryption", "Under Development"],
    },
  ];

  return (
    <section className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
