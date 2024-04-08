document.getElementById('submitBtn').addEventListener('click', function() {
    console.log('Button clicked!'); // Check if the event is firing
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

    // Send the data to your server
    fetch('https://us-central1-vocal-park-418014.cloudfunctions.net/add-watermark', {
        method: 'POST',
        body: formData,
    }) // <- Removed semicolon here
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Process response data here, e.g., display the watermarked image
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
