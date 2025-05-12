
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, MapPin, Plus, Trash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";
import FuturisticLoader from '@/components/animations/FuturisticLoader';

// Sample data structure for an event
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  isPast?: boolean;
  registerLink?: string;
  gallery?: string[];
}

const AdminPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Event form state
  const [newEvent, setNewEvent] = useState<Omit<Event, 'id'>>({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: 'https://source.unsplash.com/random/600x400/?technology,event',
    isPast: false,
  });

  // Events state (normally would come from a backend/database)
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([
    {
      id: 1,
      title: 'Startup Pitch Day',
      date: 'June 15, 2023',
      time: '10:00 AM - 4:00 PM',
      location: 'CIT Auditorium',
      image: 'https://source.unsplash.com/random/600x400/?presentation,pitch',
      description: 'An opportunity for incubated startups to pitch their ideas to a panel of investors and industry experts.',
      registerLink: '#'
    },
    {
      id: 2,
      title: 'AI in Healthcare Workshop',
      date: 'June 22, 2023',
      time: '2:00 PM - 5:00 PM',
      location: 'Innovation Lab, CIT',
      image: 'https://source.unsplash.com/random/600x400/?technology,healthcare',
      description: 'Learn how artificial intelligence is revolutionizing healthcare.',
      registerLink: '#'
    },
  ]);
  
  const [pastEvents, setPastEvents] = useState<Event[]>([
    {
      id: 1,
      title: 'Blockchain Innovation Summit',
      date: 'May 10, 2023',
      image: 'https://source.unsplash.com/random/600x400/?blockchain,technology',
      description: 'A summit exploring blockchain innovations.',
      time: '9:00 AM - 5:00 PM',
      location: 'CIT Conference Hall',
      isPast: true,
      gallery: [
        'https://source.unsplash.com/random/800x600/?conference,people',
        'https://source.unsplash.com/random/800x600/?presentation,speaker'
      ]
    },
    {
      id: 2,
      title: 'Women in Tech Meetup',
      date: 'April 25, 2023',
      image: 'https://source.unsplash.com/random/600x400/?women,technology',
      description: 'A networking event for women in technology.',
      time: '3:00 PM - 6:00 PM',
      location: 'CIT Incubation Center',
      isPast: true,
      gallery: [
        'https://source.unsplash.com/random/800x600/?women,tech',
        'https://source.unsplash.com/random/800x600/?female,engineer'
      ]
    },
  ]);

  // Simple authentication (would be replaced with proper auth in a real app)
  const handleLogin = () => {
    setIsLoading(true);
    // Simulate authentication delay
    setTimeout(() => {
      if (password === 'admin123') { // This is just for demo - would use real auth in production
        setIsAuthenticated(true);
        toast({
          title: "Authenticated",
          description: "Welcome to the admin panel",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Authentication failed",
          description: "Please check your credentials and try again",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  // Handle form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNewEvent(prev => ({ ...prev, [name]: checked }));
  };

  // Add new event
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newEvent.title || !newEvent.date || !newEvent.description) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description: "Please fill in all required fields",
      });
      return;
    }

    const eventId = Math.floor(Math.random() * 10000);
    const eventWithId = { ...newEvent, id: eventId };
    
    if (newEvent.isPast) {
      setPastEvents(prev => [...prev, eventWithId]);
    } else {
      setUpcomingEvents(prev => [...prev, eventWithId]);
    }

    // Reset form
    setNewEvent({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      image: 'https://source.unsplash.com/random/600x400/?technology,event',
      isPast: false,
    });

    toast({
      title: "Event added",
      description: `${newEvent.title} has been added successfully`,
    });
  };

  // Remove event
  const handleRemoveEvent = (id: number, isPast: boolean) => {
    if (isPast) {
      setPastEvents(prev => prev.filter(event => event.id !== id));
    } else {
      setUpcomingEvents(prev => prev.filter(event => event.id !== id));
    }

    toast({
      title: "Event removed",
      description: "The event has been removed successfully",
    });
  };

  // Login form
  if (!isAuthenticated) {
    return (
      <PageLayout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <Card className="border-t-4 border-t-brand-purple bg-white/90 backdrop-blur shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Admin Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Admin Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      className="border-gray-300"
                      required
                    />
                    <p className="text-xs text-gray-500">
                      (Use "admin123" for this demo)
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-blue hover:bg-brand-purple transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? <FuturisticLoader size={20} /> : "Log In"}
                  </Button>
                  
                  <div className="text-center mt-4">
                    <Button 
                      variant="link" 
                      className="text-gray-500" 
                      onClick={() => navigate('/')}
                    >
                      Return to Website
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Admin Header */}
      <section className="bg-brand-blue text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-brand-blue"
              onClick={() => setIsAuthenticated(false)}
            >
              Log Out
            </Button>
          </div>
        </div>
      </section>

      {/* Admin Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="manage" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
              <TabsTrigger value="manage">Manage Events</TabsTrigger>
              <TabsTrigger value="add">Add New Event</TabsTrigger>
            </TabsList>
            
            {/* Manage Events Tab */}
            <TabsContent value="manage" className="space-y-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead className="w-[100px]">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {upcomingEvents.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                              No upcoming events available
                            </TableCell>
                          </TableRow>
                        ) : (
                          upcomingEvents.map((event) => (
                            <TableRow key={event.id}>
                              <TableCell className="font-medium">{event.title}</TableCell>
                              <TableCell>{event.date}</TableCell>
                              <TableCell>{event.location}</TableCell>
                              <TableCell>
                                <Button 
                                  variant="destructive" 
                                  size="sm" 
                                  onClick={() => handleRemoveEvent(event.id, false)}
                                >
                                  <Trash size={16} />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4">Past Events</h2>
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead className="w-[100px]">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pastEvents.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                              No past events available
                            </TableCell>
                          </TableRow>
                        ) : (
                          pastEvents.map((event) => (
                            <TableRow key={event.id}>
                              <TableCell className="font-medium">{event.title}</TableCell>
                              <TableCell>{event.date}</TableCell>
                              <TableCell>{event.location}</TableCell>
                              <TableCell>
                                <Button 
                                  variant="destructive" 
                                  size="sm" 
                                  onClick={() => handleRemoveEvent(event.id, true)}
                                >
                                  <Trash size={16} />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            {/* Add Event Tab */}
            <TabsContent value="add">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="max-w-3xl mx-auto border-t-4 border-t-brand-purple">
                  <CardHeader>
                    <CardTitle>Add New Event</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddEvent} className="space-y-6">
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="title">Event Title *</Label>
                          <Input
                            id="title"
                            name="title"
                            value={newEvent.title}
                            onChange={handleInputChange}
                            placeholder="Enter event title"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="grid gap-3">
                            <Label htmlFor="date">Event Date *</Label>
                            <div className="relative">
                              <Input
                                id="date"
                                name="date"
                                value={newEvent.date}
                                onChange={handleInputChange}
                                placeholder="e.g., June 15, 2023"
                                required
                              />
                              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                            </div>
                          </div>
                          
                          <div className="grid gap-3">
                            <Label htmlFor="time">Event Time</Label>
                            <div className="relative">
                              <Input
                                id="time"
                                name="time"
                                value={newEvent.time}
                                onChange={handleInputChange}
                                placeholder="e.g., 10:00 AM - 4:00 PM"
                              />
                              <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid gap-3">
                          <Label htmlFor="location">Location</Label>
                          <div className="relative">
                            <Input
                              id="location"
                              name="location"
                              value={newEvent.location}
                              onChange={handleInputChange}
                              placeholder="Enter event location"
                            />
                            <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                          </div>
                        </div>
                        
                        <div className="grid gap-3">
                          <Label htmlFor="description">Description *</Label>
                          <Textarea
                            id="description"
                            name="description"
                            value={newEvent.description}
                            onChange={handleInputChange}
                            placeholder="Enter event description"
                            rows={4}
                            required
                          />
                        </div>
                        
                        <div className="grid gap-3">
                          <Label htmlFor="image">Image URL</Label>
                          <Input
                            id="image"
                            name="image"
                            value={newEvent.image}
                            onChange={handleInputChange}
                            placeholder="Enter image URL"
                          />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="isPast"
                            name="isPast"
                            checked={newEvent.isPast}
                            onChange={handleCheckboxChange}
                            className="rounded border-gray-300 text-brand-purple focus:ring-brand-purple"
                          />
                          <Label htmlFor="isPast" className="font-normal">This is a past event</Label>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-brand-purple hover:bg-opacity-90"
                      >
                        <Plus size={18} className="mr-1" /> Add Event
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default AdminPage;
