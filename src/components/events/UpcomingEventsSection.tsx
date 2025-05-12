
import React from 'react';
import { Button } from '@/components/ui/button';
import UpcomingEventCard from './UpcomingEventCard';

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  registerLink: string;
}

interface UpcomingEventsSectionProps {
  upcomingEvents: UpcomingEvent[];
}

const UpcomingEventsSection: React.FC<UpcomingEventsSectionProps> = ({ upcomingEvents }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {upcomingEvents.map((event) => (
          <UpcomingEventCard key={event.id} {...event} />
        ))}
      </div>

      {/* Subscribe to Events */}
      <div className="mt-16 p-8 bg-gray-50 rounded-lg border border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Never Miss an Event</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to get updates about upcoming events, workshops, and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-3 border border-gray-300 rounded-md"
            />
            <Button className="bg-brand-purple hover:bg-opacity-90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEventsSection;
