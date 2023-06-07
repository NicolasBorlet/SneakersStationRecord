import Spacer from "../component/Spacer";

const ShopLayout = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full px-2 md:px-0">
        <div className="uppercase text-[15px] max-w-[200px] w-full font-semibold tracking-[.25em] mr-6">
          Notre boutique
        </div>
        <div className="relative w-full">
          <div
            style={{
              borderBottom: "1px solid black",
              position: "absolute",
              zIndex: 99,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          />
        </div>
        <div className="md:px-[15px] px-[5px] py-2 border w-full max-w-[105px] ml-6 text-center">
          <a className="text-[12px]" href="about">
            À PROPOS
          </a>
        </div>
      </div>
      <Spacer size={30} />
      <div
        style={{
          backgroundImage: `url("./src/assets/HOME/Home_shop.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[424px]"
      ></div>
    </div>
  );
};

export default ShopLayout;
