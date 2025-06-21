import React, { useState, useEffect } from "react";

function Body() {
  const [profiles, setProfiles] = useState([]);
  const [count, setCount] = useState(10);
  const [searchUser, setSearchUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);

  async function generateProfile(num) {
    if (num <= 0) return;
    setLoading(true);
    setError("");
    try {
      const randomSince = Math.floor(1 + Math.random() * 10000);
      const res = await fetch(
        `https://api.github.com/users?since=${randomSince}&per_page=${num}`
      );
      if (!res.ok) throw new Error("Failed to fetch profiles");
      const data = await res.json();
      setProfiles(data);
    } catch (err) {
      setError(err.message);
      setProfiles([]);
    }
    setLoading(false);
  }

  async function searchSpecificUser(username) {
    if (!username) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setProfiles([data]);
    } catch (err) {
      setError(err.message);
      setProfiles([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    generateProfile(10);
  }, []);

  return (
    <div className="container">
      <h1>GitHub Profile Viewer</h1>

      <div className="controls">
        <input
          type="number"
          min="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          placeholder="Number of profiles"
        />
        <button onClick={() => generateProfile(Number(count))}>
          Search Random
        </button>

        <input
          type="text"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button onClick={() => searchSpecificUser(searchUser)}>Search User</button>
      </div>

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Loading profiles...</div>
      ) : (
        <div className="profiles">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="card"
              onClick={() => setSelectedProfile(profile)}
            >
              <img src={profile.avatar_url} alt={profile.login} />
              <h3>{profile.login}</h3>
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View GitHub
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedProfile && (
        <div
          className="modalOverlay"
          onClick={() => setSelectedProfile(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="closeBtn"
              onClick={() => setSelectedProfile(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <img
              src={selectedProfile.avatar_url}
              alt={selectedProfile.login}
              className="modalAvatar"
            />
            <h2>{selectedProfile.login}</h2>
            <p><strong>ID:</strong> {selectedProfile.id}</p>
            <p><strong>Type:</strong> {selectedProfile.type}</p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href={selectedProfile.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProfile.html_url}
              </a>
            </p>
            {selectedProfile.bio && <p><strong>Bio:</strong> {selectedProfile.bio}</p>}
            {selectedProfile.location && (
              <p><strong>Location:</strong> {selectedProfile.location}</p>
            )}
            {selectedProfile.public_repos !== undefined && (
              <p><strong>Public Repos:</strong> {selectedProfile.public_repos}</p>
            )}
            {selectedProfile.followers !== undefined && (
              <p><strong>Followers:</strong> {selectedProfile.followers}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
