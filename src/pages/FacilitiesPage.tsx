
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Server, Cpu, Wifi, Microscope, BookOpen } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const FacilitiesPage = () => {
  const facilities = [
    {
      id: 1,
      title: 'Co-Working Space',
      description: 'Modern, flexible workspace designed for startups and entrepreneurs with high-speed internet, meeting areas, and 24/7 access.',
      icon: Building,
      details: 'Our co-working spaces are equipped with ergonomic furniture, power outlets, and collaborative spaces to foster innovation and teamwork.'
    },
    {
      id: 2,
      title: 'Tech Infrastructure',
      description: 'State-of-the-art servers, cloud computing resources, and development tools for building and scaling applications.',
      icon: Server,
      details: 'Access to high-performance computing resources, deployment platforms, and testing environments for your technical needs.'
    },
    {
      id: 3,
      title: 'Prototyping Lab',
      description: 'Equipment and tools for hardware prototyping, including 3D printers, laser cutters, and electronic workbenches.',
      icon: Cpu,
      details: 'Create physical prototypes with our advanced fabrication tools and get expert guidance from our technical staff.'
    },
    {
      id: 4,
      title: 'Networking Events',
      description: 'Regular meetups, networking sessions, and industry connections to help startups grow their professional network.',
      icon: Wifi,
      details: 'Connect with industry leaders, potential investors, and fellow entrepreneurs through our curated networking events.'
    },
    {
      id: 5,
      title: 'Research Support',
      description: 'Access to academic research resources, journals, and collaboration opportunities with faculty experts.',
      icon: Microscope,
      details: 'Get support for technical research, market analysis, and academic partnerships to strengthen your innovation.'
    },
    {
      id: 6,
      title: 'Learning Resources',
      description: 'Library, online courses, workshops, and training sessions to enhance entrepreneurial and technical skills.',
      icon: BookOpen,
      details: 'Develop your skills through our extensive learning resources, including specialized workshops and training programs.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <PageLayout>
      <div className="container py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-orange">
            Our Facilities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities designed to nurture innovation and support the growth of startups at the Chennai Institute of Technology Incubation Center.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {facilities.map((facility) => (
            <motion.div key={facility.id} variants={itemVariants}>
              <Card className="card-hover backdrop-blur-sm bg-white/90 dark:bg-black/50 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4 bg-brand-red/10 p-3 rounded-lg w-fit"
                  >
                    <facility.icon className="h-8 w-8 text-brand-red" />
                  </motion.div>
                  <CardTitle>{facility.title}</CardTitle>
                  <CardDescription>{facility.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{facility.details}</p>
                </CardContent>
                <CardFooter>
                  <Link 
                    to={`/facilities/${facility.id}`} 
                    className="text-brand-red font-medium flex items-center hover:underline group"
                  >
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 bg-gradient-to-r from-gray-900/5 to-gray-900/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-orange">Request a Facility Tour</h2>
              <p className="text-gray-600 mb-8">
                Interested in exploring our facilities in person? Schedule a tour with our team to see how CIT Incubation Center can support your startup journey.
              </p>
              <Link to="/contact" className="relative inline-flex group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-red to-brand-orange rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
                <button className="relative px-6 py-3 bg-black text-white rounded-lg leading-none">
                  Schedule a Tour
                </button>
              </Link>
            </div>
            <div className="bg-white/90 dark:bg-black/60 rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
              <h3 className="font-bold text-xl mb-4">Facility Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Weekdays</span>
                  <span>8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Weekends</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">24/7 Access</span>
                  <span>Available for Incubated Startups</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default FacilitiesPage;
