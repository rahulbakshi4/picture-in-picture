const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Selection Prompt for the user 
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Throw the error
    console.log('damn an error occurred ', error);
  }
}

button.addEventListener('click', async () => {
  // Disable the button
  button.disabled = true;

  // Start picture in picture
  await videoElement.requestPictureInPicture();

  // Reset the button
  button.disabled = false;
});

// Calling
selectMediaStream();