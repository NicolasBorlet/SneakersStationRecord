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
      className="h-64 w-64 uppercase tracking-[.03em] text-center max-h-[287px]"
      onClick={
        product.type === "shoes"
          ? () => (window.location.href = `/product/${product.ProductID}`)
          : () => (window.location.href = `/product/${product.ProductID}`)
      }
      {...(product.type === "vinyl"
        ? () => (window.location.href = `/product/${product.ProductID}`)
        : () => (window.location.href = `/product/${product.ProductID}`))}
    >
      <div className="px-5  items-center justify-center">
        <img
          src={
            product.type === "shoes"
              ? "src/assets/image-1.png"
              : "src/assets/vinyl.png"
          }
          alt={product.ProductName}
          className="md:w-full"
        />
      </div>
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
