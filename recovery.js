function autoSave() {
    const canvasData = canvas.toDataURL();
    localStorage.setItem('unsavedDrawing', canvasData);
    localStorage.setItem('lastSaveTimestamp', new Date().toISOString());
}

function checkRecovery() {
    const unsavedDrawing = localStorage.getItem('unsavedDrawing');
    const lastSaveTimestamp = localStorage.getItem('lastSaveTimestamp');

    if (unsavedDrawing) {
        const recoveryModal = document.createElement('div');
        recoveryModal.innerHTML = `
            <div class="recovery-modal">
                <h2>Unsaved Changes Detected</h2>
                <p>You have an unsaved drawing from ${new Date(lastSaveTimestamp).toLocaleString()}</p>
                <button id="recover-btn">Recover Drawing</button>
                <button id="discard-btn">Discard</button>
            </div>
        `;
        document.body.appendChild(recoveryModal);

        document.getElementById('recover-btn').addEventListener('click', () => {
            const img = new Image();
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);
            };
            img.src = unsavedDrawing;
            recoveryModal.remove();
        });

        document.getElementById('discard-btn').addEventListener('click', () => {
            localStorage.removeItem('unsavedDrawing');
            localStorage.removeItem('lastSaveTimestamp');
            recoveryModal.remove();
        });
    }
}

// Auto-save every 30 seconds
setInterval(autoSave, 30000);

// Check for recovery on page load
window.addEventListener('load', checkRecovery);

// Warn about unsaved changes when closing
window.addEventListener('beforeunload', (e) => {
    const unsavedDrawing = localStorage.getItem('unsavedDrawing');
    if (unsavedDrawing) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
    }
});
