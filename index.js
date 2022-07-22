// console.log("Hello World!");

document.getElementById('percent--form').addEventListener('submit', e => {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const percent = document.getElementById('percent').value;
    console.log(amount, percent);
})