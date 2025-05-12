
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PastEventProps {
  id: number;
  title: string;
  date: string;
  image: string;
  gallery: string[];
  onClick: () => void;
}

const PastEventCard: React.FC<PastEventProps> = ({
  title,
  date,
  image,
  onClick
}) => {
  return (
    <Card 
      className="overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer card-hover"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <span className="text-white font-bold px-3 py-1 border-2 border-white rounded-md">
            View Gallery
          </span>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{date}</p>
      </CardContent>
    </Card>
  );
};

export default PastEventCard;
