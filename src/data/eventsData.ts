
export interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  registerLink: string;
}

export interface PastEvent {
  id: number;
  title: string;
  date: string;
  image: string;
  gallery: string[];
}

// Sample upcoming events
export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 1,
    title: 'Startup Pitch Day',
    date: 'June 15, 2023',
    time: '10:00 AM - 4:00 PM',
    location: 'CIT Auditorium',
    image: 'https://source.unsplash.com/random/600x400/?presentation,pitch',
    description: 'An opportunity for incubated startups to pitch their ideas to a panel of investors and industry experts. Selected startups will receive funding and mentorship opportunities.',
    registerLink: '#'
  },
  {
    id: 2,
    title: 'AI in Healthcare Workshop',
    date: 'June 22, 2023',
    time: '2:00 PM - 5:00 PM',
    location: 'Innovation Lab, CIT',
    image: 'https://source.unsplash.com/random/600x400/?technology,healthcare',
    description: 'Learn how artificial intelligence is revolutionizing healthcare. Industry experts will discuss current applications, future trends, and hands-on demos of AI-powered healthcare solutions.',
    registerLink: '#'
  },
  {
    id: 3,
    title: 'Entrepreneurship Bootcamp',
    date: 'July 5-7, 2023',
    time: '9:00 AM - 6:00 PM',
    location: 'CIT Incubation Center',
    image: 'https://source.unsplash.com/random/600x400/?startup,bootcamp',
    description: 'A three-day intensive program covering all aspects of building a successful startup. From ideation to market validation, business modeling, and fundraising strategies.',
    registerLink: '#'
  },
  {
    id: 4,
    title: 'Tech Trends 2023: What\'s Next',
    date: 'July 15, 2023',
    time: '3:00 PM - 5:30 PM',
    location: 'Virtual Event',
    image: 'https://source.unsplash.com/random/600x400/?technology,future',
    description: 'Join industry leaders as they discuss emerging technology trends that will shape the future. Topics include quantum computing, metaverse applications, and sustainable tech solutions.',
    registerLink: '#'
  }
];

// Sample past events with images for gallery
export const pastEvents: PastEvent[] = [
  {
    id: 1,
    title: 'Blockchain Innovation Summit',
    date: 'May 10, 2023',
    image: 'https://source.unsplash.com/random/600x400/?blockchain,technology',
    gallery: [
      'https://source.unsplash.com/random/800x600/?conference,people',
      'https://source.unsplash.com/random/800x600/?presentation,speaker',
      'https://source.unsplash.com/random/800x600/?audience,seminar',
      'https://source.unsplash.com/random/800x600/?workshop,technology'
    ]
  },
  {
    id: 2,
    title: 'Women in Tech Meetup',
    date: 'April 25, 2023',
    image: 'https://source.unsplash.com/random/600x400/?women,technology',
    gallery: [
      'https://source.unsplash.com/random/800x600/?women,tech',
      'https://source.unsplash.com/random/800x600/?female,engineer',
      'https://source.unsplash.com/random/800x600/?conference,diversity',
      'https://source.unsplash.com/random/800x600/?networking,women'
    ]
  },
  {
    id: 3,
    title: 'IoT Hackathon',
    date: 'March 18-19, 2023',
    image: 'https://source.unsplash.com/random/600x400/?hackathon,coding',
    gallery: [
      'https://source.unsplash.com/random/800x600/?programming,hackathon',
      'https://source.unsplash.com/random/800x600/?coding,team',
      'https://source.unsplash.com/random/800x600/?hardware,electronics',
      'https://source.unsplash.com/random/800x600/?winner,trophy'
    ]
  },
  {
    id: 4,
    title: 'Startup Funding Masterclass',
    date: 'February 28, 2023',
    image: 'https://source.unsplash.com/random/600x400/?funding,business',
    gallery: [
      'https://source.unsplash.com/random/800x600/?venture,capital',
      'https://source.unsplash.com/random/800x600/?investor,presentation',
      'https://source.unsplash.com/random/800x600/?finance,meeting',
      'https://source.unsplash.com/random/800x600/?business,handshake'
    ]
  },
  {
    id: 5,
    title: 'Product Development Workshop',
    date: 'January 20, 2023',
    image: 'https://source.unsplash.com/random/600x400/?product,design',
    gallery: [
      'https://source.unsplash.com/random/800x600/?design,thinking',
      'https://source.unsplash.com/random/800x600/?prototype,workshop',
      'https://source.unsplash.com/random/800x600/?brainstorm,post-it',
      'https://source.unsplash.com/random/800x600/?user,testing'
    ]
  },
  {
    id: 6,
    title: 'Demo Day - Winter Cohort',
    date: 'December 15, 2022',
    image: 'https://source.unsplash.com/random/600x400/?presentation,demo',
    gallery: [
      'https://source.unsplash.com/random/800x600/?startup,pitch',
      'https://source.unsplash.com/random/800x600/?demo,product',
      'https://source.unsplash.com/random/800x600/?audience,investors',
      'https://source.unsplash.com/random/800x600/?celebration,team'
    ]
  }
];
