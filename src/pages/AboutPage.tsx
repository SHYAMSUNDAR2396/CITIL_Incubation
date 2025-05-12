
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageLayout from '@/components/layout/PageLayout';

const AboutPage = () => {
  // Sample Team Members
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Anand Kumar',
      role: 'Director, Incubation Center',
      image: 'https://source.unsplash.com/random/300x300/?man,professional',
      bio: 'With over 20 years of experience in entrepreneurship and technology innovation, Dr. Kumar leads the incubation center with a vision to create global impact.',
    },
    {
      id: 2,
      name: 'Prof. Meenakshi Sundaram',
      role: 'Chief Mentor',
      image: 'https://source.unsplash.com/random/300x300/?woman,professor',
      bio: 'A renowned researcher in AI and machine learning, Prof. Sundaram guides startups in implementing cutting-edge technology solutions.',
    },
    {
      id: 3,
      name: 'Mr. Rajesh Gopalan',
      role: 'Industry Liaison Officer',
      image: 'https://source.unsplash.com/random/300x300/?indian,man',
      bio: 'Former industry executive with extensive corporate connections, helping startups build partnerships and secure clients.',
    },
    {
      id: 4,
      name: 'Ms. Preethi Lakshmi',
      role: 'Innovation Manager',
      image: 'https://source.unsplash.com/random/300x300/?indian,woman',
      bio: 'Specializes in design thinking and innovation methodologies, helping startups develop unique value propositions.',
    },
  ];
  
  // Milestones
  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Establishment of the CIT Incubation Center with support from the Department of Science and Technology.',
    },
    {
      year: '2019',
      title: 'First Cohort',
      description: 'Successfully incubated the first batch of 10 startups focused on emerging technologies.',
    },
    {
      year: '2020',
      title: 'Expansion',
      description: 'Doubled the facility space and launched specialized labs for IoT, AI, and blockchain development.',
    },
    {
      year: '2021',
      title: 'Industry Partnerships',
      description: 'Formed strategic alliances with 15+ industry partners to provide market access to incubated startups.',
    },
    {
      year: '2022',
      title: 'Funding Success',
      description: 'Incubated startups collectively raised over ₹5 crores in funding from various investors and grants.',
    },
    {
      year: '2023',
      title: 'Recognition',
      description: 'Recognized as one of the top 10 college-based incubation centers in South India.',
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Incubation Center</h1>
            <p className="text-xl text-gray-300 mb-8">
              Building the next generation of entrepreneurs and innovators at Chennai Institute of Technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-brand-purple">Mission</h3>
                <p className="text-gray-700 mb-4">
                  To foster entrepreneurship and innovation by providing a supportive ecosystem for technology startups to thrive and make a meaningful impact on society.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-brand-purple">Vision</h3>
                <p className="text-gray-700 mb-4">
                  To become a premier startup hub in South India, recognized for producing successful tech entrepreneurs and innovative solutions to real-world problems.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-purple">Our Values</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Innovation:</strong> Constantly pushing boundaries and exploring new frontiers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Excellence:</strong> Striving for the highest quality in everything we do</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Collaboration:</strong> Working together to achieve common goals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Integrity:</strong> Being honest, ethical, and transparent in all our dealings</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-purple mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Impact:</strong> Creating meaningful change in society through technology</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="https://source.unsplash.com/random/600x800/?incubator,innovation" 
                alt="CIT Incubation Center" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Facility */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Facility</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600 mb-8">
              The CIT Incubation Center offers state-of-the-art infrastructure and facilities to help startups grow and succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://source.unsplash.com/random/600x400/?coworking" 
                alt="Co-working Space" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="py-4">
                <h3 className="text-xl font-bold mb-1">Co-working Space</h3>
                <p className="text-gray-600">Modern, flexible workspaces designed for collaboration and productivity.</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://source.unsplash.com/random/600x400/?conference" 
                alt="Meeting Rooms" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="py-4">
                <h3 className="text-xl font-bold mb-1">Meeting Rooms</h3>
                <p className="text-gray-600">Fully equipped meeting and conference rooms for client presentations and team discussions.</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg">
              <img 
                src="https://source.unsplash.com/random/600x400/?tech,lab" 
                alt="Prototyping Lab" 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="py-4">
                <h3 className="text-xl font-bold mb-1">Prototyping Lab</h3>
                <p className="text-gray-600">Advanced equipment for hardware prototyping and product development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Meet the dedicated professionals who guide and support our startups.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden shadow hover:shadow-lg transition-shadow card-hover">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-brand-purple font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Key milestones in the growth and development of CIT Incubation Center.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 w-0.5 h-full bg-brand-purple -translate-x-1/2 hidden md:block"></div>
              
              {/* Milestone items */}
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Year badge */}
                  <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple text-white font-bold z-10">
                    {milestone.year.slice(-2)}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                    <Card className="shadow hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {milestone.year} - {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Innovation Ecosystem</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
            Whether you're a student with an innovative idea, a startup looking to scale, or an industry expert interested in mentoring, we welcome you to be part of our journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-opacity-90">
              <Link to="/programs">Apply for Incubation</Link>
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

export default AboutPage;
