const searchBtn = document.getElementById('searchBtn');
const profileDiv = document.getElementById('profile');
const input = document.getElementById('username');

searchBtn.addEventListener('click', () => {
  const username = input.value.trim();

  if (!username) {
    profileDiv.innerHTML = `<p>Please enter a GitHub username.</p>`;
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (!res.ok) throw new Error("User not found");
      return res.json();
    })
    .then(data => {
      profileDiv.innerHTML = `
        <div class="card">
          <div class="card-header">
            <img src="${data.avatar_url}" alt="${data.login}">
            <div>
              <h2 class="name">${data.name || data.login}</h2>
              <p class="username">@${data.login}</p>
            </div>
          </div>

          <p class="card-bio">${data.bio || 'No bio available.'}</p>

          <div class="card-grid">
            <div><span>Repos:</span> ${data.public_repos}</div>
            <div><span>Followers:</span> ${data.followers}</div>
            <div><span>Following:</span> ${data.following}</div>
            <div><span>Location:</span> ${data.location || 'N/A'}</div>
          </div>

          <div class="card-link">
            <a href="${data.html_url}" target="_blank">🔗 Visit GitHub Profile</a>
          </div>
        </div>
      `;
    });
});
