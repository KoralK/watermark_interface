document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            const imageInput = document.getElementById('imageInput').files[0];
            const watermarkText = document.getElementById('watermarkText').value;
            const watermarkColor = document.getElementById('watermarkColor').value;
            const watermarkSize = document.getElementById('watermarkSize').value;
            const watermarkPosition = document.getElementById('watermarkPosition').value;

            // Validate input here (e.g., ensure all fields are filled out)
            if (!imageInput || !watermarkText || !watermarkSize) {
                alert('Please fill in all fields.');
                return;
            }

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
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.blob();  // Assuming the server responds with the image blob
            })
            .then(blob => {
                // Create a local URL from the blob
                const imageUrl = URL.createObjectURL(blob);

                // Create an image element to display the watermarked image
                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;

                // Clear any previous images and add the new image to the page
                const resultContainer = document.getElementById('result');
                resultContainer.innerHTML = '';  // Clear previous results
                resultContainer.appendChild(imageElement);  // Add new result
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error processing your request.');
            });
        });
    } else {
        console.error('Submit button not found');
    }
});
