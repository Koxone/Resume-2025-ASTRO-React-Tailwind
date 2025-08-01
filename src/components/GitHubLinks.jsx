import { useState, useEffect } from "react";

const GitHubLinks = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const links = [
    { url: "https://github.com/Koxone", text: "github.com/Koxone" },
    {
      url: "https://github.com/Koxone/FitWorldShop-Ecommerce-Next-Tailwind-Shopify-API",
      text: "github.com/Ecommerce-Next-Tailwind-Shopify-API",
      showTooltip: true,
    },
    { url: "https://github.com/Koxone/Portfolio-Astro-React-Tailwind", text: "github.com/Portfolio-ASTRO-Tailwind" },
    { url: "https://github.com/Koxone/TicTacToe-React-Tailwind", text: "github.com/TicTacToe-React-Tailwind" },
    { url: "https://github.com/Koxone/Components-React-Tailwind", text: "github.com/Components-React-Tailwind" },
    { url: "https://github.com/Koxone/sacbe-tours-react-tailwind", text: "github.com/Sacbe-Tours-React-Tailwind" },
    { url: "https://github.com/Koxone/Planet-Fact-React-Tailwind", text: "github.com/Planet-Fact-React-Tailwind" },
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

  const handleTooltip = () => {
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 3000);
  };

  return (
    <div className="section">
      <h2 className="section-title">GitHub</h2>
      {links.map((link, index) => (
        <div key={index} className="github-link relative group">
          {link.showTooltip && isMobile ? (
            <button onClick={handleTooltip} className="flex items-center gap-2 !text-gray-400 cursor-pointer">
              <span>⚡</span>
              <span>{link.text}</span>
            </button>
          ) : (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${
                link.showTooltip ? "!text-gray-400 !hover:no-underline cursor-pointer" : "text-blue-500 hover:underline"
              }`}
            >
              <span>⚡</span>
              <span>{link.text}</span>
            </a>
          )}

          {link.showTooltip && (
            <div
              className={`absolute left-0 top-full mt-1 z-10 w-max rounded-md bg-black px-3 py-1 text-xs text-white transition-opacity duration-200 ${
                tooltipVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              Código privado - Solicita acceso para verlo.
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GitHubLinks;
