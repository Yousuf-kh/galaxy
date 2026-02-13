import Btn from "../ui/Btn";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="md:h-[1000px] h-[844px] bg-[url(/Hero.png)] bg-center bg-cover bg-bottom">
      <Header />
      <div className="container1 flex items-center">
        <div className="bg-[url(/lines.png)] mt-[clamp(6.25rem,4.5357rem+7.033vw,10.25rem)] border-l-9 px-5 py-3 border-[#7F5CFF] max-w-[753px]">
          <p className="text-white text-[clamp(1rem,0.8929rem+0.4396vw,1.25rem)]">Crafty Metaverse</p>
          <h1 className="text-white text-[clamp(1.625rem,1.0357rem+2.4176vw,3rem)] pb-[40px] font-bold">
            A SHARED, IMMERSIVE <br /> MULTI-BLOCKCHAIN <br /> BASED <img src="/plain.svg" className="inline-block" alt="" /> METAVERSE
            ECOSYSTEM
          </h1>
          <Btn text={'Invest Now'}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
