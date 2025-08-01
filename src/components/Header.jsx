const Header = () => {
  return (
    <header className="header">
      <h1 className="name">JUAN CARLOS DE LEON OZUNA</h1>
      <p className="title">
        Frontend Engineer & Restaurant Operations Manager
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <span>📞</span>
          <span>+52 1 55 8705 8858</span>
        </div>
        <div className="contact-item">
          <span>📱</span>
          <span>+1 (470) 209 1261</span>
        </div>
        <div className="contact-item">
          <span>✉️</span>
          <span>admin@koxland.net</span>
        </div>
        <div className="contact-item">
          <span>📍</span>
          <span>Mexico City, Mexico</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
