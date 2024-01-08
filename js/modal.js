document.getElementById('subscribeBtn').addEventListener('click', subscribe);
document.getElementById('okBtn').addEventListener('click', closeModal);

function subscribe() {
    var email = document.getElementById('emailInput').value;

    document.getElementById('emailInput').value = '';

    document.getElementById('subscribeModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('subscribeModal').style.display = 'none';
}