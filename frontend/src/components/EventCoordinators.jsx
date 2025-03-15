import React, { useEffect } from "react";
import { coordinatorsContent } from "../contents/contents";

const EventCoordinators = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg lg:mt-24 my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Event Coordinators</h2>
      <div className="space-y-6">
        {coordinatorsContent.map((event, index) => (
          <div key={index} className="p-4 border-gray-400 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">{event.event}</h3>
            <ul className="divide-y divide-gray-300">
              {event.coordinators.map((coordinator, idx) => (
                <li key={idx} className="py-2 flex flex-row justify-between">
                  <span className="font-semibold">{coordinator.name}</span>
                  <a href={`tel:${coordinator.contact}`} className="text-blue-600 underline">{coordinator.contact}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCoordinators;
