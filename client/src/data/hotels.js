const hotelsData = [
  {
    id: "1",
    name: "The Grand Palace Hotel",
    location: "Kolkata, India",
    rating: 4.7,
    price: 4500,
    description:
      "The Grand Palace Hotel is a five-star stay offering luxury rooms, rooftop dining, and an authentic Bengali experience in the heart of Kolkata.",
    amenities: ["Free Wi-Fi", "Breakfast included", "Swimming pool", "Gym & Spa", "Airport pickup"],
    images: [
      "/hotels/grand-place-hotel.jpg",
      "https://via.placeholder.com/300x200?text=Room+View",
      "https://via.placeholder.com/300x200?text=Lobby",
      "https://via.placeholder.com/300x200?text=Pool",
    ],
  },
  {
    id: "2",
    name: "Marina Bay Residency",
    location: "Mumbai, India",
    rating: 4.5,
    price: 5200,
    description:
      "A modern beachfront property with stunning sea views, offering premium comfort and 24-hour room service.",
    amenities: ["Sea View Rooms", "Bar & Lounge", "Fitness Center", "Airport Shuttle"],
    images: [
      "/hotels/Marina Bay Residency.webp",
      "https://via.placeholder.com/300x200?text=Suite",
      "https://via.placeholder.com/300x200?text=Restaurant",
      "https://via.placeholder.com/300x200?text=Beachfront",
    ],
  },
  {
    id: "3",
    name: "Mountain Bliss Resort",
    location: "Manali, India",
    rating: 4.8,
    price: 3900,
    description:
      "Escape to the Himalayas with cozy cottages, mountain views, and adventure trails just a step away.",
    amenities: ["Mountain View", "Bonfire", "Skiing", "Free Wi-Fi"],
    images: [
      "/hotels/Mountain Bliss Resort.jpg",
      "https://via.placeholder.com/300x200?text=Cottage",
      "https://via.placeholder.com/300x200?text=Hills",
      "https://via.placeholder.com/300x200?text=Fireplace",
    ],
  },
  {
    id: "4",
    name: "Ocean Pearl Suites",
    location: "Goa, India",
    rating: 4.6,
    price: 4800,
    description:
      "A tropical paradise with beach access, cocktails by the pool, and lively nightlife nearby.",
    amenities: ["Private Beach", "Swimming Pool", "Bar", "Breakfast"],
    images: [
      "/hotels/Ocean Pearl Suites.jpg",
      "https://via.placeholder.com/300x200?text=Beach",
      "https://via.placeholder.com/300x200?text=Room",
      "https://via.placeholder.com/300x200?text=Restaurant",
    ],
  },
  {
    id: "5",
    name: "Royal Heritage Inn",
    location: "Jaipur, India",
    rating: 4.3,
    price: 3100,
    description:
      "Stay in a restored Rajasthani haveli with traditional architecture and warm royal hospitality.",
    amenities: ["Courtyard Dining", "Cultural Shows", "Free Wi-Fi"],
    images: [
      "/hotels/Royal Heritage Inn.jpg",
      "https://via.placeholder.com/300x200?text=Courtyard",
      "https://via.placeholder.com/300x200?text=Room",
      "https://via.placeholder.com/300x200?text=Heritage+View",
    ],
  },
  {
    id: "6",
    name: "Green Valley Eco Resort",
    location: "Coorg, India",
    rating: 4.9,
    price: 4200,
    description:
      "A serene escape amidst coffee plantations, offering eco-friendly cottages and nature trails.",
    amenities: ["Nature Walks", "Organic Food", "Bonfire"],
    images: [
      "/hotels/Green Valley Eco Resort.jpg",
      "https://via.placeholder.com/300x200?text=Cottage",
      "https://via.placeholder.com/300x200?text=Trail",
      "https://via.placeholder.com/300x200?text=Forest",
    ],
  },
  {
    id: "7",
    name: "Urban Edge Hotel",
    location: "Bangalore, India",
    rating: 4.2,
    price: 3500,
    description:
      "A chic business hotel with modern interiors, co-working space, and fine dining in the IT hub of India.",
    amenities: ["Wi-Fi", "Conference Rooms", "Restaurant", "Bar"],
    images: [
      "/hotels/Urban Edge Hotel.jpg",
      "https://via.placeholder.com/300x200?text=Lobby",
      "https://via.placeholder.com/300x200?text=Room",
      "https://via.placeholder.com/300x200?text=Cafe",
    ],
  },
  {
    id: "8",
    name: "Desert Mirage Camp",
    location: "Jaisalmer, India",
    rating: 4.6,
    price: 2800,
    description:
      "Enjoy a unique desert camping experience with camel safaris and traditional Rajasthani performances.",
    amenities: ["Camel Safari", "Campfire", "Folk Music"],
    images: [
      "/hotels/Desert Mirage Camp.avif",
      "https://via.placeholder.com/300x200?text=Tent",
      "https://via.placeholder.com/300x200?text=Sunset",
      "https://via.placeholder.com/300x200?text=Camel",
    ],
  },
  {
    id: "9",
    name: "Lakeview Serenity",
    location: "Nainital, India",
    rating: 4.5,
    price: 4000,
    description:
      "Experience the calmness of Naini Lake from your balcony, with cozy rooms and lakeside walks.",
    amenities: ["Lake View", "Room Service", "Breakfast Included"],
    images: [
      "/hotels/Lakeview Serenity.jpeg",
      "https://via.placeholder.com/300x200?text=Balcony",
      "https://via.placeholder.com/300x200?text=Lake",
      "https://via.placeholder.com/300x200?text=Room",
    ],
  },
  {
    id: "10",
    name: "Himalayan Escape Lodge",
    location: "Darjeeling, India",
    rating: 4.4,
    price: 3700,
    description:
      "A cozy hillside retreat offering panoramic views of the Kanchenjunga and fresh mountain air.",
    amenities: ["Tea Lounge", "Trekking", "Mountain View"],
    images: [
      "/hotels/Himalayan Escape Lodge.jpg",
      "https://via.placeholder.com/300x200?text=Balcony",
      "https://via.placeholder.com/300x200?text=Hill",
      "https://via.placeholder.com/300x200?text=Tea+Lounge",
    ],
  },
  {
    id: "11",
    name: "Blue Horizon Resort",
    location: "Andaman Islands, India",
    rating: 4.8,
    price: 6500,
    description:
      "Luxury beachfront villas surrounded by crystal-clear waters, perfect for diving and relaxation.",
    amenities: ["Private Beach", "Snorkeling", "Spa", "Restaurant"],
    images: [
      "/hotels/Blue Horizon Resort.png",
      "https://via.placeholder.com/300x200?text=Villa",
      "https://via.placeholder.com/300x200?text=Beach",
      "https://via.placeholder.com/300x200?text=Pool",
    ],
  },
];

export default hotelsData;
