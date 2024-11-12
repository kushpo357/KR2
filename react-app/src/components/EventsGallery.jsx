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

  // Filter events based on selected day, show all events if "All" is selected
  const filteredCategories = selectedDay === 'All'
    ? categories
    : categories.filter((category) => category.day === selectedDay);

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen w-full">
      <Navbar />
      <div className="w-full mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-white">Events of KR</h2>
        <p className="mt-4 text-base text-gray-400">Each day new event...</p>

        {/* Tabs for day selection */}
        <div>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">Select a tab</label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full bg-gray-800 text-gray-200 border-gray-700 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
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

          <div className="hidden sm:block">
            <nav className="flex space-x-4" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setSelectedDay(tab.day)}
                  className={classNames(
                    selectedDay === tab.day
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400 hover:text-white',
                    'px-3 py-2 font-medium text-sm rounded-md'
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
        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <Link key={category.id} to={`/event/${category.id}`} className="group block">
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75">
                  <img
                    src={category.imageSrc}
                    alt={category.name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{category.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{category.description}</p>
              </Link>
            ))
          ) : (
            <p className="text-gray-400">No events for this day.</p>
          )}
        </div>
      </div>
    </div>
  );
}
