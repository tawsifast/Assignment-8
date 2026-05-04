import { Card } from "@heroui/react";
import React from "react";

const SummerCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Stay Hydrated",
      desc: "Drink plenty of water to keep your body cool and refreshed.",
      icon: "💧",
    },
    {
      id: 2,
      title: "Use Sunscreen",
      desc: "Protect your skin with SPF 50+ sunscreen before going outside.",
      icon: "🧴",
    },
    {
      id: 3,
      title: "Wear Light Clothes",
      desc: "Choose breathable cotton fabrics for comfort in hot weather.",
      icon: "👕",
    },
    {
      id: 4,
      title: "Avoid Midday Sun",
      desc: "Stay indoors during peak sun hours (12pm–3pm).",
      icon: "☀️",
    },
  ];

  return (
    <div>
      <div className="w-11/12 mx-auto my-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Summer Care Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <Card key={tip.id} className="p-5 text-center shadow-md">
              <div className="text-5xl mb-3">{tip.icon}</div>
              <h3 className="font-semibold text-lg">{tip.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{tip.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummerCareTips;
