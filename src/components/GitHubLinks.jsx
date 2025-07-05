const GitHubLinks = () => {
  const GitHubLinks = [
    {
      url: "https://github.com/Koxone",
      text: "github.com/Koxone",
    },
    {
      url: "https://github.com/Koxone/Portfolio-Astro-React-Tailwind",
      text: "github.com/Portfolio-ASTRO-Tailwind",
    },
    {
      url: "https://github.com/Koxone/TicTacToe-React-Tailwind",
      text: "github.com/TicTacToe-React-Tailwind",
    },
    {
      url: "https://github.com/Koxone/Components-React-Tailwind",
      text: "github.com/Components-React-Tailwind",
    },
    {
      url: "https://github.com/Koxone/sacbe-tours-react-tailwind",
      text: "github.com/Sacbe-Tours-React-Tailwind",
    },
    {
      url: "https://github.com/Koxone/Planet-Fact-React-Tailwind",
      text: "github.com/Planet-Fact-React-Tailwind",
    },
    {
      url: "https://github.com/Koxone/Sacbe-Coupon-Generator-React-Tailwind",
      text: "github.com/Sacbe-Coupon-Generator-React-Tailwind",
    },
    {
      url: "https://github.com/Koxone/KoxNotes-Next-Tailwind-Firebase",
      text: "github.com/KoxNotes-Next-Tailwind-Firebase",
    },
    {
      url: "https://github.com/Koxone/KX-Chat-React-Tailwind-Firebase",
      text: "github.com/KX-Chat-React-Tailwind-Firebase",
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
