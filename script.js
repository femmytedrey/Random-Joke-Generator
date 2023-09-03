const jokes = document.querySelector(".jokes");
const button = document.querySelector(".btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    fetch(url)
    .then(response => {

        if(!response.ok){
            throw new Error(`Network response was not ok (${response.status})`);
        } else {
            console.log(`response was found ${response.status}`);
        }

        return response.json();
    })

    .then(data => {
        if(data.joke){
            jokes.textContent = `${data.joke}`
        } else {
            alert("No joke found in the response.");
        }
    })

    .catch(error =>{
        console.error(`Error fetching the json`);
    });  
}
getJoke();

button.addEventListener('click', getJoke)