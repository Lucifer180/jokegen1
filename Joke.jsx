import React from "react";
  
import './Joke.css';
 
const Joke = () => {
    const [Joke, setJoke] = React.useState("");
 
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };
 
    return (
        <div className="joke">
            <h1>Joke+generator</h1>
            <p>{Joke}</p>
            <div className="button">
            <button onClick={fetchApi}>Click here generate a Joke.</button>
            </div>
        </div>
    );
}
 
export default Joke;