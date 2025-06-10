
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Image } from 'lucide-react';

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
  gallery,
  onClick
}) => {
  return (
    <Card 
      className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div className="h-52 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
            <span className="text-white text-sm font-medium px-2 py-1 bg-brand-purple/80 backdrop-blur-sm rounded-md inline-flex items-center">
              <Image className="h-3 w-3 mr-1" />
              {gallery.length} Photos
            </span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center mb-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4 text-brand-purple mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-lg font-bold group-hover:text-brand-purple transition-colors">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default PastEventCard;
