
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface UpcomingEventProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  registerLink: string;
}

const UpcomingEventCard: React.FC<UpcomingEventProps> = ({
  title,
  date,
  time,
  location,
  image,
  description,
  registerLink
}) => {
  return (
    <Card className="overflow-hidden shadow hover:shadow-lg transition-shadow card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-brand-purple mr-2" />
            <span className="text-gray-600">{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-brand-purple mr-2" />
            <span className="text-gray-600">{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-brand-purple mr-2" />
            <span className="text-gray-600">{location}</span>
          </div>
        </div>
        <p className="text-gray-700 mb-6">{description}</p>
        <Button asChild className="bg-brand-purple hover:bg-opacity-90 w-full">
          <a href={registerLink}>Register Now</a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default UpcomingEventCard;
