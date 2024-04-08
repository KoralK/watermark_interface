document.getElementById('submitBtn').addEventListener('click', function() {
    const imageInput = document.getElementById('imageInput').files[0];
    const watermarkText = document.getElementById('watermarkText').value;
    const watermarkColor = document.getElementById('watermarkColor').value;
    const watermarkSize = document.getElementById('watermarkSize').value;
    const watermarkPosition = document.getElementById('watermarkPosition').value;

    // Validate input here (e.g., ensure all fields are filled out)

    // Prepare the data to send
    const formData = new FormData();
    formData.append('image', imageInput);
    formData.append('watermarkText', watermarkText);
    formData.append('watermarkColor', watermarkColor);
    formData.append('watermarkSize', watermarkSize);
    formData.append('watermarkPosition', watermarkPosition);

    // Example: Send the data to your server
    // Replace `YOUR_BACKEND_ENDPOINT` with your actual backend endpoint
    fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Process response data here, e.g., display the watermarked image
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
