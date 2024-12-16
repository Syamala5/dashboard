import React from "react";

const MainContent = () => {
  const cards = [
    { title: "Users", value: 120 },
    { title: "Sales", value: "$4500" },
    { title: "Performance", value: "85%" },
    { title: "Support Tickets", value: 14 },
  ];

  return (
    <main className="flex-grow p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-4 shadow rounded-lg flex flex-col items-center justify-center"
          >
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-2xl font-semibold">{card.value}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
