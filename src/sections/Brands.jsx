import BrandCart from "../components/BrandCart";
import Title from "../ui/Title";

const Brands = () => {
  const brandsText = [
    {
      img: "/brand-car-1.png",
      title: "Guardians of Lost Worlds (P2E Game)",
      text: "Crafty Metaverse will soon launch Guardians of Lost Worlds, the first cross-chain P2E gaming experience. Our game will be available on multiple blockchains and then eventually on our side chain (SANKOFA). This will give users a seamless gameplay experience with little to no gas fees that allow users to focus on the game rather than worrying about losing their returns.",
      color:'06D6DF'
    },

    {
      img: "/brand-car-2.png",
      title: "Crafty Metaverse Ecosystem",
      text: "Crafty Metaverse presents a Virtual Arts Studio where you can enhance your creativity by creating digital arts inspired by your game. A virtual marketplace to allow the users to trade and stake our $CMETA token and their NFTs. Negotiate with the digital avatars of other users to sell your NFTs at the best prices and generate passive income while playing",
      color:'7B71EE'
    },

    {
      img: "/beand-car-3.png",
      title: "SANKOFA",
      text: "SANKOFA($KOFA) is an Ethereum sidechain that will be created with Guardians of Lost Worlds community in mind. LYQUID, the team behind Guardians of Lost Worlds, will build a reliable, fast and cheap network that could cater to the demands of the game.",
      color:'F00AFE'
    },
  ];

  return (
    <div className="bg-[url(/bg-brands.png)] bg-cover py-[100px]">
      <div className="container1">
        <Title title={"Our brands"} text={"No problem"} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 items-baseline">
          {brandsText.map((c) => (
            <div className="text-center">
              <img className="w-[90%] mx-auto" src={c.img} alt="" />
              <BrandCart title={c.title} text={c.text} color={c.color}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
