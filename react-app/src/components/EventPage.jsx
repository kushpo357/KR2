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
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-white max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-x-8">
          {/* Image on the left */}
          <div className="lg:w-1/2">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-center object-cover sm:rounded-lg"
              />
            </div>
          </div>

          {/* Event info on the right */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
              {/* Event Details Box */}
              <div className="border border-gray-300 p-6 mb-6 lg:mb-0">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{event.name}</h1>
                <p className="mt-6 text-base text-gray-700">{event.description}</p>
              </div>

              {/* Basic Rules Box */}
              <div className="border border-gray-300 p-6 mt-8 lg:mt-0">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Basic Rules</h2>
                <p className="mt-2 text-base text-gray-500">{event.basic_rules}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
