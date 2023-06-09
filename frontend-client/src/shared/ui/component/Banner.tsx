interface BannerProps {
  title?: string;
  img: string;
  color?: string;
}

const Banner: React.FC<BannerProps> = ({ title, img, color }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "390px",
      }}
    >
      <div className="flex justify-center items-center h-96">
        <h1
          style={{
            color: color,
          }}
          className="lg:text-h1 md:text-[96px] sm:text-[48px] text-[32px] font-bold font-sans uppercase"
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
