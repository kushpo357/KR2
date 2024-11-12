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
            <div className="aspect-w-1 aspect-h-1 border border-yellow-500 rounded-lg p-2">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-center object-cover rounded-md"
              />
              <p className="text-yellow-400 text-center text-xl font-semibold mt-2">{event.name}</p>
            </div>
          </div>

          {/* Event info on the right */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="lg:grid lg:grid-cols-1 lg:gap-y-8 space-y-6">
              
              {/* Details Box */}
              <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Details</h2>
                <ul className="text-gray-300 space-y-2">
                  <li><strong>Category:</strong> {event.details.category}</li>
                  <li><strong>Venue:</strong> {event.details.venue}</li>
                  <li><strong>Date:</strong> {event.details.date}</li>
                  <li><strong>Registration Link:</strong> <a href={event.details.registration_link} className="text-blue-400 underline">{event.details.registration_link}</a></li>
                </ul>
              </div>

              {/* Rules Box */}
              <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Rules</h2>
                <ul className="text-gray-300 list-disc list-inside space-y-1">
                  {event.basic_rules.split('\n').map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>

              {/* Description Box */}
              <div className="border border-gray-700 bg-gray-900 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Description</h2>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
