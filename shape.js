// Remove canvas redeclaration
function drawShape(x, y, r, sides) {
    // Move the canvas to the center position
    ctx.translate(x, y);

    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
        // Calculate the rotation
        const rotation = ((Math.PI * 2) / sides) * i;

        // For the first point, move to
        if (i === 0) {
            ctx.moveTo(r * Math.cos(rotation), r * Math.sin(rotation));
        } else {
            // For the rest, draw a line
            ctx.lineTo(r * Math.cos(rotation), r * Math.sin(rotation));
        }
    }

    // Close path and stroke it
    ctx.closePath();
    ctx.stroke();

    // Reset the translate position
    ctx.resetTransform();
}

// Additional shape drawing functions
function drawRectangle(x, y, width, height) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
}

function drawTriangle(x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.stroke();
}