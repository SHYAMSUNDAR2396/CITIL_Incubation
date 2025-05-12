
import React from 'react';
import PastEventCard from './PastEventCard';
import NewsItem from './NewsItem';

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastEvents.map((event) => (
          <PastEventCard 
            key={event.id} 
            {...event}
            onClick={() => onOpenGallery(event)}
          />
        ))}
      </div>

      {/* Academic Publications and News */}
      <div className="mt-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">Latest News & Publications</h2>
          <div className="w-24 h-1 bg-brand-purple mx-auto"></div>
        </div>
        
        <div className="space-y-6">
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
