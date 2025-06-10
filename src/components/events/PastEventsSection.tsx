
import React from 'react';
import PastEventCard from './PastEventCard';
import NewsItem from './NewsItem';
import { Badge } from '@/components/ui/badge';

interface PastEvent {
  id: number;
  title: string;
  date: string;
  image: string;
  gallery: string[];
}

interface PastEventsSectionProps {
  pastEvents: PastEvent[];
  onOpenGallery: (event: PastEvent) => void;
}

const PastEventsSection: React.FC<PastEventsSectionProps> = ({ pastEvents, onOpenGallery }) => {
  return (
    <>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold relative">
            Past Events
            <div className="absolute -bottom-1 left-0 w-20 h-1 bg-brand-purple"></div>
          </h2>
          <Badge variant="outline" className="px-3 py-1 text-sm border-brand-purple text-brand-purple">
            {pastEvents.length} Events
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <PastEventCard 
              key={event.id} 
              {...event}
              onClick={() => onOpenGallery(event)}
            />
          ))}
        </div>
      </div>

      {/* Academic Publications and News */}
      <div className="mt-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold relative inline-block">
              Latest News & Publications
              <div className="absolute -bottom-1 left-0 w-20 h-1 bg-brand-purple"></div>
            </h2>
          </div>
          <div>
            <a href="#" className="text-brand-purple hover:text-brand-purple/80 font-medium inline-flex items-center transition-colors">
              View All News
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <NewsItem 
            title="CIT Incubation Center Recognized as Top 10 in South India"
            date="May 28, 2023"
            content="CIT Incubation Center was recognized among the top 10 college-based incubation centers in South India by the National Association of Software and Service Companies (NASSCOM)."
            link="#"
            linkText="Read Full Story"
          />
          
          <NewsItem 
            title={'Research Paper: "Incubation Models for Technical Institutions" Published'}
            date="April 15, 2023"
            content="Dr. Anand Kumar, Director of CIT Incubation Center, published a research paper in the International Journal of Innovation and Entrepreneurship."
            link="#"
            linkText="View Publication"
          />
          
          <NewsItem 
            title="CIT Startups Secure ₹2 Crore in Latest Funding Round"
            date="March 10, 2023"
            content="Three startups incubated at CIT secured a combined funding of ₹2 crore from various investors during the Annual Investor Connect event."
            link="#"
            linkText="Read Full Story"
          />
        </div>
      </div>
    </>
  );
};

export default PastEventsSection;
