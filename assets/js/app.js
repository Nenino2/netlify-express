const content = document.getElementById('content');
fetch('/.netlify/functions/server')
    .then(response => response.json())
    .then(result => {
        result.data.ingredients.forEach(el => {
            content.insertAdjacentHTML('afterbegin', `<p>${el}</p>`);
        });
    });
