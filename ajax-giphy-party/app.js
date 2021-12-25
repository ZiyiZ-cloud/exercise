function addGifByKey(key) {
    const results = key.data.length;
    const randomID = Math.floor(Math.random() * results);
    const $newGif = $('<img>', { src: key.data[randomID].images.original.url });
    const $gif = $('#gifs');
    $gif.append($newGif)
}

const form = document.querySelector('#searchform');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const inputValue = document.getElementById('search').value;
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: inputValue,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    console.log(response.data);
})

// $("form").on("submit", async function(evt) {
//     evt.preventDefault();
//     let inputValue = document.getElementById('search').value;
//     // let searchTerm = $searchInput.val();
//     // $searchInput.val("");

//     const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
//         params: {
//             q: inputValue,
//             api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
//         }
//     });
//     addGifByKey(response.data);
//     inputValue = null;
// });

//remove all the gifs
const result = document.getElementById('gifs');
const removeBtn = document.getElementById('remove');
removeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    result.innerHTML = '';
})