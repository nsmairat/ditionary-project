import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});
  let [photos, setPhotos] = useState(null);
  //keyword is a bucket
  //setKeyword is a function

  function handleResponse(response) {
    //console.log(response.data);
    //console.log(response.data.meanings[0]);

    setResults(response.data);

    //console.log(results);
  }

  function handleResponseForImage(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "6a4bo439f4518f900acccae6f3t294be";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    //is a framemwork that helps us to cal the api
    axios.get(apiUrl).then(handleResponse);

    let imagepiKey = "6a4bo439f4518f900acccae6f3t294be";
    let imagegUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagepiKey}`;
    axios.get(imagegUrl).then(handleResponseForImage);
  }

  function handleKeyWordChange(event) {
    // Save current value of textbox to state
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What would you like to learn today?</h1>
        <form onSubmit={search}>
          <input type="search" onChange={handleKeyWordChange} />
        </form>
        <div className="hint">i.e. food, sport, art, coding</div>
      </section>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}

//function turnOnOven() {
// instructions for how to turn on the oven
// turn the dial
// set the temp to 350F
// wait for it to be ready with beep
//}
//function prepareTray() {
// instructions for how to turn on the oven
// turn the dial
// set the temp to 350F
// wait for it to be ready with beep
//}

//function makeDough() {
// put ingrediants in bowl
// etc/
//}
//function gatherIngredients() {
// open cupboard
// measure
// put in small bowls
//}

//let [mainIngredient, setMainIngredient] = useState("");
//function bakeCookies(typeOfCookies) {
// instructions for how to make cookies
//setMainIngredient(typeOfCookies);
//alert(mainIngredient);
// instructions 1 - gather ingredients
//gatherIngredients();
// instructions 2 - mix
//makeDough();
// instructions 3 - put on tray
//prepareTray();
// instructions 4 - turn on oven
//turnOnOven();
//}

// Bake two batches of cookies
//bakeCookies("chocolate");
//bakeCookies("oatmeal");
