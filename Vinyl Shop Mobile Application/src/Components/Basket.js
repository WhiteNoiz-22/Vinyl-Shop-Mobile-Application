//This is our shopping basket function
//It will display what is currently in the users basket
//and will display a sum to the user if there are multiple items
//Users will be able to add and remove items as they wish

function Basket(props) {
  //This function will add all of the prices together
  //and will display the summed price to the user
  function getBasketTotal(acc, obj) {
    return acc + obj.price;
  }

  return (
    <>
      <div class="container-fluid">
        <hr />
        {props.basket.length === 0 && <h3>Your Basket is Empty</h3>}
        <hr />
        <h3>Shopping Basket</h3>
        <p>
          Items in basket <b>{props.basket.length}</b>
        </p>
        <p>
          <div class="p-2 bd-highlight">
            <b>Total cost: {props.basket.reduce(getBasketTotal, 0)}</b>
          </div>
        </p>
        {props.basket.length > 0 && (
          <>
            <button class="btn btn-primary" onClick={props.emptyBasket}>
              Empty Basket
            </button>
          </>
        )}
        <hr />
        <div class="container">
          {props.basket.map((p, index) => (
            <p key={index}>
              <div class="p-2 bd-highlight">{p.name}</div>
              <div class="p-2 bd-highlight">{p.artist}</div>
              <div class="p-2 bd-highlight">{p.price.toFixed(2)}</div>
              <button
                class="btn btn-primary"
                onClick={() => props.removeVinylFromBasket(p)}
              >
                Remove
              </button>
              <hr />
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Basket;
