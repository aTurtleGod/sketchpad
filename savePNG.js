function saveCanvasPNG() {
    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    
    // Convert canvas to data URL
    const canvasData = canvas.toDataURL('image/png');
    
    // Set download attributes
    downloadLink.href = canvasData;
    downloadLink.download = 'drawing.png';
    
    // Trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// Add a save button to the HTML toolbar
const saveButton = document.createElement('button');
saveButton.textContent = 'Save Drawing';
saveButton.addEventListener('click', saveCanvasPNG);
document.getElementById('toolbar').appendChild(saveButton);