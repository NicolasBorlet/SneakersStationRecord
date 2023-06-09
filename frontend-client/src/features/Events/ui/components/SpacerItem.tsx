const SpacerItem = ({ type }: any) => {
  return (
    <div
      className={
        type === 1
          ? "flex justify-start my-[40px] px-3"
          : "flex justify-end my-[40px] px-3"
      }
    >
      <img
        src="./src/assets/EVENTS/spacer.png"
        alt="Spacer"
        className="w-full sm:max-w-[400px] max-w-[150px]"
      />
    </div>
  );
};

export default SpacerItem;
