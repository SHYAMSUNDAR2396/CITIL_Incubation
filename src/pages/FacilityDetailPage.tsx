
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building, Server, Cpu, Wifi, Microscope, BookOpen } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';

interface Facility {
  id: number;
  title: string;
  description: string;
  icon: any;
  details: string;
  longDescription: string;
  features: string[];
  imageUrl: string;
}

const facilitiesData: Facility[] = [
  {
    id: 1,
    title: 'Co-Working Space',
    description: 'Modern, flexible workspace designed for startups and entrepreneurs with high-speed internet, meeting areas, and 24/7 access.',
    icon: Building,
    details: 'Our co-working spaces are equipped with ergonomic furniture, power outlets, and collaborative spaces to foster innovation and teamwork.',
    longDescription: 'The CIT Incubation Center co-working space is designed to inspire creativity and productivity. Our open-plan environment fosters collaboration while also providing quiet zones for focused work. With 24/7 access, startups can work on their schedule and build their business at their own pace.',
    features: [
      'Ergonomic workstations with adjustable desks and chairs',
      'High-speed fiber internet connection with backup lines',
      'Multiple meeting rooms with video conferencing capabilities',
      'Dedicated phone booths for private calls',
      'Relaxation areas with comfortable seating',
      'Complimentary tea, coffee, and refreshments'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    title: 'Tech Infrastructure',
    description: 'State-of-the-art servers, cloud computing resources, and development tools for building and scaling applications.',
    icon: Server,
    details: 'Access to high-performance computing resources, deployment platforms, and testing environments for your technical needs.',
    longDescription: 'Our cutting-edge technical infrastructure provides startups with the computing power and resources they need to build scalable products. From development environments to production servers, we offer a comprehensive suite of tech resources that can grow with your business.',
    features: [
      'High-performance computing clusters for resource-intensive applications',
      'Cloud infrastructure credits from major providers (AWS, Azure, GCP)',
      'CI/CD pipeline tools for automated testing and deployment',
      'DevOps support and infrastructure management',
      'Database management systems and storage solutions',
      'Sandbox environments for testing and development'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    title: 'Prototyping Lab',
    description: 'Equipment and tools for hardware prototyping, including 3D printers, laser cutters, and electronic workbenches.',
    icon: Cpu,
    details: 'Create physical prototypes with our advanced fabrication tools and get expert guidance from our technical staff.',
    longDescription: 'Our state-of-the-art prototyping lab is equipped with the latest fabrication equipment to help hardware startups bring their ideas to life. From 3D printing to PCB fabrication, our lab provides all the tools needed to iterate quickly on physical products and create market-ready prototypes.',
    features: [
      'Multiple industrial-grade 3D printers with various materials',
      'Laser cutting and engraving machines',
      'CNC milling machines for precision manufacturing',
      'Electronic workbenches with testing equipment',
      'PCB fabrication and assembly tools',
      'Hand tools and power tools for general fabrication'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 4,
    title: 'Networking Events',
    description: 'Regular meetups, networking sessions, and industry connections to help startups grow their professional network.',
    icon: Wifi,
    details: 'Connect with industry leaders, potential investors, and fellow entrepreneurs through our curated networking events.',
    longDescription: 'Networking is crucial for startup success, which is why we regularly host events that connect our incubatees with industry leaders, investors, and potential customers. Our structured networking programs ensure meaningful connections that can lead to partnerships, investments, or mentorship opportunities.',
    features: [
      'Monthly industry-specific meetups with relevant stakeholders',
      'Quarterly investor pitching sessions',
      'Annual startup showcase event with media coverage',
      'Regular alumni gatherings for continued support',
      'Exclusive access to industry conferences and events',
      'International networking opportunities with global partners'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 5,
    title: 'Research Support',
    description: 'Access to academic research resources, journals, and collaboration opportunities with faculty experts.',
    icon: Microscope,
    details: 'Get support for technical research, market analysis, and academic partnerships to strengthen your innovation.',
    longDescription: 'Our research support services bridge the gap between academic knowledge and practical application. We provide startups with access to cutting-edge research, academic expertise, and resources that can help validate their technology and refine their approach to solving complex problems.',
    features: [
      'Access to major academic journals and research databases',
      'Research partnerships with faculty members and labs',
      'Market research tools and resources',
      'Patent search and intellectual property guidance',
      'Research grant application support',
      'Technical validation and testing frameworks'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 6,
    title: 'Learning Resources',
    description: 'Library, online courses, workshops, and training sessions to enhance entrepreneurial and technical skills.',
    icon: BookOpen,
    details: 'Develop your skills through our extensive learning resources, including specialized workshops and training programs.',
    longDescription: 'Continuous learning is essential for entrepreneurs, which is why we offer comprehensive educational resources to help founders fill knowledge gaps and develop new skills. From technical workshops to business masterclasses, our learning resources are designed to equip startups with the knowledge they need to succeed.',
    features: [
      'Physical library with business and technical books',
      'Subscription to online learning platforms (Coursera, Udemy, etc.)',
      'Weekly workshops on relevant topics by industry experts',
      'Recorded sessions for asynchronous learning',
      'One-on-one mentoring sessions for specific skill development',
      'Certification programs for technical and business skills'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
];

const FacilityDetailPage = () => {
  const { id } = useParams();
  const [facility, setFacility] = useState<Facility | null>(null);

  useEffect(() => {
    if (id) {
      const facilityId = parseInt(id, 10);
      const foundFacility = facilitiesData.find(f => f.id === facilityId);
      if (foundFacility) {
        setFacility(foundFacility);
      }
    }
  }, [id]);

  if (!facility) {
    return (
      <PageLayout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold">Facility not found</h1>
          <p className="mt-4">The facility you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-8">
            <Link to="/facilities">Back to Facilities</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container py-12">
        <Link to="/facilities" className="inline-flex items-center text-brand-red hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Facilities
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="mb-4 bg-brand-red/10 p-3 rounded-lg w-fit">
              <facility.icon className="h-8 w-8 text-brand-red" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{facility.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{facility.description}</p>
            <p className="mb-8">{facility.longDescription}</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={facility.imageUrl} 
              alt={facility.title} 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {facility.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-brand-red/10 p-1 rounded-full mr-3 mt-1">
                  <div className="h-3 w-3 rounded-full bg-brand-red"></div>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Interested in using this facility?</h2>
          <Button asChild className="bg-brand-red hover:bg-brand-red/90">
            <Link to="/contact">Contact Us to Learn More</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default FacilityDetailPage;
