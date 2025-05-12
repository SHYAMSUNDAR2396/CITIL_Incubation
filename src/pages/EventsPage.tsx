
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageLayout from '@/components/layout/PageLayout';
import UpcomingEventsSection from '@/components/events/UpcomingEventsSection';
import PastEventsSection from '@/components/events/PastEventsSection';
import GalleryModal from '@/components/events/GalleryModal';
import { upcomingEvents, pastEvents, PastEvent } from '@/data/eventsData';

const EventsPage = () => {
  // State for gallery modal
  const [selectedEvent, setSelectedEvent] = useState<PastEvent | null>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openGallery = (event: PastEvent) => {
    setSelectedEvent(event);
    setShowGallery(true);
    setCurrentImage(0);
  };

  const closeGallery = () => {
    setShowGallery(false);
    setSelectedEvent(null);
  };

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImage((prev) => (prev + 1) % selectedEvent.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImage((prev) => (prev - 1 + selectedEvent.gallery.length) % selectedEvent.gallery.length);
    }
  };

  const selectImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & News</h1>
            <p className="text-xl text-gray-300 mb-8">
              Stay updated with the latest events, workshops, and news at CIT Incubation Center.
            </p>
          </div>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upcoming" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="upcoming" className="px-8 py-3">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past" className="px-8 py-3">Past Events</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Upcoming Events Tab */}
            <TabsContent value="upcoming" className="mt-6">
              <UpcomingEventsSection upcomingEvents={upcomingEvents} />
            </TabsContent>
            
            {/* Past Events Tab */}
            <TabsContent value="past" className="mt-6">
              <PastEventsSection 
                pastEvents={pastEvents}
                onOpenGallery={openGallery}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Modal */}
      {showGallery && selectedEvent && (
        <GalleryModal
          event={selectedEvent}
          currentImage={currentImage}
          onClose={closeGallery}
          onPrevImage={prevImage}
          onNextImage={nextImage}
          onSelectImage={selectImage}
        />
      )}

      {/* Interested in Hosting an Event */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Hosting an Event?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
            We welcome industry partners, mentors, and experts to host workshops, talks, or training sessions at our incubation center.
          </p>
          <Button asChild size="lg" className="bg-brand-purple hover:bg-opacity-90">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default EventsPage;
