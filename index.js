console.log("hello world");
const message = document.querySelector("#message");
function addMovie(event){
    event.preventDefault();

    const inputField = document.querySelector("input");

    let movie = document.createElement("li");

    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie);
    
    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", delelteMovie)
    movie.appendChild(deleteBtn);

    let list = document.querySelector("ul");
    list.appendChild(movie);

    inputField.value = "";
}

let form = document.querySelector("form");
form.addEventListener("submit", addMovie);

function delelteMovie(event){
    event.target.parentNode.remove();
    message.textContent = "Movie Deleted!"
}
function crossOffMovie(event){
    event.target.classList.toggle("checked");
    message.textContent = "Movie Watched!"

}
