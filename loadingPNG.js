function loadPNGImage(imageUrl) {
    // Create a new image object
    const img = new Image();
    
    // Add load event listener to handle successful image loading
    img.addEventListener('load', () => {
        // Optional: You can modify canvas or do something with loaded image
        const canvas = document.getElementById('drawingCanvas');
        const ctx = canvas.getContext('2d');
        
        // Draw loaded image on canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    });
    
    // Add error event listener to handle loading failures
    img.addEventListener('error', () => {
        console.error('Image loading failed');
    });
    
    // Set the image source to start loading
    img.src = imageUrl;
    
    return img;
}

// Example usage
document.getElementById('loadButton').addEventListener('click', () => {
    const imageUrl = prompt('Enter PNG image URL:');
    if (imageUrl) {
        loadPNGImage(imageUrl);
    }
});