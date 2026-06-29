function escapeHTML(str) {
  if (typeof str !== 'string') {
    // Handle non-string values gracefully, e.g., numbers, null, undefined
    return str === null || str === undefined ? '' : String(str);
  }
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const searchBtn = document.getElementById('searchBtn');
const profileDiv = document.getElementById('profile');
const input = document.getElementById('username');

searchBtn.addEventListener('click', () => {
  const username = input.value.trim();

  if (!username) {
    profileDiv.innerHTML = `<p>Please enter a GitHub username.</p>`;
    return;
  }

  // Clear previous profile and show loading indicator
  // Sanitize username before injecting into innerHTML
  profileDiv.innerHTML = `<p>Loading profile for ${escapeHTML(username)}...</p>`;

  fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (!res.ok) {
        // Handle HTTP errors (e.g., 404 Not Found, 500 Server Error)
        if (res.status === 404) {
          throw new Error("User not found");
        } else {
          throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
        }
      }
      return res.json();
    })
    .then(data => {
      // Sanitize all potentially user-controlled data before injecting into innerHTML
      const escapedName = escapeHTML(data.name || data.login);
      const escapedLogin = escapeHTML(data.login);
      const escapedBio = escapeHTML(data.bio || 'No bio available.');
      const escapedLocation = escapeHTML(data.location || 'N/A');

      // For `src` and `href` attributes: GitHub API provides valid URLs.
      // While additional validation (e.g., checking for http/https scheme) could be added
      // for extreme paranoia, for a trusted API like GitHub, the direct URLs are typically safe
      // against script injection via the URL itself (e.g., javascript: URLs).
      // The primary XSS concern for text content is addressed by `escapeHTML`.

      profileDiv.innerHTML = `
        <div class="card">
          <div class="card-header">
            <img src="${data.avatar_url}" alt="${escapedLogin}">
            <div>
              <h2 class="name">${escapedName}</h2>
              <p class="username">@${escapedLogin}</p>
            </div>
          </div>

          <p class="card-bio">${escapedBio}</p>

          <div class="card-grid">
            <div><span>Repos:</span> ${data.public_repos}</div>
            <div><span>Followers:</span> ${data.followers}</div>
            <div><span>Following:</span> ${data.following}</div>
            <div><span>Location:</span> ${escapedLocation}</div>
          </div>

          <div class="card-link">
            <a href="${data.html_url}" target="_blank">🔗 Visit GitHub Profile</a>
          </div>
        </div>
      `;
    })
    .catch(error => {
      console.error("Fetch error:", error); // Log the error for debugging purposes
      let errorMessage = "Failed to fetch user data. Please check your internet connection or try again.";

      if (error.message === "User not found") {
        errorMessage = "User not found. Please check the username.";
      } else if (error.message.startsWith("GitHub API error")) {
        errorMessage = `Error from GitHub: ${error.message}`;
      }
      
      // Sanitize errorMessage before injecting into innerHTML
      profileDiv.innerHTML = `<p>Error: ${escapeHTML(errorMessage)}</p>`;
    });
});