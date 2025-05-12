
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Book, Users, Lightbulb, Calendar, Award } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';

const HomePage = () => {
  // Sample data for stats
  const stats = [
    { id: 1, label: 'Startups Incubated', value: '50+' },
    { id: 2, label: 'Mentors', value: '30+' },
    { id: 3, label: 'Funding Raised', value: '₹2.5Cr' },
    { id: 4, label: 'Success Rate', value: '75%' },
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Founder, TechWave',
      image: 'https://source.unsplash.com/random/100x100/?man',
      quote: 'The incubation center provided us with the perfect environment to grow our startup from just an idea to a viable business.',
    },
    {
      id: 2,
      name: 'Priya Desai',
      role: 'CEO, EduTech Solutions',
      image: 'https://source.unsplash.com/random/100x100/?woman',
      quote: 'The mentorship we received was invaluable. The industry connections helped us secure our first major client.',
    },
    {
      id: 3,
      name: 'Dr. Karthik Raman',
      role: 'Faculty Mentor',
      image: 'https://source.unsplash.com/random/100x100/?professor',
      quote: 'Watching students transform their innovative ideas into successful startups has been the most rewarding experience.',
    },
  ];

  // Sample data for upcoming events
  const events = [
    {
      id: 1,
      title: 'Startup Pitch Day',
      date: 'June 15, 2023',
      image: 'https://source.unsplash.com/random/300x200/?presentation',
    },
    {
      id: 2,
      title: 'AI in Healthcare Workshop',
      date: 'June 22, 2023',
      image: 'https://source.unsplash.com/random/300x200/?technology',
    },
    {
      id: 3,
      title: 'Entrepreneurship Bootcamp',
      date: 'July 5-7, 2023',
      image: 'https://source.unsplash.com/random/300x200/?startup',
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="bg-cover bg-center h-[90vh] flex items-center" 
          style={{ backgroundImage: 'url(https://source.unsplash.com/random/1920x1080/?technology,startup)', backgroundBlendMode: 'multiply', backgroundColor: 'rgba(26, 31, 44, 0.7)' }}
        >
          <div className="container mx-auto px-4 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Igniting Ideas,
                <span className="text-gradient"> Fueling Innovation</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Chennai Institute of Technology's Incubation Center: Where innovative ideas transform into successful startups. Join us to build, grow, and scale your venture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-brand-purple hover:bg-opacity-90">
                  <Link to="/programs">Apply for Incubation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue">
                  <Link to="/startups">Meet Our Startups</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue">
                  <Link to="/mentors">Join as a Mentor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section - Overlapping Cards */}
        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.id} className="shadow-lg hover:shadow-xl transition-shadow card-hover">
                <CardContent className="p-6 text-center">
                  <h3 className="text-4xl font-bold text-brand-purple mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Our Incubation Center</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              The Chennai Institute of Technology's Incubation Center is a state-of-the-art facility designed to nurture innovation and entrepreneurship among students and alumni.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://source.unsplash.com/random/600x400/?innovation,lab" 
                alt="CIT Incubation Center" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To foster entrepreneurship and innovation by providing a supportive ecosystem for technology startups to thrive and make a meaningful impact on society.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To become a premier startup hub in South India, recognized for producing successful tech entrepreneurs and innovative solutions to real-world problems.
              </p>
              
              <Button asChild className="bg-brand-purple hover:bg-opacity-90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              We offer a range of programs designed to support startups at different stages of their journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <Card className="shadow hover:shadow-lg transition-shadow card-hover">
              <CardContent className="p-6">
                <div className="bg-brand-purple/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Rocket className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pre-Incubation</h3>
                <p className="text-gray-600 mb-4">
                  For early-stage ideas and student entrepreneurs looking to validate their concepts and build a minimum viable product.
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ideation workshops</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Co-working space</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Prototype development</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                  <Link to="/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Program 2 */}
            <Card className="shadow hover:shadow-lg transition-shadow card-hover">
              <CardContent className="p-6">
                <div className="bg-brand-purple/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Lightbulb className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Acceleration</h3>
                <p className="text-gray-600 mb-4">
                  For startups with a working product seeking to scale their operations and reach a wider market.
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Market access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Investor connections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Business development</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                  <Link to="/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Program 3 */}
            <Card className="shadow hover:shadow-lg transition-shadow card-hover">
              <CardContent className="p-6">
                <div className="bg-brand-purple/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mentorship</h3>
                <p className="text-gray-600 mb-4">
                  Connect with industry experts who provide guidance and insights to help navigate challenges.
                </p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>One-on-one sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Industry networking</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Expert masterclasses</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                  <Link to="/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-opacity-90">
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Hear from our startup founders, mentors, and partners about their experience with CIT Incubation Center.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow hover:shadow-lg transition-shadow card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
              <Link to="/testimonials">View More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Join us for our upcoming events, workshops, and hackathons.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden shadow hover:shadow-lg transition-shadow card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-brand-purple mr-2" />
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <Button asChild variant="link" className="p-0 text-brand-purple">
                    <Link to="/events">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-opacity-90">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Idea into Reality?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
            Join our incubation program and get access to resources, mentorship, and funding opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-opacity-90">
              <Link to="/programs">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
