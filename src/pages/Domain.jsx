import DomainCard from "../components/DomainCard";

import aniData1 from "../assets/Animation - 1723345948359.json";
import aniData2 from "../assets/Animation - 1723346095382.json";
import aniData3 from "../assets/Animation - 1723453838766.json";

const Domain = () => {
  const cards = [
    {
      animationData: aniData1,
      title: "Web Development/App Development",
      description:
        "Build dynamic and responsive web applications. Showcase your skills in front-end, back-end, or full-stack development.",
    },
    {
      animationData: aniData3,
      title: "Artificial Intelligence",
      description:
        "Develop intelligent systems using the latest in AI and machine learning.",
    },
  ];
  return (
    <div
      className="flex flex-col  justify-center items-center pt-24"
      id="domain"
    >
      <p className="text-center text-6xl font-semibold text-white pb-10 mt-8">Domains</p>
      <div className="flex space-x-10 mt-10">
        {cards.map((card, index) => (
          <DomainCard
            key={index}
            title={card.title}
            description={card.description}
            animationData={card.animationData}
          />
        ))}
      </div>
    </div>
  );
};

export default Domain;
