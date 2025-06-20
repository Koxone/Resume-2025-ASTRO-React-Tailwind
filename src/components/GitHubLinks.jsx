const GitHubLinks = () => {
  const GitHubLinks = [
    {
      url: "https://github.com/Koxone",
      text: "github.com/Koxone",
    },
    {
      url: "https://github.com/Koxone/KoxNotes-Next-Tailwind-Firebase",
      text: "github.com/KoxNotes-Next-Tailwind-Firebase",
    },
    {
      url: "https://github.com/Koxone/KX-Chat-React-Tailwind-Firebase",
      text: "github.com/KX-Chat-React-Tailwind-Firebase",
    },
    {
      url: "https://github.com/Koxone/Portfolio-Astro-React-Tailwind",
      text: "github.com/Portfolio-ASTRO-Tailwind",
    },
    {
      url: "https://github.com/Koxone/los-cabos-wedding-transportation",
      text: "github.com/Los-Cabos-Wedding-Transportation",
    },
    {
      url: "https://github.com/Koxone/los-cabos-airport-shuttle",
      text: "github.com/Los-Cabos-Airport-Shuttle",
    },
  ];

  return (
    <div className="section">
      <h2 className="section-title">GitHub</h2>
      {GitHubLinks.map((link, index) => (
        <div key={index} className="github-link">
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <span>⚡</span>
            <span>{link.text}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default GitHubLinks;
