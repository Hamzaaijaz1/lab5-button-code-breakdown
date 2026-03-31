let count = 0;

const btn = document.getElementById('actionBtn');
const status = document.getElementById('status');

// Attach click event
btn.addEventListener('click', performAction);

function performAction() {
    count++;

    // FEEDBACK: Add yellow click effect
    btn.classList.add('click-feedback');
    setTimeout(() => btn.classList.remove('click-feedback'), 2000);

    // Update status text
    status.textContent = `✅ Processed ${count} time${count !== 1 ? 's' : ''}`;

    // CONSTRAINT & SIGNIFIER: Apply at limit
    if (count >= 3) {
        btn.disabled = true;
        btn.classList.add('constrained', 'disabled-signifier');

        status.textContent = '⛔ Limit reached (3 clicks max)';
        status.style.borderColor = '#dc3545';
    }
}