function removeElementWithRetry() {
  const targetClass = '._1yt4zdiv';
  const maxRetries = 5;
  let retryCount = 0;

  function removeElement() {
    const elementToRemove = document.querySelector(targetClass);

    if (elementToRemove) {
      elementToRemove.remove();
    } else {
      console.log(`Element with class ${targetClass} not found`);

      if (retryCount < maxRetries) {
        retryCount++;
        console.log("Retrying...");
        setTimeout(removeElement, 2000); // 2 seconds
      } else {
        console.log("Max retries reached. Element not found.");
      }
    }
  }

  removeElement();
}

removeElementWithRetry();
