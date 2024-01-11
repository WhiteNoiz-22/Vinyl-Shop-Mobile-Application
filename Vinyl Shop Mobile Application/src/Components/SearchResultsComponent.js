//This function will render our results
//based on the user input
function SearchResultsComponent(props) {
  //The search filter will filter
  //The artists names and the albums name
  //by converting them to lowercase and
  //using the searchVinyl prop to reference
  //the variables
  function searchFilter(searchVinyl) {
    return function (vinylObject) {
      //Trim will remove any of the whitespaces
      //from the searchVinyl prop
      if (searchVinyl.trim() === "") {
        return false;
      }
      let name = vinylObject.name.toLowerCase();
      let artist = vinylObject.artist.toLowerCase();
      return (
        (searchVinyl !== "" && name.includes(searchVinyl.toLowerCase())) ||
        artist.includes(searchVinyl.toLowerCase())
      );
    };
  }

  //This will display the number of search results
  //based on the users input
  let numberSearchResults = props.albumsList.filter(
    searchFilter(props.searchTerm)
  ).length;

  return (
    <>
      <div class="container-fluid">
        <hr />
        <h3 className="heading-space">Search Results: {numberSearchResults}</h3>
        <div class="container">
          <div class="scroll-bar">
            {numberSearchResults === 0 && <p>No vinyls available</p>}
            {props.albumsList
              .filter(searchFilter(props.searchTerm))
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
      </div>
    </>
  );
}

export default SearchResultsComponent;
