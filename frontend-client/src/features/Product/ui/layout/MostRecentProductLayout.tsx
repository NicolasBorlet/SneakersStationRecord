import { useEffect, useState } from "react";

const MostRecentProductLayout = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [shoes, setShoes] = useState<any[]>([]);
  const [vinyls, setVinyls] = useState<any[]>([]);

  //fetch data from backend
  useEffect(() => {
    fetch("http://localhost:3000/product/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });

    fetch("http://localhost:3000/shoessize")
      .then((response) => response.json())
      .then((data) => {
        setShoes(data);
      });

    fetch("http://localhost:3000/vinyl")
      .then((response) => response.json())
      .then((data) => {
        setVinyls(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center font-special">
        <h3 className="text-h3">NOUVEAUTES</h3>
        <h2 className="text-h2">NOUVEAUTES</h2>
      </div>
      <div>
        {products.map((product) => (
          <div>
            <div key={product.ProductID}>
              <img src={product.ProductThumb} alt={product.ProductName} />
              <h3>{product.ProductName}</h3>
              <p>{product.ProductCartDesc}</p>
              {product.type === "shoes" ? (
                <>
                  {shoes.map((shoe) => (
                    <div key={shoe.ShoesSizeID}>
                      {shoe.ProductID === product.ProductID && (
                        <p>{shoe.ShoesSizePrice}</p>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {vinyls.map((vinyl) => (
                    <div key={vinyl.VinylID}>
                      {vinyl.ProductID === product.ProductID && (
                        <p>{vinyl.VinylPrice}</p>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRecentProductLayout;
