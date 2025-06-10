
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface NewsItemProps {
  title: string;
  date: string;
  content: string;
  link: string;
  linkText: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, date, content, link, linkText }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-6 relative">
        <div className="absolute top-0 right-0 h-24 w-24 bg-brand-purple/5 rounded-bl-full z-0"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-3 text-sm text-gray-500">
            <Calendar className="h-4 w-4 text-brand-purple mr-2" />
            <span>{date}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{content}</p>
          <Button asChild variant="link" className="p-0 text-brand-purple font-medium flex items-center hover:text-brand-orange transition-colors duration-300">
            <a href={link}>
              {linkText}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsItem;
