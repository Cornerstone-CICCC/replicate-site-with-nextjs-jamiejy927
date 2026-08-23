export interface Photo {
  id: number;
  title: string;
  category: string;
  url: string;
  author: string;
  authorAvatar: string;
}

export const CATEGORIES = [
  "All",
  "Animals",
  "Nature",
  "Wallpapers",
  "Architecture",
  "Travel",
  "People",
];

export const MOCK_PHOTOS: Photo[] = [
  // Animals (1 ~ 12)
  { 
    id: 1, 
    title: "Golden Retriever", 
    category: "Animals", 
    url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800", 
    author: "Karsten Winegeart", 
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
  },
  { 
    id: 2, 
    title: "Curious Cat", 
    category: "Animals", 
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800", 
    author: "Clem Onojeghuo", 
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" 
  },
  { 
    id: 3, 
    title: "Playful Puppy", 
    category: "Animals", 
    url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800", 
    author: "Alicja Gancarz", 
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" 
  },
  { 
    id: 4, 
    title: "Cute Red Panda", 
    category: "Animals", 
    url: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=800", 
    author: "Javier Allegue", 
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" 
  },
  { 
    id: 5, 
    title: "Majestic Lion", 
    category: "Animals", 
    url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800", 
    author: "Tinaré", 
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
  },
  { 
    id: 6, 
    title: "Fluffy Bunny", 
    category: "Animals", 
    url: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=800", 
    author: "Klara Kulikova", 
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" 
  },
  { 
    id: 7, 
    title: "Happy Corgi", 
    category: "Animals", 
    url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800", 
    author: "Alizée Joly", 
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
  },
  { 
    id: 8, 
    title: "Sleeping Cat", 
    category: "Animals", 
    url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800", 
    author: "Eus", 
    authorAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100" 
  },
  { 
    id: 9, 
    title: "Cute Koala", 
    category: "Animals", 
    url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800", 
    author: "Ales Krivec", 
    authorAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100" 
  },
  { 
    id: 10, 
    title: "Curious Monkey", 
    category: "Animals", 
    url: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800", 
    author: "Kilyan Sockalingum", 
    authorAvatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100" 
  },
  { 
    id: 11, 
    title: "Cute Hamster", 
    category: "Animals", 
    url: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800", 
    author: "Caleb Woods", 
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100" 
  },
  { 
    id: 12, 
    title: "Friendly Panda", 
    category: "Animals", 
    url: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800", 
    author: "Denise Jans", 
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" 
  },

  // Nature (13 ~ 22)
  { 
    id: 13, 
    title: "Stunning Waterfall", 
    category: "Nature", 
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800", 
    author: "Darren Nunis", 
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" 
  },
  { 
    id: 14, 
    title: "Serene Lake", 
    category: "Nature", 
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", 
    author: "Bailey Zindel", 
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" 
  },
  { 
    id: 15, 
    title: "Green Valley", 
    category: "Nature", 
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800", 
    author: "Timothy Dykes", 
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
  },
  { 
    id: 16, 
    title: "High Mountains", 
    category: "Nature", 
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", 
    author: "Kalen Emsley", 
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
  },
  { 
    id: 17, 
    title: "Deep Canyon", 
    category: "Nature", 
    url: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800", 
    author: "Luca Bravo", 
    authorAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100" 
  },
  { 
    id: 18, 
    title: "Blue Ocean", 
    category: "Nature", 
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", 
    author: "Sean Oulashin", 
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100" 
  },
  { 
    id: 19, 
    title: "Misty Pine Forest", 
    category: "Nature", 
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800", 
    author: "Sebastian Unrau", 
    authorAvatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100" 
  },
  { 
    id: 20, 
    title: "Sunny Meadow", 
    category: "Nature", 
    url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800", 
    author: "Kilyan Sockalingum", 
    authorAvatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100" 
  },
  { 
    id: 21, 
    title: "Golden Sunset", 
    category: "Nature", 
    url: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800", 
    author: "Bailey Zindel", 
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" 
  },
  { 
    id: 22, 
    title: "Autumn Fields", 
    category: "Nature", 
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800", 
    author: "Javier Allegue", 
    authorAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100" 
  },

  // Architecture (23 ~ 32)
  { 
    id: 23, 
    title: "Modern Glass Skyscraper", 
    category: "Architecture", 
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800", 
    author: "Samson", 
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
  },
  { 
    id: 24, 
    title: "Minimalist Modern Architecture", 
    category: "Architecture", 
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", 
    author: "R Architectural", 
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
  },
  { 
    id: 25, 
    title: "Sleek Corporate Tower", 
    category: "Architecture", 
    url: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800", 
    author: "Hunters Race", 
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
  },
  { 
    id: 26, 
    title: "Geometric Concrete Facade", 
    category: "Architecture", 
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800", 
    author: "Joel Filipe", 
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
  },
  { 
    id: 27, 
    title: "Futuristic Urban Design", 
    category: "Architecture", 
    url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800", 
    author: "Kilian Karger", 
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
  },
  { 
    id: 28, 
    title: "Warm Cozy Interior Home", 
    category: "Architecture", 
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800", 
    author: "Point3d Commercial Imaging", 
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" 
  },
  { 
    id: 29, 
    title: "Minimalist Building Exterior", 
    category: "Architecture", 
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", 
    author: "Aron Visuals", 
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
  },
  { 
    id: 30, 
    title: "Contemporary Architecture", 
    category: "Architecture", 
    url: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800", 
    author: "Külli Kittus", 
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" 
  },
  { 
    id: 31, 
    title: "Modern City Architecture", 
    category: "Architecture", 
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800", 
    author: "Darren Nunis", 
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" 
  },
  { 
    id: 32, 
    title: "Modern Minimalist Hallway", 
    category: "Architecture", 
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800", 
    author: "Zac Gudakov", 
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
  },

  // Wallpapers (33 ~ 38)
  { 
    id: 33, 
    title: "Abstract Neon Glow", 
    category: "Wallpapers", 
    url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800", 
    author: "JR Korpa", 
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
  },
  { 
    id: 34, 
    title: "Dark Moody Gradient", 
    category: "Wallpapers", 
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800", 
    author: "Milad Fakurian", 
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" 
  },
  { 
    id: 35, 
    title: "Ethereal Purple Smoke", 
    category: "Wallpapers", 
    url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800", 
    author: "Elena Mozhvilo", 
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
  },
  { 
    id: 36, 
    title: "Vibrant Color Flow", 
    category: "Wallpapers", 
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800", 
    author: "Pawel Czerwinski", 
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
  },
  { 
    id: 37, 
    title: "Minimalist Geometric Lines", 
    category: "Wallpapers", 
    url: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800", 
    author: "Booplop", 
    authorAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100" 
  },
  { 
    id: 38, 
    title: "Fluid Liquid Wave", 
    category: "Wallpapers", 
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800", 
    author: "Milad Fakurian", 
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
  },

  // Travel (39 ~ 44)
  { 
    id: 39, 
    title: "Vibrant Kyoto Street", 
    category: "Travel", 
    url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800", 
    author: "Jezael Melgoza", 
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" 
  },
  { 
    id: 40, 
    title: "Historic Rome Colosseum", 
    category: "Travel", 
    url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800", 
    author: "Mauro Sbicego", 
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" 
  },
  { 
    id: 41, 
    title: "Eiffel Tower Paris", 
    category: "Travel", 
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", 
    author: "Anthony Delanoix", 
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
  },
  { 
    id: 42, 
    title: "Alpine Mountain Cabin", 
    category: "Travel", 
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800", 
    author: "Jörg Angeli", 
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
  },
  { 
    id: 43, 
    title: "Santorini Cliffside Village", 
    category: "Travel", 
    url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800", 
    author: "Illiya Vjestica", 
    authorAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100" 
  },
  { 
    id: 44, 
    title: "New York City Skyline", 
    category: "Travel", 
    url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800", 
    author: "Luca Bravo", 
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100" 
  },

  // People (45 ~ 54)
  { 
    id: 45, 
    title: "Portrait of a Smiling Woman", 
    category: "People", 
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800", 
    author: "Christopher Campbell", 
    authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" 
  },
  { 
    id: 46, 
    title: "Urban Street Portrait", 
    category: "People", 
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", 
    author: "Manrik", 
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" 
  },
  { 
    id: 47, 
    title: "Thoughtful Young Man", 
    category: "People", 
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800", 
    author: "Melvin Nunley", 
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" 
  },
  { 
    id: 48, 
    title: "Natural Sunlight Portrait", 
    category: "People", 
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800", 
    author: "Michael Dam", 
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" 
  },
  { 
    id: 49, 
    title: "Casual Lifestyle Shot", 
    category: "People", 
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800", 
    author: "Dmitriy Frantsev", 
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" 
  },
  { 
    id: 50, 
    title: "Confident Expression", 
    category: "People", 
    url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800", 
    author: "jurica koletic", 
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" 
  },
  { 
    id: 51, 
    title: "Creative Studio Portrait", 
    category: "People", 
    url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800", 
    author: "Atikh Bana", 
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
  },
  { 
    id: 52, 
    title: "Joyful Moments", 
    category: "People", 
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800", 
    author: "Valerie Elstein", 
    authorAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100" 
  },
  { 
    id: 53, 
    title: "Atmospheric Moody Face", 
    category: "People", 
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800", 
    author: "Oleg Ivanilov", 
    authorAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100" 
  },
  { 
    id: 54, 
    title: "Outdoor Portrait Vibe", 
    category: "People", 
    url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800", 
    author: "Ryan Moreno", 
    authorAvatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100" 
  }
];