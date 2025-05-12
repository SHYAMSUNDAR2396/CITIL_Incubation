
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageLayout from '@/components/layout/PageLayout';

const MentorsPage = () => {
  // Sample mentors data
  const mentors = [
    {
      id: 1,
      name: 'Dr. Rajiv Sharma',
      image: 'https://source.unsplash.com/random/300x300/?man,professional,indian',
      role: 'Technology Strategy',
      company: 'Former CTO, Tech Innovations',
      bio: 'With over 20 years of experience in technology leadership, Dr. Sharma guides startups in developing robust technology strategies and architectures.',
      expertise: ['AI & Machine Learning', 'Cloud Computing', 'Enterprise Architecture'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Meena Krishnan',
      image: 'https://source.unsplash.com/random/300x300/?woman,professional,indian',
      role: 'Marketing & Growth',
      company: 'CEO, Growth Partners',
      bio: 'A marketing veteran who has helped scale multiple startups from zero to millions in revenue through effective go-to-market strategies.',
      expertise: ['Digital Marketing', 'Brand Strategy', 'Growth Hacking'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Vijay Menon',
      image: 'https://source.unsplash.com/random/300x300/?man,business,indian',
      role: 'Venture Capital & Fundraising',
      company: 'Partner, Nexus Ventures',
      bio: 'Vijay has helped startups raise over $50 million in funding and provides insights into what investors look for in early-stage companies.',
      expertise: ['Fundraising Strategy', 'Investor Relations', 'Financial Modeling'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Dr. Priya Nair',
      image: 'https://source.unsplash.com/random/300x300/?woman,scientist,indian',
      role: 'Research & Development',
      company: 'Professor, IIT Madras',
      bio: 'A renowned researcher in materials science helping hardtech startups translate academic research into commercially viable products.',
      expertise: ['Materials Science', 'Research Commercialization', 'Intellectual Property'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 5,
      name: 'Arun Kumar',
      image: 'https://source.unsplash.com/random/300x300/?man,engineer,indian',
      role: 'Product Management',
      company: 'Former PM, Google',
      bio: 'Product leader with experience at top tech companies, helping startups build user-centric products with proper prioritization and roadmapping.',
      expertise: ['Product Strategy', 'UX/UI Design', 'Agile Methodologies'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 6,
      name: 'Lakshmi Subramanian',
      image: 'https://source.unsplash.com/random/300x300/?woman,executive,indian',
      role: 'Operations & Scaling',
      company: 'COO, ScaleTech',
      bio: 'Operations expert specializing in helping startups set up processes and systems necessary to scale efficiently.',
      expertise: ['Process Optimization', 'Team Building', 'Operational Excellence'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 7,
      name: 'Rahul Verma',
      image: 'https://source.unsplash.com/random/300x300/?man,lawyer,indian',
      role: 'Legal & Compliance',
      company: 'Managing Partner, LegalEdge',
      bio: 'Corporate lawyer providing guidance on legal structures, compliance requirements, and intellectual property protection for startups.',
      expertise: ['IP Strategy', 'Contract Negotiation', 'Regulatory Compliance'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 8,
      name: 'Ananya Singh',
      image: 'https://source.unsplash.com/random/300x300/?woman,tech,indian',
      role: 'Software Engineering',
      company: 'Director of Engineering, Microsoft',
      bio: 'Engineering leader with expertise in building scalable systems and managing technical teams in high-growth environments.',
      expertise: ['Software Architecture', 'DevOps', 'Technical Leadership'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  // Sample industry partners
  const partners = [
    {
      id: 1,
      name: 'Microsoft',
      logo: 'https://source.unsplash.com/random/400x200/?microsoft,logo',
      category: 'Technology',
      description: 'Microsoft provides cloud credits, technical resources, and mentorship opportunities to startups in our ecosystem.'
    },
    {
      id: 2,
      name: 'HDFC Bank',
      logo: 'https://source.unsplash.com/random/400x200/?bank,finance',
      category: 'Banking & Finance',
      description: 'HDFC Bank offers specialized banking solutions, credit facilities, and financial advisory services to our incubated startups.'
    },
    {
      id: 3,
      name: 'Ernst & Young',
      logo: 'https://source.unsplash.com/random/400x200/?consulting,office',
      category: 'Consulting',
      description: 'EY provides tax, accounting, and business advisory services to help startups establish proper financial practices.'
    },
    {
      id: 4,
      name: 'TCS Innovation Labs',
      logo: 'https://source.unsplash.com/random/400x200/?tech,innovation',
      category: 'Technology',
      description: 'TCS collaborates on research projects and provides access to enterprise clients for B2B startups.'
    },
    {
      id: 5,
      name: 'Indian Angel Network',
      logo: 'https://source.unsplash.com/random/400x200/?investor,angel',
      category: 'Investment',
      description: 'IAN provides funding opportunities and connects startups with potential investors from their extensive network.'
    },
    {
      id: 6,
      name: 'NASSCOM Startup Program',
      logo: 'https://source.unsplash.com/random/400x200/?startup,india',
      category: 'Industry Association',
      description: 'NASSCOM offers market access programs, industry connections, and global exposure opportunities to our startups.'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mentors & Partners</h1>
            <p className="text-xl text-gray-300 mb-8">
              Meet the industry experts and organizations that support our incubation center and startups.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="mentors" className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="mentors" className="px-8 py-3">Mentors</TabsTrigger>
                <TabsTrigger value="partners" className="px-8 py-3">Industry Partners</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Mentors Content */}
            <TabsContent value="mentors" className="mt-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Meet Our Mentors</h2>
                <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
                <p className="max-w-3xl mx-auto text-gray-600">
                  Our mentors are experienced industry professionals and experts who provide guidance, 
                  share knowledge, and help our startups navigate challenges.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mentors.map((mentor) => (
                  <Card key={mentor.id} className="overflow-hidden shadow hover:shadow-lg transition-all card-hover">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={mentor.image} 
                        alt={mentor.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                      <p className="text-brand-purple font-medium mb-1">{mentor.role}</p>
                      <p className="text-gray-500 text-sm mb-4">{mentor.company}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-gray-700 mb-2">Areas of Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {mentor.expertise.map((skill, index) => (
                            <span 
                              key={index} 
                              className="bg-purple-50 text-brand-purple text-xs px-3 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3 text-gray-500">
                        <a href={mentor.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                        <a href={mentor.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Mentor Testimonials */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Why Our Mentors Love Working With Us</h2>
                  <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="shadow-md p-8 bg-gray-50">
                    <div className="flex items-start mb-6">
                      <div className="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-purple opacity-70" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <blockquote className="flex-1">
                        <p className="text-gray-600 italic mb-4">
                          "Mentoring at CIT has been incredibly rewarding. The energy and innovation of these young entrepreneurs is inspiring, and I'm proud to help shape the next generation of tech leaders."
                        </p>
                        <footer className="font-medium">
                          <p className="text-brand-purple">Dr. Rajiv Sharma</p>
                          <p className="text-gray-500 text-sm">Technology Strategy Mentor</p>
                        </footer>
                      </blockquote>
                    </div>
                  </Card>
                  
                  <Card className="shadow-md p-8 bg-gray-50">
                    <div className="flex items-start mb-6">
                      <div className="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-purple opacity-70" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <blockquote className="flex-1">
                        <p className="text-gray-600 italic mb-4">
                          "The structured approach to mentorship at CIT Incubation Center ensures that I can make the most impact. Seeing my mentees go from idea to market validates all the time and effort invested."
                        </p>
                        <footer className="font-medium">
                          <p className="text-brand-purple">Meena Krishnan</p>
                          <p className="text-gray-500 text-sm">Marketing & Growth Mentor</p>
                        </footer>
                      </blockquote>
                    </div>
                  </Card>
                </div>
              </div>
              
              {/* Become a mentor CTA */}
              <div className="mt-16 p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
                <h3 className="text-2xl font-bold mb-4">Interested in Becoming a Mentor?</h3>
                <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                  Share your expertise and experience with innovative startups and contribute to building the next generation of entrepreneurs.
                </p>
                <Button asChild className="bg-brand-purple hover:bg-opacity-90">
                  <Link to="/contact">Apply to Become a Mentor</Link>
                </Button>
              </div>
            </TabsContent>
            
            {/* Partners Content */}
            <TabsContent value="partners" className="mt-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Industry Partners</h2>
                <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
                <p className="max-w-3xl mx-auto text-gray-600">
                  We collaborate with leading organizations across industries to provide resources, 
                  market access, and support to our incubated startups.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner) => (
                  <Card key={partner.id} className="shadow hover:shadow-lg transition-all card-hover">
                    <div className="h-40 border-b flex items-center justify-center p-6 bg-white">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xl font-bold">{partner.name}</h3>
                        <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                          {partner.category}
                        </span>
                      </div>
                      <p className="text-gray-600">{partner.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Partnership Benefits */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Partnership Benefits</h2>
                  <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="shadow p-6 bg-white">
                    <div className="bg-brand-purple/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-purple" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Innovation Discovery</h3>
                    <p className="text-gray-600">
                      Early access to innovative solutions and technologies being developed by startups in our ecosystem.
                    </p>
                  </Card>
                  
                  <Card className="shadow p-6 bg-white">
                    <div className="bg-brand-purple/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-purple" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Brand Visibility</h3>
                    <p className="text-gray-600">
                      Showcase your organization's commitment to innovation and entrepreneurship through our various platforms.
                    </p>
                  </Card>
                  
                  <Card className="shadow p-6 bg-white">
                    <div className="bg-brand-purple/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-purple" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Talent Access</h3>
                    <p className="text-gray-600">
                      Connect with skilled entrepreneurs and technical talent for potential recruitment or collaboration.
                    </p>
                  </Card>
                </div>
              </div>
              
              {/* Become a partner CTA */}
              <div className="mt-16 p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
                <h3 className="text-2xl font-bold mb-4">Become an Industry Partner</h3>
                <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                  Join our growing network of industry partners and contribute to the development of innovative startups while gaining access to new technologies and talent.
                </p>
                <Button asChild className="bg-brand-purple hover:bg-opacity-90">
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Accelerate Innovation Together</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
            Whether you're looking to mentor startups or form a strategic partnership, join our ecosystem and be part of the innovation journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-opacity-90">
              <Link to="/contact">Become a Mentor</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue">
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MentorsPage;
