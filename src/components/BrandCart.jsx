const BrandCart = ({ title, text, color }) => {
  return (
    <div
      className={`text-center pt-9 border-t-9 mt-[100px]`}
      style={{ borderTopColor: `#${color}` }}
    >
      <h1 className="text-[22px] text-white font-bold pt-4">{title}</h1>
      <p className="text-white text-[18px] pt-7">{text}</p>
    </div>
  );
};

export default BrandCart;
