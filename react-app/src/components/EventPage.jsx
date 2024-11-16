import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EventPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch("/EventData.json")
      .then((response) => response.json())
      .then((data) => {
        const foundEvent = data.find(
          (item) => item.event.id === parseInt(eventId, 10)
        );
        setEvent(foundEvent ? foundEvent.event : null);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [eventId]);

  if (!event) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-black text-gray-200 w-full min-h-screen py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Image on the left */}
          <div className="lg:w-1/2 w-full">
            <div className="aspect-w-1 aspect-h-1 border border-yellow-500 rounded-lg p-2">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-center object-cover rounded-md"
              />
              <p className="text-yellow-400 text-center text-xl font-semibold mt-2">
                {event.name}
              </p>
            </div>
          </div>

          {/* Event info in vertical flex */}
          <div className="lg:w-1/2 w-full flex flex-col space-y-6">
            {/* Details Box */}
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                Details
              </h2>
              <ul className="text-gray-300 space-y-2 flex flex-col md:flex-row md:flex-wrap md:space-y-0 md:space-x-4">
                <li className="flex-1 md:w-1/2">
                  <strong>Category:</strong> {event.details.category}
                </li>
                <li className="flex-1 md:w-1/2">
                  <strong>Venue:</strong> {event.details.venue}
                </li>
                <li className="flex-1 md:w-1/2">
                  <strong>Date:</strong> {event.details.date}
                </li>
                <li className="flex-1 md:w-1/2">
                  <strong>Team Size:</strong> {event.details.team_size}
                </li>
              </ul>
            </div>
            {/* Rules*/}
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Rules</h2>
              <ul className="text-gray-300 space-y-2 flex flex-col ">
                <li className="flex-1">
                  <strong>Team Size:</strong> {event.rules.team_size}
                </li>

                <li className="flex-1 mt-6">
                  <strong>Round Details:</strong>
                  <ul className="text-gray-300 space-y-2 ml-4 flex flex-col">
                    {Object.entries(event.rules["Round Details"]).map(
                      ([stageKey, stageDetails], index) => (
                        <li key={index} className="flex flex-col">
                          <strong>{stageKey.replace("_", " ")}</strong>
                          <ul className="list-disc ml-6 flex flex-col space-y-1">
                            {stageDetails.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </li>
                      )
                    )}
                  </ul>
                </li>

                <li className="flex-1 mt-6">
                  <strong>Timing:</strong>
                  <ul className="text-gray-300 space-y-2 ml-4 flex flex-col">
                    {Object.entries(event.rules.Timing).map(
                      ([stageKey, timing], index) => (
                        <li key={index}>
                          <strong>{stageKey.replace("_", " ")}:</strong>{" "}
                          {timing}
                        </li>
                      )
                    )}
                  </ul>
                </li>

                <li className="flex-1">
                  <strong>Permitted Resources:</strong>{" "}
                  {event.rules.PermittedResources}
                </li>
                <li className="flex-1">
                  <strong>Judging Criteria:</strong>{" "}
                  {event.rules.JudgingCriteria}
                </li>
                <li className="flex-1">
                  <strong>Prohibitions:</strong>
                  {Array.isArray(event.rules.Prohibitions) ? (
                    <ul className="list-disc ml-6 space-y-1">
                      {event.rules.Prohibitions.map((prohibition, index) => (
                        <li key={index}>{prohibition}</li>
                      ))}
                    </ul>
                  ) : (
                    <span> {event.rules.Prohibitions}</span>
                  )}
                </li>

                <li className="flex-1">
                  <strong>Additional Rules:</strong>{" "}
                  {event.rules.AdditionalRules}
                </li>
              </ul>
            </div>

            {/* Description Box */}
            <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                Description
              </h2>
              <p className="text-gray-300">{event.description}</p>
            </div>

            {/* Registration Button1 */}
            <motion.form
              className="mt-10 flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href={event.details.registration_link}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-xs w-full"
              >
                <button
                  type="button"
                  className="w-full bg-yellow-400 text-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium hover:bg-red-500 hover:text-white shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-yellow-500"
                >
                  Register Now
                </button>
              </a>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
}
