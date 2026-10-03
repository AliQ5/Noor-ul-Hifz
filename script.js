/* Replace these two values with the real GitHub repository/release URL. */
const GITHUB_RELEASE_URL = "https://github.com/REPLACE-ME/noor-ul-hifz/releases/latest";
const DOWNLOAD_URL = GITHUB_RELEASE_URL;

document.querySelectorAll('[data-download]').forEach(a => {
  a.href = DOWNLOAD_URL;
  a.target = '_blank';
  a.rel = 'noopener';
});
document.querySelectorAll('[data-github]').forEach(a => {
  a.href = GITHUB_RELEASE_URL;
});
document.getElementById('year').textContent = new Date().getFullYear();
