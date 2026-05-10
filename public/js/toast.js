let toastTimer = null;

function showToast(type = 'success', message = "Your email has been saved successfully") {
    const id = `#toast-${type}`;
    document.querySelector(`${id} .toast-message`).innerHTML = message;
    document.querySelector(id).classList.remove('hidden');

    if (toastTimer) {
        clearTimeout(toastTimer);
        toastTimer = null;
    }

    toastTimer = setTimeout(() => {
        hideToast();

    }, 3000);

}

function hideToast(type = 'success') {
    if (toastTimer) {
        clearTimeout(toastTimer);
        toastTimer = null;   
    }
    const id = `#toast-${type}`;
    document.querySelector(id).classList.add("hidden");
}
document.querySelector('#toast-success button').addEventListener('click', () => hideToast());

document.querySelector('#toast-warning button').addEventListener('click', () => hideToast('warning'));