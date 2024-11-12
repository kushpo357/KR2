import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './navbar/Navbar';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function EventPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch('/EventData.json')
      .then((response) => response.json())
      .then((data) => {
        const foundEvent = data.find((item) => item.event.id === parseInt(eventId, 10));
        setEvent(foundEvent ? foundEvent.event : null);
      })
      .catch((error) => console.error('Error loading data:', error));
  }, [eventId]);

  if (!event) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-black text-gray-200 w-full min-h-screen py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-full lg:flex lg:gap-x-8">
          {/* Image on the left */}
          <div className="lg:w-1/2 w-full">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-center object-cover sm:rounded-lg"
              />
            </div>
          </div>

          {/* Event info on the right */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
              {/* Event Details Box */}
              <div className="border border-gray-700 bg-gray-900 p-6 mb-6 lg:mb-0 rounded-lg">
                <h1 className="text-3xl font-extrabold tracking-tight text-white">{event.name}</h1>
                <p className="mt-6 text-base text-gray-300">{event.description}</p>
              </div>

              {/* Basic Rules Box */}
              <div className="border border-gray-700 bg-gray-900 p-6 mt-8 lg:mt-0 rounded-lg">
                <h2 className="text-2xl font-extrabold tracking-tight text-white">Basic Rules</h2>
                <p className="mt-2 text-base text-gray-300">{event.basic_rules}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
