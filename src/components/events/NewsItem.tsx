
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface NewsItemProps {
  title: string;
  date: string;
  content: string;
  link: string;
  linkText: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, date, content, link, linkText }) => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 mb-3">{date}</p>
      <p className="text-gray-600 mb-3">{content}</p>
      <Button asChild variant="link" className="p-0 text-brand-purple">
        <a href={link}>{linkText}</a>
      </Button>
    </Card>
  );
};

export default NewsItem;
