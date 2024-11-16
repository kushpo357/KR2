import { useState, useEffect } from 'react';
import Navbar from "./navbar/Navbar";
import { Link } from "react-router-dom";

const tabs = [
  { name: 'All Events', day: 'All' },
  { name: 'Day0', day: 'Day0' },
  { name: 'Day1', day: 'Day1' },
  { name: 'Day2', day: 'Day2' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function EventsGallery() {
  const [categories, setCategories] = useState([]);
  const [selectedDay, setSelectedDay] = useState(tabs[0].day);

  useEffect(() => {
    fetch('/EventData.json')
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          id: item.event.id,
          name: item.event.name,
          href: item.event.details.registration_link,
          imageSrc: item.event.image,
          description: item.event.description,
          day: item.event.day,
        }));
        setCategories(formattedData);
      })
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  const filteredCategories = selectedDay === 'All'
    ? categories
    : categories.filter((category) => category.day === selectedDay);

  return (
    <div className="bg-[#0B0B0B] text-gray-200 min-h-screen w-full">
      <Navbar />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">Events of KR</h2>
        <p className="mt-4 text-lg text-gray-400">Explore each day's events...</p>

        {/* Tabs for day selection */}
        <div className="mt-6">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">Select a tab</label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full bg-gray-800 text-gray-200 border-gray-700 rounded-md py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              {tabs.map((tab) => (
                <option key={tab.name} value={tab.day}>
                  {tab.name}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden sm:flex justify-center space-x-4 mt-4">
            <nav className="flex space-x-4" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setSelectedDay(tab.day)}
                  className={classNames(
                    selectedDay === tab.day
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-400 hover:text-white',
                    'px-4 py-2 font-medium text-sm rounded-md transition duration-200 ease-in-out'
                  )}
                  aria-current={selectedDay === tab.day ? 'page' : undefined}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Event items grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <Link key={category.id} to={`/event/${category.id}`} className="group block rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative aspect-w-16 aspect-h-9 bg-gray-800">
                  <img
                    src={category.imageSrc}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-75"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-lg font-semibold text-white bg-gray-800 bg-opacity-80 px-4 py-2 rounded-md">Click to know more</span>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{category.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{category.description}</p>
              </Link>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full">No events for this day.</p>
          )}
        </div>
      </div>
    </div>
  );
}
