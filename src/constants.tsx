import { Camera, Users, Building2, Briefcase, Baby, FileText, Heart, Star } from 'lucide-react';

export const SERVICES = [
  {
    id: 'weddings',
    title: 'Weddings',
    icon: <Heart className="w-8 h-8" />,
    description: 'Capturing your special day with an editorial, cinematic approach that tells your unique love story.',
    price: 'From £1,200',
  },
  {
    id: 'corporate',
    title: 'Corporate & Headshots',
    icon: <Briefcase className="w-8 h-8" />,
    description: 'Professional portraits and team shots that elevate your personal brand and business presence.',
    price: 'From £150',
  },
  {
    id: 'family',
    title: 'Newborn & Family',
    icon: <Baby className="w-8 h-8" />,
    description: 'Timeless moments in our comfortable Manchester studio or at your home, preserving memories for a lifetime.',
    price: 'From £200',
  },
  {
    id: 'events',
    title: 'Events',
    icon: <Users className="w-8 h-8" />,
    description: 'Full-service event coverage for gala dinners, private parties, music gigs, and studio sessions.',
    price: 'From £350',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    icon: <Building2 className="w-8 h-8" />,
    description: 'High-end architectural and interior photography that makes properties stand out in the Manchester market.',
    price: 'From £250',
  },
  {
    id: 'passport',
    title: 'Passport & ID',
    icon: <FileText className="w-8 h-8" />,
    description: 'Government-compliant digital and print ID photos for all nationalities, ready in minutes.',
    price: '£15',
  },
];

export const PORTFOLIO = [
  { id: 1, category: 'weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80', size: 'tall' },
  { id: 2, category: 'corporate', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80', size: 'short' },
  { id: 3, category: 'family', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80', size: 'regular' },
  { id: 4, category: 'weddings', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80', size: 'regular' },
  { id: 5, category: 'corporate', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80', size: 'tall' },
  { id: 6, category: 'events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80', size: 'short' },
  { id: 7, category: 'real-estate', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80', size: 'regular' },
  { id: 8, category: 'family', image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80', size: 'tall' },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    text: 'Eddie captured our wedding perfectly. The photos are absolute art. Highly recommend for anyone looking for premium quality in Manchester.',
    rating: 5,
  },
  {
    name: 'Mark Thompson',
    text: 'Best corporate headshot I have ever had. The studio environment in Miles Platting is professional and the lighting is top-notch.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    text: "Amazing newborn session. They were so patient with our little one and the final images brought tears to our eyes. Thank you Eddie Studios!",
    rating: 5,
  },
];
