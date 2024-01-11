import { useState } from "react";

//This function will our products to our user
function ShowProductsComponent(props) {
  //This will allow the user to choice the sort choice they want
  //setSortChoice will then be updated in the handler function
  const [sortChoice, setSortChoice] = useState(null);

  //This function will handle our users choice in the dropdown menu
  function handlerListChange(e) {
    setSortChoice(e.target.value);
  }

  //This will sort our vinyls by album name
  //in ascending alphabetical order - A-Z
  function sortByVinylNameAZ(ax, ay) {
    let AX = ax.name.toUpperCase();
    let AY = ay.name.toUpperCase();
    if (AX > AY) return 1;
    else if (AX < AY) return -1;
    else return 0;
  }

  //This will sort our vinyls by album name
  //in descending alphabetical order - Z-A
  function sortByVinylNameZA(ax, ay) {
    let AX = ax.name.toUpperCase();
    let AY = ay.name.toUpperCase();
    if (AX > AY) return -1;
    else if (AX < AY) return 1;
    else return 0;
  }

  //This will sort our vinyls by price
  //lowest to highest
  function sortByVinylPriceLH(ax, ay) {
    if (ax.price > ay.price) return 1;
    else if (ax.price < ay.price) return -1;
    else return 0;
  }

  //This will sort our vinyls by price
  //highest to lowest
  function sortByVinylPriceHL(ax, ay) {
    if (ax.price > ay.price) return -1;
    else if (ay.price < ax.price) return 1;
    else return 0;
  }

  //Filters genre from our external JSON file
  function genreFilter(prod) {
    return function (productsObject) {
      return productsObject.genre === prod;
    };
  }

  // this filter will find the number of items for this genre
  let n = props.albumsList.filter(genreFilter(props.choice));

  return (
    <>
      <hr />
      <header>
        <hr />
        <h2 className="heading-space">Select a Vinyl Genre!</h2>
        &nbsp;
        <button
          class="btn btn-primary"
          onClick={() => props.changeGenreCategory("Rock")}
        >
          Rock
        </button>
        &nbsp;
        <button
          class="btn btn-primary"
          onClick={() => props.changeGenreCategory("Metal")}
        >
          Metal
        </button>
        &nbsp;
        <button
          class="btn btn-primary"
          onClick={() => props.changeGenreCategory("Pop")}
        >
          Pop
        </button>
        &nbsp;
        <button
          class="btn btn-primary"
          onClick={() => props.changeGenreCategory(null)}
        >
          Reset Choice
        </button>
        &nbsp;
        <form>
          <br />
          <select class="btn btn-primary" onChange={handlerListChange}>
            <option value={null}>Sort By</option>
            <option value="a">A-Z</option>
            <hr />
            <option value="b">Z-A</option>
            <hr />
            <option value="c">Low to High</option>
            <hr />
            <option value="d">High to Low</option>
          </select>
        </form>
      </header>
      <div class="p-2 bd-highlight" />
      <div class="container-fluid">
        <h3>
          Our {props.choice} vinyls ({n.length} available)
        </h3>
        <div class="container">
          {sortChoice === null &&
            props.albumsList
              .filter(genreFilter(props.choice))
              .map((p, index) => (
                <p key={index}>
                  <div class="p-2 bd-highlight">{p.name}</div>
                  <div class="p-2 bd-highlight">{p.artist}</div>
                  <div class="p-2 bd-highlight">{p.price.toFixed(2)} </div>
                  <button
                    class="btn btn-primary"
                    onClick={() => props.addVinylToBasket(p)}
                  >
                    Add to Cart
                  </button>
                  <hr />
                </p>
              ))}
          {sortChoice === "a" &&
            props.albumsList
              .filter(genreFilter(props.choice))
              .sort(sortByVinylNameAZ)
              .map((p, index) => (
                <p key={index}>
                  <div class="p-2 bd-highlight">{p.name}</div>
                  <div class="p-2 bd-highlight">{p.artist}</div>
                  <div class="p-2 bd-highlight">{p.price.toFixed(2)}</div>
                  <button
                    class="btn btn-primary"
                    onClick={() => props.addVinylToBasket(p)}
                  >
                    Add to Cart
                  </button>
                  <hr />
                </p>
              ))}
          {sortChoice === "b" &&
            props.albumsList
              .filter(genreFilter(props.choice))
              .sort(sortByVinylNameZA)
              .map((p, index) => (
                <p key={index}>
                  <div class="p-2 bd-highlight">{p.name}</div>
                  <div class="p-2 bd-highlight">{p.artist}</div>
                  <div class="p-2 bd-highlight">{p.price.toFixed(2)}</div>
                  <button
                    class="btn btn-primary"
                    onClick={() => props.addVinylToBasket(p)}
                  >
                    Add to Cart
                  </button>
                  <hr />
                </p>
              ))}
          {sortChoice === "c" &&
            props.albumsList
              .filter(genreFilter(props.choice))
              .sort(sortByVinylPriceLH)
              .map((p, index) => (
                <p key={index}>
                  <div class="p-2 bd-highlight">{p.name}</div>
                  <div class="p-2 bd-highlight">{p.artist}</div>
                  <div class="p-2 bd-highlight">{p.price.toFixed(2)}</div>
                  <div />
                  <button
                    class="btn btn-primary"
                    onClick={() => props.addVinylToBasket(p)}
                  >
                    Add to Cart
                  </button>
                  <hr />
                </p>
              ))}
          {sortChoice === "d" &&
            props.albumsList
              .filter(genreFilter(props.choice))
              .sort(sortByVinylPriceHL)
              .map((p, index) => (
                <p key={index}>
                  <div class="p-2 bd-highlight">{p.name}</div>
                  <div class="p-2 bd-highlight">{p.artist}</div>
                  <div class="p-2 bd-highlight">{p.price.toFixed(2)}</div>
                  <button
                    class="btn btn-primary"
                    onClick={() => props.addVinylToBasket(p)}
                  >
                    Add to Cart
                  </button>
                  <hr />
                </p>
              ))}
        </div>
      </div>
    </>
  );
}

export default ShowProductsComponent;
