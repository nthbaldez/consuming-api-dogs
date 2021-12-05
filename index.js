const img = document.getElementById('dog');

const url = 'https://dog.ceo/api/breeds/image/random';

function buscarDoguinho() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => 
        img.src = data.message
);

}

buscarDoguinho();