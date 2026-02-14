const Title = ({title,text}) => {
  return (
    <div className="text-white text-center p-5">
      <p className="uppercase text-[18px] leading-[18px]">{text}</p>
      <h1 className="uppercase text-[clamp(1.5rem,1.043rem+2.0309vw,2.8125rem)] font-bold">
        {title}
      </h1>
    </div>
  );
};

export default Title;
