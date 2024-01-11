//References
//https://getbootstrap.com/docs/5.0/layout/containers/
//https://getbootstrap.com/docs/5.0/components/navbar/
//https://stackoverflow.com/questions/26813335/body-background-color-not-showing - used to help wit body color
//CS385 Code on moodle

import React, { useState } from "react";
import { albumsList } from "./albumsList";

import "./styles.css";

//Imported Components
import Basket from "./Components/Basket";
import ShowProductsComponent from "./Components/ShowProductsComponent";
import SearchResultsComponent from "./Components/SearchResultsComponent";

function App() {
  //this will allow our uses to select a genre of their choice - initially null
  const [genreChoice, setGenreChoice] = useState(null);
  //this is our shopping basket array - initially empty
  const [basket, setBasket] = useState([]);
  //This will allow our users to input a searchTerm
  //which will then update setSearchTerm
  //useState is initially set to an empty string
  const [searchTerm, setSearchTerm] = useState("");

  //This will allow us to toggle our shopping cart when needed - initially false
  const [showBasket, setShowBasket] = useState(false);

  //This will allow the user to toggle view products - initially false
  const [viewProducts, setViewProducts] = useState(false);

  //This will take our user input
  //and will update setSearchTerm based on user input
  function onSearchFormChange(event) {
    setSearchTerm(event.target.value);
  }

  //This will allow use to switch between catorgories
  function changeGenreCategory(gc) {
    setGenreChoice(gc);
  }

  //This will let us add items to basket
  function addVinylToBasket(vinyl) {
    //The spread operator will allow us to add to our
    //setBasket array and update it
    setBasket([...basket, vinyl]);
  }

  //This will empty our basket
  function emptyBasket() {
    //This will set the basket to an empty array
    //thus emptying the basket
    setBasket([]);
  }

  //This function will allow the user to
  //toggle on and off the basket option as they wish
  //by using a true or false boolean statement
  //true will display the shopping basket to the user
  function goToBasket() {
    setShowBasket(!showBasket);
  }

  //This function will allow us to toggle
  //on and off the view products button as we wish
  //by using a boolean true or false statement
  //true will return the ShowProductsComponent in full
  function goToViewProduct() {
    setViewProducts(!viewProducts);
  }

  //This will find the of the vinyl for our choice
  function findObjectIndex(needle) {
    return function (haystack) {
      return haystack.vid === needle.vid;
    };
  }

  //This function will allow us to remove a vinyl
  //from our basket by using the method
  function removeVinylFromBasket(vinyl) {
    let n = basket.findIndex(findObjectIndex(vinyl));
    setBasket([...basket.slice(0, n), ...basket.slice(n + 1, basket.length)]);
  }

  return (
    <>
      <div className="body">
        <nav className="navbar">
          <button className="button" onClick={goToBasket}>
            Basket ({basket.length})
          </button>
          <button className="button" onClick={goToViewProduct}>
            View Products
          </button>
          <form className="search-padding">
            <input
              className="searchbar"
              onChange={onSearchFormChange}
              type="text"
              value={searchTerm}
              placeholder="Seach Vinyls..."
            />
          </form>
        </nav>
        <p class="banner">
          All of our Vinyls are made from 100% ecofriendly materials!
        </p>
        {showBasket && (
          <Basket
            basket={basket}
            removeVinylFromBasket={removeVinylFromBasket}
            emptyBasket={emptyBasket}
          />
        )}
        {
          <SearchResultsComponent
            albumsList={albumsList}
            addVinylToBasket={addVinylToBasket}
            searchTerm={searchTerm}
            onSearchFormChange={onSearchFormChange}
          />
        }
        {viewProducts && (
          <ShowProductsComponent
            albumsList={albumsList}
            choice={genreChoice}
            changeGenreCategory={changeGenreCategory}
            addVinylToBasket={addVinylToBasket}
            basket={basket}
          />
        )}
        <br /> <br />
      </div>
    </>
  );
}

export default App;
