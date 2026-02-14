const About = () => {
  return (
    <div className="md:h-[1000px] h-[844px] bg-[#01001F] md:bg-[url(/bg-about.png)] bg-center">
      <div className="md:h-[1000px] h-[844px] container1 flex bg-center bg-cover">
        <div className=" flex items-center">
          <div className="bg-[url(/lines.png)] border-l-9 px-5 py-3 border-[#56FFEB] max-w-[753px]">
            <p className="uppercase text-white">Profile</p>
            <h1 className="text-white text-[clamp(1.625rem,1.0357rem+2.4176vw,3rem)] uppercase font-bold">
              About Us
            </h1>
            <p className="text-white text-[clamp(1rem,0.8929rem+0.4396vw,1.25rem)]  pb-[40px]">
              CYou are using the old write up. We are using this now. Crafty
              Metaverse is a multi-blockchain based virtual reality metaverse
              platform to develop the most immersive, imaginative, and addictive
              gaming experiences. We are providing our gaming community with the
              near-real-world experience while using their digital avatars. Our
              ecosystem will be a futuristic, decentralized, and persistent 3D
              virtual metaverse gaming platform especially for crypto
              enthusiasts, gamers, artists, and metaverse fans. .
            </p>

            <div className="w-[70%]">
              <div className="flex items-center">
                <div className="border-[#7F5CFF] border-2 rounded-full p-1 flex items-center justify-center">
                  <img className="w-[15px]" src="/Ellipse.png" alt="" />
                </div>

                <div className="flex-1 relative">
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-400 -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-0 w-[20%] h-[5px] bg-[#7F5CFF] -translate-y-1/2"></div>
                </div>
              </div>

              <div className="flex justify-between text-white">
                <h1 className="uppercase font-bold text-[18px]">1 Chapter</h1>
                <h1 className="uppercase font-bold text-[18px]">2</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
