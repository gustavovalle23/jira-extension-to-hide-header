const targetClass = '._1yt4zdiv';

function removeElement() {
  document.querySelector(targetClass)?.remove();
}

if (window.location.href.includes('jira/software/projects/')) {
  setInterval(removeElement, 2000); // Execute every 2 seconds
}

