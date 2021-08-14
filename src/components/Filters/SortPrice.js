const SortPrice = ({ list, sortProducts }) => {
    console.log(list, sortProducts);
  
    const sortByPrice = (type, list) => {
      if (type && type === "PRICE_HIGH_TO_LOW") {
        sortProducts(list.sort((a, b) => b.price - a.price));
      } else if (type && type === "PRICE_LOW_TO_HIGH") {
        sortProducts(list.sort((a, b) => a.price - b.price));
      } else sortProducts(list);
    };
  
    sortProducts(list);
  
    return (
      <div>
        <fieldset style={{ padding: "10px" }}>
          <legend>Sort By</legend>
          <label style={{ padding: "5px" }}>
            <input
              type="radio"
              name="sort"
              onChange={() => sortByPrice("PRICE_HIGH_TO_LOW", list)}
            />
            Price - High to Low
          </label>
          <label style={{ padding: "5px" }}>
            <input
              type="radio"
              name="sort"
              onChange={() => sortByPrice("PRICE_LOW_TO_HIGH", list)}
            />
            Price - Low to High
          </label>
        </fieldset>
      </div>
    );
  };
  
  export default SortPrice;
  