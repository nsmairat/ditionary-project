import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  //keyword is a bucket
  //setKeyword is a function

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeyWordChange(event) {
    // Save current value of textbox to state
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyWordChange} />
      </form>
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
