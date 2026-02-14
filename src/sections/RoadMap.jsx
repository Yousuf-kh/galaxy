import RoadMapText from "../components/RoadMapText";
import Krug from "../ui/Krug";

const RoadMap = () => {
  return (
    <div className="bg-[#090812] py-[100px]">
      <div className="container1">
        <div className="text-white text-center p-5">
          <p className="uppercase text-[18px] leading-[18px]">Our Way</p>
          <h1 className="uppercase text-[45px] font-bold">Roadmap</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] py-[50px]">
          <div className="flex flex-col-reverse items-end md:flex-row gap-[50px]">
            <RoadMapText />
            <Krug />
          </div>

          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>

          <div className="flex flex-col items-start md:flex-row gap-[50px]">
            <Krug />
            <RoadMapText />
          </div>

          <div className="flex flex-col-reverse items-end md:flex-row gap-[50px]">
            <RoadMapText />
            <Krug />
          </div>

          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>

          <div className="flex flex-col md:flex-row gap-[50px]">
            <Krug />
            <RoadMapText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
