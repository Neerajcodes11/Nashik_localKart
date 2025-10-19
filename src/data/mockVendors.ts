export interface Vendor {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  hours: string;
  phone: string;
  description: string;
  image?: string;
  isOpen: boolean;
  reviews?: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export const mockVendors: Vendor[] = [
  {
    id: "1",
    name: "Sharma Vegetable Shop",
    category: "Groceries",
    location: "Main Market, Mhasrul",
    rating: 4.5,
    reviewCount: 42,
    hours: "7:00 AM - 9:00 PM",
    phone: "+91 98765 43210",
    description: "Fresh vegetables and fruits daily. We pride ourselves on quality produce sourced directly from local farms.",
    isOpen: true,
    reviews: [
      {
        id: "r1",
        author: "Priya Singh",
        rating: 5,
        comment: "Always fresh vegetables! Best quality in the area.",
        date: "2025-10-15"
      },
      {
        id: "r2",
        author: "Rajesh Kumar",
        rating: 4,
        comment: "Good service, reasonable prices.",
        date: "2025-10-12"
      }
    ]
  },
  {
    id: "2",
    name: "Patil Electricals",
    category: "Electronics",
    location: "Station Road, Mhasrul",
    rating: 4.8,
    reviewCount: 35,
    hours: "9:00 AM - 8:00 PM",
    phone: "+91 98765 43211",
    description: "Complete electrical solutions for homes and offices. Expert repairs and installations.",
    isOpen: true,
    reviews: [
      {
        id: "r3",
        author: "Amit Desai",
        rating: 5,
        comment: "Very professional and quick service!",
        date: "2025-10-14"
      }
    ]
  },
  {
    id: "3",
    name: "Annapurna Tiffin Service",
    category: "Food & Dining",
    location: "Gandhi Chowk, Mhasrul",
    rating: 4.7,
    reviewCount: 128,
    hours: "7:00 AM - 10:00 PM",
    phone: "+91 98765 43212",
    description: "Homemade authentic Maharashtrian food delivered to your doorstep. Fresh and hygienic.",
    isOpen: true,
    reviews: [
      {
        id: "r4",
        author: "Sunita Patil",
        rating: 5,
        comment: "Tastes like home food! Highly recommend.",
        date: "2025-10-16"
      }
    ]
  },
  {
    id: "4",
    name: "Ganesh Hardware Store",
    category: "Hardware",
    location: "College Road, Mhasrul",
    rating: 4.3,
    reviewCount: 56,
    hours: "8:00 AM - 7:00 PM",
    phone: "+91 98765 43213",
    description: "Complete hardware and building materials. Tools, plumbing, and electrical supplies.",
    isOpen: false,
    reviews: []
  },
  {
    id: "5",
    name: "Modern Tailors",
    category: "Services",
    location: "Bus Stand, Mhasrul",
    rating: 4.6,
    reviewCount: 89,
    hours: "10:00 AM - 8:00 PM",
    phone: "+91 98765 43214",
    description: "Expert tailoring for men and women. Alterations, stitching, and designer wear.",
    isOpen: true,
    reviews: [
      {
        id: "r5",
        author: "Neha Sharma",
        rating: 5,
        comment: "Excellent stitching work and timely delivery!",
        date: "2025-10-13"
      }
    ]
  },
  {
    id: "6",
    name: "Bharat Medical Store",
    category: "Healthcare",
    location: "Hospital Road, Mhasrul",
    rating: 4.9,
    reviewCount: 203,
    hours: "24 Hours",
    phone: "+91 98765 43215",
    description: "24/7 pharmacy with all medicines in stock. Home delivery available.",
    isOpen: true,
    reviews: [
      {
        id: "r6",
        author: "Dr. Mehta",
        rating: 5,
        comment: "Reliable and always available. Great service!",
        date: "2025-10-17"
      }
    ]
  }
];

export const categories = [
  "Groceries",
  "Electronics",
  "Food & Dining",
  "Hardware",
  "Services",
  "Healthcare"
];
