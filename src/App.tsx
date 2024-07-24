import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <div className="image-container">
          <img
            className="profile-picture"
            src="images/AceAura-24.jpg"
            alt="Eric Seall's Profile Image"
          />
        </div>
        <h1 className="profile-name">Eric Seall</h1>
        <h2 className="location">Dallas, Texas</h2>
        <h3 className="description">
          "Music Producer and Front-End Developer"
        </h3>
        <div className="links">
          <a href="https://github.com/EricSeall" target="_blank">
            <button className="profile-link">GitHub</button>
          </a>
          <a
            href="https://open.spotify.com/artist/5o2KBzYUFierWmBhSemAhq?si=GAgO-E62RaK6-2PepnLxug"
            target="_blank"
          >
            <button className="profile-link">Spotify</button>
          </a>
          <a href="https://soundcloud.com/aceaura" target="_blank">
            <button className="profile-link">SoundCloud</button>
          </a>
          <a href="https://www.instagram.com/aceauramusic" target="_blank">
            <button className="profile-link">Instagram</button>
          </a>
          <a href="https://www.tiktok.com/@aceauramusic" target="_blank">
            <button className="profile-link">TikTok</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
