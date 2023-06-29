// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

// Handle AR instructions and placement
const modelViewer = document.querySelector('#food-model');
const arInstructions = document.getElementById('ar-instructions');

modelViewer.addEventListener('ar-status', (event) => {
  if (event.detail.status === 'session-started') {
    arInstructions.style.display = 'block';
    modelViewer.setAttribute('ar-scale', 'auto');
    modelViewer.setAttribute('ar-placement', 'floor');
    modelViewer.setAttribute('ar-auto-rotate', 'true');
  } else {
    arInstructions.style.display = 'none';
    modelViewer.removeAttribute('ar-scale');
    modelViewer.removeAttribute('ar-placement');
    modelViewer.removeAttribute('ar-auto-rotate');
  }
});
