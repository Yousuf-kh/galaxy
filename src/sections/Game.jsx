import Btn from "../ui/Btn";

const Game = () => {
  return (
    <div className="bg-[url(/game.png)] bg-cover bg-[#090812] py-[100px] md:py-[50px]">
      <div className="container1 flex flex-col md:flex-row items-center justify-center  h-[1000px] md:justify-between gap-[50px]">
        <img className="hidden md:block w-[45%]" src="/game1.png" alt="game" />
        <div className="text-center bg-[url(/line2.png)] flex flex-col gap-5 items-center p-9 border-t-9 border-[#56FFEB]">
          <h1 className="text-[clamp(1.75rem,1.3801rem+1.6441vw,2.8125rem)] text-white">
            Game
          </h1>
          <p className="text-white text-[clamp(1rem,0.913rem+0.3868vw,1.25rem)]">
            The space will also offer avid gamers to be a part of an amazing 3D
            gaming experience (details to be published soon). Crafty Metaverse
            space will continuously evolve its 3D gaming space to include
            technologies such as VR headsets, augmented reality glasses, and
            game consoles.
          </p>
          <Btn text={"Invest Now"} />
        </div>
        <img className="hidden md:block w-[45%]" src="/game2.png" alt="" />
        <div className="flex gap-5 items-center md:hidden">
          <img src="/game2.png" className="w-[45%]" alt="game" />
          <div>
            <img src="/game1.png" className="" alt="game" />
            <img src="/game-circle.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
