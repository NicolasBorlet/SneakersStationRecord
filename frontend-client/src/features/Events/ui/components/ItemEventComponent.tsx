interface ItemEventComponentProps {
  type: number;
  date: string;
  image: string;
  title: string;
  hour: string;
}

const ItemEventComponent: React.FC<ItemEventComponentProps> = ({
  type,
  date,
  image,
  title,
  hour,
}) => {
  return (
    <div className="w-full text-center flex justify-center px-3">
      {type === 1 && (
        <div className="w-[752px]">
          <div className="text-start uppercase font-bold mb-4 text-[10px] sm:text-[20px]">
            <p>{date}</p>
          </div>
          <div className="flex justify-center mb-4">
            <img
              src={image}
              alt="Image d'illustration"
              className="sm:max-w-[372px] sm:max-h-[251px] max-w-[140px] max-h-[85px]"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div className="text-end uppercase font-bold text-[10px] sm:text-[20px]">
            <p>{title}</p>
            <p>{hour}</p>
          </div>
        </div>
      )}
      {type === 2 && (
        <div className="w-[752px]">
          <div className="text-end uppercase font-bold mb-4 text-[10px] sm:text-[20px]">
            <p>{date}</p>
          </div>
          <div className="flex justify-center mb-4">
            <img
              src={image}
              alt="Image d'illustration"
              className="sm:max-w-[372px] sm:max-h-[251px] max-w-[140px] max-h-[85px]"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div className="text-start uppercase font-bold sm:text-[20px] text-[10px]">
            <p>{title}</p>
            <p>{hour}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemEventComponent;
