// Flag to track if drawing has unsaved changes
let hasUnsavedChanges = false;

// Track drawing modifications
function markDrawingModified() {
    hasUnsavedChanges = true;
}

// Add event listeners to track canvas modifications
const canvas = document.getElementById('drawingCanvas');
canvas.addEventListener('mouseup', markDrawingModified);

// Window close event handler
window.addEventListener('beforeunload', (event) => {
    if (hasUnsavedChanges) {
        // Prevent automatic page close
        event.preventDefault();
        
        // Modern browsers require setting returnValue
        event.returnValue = 'Are you sure you want to close Drawing Pad? You may lose unsaved changes.';
        
        // Return string to trigger confirmation dialog
        return 'Are you sure you want to close Drawing Pad? You may lose unsaved changes.';
    }
});