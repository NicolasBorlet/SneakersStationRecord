import { ItemListingProps } from "../../../../shared/types/shared-type";

const ItemListingComponent: React.FC<ItemListingProps> = ({
  product,
  shoes,
  vinyls,
}) => {
  let lowestPrice = null;
  if (product.type === "shoes" && shoes && shoes.length > 0) {
    const shoePrices = shoes
      .filter((shoe) => shoe.ProductID === product.ProductID)
      .map((shoe) => shoe.ShoesSizePrice);
    lowestPrice = Math.min(...shoePrices);
  }

  return (
    <div
      key={product.ProductID}
      className="bg-red-500 h-64 w-64 uppercase tracking-[.03em]"
      onClick={
        product.type === "shoes"
          ? () => (window.location.href = `/product/${product.ProductID}`)
          : () => (window.location.href = `/product/${product.ProductID}`)
      }
      {...(product.type === "vinyl"
        ? () => (window.location.href = `/product/${product.ProductID}`)
        : () => (window.location.href = `/product/${product.ProductID}`))}
    >
      <img src="src/assets/image-1.png" alt={product.ProductName} />
      <h3 className="text-center">{product.ProductName}</h3>
      {product.type === "shoes" ? (
        <>{lowestPrice && <p>À partir de : {lowestPrice} €</p>}</>
      ) : (
        <>
          {vinyls &&
            vinyls.length > 0 &&
            vinyls.map((vinyl) => (
              <div key={vinyl.VinylID}>
                {vinyl.ProductID === product.ProductID && (
                  <p>{vinyl.VinylPrice} €</p>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default ItemListingComponent;
