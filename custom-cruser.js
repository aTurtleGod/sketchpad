const canvas = document.getElementById('drawingCanvas');

// Set custom cursor for the canvas
canvas.style.cursor = "url('mouse cruiser.png'), auto";

// Function to update cursor position
function updateCursor(e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
}

// Add event listener for mouse movement on canvas
canvas.addEventListener('mousemove', updateCursor);

// Show custom cursor when entering canvas
canvas.addEventListener('mouseenter', () => {
    document.querySelector('.custom-cursor').style.display = 'block';
});

// Hide custom cursor when leaving canvas
canvas.addEventListener('mouseleave', () => {
    document.querySelector('.custom-cursor').style.display = 'none';
});