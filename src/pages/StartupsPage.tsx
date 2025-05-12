
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageLayout from '@/components/layout/PageLayout';

const StartupsPage = () => {
  // Sample startups data
  const startups = [
    {
      id: 1,
      name: 'EcoTech Solutions',
      logo: 'https://source.unsplash.com/random/200x200/?tech,logo',
      description: 'Developing sustainable waste management solutions using IoT and machine learning algorithms.',
      founders: 'Arun Kumar & Priya Sharma',
      stage: 'Growth',
      category: 'CleanTech',
      website: '#',
      achievements: [
        'Secured ₹50 lakhs in seed funding',
        'Won the National Sustainability Award 2022',
        'Deployed solutions in over 15 municipalities'
      ]
    },
    {
      id: 2,
      name: 'MediConnect',
      logo: 'https://source.unsplash.com/random/200x200/?medical,app',
      description: 'A telemedicine platform connecting patients with specialists and facilitating remote diagnosis and treatment plans.',
      founders: 'Dr. Rajesh Iyer',
      stage: 'Early',
      category: 'HealthTech',
      website: '#',
      achievements: [
        'Over 10,000 active users',
        'Featured in TechCrunch',
        'Selected for Google for Startups program'
      ]
    },
    {
      id: 3,
      name: 'LearnSphere',
      logo: 'https://source.unsplash.com/random/200x200/?education,learn',
      description: 'Personalized learning platform using AI to adapt educational content to individual student needs and learning styles.',
      founders: 'Vikram Nair & Sneha Reddy',
      stage: 'Growth',
      category: 'EdTech',
      website: '#',
      achievements: [
        'Serving 50+ educational institutions',
        'Increased student performance by 30% in pilot schools',
        'Raised ₹1.2 crore in funding'
      ]
    },
    {
      id: 4,
      name: 'AgriSmart',
      logo: 'https://source.unsplash.com/random/200x200/?agriculture,farm',
      description: 'Smart agriculture solutions using IoT sensors and predictive analytics to optimize farming operations and increase yield.',
      founders: 'Karthik Subramanian',
      stage: 'Early',
      category: 'AgriTech',
      website: '#',
      achievements: [
        'Implemented in 200+ acres of farmland',
        'Reduced water usage by 40%',
        'Winner at Agricultural Innovation Summit 2022'
      ]
    },
    {
      id: 5,
      name: 'FinEase',
      logo: 'https://source.unsplash.com/random/200x200/?finance,bank',
      description: 'Making financial services accessible to underbanked populations through a simplified mobile platform and micro-lending options.',
      founders: 'Meera Krishnan & Rahul Verma',
      stage: 'Growth',
      category: 'FinTech',
      website: '#',
      achievements: [
        'Processed transactions worth over ₹5 crores',
        'Partnered with 3 major banks',
        'Financial inclusion award from NITI Aayog'
      ]
    },
    {
      id: 6,
      name: 'SafeDrive',
      logo: 'https://source.unsplash.com/random/200x200/?car,safety',
      description: 'AI-powered dash camera system that detects driver fatigue and road hazards in real-time to prevent accidents.',
      founders: 'Aarav Patel & Kavya Menon',
      stage: 'Early',
      category: 'AutoTech',
      website: '#',
      achievements: [
        'Patent pending for AI detection algorithm',
        'Pilot program with two transportation companies',
        'Selected for road safety initiative by Ministry of Transport'
      ]
    },
    {
      id: 7,
      name: 'CyberShield',
      logo: 'https://source.unsplash.com/random/200x200/?security,cyber',
      description: 'Cybersecurity solutions for small businesses with automated threat detection and response capabilities.',
      founders: 'Ananya Singh',
      stage: 'Growth',
      category: 'Security',
      website: '#',
      achievements: [
        'Protecting 100+ SMEs across India',
        'Prevented over 50 major cyber attacks',
        'Featured in Economic Times as promising cybersecurity startup'
      ]
    },
    {
      id: 8,
      name: 'VR Learning Lab',
      logo: 'https://source.unsplash.com/random/200x200/?vr,virtual',
      description: 'Virtual reality education platform making complex subjects accessible through immersive learning experiences.',
      founders: 'Dhruv Mehta & Ishita Gupta',
      stage: 'Early',
      category: 'EdTech',
      website: '#',
      achievements: [
        'Developed VR modules for physics, chemistry, and biology',
        'Improved student test scores by 25% in pilot schools',
        'Selected for Microsoft for Startups program'
      ]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'CleanTech', label: 'Clean Tech' },
    { value: 'HealthTech', label: 'Health Tech' },
    { value: 'EdTech', label: 'Ed Tech' },
    { value: 'AgriTech', label: 'Agri Tech' },
    { value: 'FinTech', label: 'Fin Tech' },
    { value: 'AutoTech', label: 'Auto Tech' },
    { value: 'Security', label: 'Security' }
  ];

  const stages = [
    { value: 'all', label: 'All Stages' },
    { value: 'Early', label: 'Early Stage' },
    { value: 'Growth', label: 'Growth Stage' },
    { value: 'Scaling', label: 'Scaling' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedStage, setSelectedStage] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  // Filter startups based on search, category, and stage
  const filteredStartups = startups.filter(startup => {
    const matchesCategory = selectedCategory === 'all' || startup.category === selectedCategory;
    const matchesStage = selectedStage === 'all' || startup.stage === selectedStage;
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         startup.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesStage && matchesSearch;
  });

  // Success metrics for startups
  const metrics = [
    { label: 'Startups Incubated', value: '50+' },
    { label: 'Funding Raised', value: '₹10Cr+' },
    { label: 'Jobs Created', value: '500+' },
    { label: 'Success Rate', value: '75%' }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Startups</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the innovative companies building the future at CIT Incubation Center.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-gray-50 shadow-sm">
                <CardContent className="p-6 text-center">
                  <h3 className="text-4xl font-bold text-brand-purple mb-2">{metric.value}</h3>
                  <p className="text-gray-600">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search startups..."
                className="w-full md:w-64 p-3 border border-gray-300 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                className="p-3 border border-gray-300 rounded-md bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              
              <select
                className="p-3 border border-gray-300 rounded-md bg-white"
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
              >
                {stages.map((stage) => (
                  <option key={stage.value} value={stage.value}>
                    {stage.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredStartups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStartups.map((startup) => (
                <Card key={startup.id} className="overflow-hidden shadow hover:shadow-lg transition-all card-hover">
                  <div className="p-6 border-b text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-white p-2 border">
                      <img
                        src={startup.logo}
                        alt={`${startup.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{startup.name}</h3>
                    <div className="flex justify-center gap-2 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-purple text-white">
                        {startup.category}
                      </span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        startup.stage === 'Early' ? 'bg-blue-100 text-blue-800' : 
                        startup.stage === 'Growth' ? 'bg-green-100 text-green-800' : 
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {startup.stage} Stage
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{startup.description}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700">Founders:</p>
                      <p className="text-gray-600">{startup.founders}</p>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700">Key Achievements:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-1">
                        {startup.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-600 text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                      <a href={startup.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No startups found</h3>
              <p className="text-gray-600">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <div className="w-24 h-1 bg-brand-purple mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Stories of innovation, perseverance, and success from our standout startups.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Success Story 1 */}
            <Card className="bg-white shadow-md overflow-hidden card-hover">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img
                    src="https://source.unsplash.com/random/300x400/?startup,team"
                    alt="EcoTech Solutions Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">EcoTech Solutions</h3>
                  <p className="text-brand-purple font-medium mb-3">CleanTech Success Story</p>
                  <p className="text-gray-600 mb-4">
                    From a student project to a nation-wide waste management solution, EcoTech has been 
                    transforming how municipalities handle waste collection and recycling.
                  </p>
                  <Button asChild variant="link" className="p-0 text-brand-purple">
                    <a href="#">Read Their Story</a>
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* Success Story 2 */}
            <Card className="bg-white shadow-md overflow-hidden card-hover">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img
                    src="https://source.unsplash.com/random/300x400/?health,app"
                    alt="MediConnect Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">MediConnect</h3>
                  <p className="text-brand-purple font-medium mb-3">HealthTech Success Story</p>
                  <p className="text-gray-600 mb-4">
                    Breaking barriers in healthcare access, MediConnect has connected over 5,000 patients 
                    in rural areas with specialists, transforming telemedicine in India.
                  </p>
                  <Button asChild variant="link" className="p-0 text-brand-purple">
                    <a href="#">Read Their Story</a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Ecosystem */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Ecosystem?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
            Whether you're at the idea stage or ready to scale, we have programs designed to help you succeed.
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

export default StartupsPage;
