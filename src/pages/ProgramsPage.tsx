
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Rocket, Lightbulb, Users, Award, Calendar, Book } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';

const ProgramsPage = () => {
  // Sample program details
  const programs = [
    {
      id: 'pre-incubation',
      title: 'Pre-Incubation',
      icon: <Rocket className="h-10 w-10 text-brand-purple" />,
      description: 'A 3-month program for early-stage ideas and student entrepreneurs looking to validate their concepts and build a minimum viable product.',
      benefits: [
        'Access to co-working space',
        'Mentorship from industry experts',
        'Basic prototyping facilities',
        'Networking opportunities',
        'Business model validation support',
        'Legal and IP advice'
      ],
      eligibility: [
        'Students or recent graduates with innovative ideas',
        'Commitment to work on the project during the program',
        'Basic proof-of-concept or detailed project plan',
        'Potential to solve real-world problems'
      ],
      timeline: [
        { phase: 'Orientation', duration: 'Week 1', activities: 'Introduction to program, goal setting, resource familiarization' },
        { phase: 'Ideation & Validation', duration: 'Weeks 2-5', activities: 'Problem validation, market research, user interviews' },
        { phase: 'Prototyping', duration: 'Weeks 6-9', activities: 'MVP development, iterative testing' },
        { phase: 'Pitch Preparation', duration: 'Weeks 10-12', activities: 'Business model refinement, pitch deck creation, demo day preparation' }
      ]
    },
    {
      id: 'acceleration',
      title: 'Acceleration',
      icon: <Lightbulb className="h-10 w-10 text-brand-purple" />,
      description: 'A 6-month intensive program for startups with a working product seeking to scale their operations and reach a wider market.',
      benefits: [
        'Dedicated office space',
        'Advanced prototyping facilities',
        'Access to investor network',
        'Market access opportunities',
        'Business development support',
        'Seed funding opportunities up to ₹10 lakhs',
        'Marketing and PR support'
      ],
      eligibility: [
        'Startups with a working prototype/MVP',
        'Registered business entity',
        'At least one full-time founder',
        'Clear growth and scaling strategy',
        'Tech-enabled solution with market potential'
      ],
      timeline: [
        { phase: 'Strategic Planning', duration: 'Months 1-2', activities: 'Business strategy refinement, goal setting, KPI establishment' },
        { phase: 'Growth Implementation', duration: 'Months 2-4', activities: 'Product improvement, customer acquisition, team building' },
        { phase: 'Market Expansion', duration: 'Months 4-5', activities: 'Scaling operations, partnership development, market penetration' },
        { phase: 'Investor Readiness', duration: 'Month 6', activities: 'Financial projections, pitch refinement, investor matching' }
      ]
    },
    {
      id: 'mentorship',
      title: 'Mentorship',
      icon: <Users className="h-10 w-10 text-brand-purple" />,
      description: 'An ongoing program that connects startups with industry experts who provide guidance and insights to help navigate challenges.',
      benefits: [
        'One-on-one mentoring sessions',
        'Industry-specific guidance',
        'Network expansion opportunities',
        'Strategic problem-solving support',
        'Customized growth planning',
        'Access to specialized knowledge'
      ],
      eligibility: [
        'Any startup at pre-incubation or acceleration stage',
        'Clearly defined mentorship needs',
        'Commitment to implementing advice',
        'Regular progress reporting'
      ],
      timeline: [
        { phase: 'Mentor Matching', duration: 'Week 1', activities: 'Profile assessment, mentor selection, goal setting' },
        { phase: 'Regular Sessions', duration: 'Ongoing', activities: 'Weekly/bi-weekly mentorship sessions, progress tracking' },
        { phase: 'Specialized Workshops', duration: 'Monthly', activities: 'Group mentorship sessions on specific topics' },
        { phase: 'Quarterly Review', duration: 'Every 3 months', activities: 'Progress evaluation, strategy adjustment' }
      ]
    },
    {
      id: 'workshops',
      title: 'Workshops & Training',
      icon: <Book className="h-10 w-10 text-brand-purple" />,
      description: 'Regular skill-building sessions and workshops on various aspects of entrepreneurship, technology, and business development.',
      benefits: [
        'Practical, hands-on learning',
        'Networking with peers and experts',
        'Latest industry knowledge',
        'Skill enhancement opportunities',
        'Problem-solving techniques',
        'Certificates of participation'
      ],
      eligibility: [
        'Open to all students and startup founders',
        'Registration required for each workshop',
        'Prerequisite knowledge for advanced workshops'
      ],
      timeline: [
        { phase: 'Technical Workshops', duration: 'Weekly', activities: 'Web development, mobile app development, AI/ML, IoT' },
        { phase: 'Business Workshops', duration: 'Bi-weekly', activities: 'Business model canvas, financial planning, marketing strategies' },
        { phase: 'Soft Skills Training', duration: 'Monthly', activities: 'Presentation skills, negotiation, team management' },
        { phase: 'Expert Masterclasses', duration: 'Quarterly', activities: 'Sessions by industry leaders on emerging trends' }
      ]
    },
    {
      id: 'funding',
      title: 'Funding Opportunities',
      icon: <Award className="h-10 w-10 text-brand-purple" />,
      description: 'Access to various funding sources including seed grants, investor connections, and assistance with government funding applications.',
      benefits: [
        'Seed funding up to ₹10 lakhs',
        'Investor pitch opportunities',
        'Government grant application support',
        'Crowdfunding campaign guidance',
        'Financial planning assistance',
        'Due diligence preparation'
      ],
      eligibility: [
        'Startups in acceleration program',
        'Clearly defined funding needs and utilization plan',
        'Market traction or strong validation data',
        'Complete business documentation',
        'Scalable business model'
      ],
      timeline: [
        { phase: 'Funding Readiness', duration: 'Months 1-2', activities: 'Financial documentation, business plan refinement' },
        { phase: 'Internal Seed Funding', duration: 'Month 3', activities: 'Application, pitch, selection process' },
        { phase: 'Investor Connections', duration: 'Months 4-5', activities: 'Investor matching, pitch preparation, meetings' },
        { phase: 'External Funding Support', duration: 'Month 6+', activities: 'Government schemes, angel investors, VC connections' }
      ]
    },
    {
      id: 'events',
      title: 'Events & Competitions',
      icon: <Calendar className="h-10 w-10 text-brand-purple" />,
      description: 'Regular hackathons, pitch competitions, demo days, and networking events to showcase innovations and connect with the ecosystem.',
      benefits: [
        'Visibility for your startup',
        'Cash prizes and recognition',
        'Media exposure opportunities',
        'Customer and investor access',
        'Real-time feedback on products',
        'Community building'
      ],
      eligibility: [
        'Open to all CIT students and startups',
        'Registration required for each event',
        'Specific criteria for different competitions'
      ],
      timeline: [
        { phase: 'Hackathons', duration: '3 times/year', activities: '48-hour problem-solving challenges with prizes' },
        { phase: 'Pitch Competitions', duration: 'Bi-monthly', activities: 'Elevator pitch contests judged by investors' },
        { phase: 'Demo Days', duration: 'Quarterly', activities: 'Product showcases to investors and industry' },
        { phase: 'Networking Mixers', duration: 'Monthly', activities: 'Casual networking events with industry professionals' }
      ]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive support for entrepreneurs at every stage of their journey.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Programs Overview</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              At CIT Incubation Center, we provide a range of programs designed to support entrepreneurs at different stages of their startup journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programs.slice(0, 6).map((program) => (
              <Card key={program.id} className="shadow hover:shadow-lg transition-all card-hover">
                <CardContent className="p-6">
                  <div className="bg-brand-purple/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <Button
                    asChild 
                    variant="outline" 
                    className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
                  >
                    <a href={`#${program.id}`}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program Information */}
      {programs.map((program) => (
        <section key={program.id} id={program.id} className="py-16 odd:bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="bg-brand-purple/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mr-6">
                  {program.icon}
                </div>
                <h2 className="text-3xl font-bold">{program.title}</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-10">{program.description}</p>
              
              <Tabs defaultValue="benefits" className="mb-10">
                <TabsList className="mb-8">
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                  <TabsTrigger value="timeline">Program Timeline</TabsTrigger>
                </TabsList>
                
                <TabsContent value="benefits" className="border rounded-lg p-6 bg-white">
                  <h3 className="text-xl font-bold mb-4">Program Benefits</h3>
                  <ul className="space-y-3">
                    {program.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-brand-purple mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="eligibility" className="border rounded-lg p-6 bg-white">
                  <h3 className="text-xl font-bold mb-4">Eligibility Criteria</h3>
                  <ul className="space-y-3">
                    {program.eligibility.map((criterion, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-brand-purple mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="timeline" className="border rounded-lg p-6 bg-white">
                  <h3 className="text-xl font-bold mb-4">Program Timeline</h3>
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 w-0.5 h-full bg-brand-purple/30"></div>
                    
                    {/* Timeline items */}
                    {program.timeline.map((item, index) => (
                      <div key={index} className="relative mb-8 last:mb-0 pl-14">
                        {/* Phase marker */}
                        <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-purple text-white font-bold">
                          {index + 1}
                        </div>
                        
                        <h4 className="text-lg font-bold">{item.phase}</h4>
                        <p className="text-brand-purple font-medium mb-2">{item.duration}</p>
                        <p className="text-gray-600">{item.activities}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="p-6 bg-brand-blue/5 rounded-lg border border-brand-blue/10">
                <h3 className="text-xl font-bold mb-3">How to Apply</h3>
                <p className="text-gray-600 mb-4">
                  To join the {program.title} program, submit your application through our online portal. 
                  Applications are reviewed on a rolling basis, and selected candidates will be invited for an interview.
                </p>
                <Button asChild className="bg-brand-purple hover:bg-opacity-90">
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Answers to common questions about our programs and application process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Can I apply to multiple programs simultaneously?</h3>
                  <p className="text-gray-600">
                    Yes, you can apply to multiple programs, but we recommend focusing on the one that best matches your current stage. 
                    Our team will also guide you to the most suitable program based on your application.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Do I need to be a CIT student to apply?</h3>
                  <p className="text-gray-600">
                    While we prioritize CIT students and alumni, our programs are open to external applicants as well. 
                    External applicants may need to demonstrate stronger traction or innovation potential.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">What happens after the program ends?</h3>
                  <p className="text-gray-600">
                    Startups that show promising growth can graduate to our next level program or become part of our alumni network,
                    which provides ongoing support, connections, and resources.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Is there any equity commitment required?</h3>
                  <p className="text-gray-600">
                    Our pre-incubation program does not require any equity. For the acceleration program with seed funding support,
                    there may be a small equity stake (typically 2-5%) based on the funding provided.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">How are mentors assigned to startups?</h3>
                  <p className="text-gray-600">
                    Mentors are matched based on industry expertise, startup needs, and mutual fit. We conduct an initial assessment
                    and then facilitate introductions to ensure the best possible mentoring relationships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Startup to the Next Level?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
            Apply today to join our programs and get the support you need to grow your venture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-purple hover:bg-opacity-90">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue">
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProgramsPage;
