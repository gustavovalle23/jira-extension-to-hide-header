function removeElementWithRetry() {
  const targetClass = '._1yt4zdiv';
  const maxRetries = 5;
  let retryCount = 0;

  function removeElement() {
    const elementToRemove = document.querySelector(targetClass);

    if (elementToRemove) {
      elementToRemove.remove();
    } else {
      if (retryCount < maxRetries) {
        retryCount++;
      } else {
        clearInterval(intervalId);
      }
    }
  }

  if (window.location.href.includes('jira/software/projects/')) {
    removeElement();

    setInterval(removeElement, 2000); // Execute every 2 seconds
  }
}

removeElementWithRetry();
