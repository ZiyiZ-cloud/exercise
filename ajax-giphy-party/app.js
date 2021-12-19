async function addGifByKey(key) {
    try {
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
            params: {
                q: words,
                api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
            }
        });
        console.log(res.data);
        const img = document.createElement('img');
        img.src = res.data.message;

    } catch (e) {
        alert('key not found!');
        getRandomGif();
    }
}


const form = document.querySelector('#search');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    addGifByKey(input.value);
    input.value = '';
})


//remove all the gifs
const result = document.getElementById('gifs');
const removeBtn = document.getElementById('remove');
removeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    result.innerHTML = '';
})