// ============ TRIP DATA ============
const TRIP_DATA = {
    startDate: new Date('2026-01-12'),
    endDate: new Date('2026-02-04'),
    totalDays: 24,
    cities: [
        { name: "London", emoji: "🇬🇧", dates: "Jan 12-14", days: 2, startDay: 1, endDay: 3, weather: { lat: 51.5074, lon: -0.1278 },
          hotel: { name: "Shangri-La The Shard", chinese: "", address: "31 St Thomas St, London SE1 9QU", confirmation: "12488091735" }},
        { name: "Shanghai", emoji: "🏙️", dates: "Jan 15-18", days: 4, startDay: 4, endDay: 7, weather: { lat: 31.2304, lon: 121.4737 },
          hotel: { name: "Banyan Tree Shanghai On The Bund", chinese: "上海外滩悦榕庄", address: "No. 19 Haiping Road, Hongkou District, Shanghai", confirmation: "1653710018337772" }},
        { name: "Zhangjiajie", emoji: "🏔️", dates: "Jan 18-22", days: 4, startDay: 7, endDay: 11, weather: { lat: 29.1169, lon: 110.4789 },
          hotel: { name: "Harmona Resort & Spa Zhangjiajie", chinese: "", address: "Zhangjiajie, Hunan Province", confirmation: "1653709582489344", note: "Airport pickup & train station drop-off included" }},
        { name: "Chongqing", emoji: "🌃", dates: "Jan 22-25", days: 3, startDay: 11, endDay: 14, weather: { lat: 29.4316, lon: 106.9123 },
          hotel: { name: "Regent Chongqing", chinese: "重庆丽晶酒店", address: "No. 66 Jinshamen Road, Liangjiang New Area, Chongqing", confirmation: "1653710250433437" }},
        { name: "Wulong", emoji: "🌿", dates: "Jan 25-26", days: 1, startDay: 14, endDay: 15, weather: { lat: 29.3256, lon: 107.7606 },
          hotel: { name: "Shenqiuli Hidden World Resort Villa", chinese: "深秋里隐世度假别墅（武隆仙女山店）", address: "Xiannüshan, Wulong District, Chongqing", confirmation: "1653710018364152" }},
        { name: "Shenzhen", emoji: "📱", dates: "Jan 26-29", days: 3, startDay: 15, endDay: 18, weather: { lat: 22.5431, lon: 114.0579 },
          hotel: { name: "Futian Shangri-La, Shenzhen", chinese: "深圳福田香格里拉大酒店", address: "No. 4088 Yitian Road, Futian District, Shenzhen", confirmation: "1653710058612686" }},
        { name: "Beijing", emoji: "🏯", dates: "Jan 29-Feb 2", days: 4, startDay: 18, endDay: 22, weather: { lat: 39.9042, lon: 116.4074 },
          hotel: { name: "Fairmont Beijing", chinese: "北京华彬费尔蒙酒店", address: "No. 8, Yong'an Dongli, Jianguomen Outer Street, Chaoyang District", confirmation: "1653710058625220" }},
        { name: "Shanghai", emoji: "🏙️", dates: "Feb 2-3", days: 1, startDay: 22, endDay: 23, weather: { lat: 31.2304, lon: 121.4737 },
          hotel: { name: "The Sukhothai Shanghai", chinese: "上海素凯泰酒店", address: "No. 380 Weihai Road, Jing'an District, Shanghai", confirmation: "1653710058635116" }},
        { name: "London", emoji: "🇬🇧", dates: "Feb 3-4", days: 1, startDay: 23, endDay: 24, weather: { lat: 51.5074, lon: -0.1278 },
          hotel: { name: "Premier Inn London Heathrow T4", chinese: "", address: "Heathrow Airport Terminal 4" }}
    ],
    transport: [
        { day: 1, type: "flight", icon: "✈️", from: "Belfast", to: "London Gatwick", time: "10:20", date: "Mon 12 Jan", company: "EasyJet", details: "BFS → LGW" },
        { day: 3, type: "flight", icon: "✈️", from: "London Heathrow", to: "Shanghai", time: "12:15", date: "Wed 14 Jan", company: "British Airways BA0169", details: "Club World, arrives 09:10 Thu" },
        { day: 7, type: "flight", icon: "✈️", from: "Shanghai", to: "Zhangjiajie", time: "18:40", date: "Sun 18 Jan", company: "Juneyao Air HO2199", details: "Pudong T2 → Zhangjiajie" },
        { day: 11, type: "train", icon: "🚄", from: "Zhangjiajie", to: "Chongqing East", time: "11:47", date: "Thu 22 Jan", company: "G2418", details: "Premier Seat, arrives 14:08" },
        { day: 14, type: "train", icon: "🚄", from: "Chongqing", to: "Wulong", time: "TBC", date: "Sun 25 Jan", company: "Local train", details: "Book via Trip.com" },
        { day: 15, type: "flight", icon: "✈️", from: "Chongqing", to: "Shenzhen", time: "17:30", date: "Mon 26 Jan", company: "Flight", details: "CKG T3 → SZX, arrives 19:35" },
        { day: 18, type: "flight", icon: "✈️", from: "Shenzhen", to: "Beijing", time: "19:10", date: "Thu 29 Jan", company: "Flight", details: "SZX → PEK, arrives 22:15" },
        { day: 22, type: "train", icon: "🚄", from: "Beijing South", to: "Shanghai", time: "10:00", date: "Mon 2 Feb", company: "G7 High-Speed", details: "Arrives 14:35 Hongqiao" },
        { day: 23, type: "flight", icon: "✈️", from: "Shanghai", to: "London", time: "10:55", date: "Tue 3 Feb", company: "British Airways BA0168", details: "Club World, arrives 18:00" },
        { day: 24, type: "flight", icon: "✈️", from: "London Heathrow", to: "Belfast City", time: "10:05", date: "Wed 4 Feb", company: "British Airways", details: "Business, arrives 11:30" }
    ],
    activities: {
        1: [
            { time: "10:20", title: "Flight Belfast → London", desc: "EasyJet from Belfast International to Gatwick" },
            { time: "11:45", title: "Arrive London Gatwick", desc: "Taxi/Uber to Shangri-La The Shard (~50-70 min)" },
            { time: "14:00", title: "Check-in Shangri-La", desc: "Settle into your room with stunning London views" },
            { time: "16:00", title: "Explore The Shard", desc: "Enjoy the views and hotel amenities" },
            { time: "19:00", title: "Dinner in London", desc: "Celebrate the start of your honeymoon!", romantic: true }
        ],
        2: [
            { time: "09:00", title: "London at Leisure", desc: "Explore London or relax at the hotel" },
            { time: "12:00", title: "Lunch", desc: "Enjoy London's culinary scene" },
            { time: "15:00", title: "Afternoon Activities", desc: "Sightseeing or spa time" },
            { time: "19:00", title: "Pre-Flight Dinner", desc: "Early dinner before big travel day tomorrow", romantic: true }
        ],
        3: [
            { time: "08:45", title: "Leave for Heathrow", desc: "Allow 40-70 min for journey to Terminal 5" },
            { time: "12:15", title: "Flight to Shanghai", desc: "BA0169 Club World - arrives 09:10 next day" }
        ],
        4: [
            { time: "09:10", title: "Arrive Shanghai Pudong T2", desc: "Clear customs (~60-90 min), DiDi to hotel" },
            { time: "11:30", title: "Check-in Banyan Tree", desc: "Early check-in request, settle in with Bund views", romantic: false },
            { time: "14:00", title: "Spa Recovery Session", desc: "Couples' jet lag recovery treatment at Banyan Tree Spa", romantic: true },
            { time: "17:00", title: "First Bund Walk", desc: "Evening stroll along the waterfront, watch sunset over Pudong", romantic: true },
            { time: "19:00", title: "Romantic Bund Dinner", desc: "M on the Bund or Mr & Mrs Bund with spectacular views", romantic: true }
        ],
        5: [
            { time: "09:00", title: "Morning Bund Photography", desc: "Walk the Bund in soft morning light, colonial architecture" },
            { time: "10:30", title: "Nanjing Road Shopping", desc: "China's premier shopping street, flagship stores & souvenirs" },
            { time: "13:00", title: "Lunch at Yu Garden", desc: "Try Nanxiang Steamed Bun Restaurant for xiaolongbao" },
            { time: "14:30", title: "Yu Garden Exploration", desc: "Classical Chinese garden, pavilions & koi ponds", romantic: true },
            { time: "16:30", title: "Xintiandi & Tianzifang", desc: "Upscale boutiques in restored shikumen houses" },
            { time: "19:30", title: "Rooftop Cocktails & Dinner", desc: "Flair Rooftop Bar or Vue Bar with 360° views", romantic: true }
        ],
        6: [
            { time: "09:30", title: "Sleep In & Breakfast", desc: "Relaxed morning with stunning Bund views" },
            { time: "11:00", title: "French Concession Stroll", desc: "Tree-lined streets, boutiques along Wukang & Anfu Road" },
            { time: "13:00", title: "Brunch at a Hidden Gem", desc: "Kommune or a cozy French Concession cafe" },
            { time: "15:00", title: "Couples Spa Experience", desc: "Signature couples' treatment at Banyan Tree Spa", romantic: true },
            { time: "18:00", title: "Pack & Prepare", desc: "Organize for tomorrow's flight - leave by 15:30" },
            { time: "19:30", title: "Final Shanghai Dinner", desc: "Lost Heaven for Yunnan cuisine", romantic: true }
        ],
        7: [
            { time: "10:00", title: "Morning at Leisure", desc: "Final Shanghai walk or last-minute shopping" },
            { time: "12:00", title: "Late Checkout & Lunch", desc: "Request late checkout, have lunch nearby" },
            { time: "15:30", title: "Depart for Airport", desc: "DiDi to Pudong T2 (45-60 min journey)" },
            { time: "21:15", title: "Arrive Zhangjiajie", desc: "Hotel pickup included! Look for Harmona driver" },
            { time: "22:30", title: "Check-in & Rest", desc: "Settle into mountain resort for Avatar adventures", romantic: true }
        ],
        8: [
            { time: "07:00", title: "Early Start", desc: "Beat the crowds! Hotel breakfast then depart" },
            { time: "08:30", title: "Bailong Elevator", desc: "World's tallest outdoor elevator up the cliff!" },
            { time: "10:30", title: "Avatar Hallelujah Mountain", desc: "The famous floating pillar from the film" },
            { time: "12:00", title: "Lunch in the Park", desc: "Local specialties - smoked meats & wild vegetables" },
            { time: "13:30", title: "Tianzi Mountain", desc: "Panoramic views of thousands of sandstone pillars" },
            { time: "16:00", title: "Golden Whip Stream", desc: "Peaceful walk through the valley floor" },
            { time: "18:30", title: "Resort Spa Time", desc: "Soak tired muscles in spa/hot spring", romantic: true }
        ],
        9: [
            { time: "08:00", title: "Breakfast & Depart", desc: "Head to Tianmen Mountain - glass skywalk day!" },
            { time: "09:00", title: "World's Longest Cable Car", desc: "Spectacular 7.5km ride through the clouds" },
            { time: "10:30", title: "Glass Skywalk Experience", desc: "Walk the thrilling cliff-hanging glass walkway!", romantic: true },
            { time: "12:00", title: "Heaven's Gate Cave", desc: "Descend 999 steps to the iconic natural archway" },
            { time: "14:00", title: "Tianmen Mountain Temple", desc: "Light incense together, make wishes for your marriage", romantic: true },
            { time: "16:00", title: "Return & Relax", desc: "Cable car down, peaceful evening at resort" },
            { time: "19:00", title: "Romantic Mountain Dinner", desc: "Tujia minority cuisine in mountain setting", romantic: true }
        ],
        10: [
            { time: "09:00", title: "Sleep In & Late Breakfast", desc: "Recharge after two active days" },
            { time: "10:30", title: "Grand Canyon Glass Bridge", desc: "Optional: world's longest & highest glass bridge!" },
            { time: "13:00", title: "Local Village Lunch", desc: "Tujia village life, sour fish soup & bamboo rice" },
            { time: "15:00", title: "Spa Afternoon", desc: "Couples' treatment at Harmona Resort", romantic: true },
            { time: "17:00", title: "Sunset Photography", desc: "Beautiful sunset views over the mountains", romantic: true },
            { time: "19:30", title: "Final Zhangjiajie Dinner", desc: "Farewell dinner - Chongqing tomorrow!" }
        ],
        11: [
            { time: "08:00", title: "Breakfast & Checkout", desc: "Hotel arranges transfer to station (included)" },
            { time: "10:30", title: "Transfer to Station", desc: "Depart for Zhangjiajie West Railway Station" },
            { time: "11:47", title: "G2418 High-Speed Train", desc: "Premier Seat to Chongqing East (2.5 hours)" },
            { time: "14:08", title: "Arrive Chongqing", desc: "DiDi to Regent Chongqing (~25-40 min)" },
            { time: "15:30", title: "Check-in & Rest", desc: "Settle into luxurious Regent Chongqing" },
            { time: "17:30", title: "Hongyadong Cave District", desc: "11-story cliffside complex - incredible photos!" },
            { time: "19:30", title: "Chongqing Hotpot!", desc: "Ask for 鸳鸯锅 (yuānyāng guō) split pot!", romantic: true }
        ],
        12: [
            { time: "09:00", title: "Breakfast & Planning", desc: "Explore Chongqing's mountainous cityscape" },
            { time: "10:00", title: "Ciqikou Ancient Town", desc: "Ming Dynasty town - crafts, sesame candy!" },
            { time: "12:30", title: "Traditional Lunch", desc: "Chongqing small noodles (小面) or grilled skewers" },
            { time: "14:00", title: "Liberation Monument", desc: "Iconic monument & bustling shopping district" },
            { time: "16:00", title: "Yangtze River Cable Car", desc: "Historic cable car with stunning city views" },
            { time: "18:00", title: "Return to Hotel", desc: "Relax before dinner" },
            { time: "19:30", title: "Hotel Dining", desc: "Regent restaurant - ask about drone show viewing!", romantic: true }
        ],
        13: [
            { time: "09:30", title: "Leisurely Morning", desc: "Sleep in - tonight's highlight is the drone show!" },
            { time: "11:00", title: "Three Gorges Museum", desc: "Fascinating history including dam project" },
            { time: "13:00", title: "Lunch at People's Square", desc: "Sichuan-style cuisine near museum" },
            { time: "14:30", title: "Spa Time at Regent", desc: "Couples' treatment before evening celebration", romantic: true },
            { time: "17:00", title: "Prepare for Drone Show", desc: "Rest and prepare - hotel may have rooftop access" },
            { time: "19:00", title: "Champagne & Positioning", desc: "Secure viewing spot, order champagne!", romantic: true },
            { time: "20:00", title: "DRONE SHOW SPECTACULAR!", desc: "Hundreds of drones over Chongqing skyline!", romantic: true },
            { time: "21:30", title: "Celebratory Dinner", desc: "Post-show special dinner", romantic: true }
        ],
        14: [
            { time: "08:30", title: "Breakfast & Checkout", desc: "Prepare for journey to Wulong" },
            { time: "10:00", title: "Train to Wulong", desc: "40 min - 2 hours depending on service" },
            { time: "13:00", title: "Arrive & Transfer", desc: "Transfer to Shenqiuli Hidden World Resort" },
            { time: "14:30", title: "Check-in & Explore", desc: "Settle into villa near Fairy Mountain" },
            { time: "16:00", title: "Local Area Walk", desc: "Fresh mountain air, peaceful setting" },
            { time: "18:30", title: "Romantic Villa Dinner", desc: "Intimate dinner in remote setting", romantic: true }
        ],
        15: [
            { time: "07:00", title: "Early Breakfast", desc: "Maximize karst time before long journey" },
            { time: "08:00", title: "Wulong Karst National Park", desc: "UNESCO World Heritage - Three Natural Bridges" },
            { time: "09:30", title: "Heavenly Pit (Tiankeng)", desc: "Massive sinkhole with lush vegetation" },
            { time: "11:00", title: "Final Karst Photos", desc: "Capture this incredible geological wonder" },
            { time: "12:00", title: "Light Lunch & Depart", desc: "2.5-3 hour drive to Chongqing Airport" },
            { time: "17:30", title: "Flight to Shenzhen", desc: "Chongqing T3 → Shenzhen (arrives 19:35)" },
            { time: "20:30", title: "Check-in Shangri-La", desc: "Futian Shangri-La for shopping days ahead" },
            { time: "21:30", title: "Late Dinner", desc: "Light dinner - rest for shopping!", romantic: true }
        ],
        16: [
            { time: "09:00", title: "Breakfast & Strategy", desc: "Fuel up for serious tech shopping!" },
            { time: "10:00", title: "Huaqiangbei Electronics", desc: "World's largest electronics market!" },
            { time: "12:30", title: "Lunch Break", desc: "Hong Kong-style tea restaurant" },
            { time: "14:00", title: "SEG Electronics Plaza", desc: "Cameras, computers, smart home devices" },
            { time: "16:30", title: "COCO Park", desc: "International brands, fashion & lifestyle" },
            { time: "18:00", title: "Return & Spa", desc: "Drop off purchases, Shangri-La spa", romantic: true },
            { time: "20:00", title: "Cantonese Dinner", desc: "Authentic dim sum and seafood", romantic: true }
        ],
        17: [
            { time: "08:00", title: "Early Train to Guangzhou", desc: "High-speed train ~30-45 min" },
            { time: "09:30", title: "Arrive Guangzhou", desc: "China's fashion wholesale hub" },
            { time: "10:00", title: "Baima Clothing Market", desc: "Multi-floor fashion at wholesale prices" },
            { time: "12:30", title: "Dim Sum Lunch", desc: "Birthplace of dim sum - traditional yum cha!" },
            { time: "14:00", title: "Thirteen-Hongs District", desc: "Fashion district - shoes, bags, accessories" },
            { time: "17:00", title: "Shamian Island Break", desc: "Colonial architecture, romantic stroll", romantic: true },
            { time: "18:30", title: "Return to Shenzhen", desc: "High-speed train back (~1 hour total)" },
            { time: "20:30", title: "Relaxed Evening", desc: "Light dinner, organize purchases", romantic: true }
        ],
        18: [
            { time: "09:00", title: "Leisurely Morning", desc: "Sleep in after busy shopping trip" },
            { time: "10:30", title: "Last Shopping or Spa", desc: "Final Shenzhen shopping or Shangri-La spa" },
            { time: "13:00", title: "Lunch & Pack", desc: "Reorganize bags with all your shopping!" },
            { time: "16:00", title: "Depart for Airport", desc: "DiDi to Shenzhen Bao'an Airport" },
            { time: "19:10", title: "Flight to Beijing", desc: "Evening flight to Beijing Capital (arrives 22:15)" },
            { time: "23:00", title: "Check-in Fairmont", desc: "Late arrival - well-located in Chaoyang" },
            { time: "23:30", title: "Rest", desc: "Light snack and bed - Great Wall tomorrow!" }
        ],
        19: [
            { time: "06:30", title: "Very Early Departure", desc: "Beat the crowds! Mutianyu section" },
            { time: "08:30", title: "Arrive Mutianyu", desc: "Cable car up to save energy for walking" },
            { time: "09:00", title: "Walk the Great Wall", desc: "Bucket-list moment together!", romantic: true },
            { time: "12:00", title: "Lunch Near Wall", desc: "Local Beijing dishes or comfort food" },
            { time: "13:30", title: "Continue or Toboggan", desc: "Explore more wall or take the fun toboggan!" },
            { time: "15:00", title: "Return to Beijing", desc: "1.5-2 hours depending on traffic" },
            { time: "17:30", title: "Rest & Spa", desc: "Fairmont spa for tired muscles", romantic: true },
            { time: "19:30", title: "Peking Duck Dinner", desc: "Quanjude or Da Dong - a must!", romantic: true }
        ],
        20: [
            { time: "07:30", title: "Early Breakfast", desc: "Book tickets online in advance!" },
            { time: "08:30", title: "Forbidden City Opens", desc: "Enter through Meridian Gate - 3-4 hours" },
            { time: "09:00", title: "Hall of Supreme Harmony", desc: "Magnificent throne room" },
            { time: "10:30", title: "Inner Court & Gardens", desc: "Private quarters, Imperial Garden", romantic: true },
            { time: "12:00", title: "Jingshan Park", desc: "Best panoramic views of golden roofs" },
            { time: "13:00", title: "Lunch in Hutongs", desc: "Traditional alleyways, authentic cuisine" },
            { time: "15:00", title: "Temple of Heaven", desc: "Stunning architecture where emperors prayed" },
            { time: "18:00", title: "Rest at Hotel", desc: "Relax before final Beijing evening" },
            { time: "20:00", title: "Romantic Final Dinner", desc: "Special dinner celebrating your journey", romantic: true }
        ],
        21: [
            { time: "09:00", title: "Leisurely Morning", desc: "Last full day in China" },
            { time: "10:30", title: "Summer Palace", desc: "Imperial summer retreat, beautiful gardens" },
            { time: "12:00", title: "Kunming Lake Boat Ride", desc: "Romantic dragon boat ride", romantic: true },
            { time: "13:30", title: "Lunch at Summer Palace", desc: "Restaurants within palace grounds" },
            { time: "15:00", title: "798 Art District", desc: "Optional: contemporary art galleries" },
            { time: "17:00", title: "Spa Farewell Treatment", desc: "Final couples' spa at Fairmont", romantic: true },
            { time: "19:30", title: "Farewell China Dinner", desc: "Last dinner in China!", romantic: true }
        ],
        22: [
            { time: "07:30", title: "Breakfast & Checkout", desc: "Final Beijing breakfast" },
            { time: "08:45", title: "Depart for Station", desc: "DiDi to Beijing South (~20-35 min)" },
            { time: "10:00", title: "G7 High-Speed Train", desc: "1,300km at 350km/h - 4.5 hours!" },
            { time: "14:35", title: "Arrive Shanghai Hongqiao", desc: "DiDi to Sukhothai Hotel" },
            { time: "15:30", title: "Check-in Sukhothai", desc: "Elegant boutique hotel, French Concession" },
            { time: "17:00", title: "French Concession Stroll", desc: "Final romantic walk through leafy streets", romantic: true },
            { time: "19:30", title: "Final Dinner in China", desc: "Somewhere special for last night!", romantic: true }
        ],
        23: [
            { time: "05:30", title: "Wake Up & Prepare", desc: "Very early start for flight home" },
            { time: "07:00", title: "Depart for Pudong", desc: "DiDi to Pudong T2 (45-70 min)" },
            { time: "10:55", title: "BA0168 to London", desc: "Club World flight ~12 hours" },
            { time: "18:00", title: "Arrive Heathrow T5", desc: "Clear customs and immigration" },
            { time: "19:30", title: "Transfer to Premier Inn", desc: "Terminal shuttle to T4 hotel" },
            { time: "20:30", title: "Light Dinner & Rest", desc: "Simple dinner - one more flight tomorrow" }
        ],
        24: [
            { time: "07:30", title: "Breakfast & Checkout", desc: "Final travel breakfast" },
            { time: "10:05", title: "BA to Belfast City", desc: "Business class, arrives 11:30" },
            { time: "11:30", title: "WELCOME HOME! 🎉", desc: "Your incredible adventure is complete!", romantic: true }
        ]
    },
    tips: {
        1: "Enjoy the start of your honeymoon! The Shangri-La at The Shard has incredible views of London.",
        2: "Take it easy today - you have a long journey to Shanghai tomorrow. Check in online for your BA flight!",
        3: "Leave for Heathrow by 08:45 at the latest. Flight BA0169 departs 12:15 - arrives Shanghai 09:10 tomorrow.",
        4: "The Bund is magical at night when all buildings are lit. Lights stay on until 10:30pm.",
        5: "Xintiandi is great for evening dining - the shikumen lanes are beautifully lit after dark.",
        6: "Pre-order DiDi to Pudong Airport for tomorrow - departure by 15:30 for your 18:40 flight.",
        7: "Harmona Resort includes airport pickup - contact them to confirm pickup details before your flight.",
        8: "Wear comfortable hiking shoes and bring layers - temperatures vary dramatically!",
        9: "Glass skywalk requires shoe covers (provided). Regular walkway views are equally stunning!",
        10: "Pack tonight and confirm hotel drop-off time. Train departs 11:47 - leave by 10:30.",
        11: "Chongqing hotpot is VERY spicy! Ask for 鸳鸯锅 (yuānyāng guō) - split pot with spicy and mild.",
        12: "Ask concierge about best viewing spot for Saturday's drone show - hotel terrace may be perfect!",
        13: "Saturday drone shows usually start around 8pm - arrive 45 minutes early for best positions!",
        14: "Wulong is remote - limited DiDi availability. Arrange return transport in advance!",
        15: "Book private car transfer from Wulong to Chongqing Airport in advance - essential for your flight!",
        16: "Huaqiangbei can be overwhelming - go with a list. Prices negotiable - start at 50% of asking!",
        17: "Bring cash for wholesale markets - many don't accept cards. Have hotel address in Chinese.",
        18: "Beijing will be cold in late January! Prepare warm layers especially for Great Wall.",
        19: "January at the Great Wall is COLD (-5°C to 5°C). Multiple warm layers, hat, gloves essential!",
        20: "Book Forbidden City tickets on official website at least 1 day ahead - they WILL sell out!",
        21: "Pack tonight - train to Shanghai departs 10:00 tomorrow. Leave hotel by 08:45.",
        22: "Early morning flight tomorrow! Pack tonight and arrange DiDi for 07:00 departure.",
        23: "Light day - just transfer and rest before final flight home tomorrow.",
        24: "Congratulations on completing your honeymoon! Time to share photos and cherish memories!"
    }
};


// ============ CHECKLIST DATA ============
const CHECKLIST_STORAGE_KEY = 'china-honeymoon-checklist-v1';

const CHECKLIST_SECTIONS = [
    {
        id: "docs",
        title: "📄 Documents & Essentials",
        items: [
            { id: "docs_passports", title: "Passports", sub: "Valid 6+ months beyond Feb 4, 2026 with blank visa pages" },
            { id: "docs_visa", title: "China Tourist Visa (L Visa)", sub: "Apply 2–4 weeks in advance" },
            { id: "docs_printed_confirmations", title: "Printed booking confirmations", sub: "Flights, hotels, trains" },
            { id: "docs_hotel_addresses_cn", title: "Hotel addresses printed in Chinese characters" },
            { id: "docs_insurance", title: "Travel insurance documents", sub: "Include medical evacuation coverage" },
            { id: "docs_digital_backup", title: "Digital backup of all documents", sub: "Save in cloud storage" },
            { id: "docs_photocopies", title: "Physical photocopies", sub: "Stored separately from originals" },
            { id: "docs_emergency_card", title: "Emergency contact card", sub: "UK Embassy Beijing: +86-10-5192-4000" },
            { id: "docs_bank_notify", title: "Credit/debit cards", sub: "Notify bank of travel dates" },
            { id: "docs_cny_cash", title: "Chinese Yuan (CNY)", sub: "Small amount for initial expenses" },
            { id: "docs_gbp_cash", title: "British Pounds", sub: "For UK legs of journey" }
        ]
    },
    {
        id: "apps",
        title: "📱 Apps to Download & Set Up",
        items: [
            { id: "apps_alipay", title: "Alipay", sub: "Link international card (essential for payments & DiDi)" },
            { id: "apps_didi", title: "DiDi", sub: "Test login before departure" },
            { id: "apps_wechat", title: "WeChat", sub: "Useful for local communication" },
            { id: "apps_translate", title: "Google Translate", sub: "Download Chinese offline language pack" },
            { id: "apps_trip", title: "Trip.com", sub: "Access your bookings" },
            { id: "apps_maps", title: "Maps.me or Amap", sub: "Offline maps (Google Maps limited in China)" },
            { id: "apps_vpn", title: "VPN app", sub: "For Gmail, Google, WhatsApp, Instagram access" }
        ]
    },
    {
        id: "tech",
        title: "🔌 Tech & Gadgets",
        items: [
            { id: "tech_adapter", title: "Universal power adapter", sub: "China uses Type A/C/I (220V)" },
            { id: "tech_powerbank", title: "Portable power bank", sub: "10,000+ mAh recommended" },
            { id: "tech_chargers", title: "Phone chargers and cables" },
            { id: "tech_camera", title: "Camera + extra memory cards" },
            { id: "tech_headphones", title: "Headphones", sub: "For flights and train journeys" }
        ]
    },
    {
        id: "health",
        title: "💊 Health & Toiletries",
        items: [
            { id: "health_prescriptions", title: "Prescription medications", sub: "With doctor's letter for customs" },
            { id: "health_firstaid", title: "Basic first aid kit", sub: "Plasters, pain relief, antiseptic" },
            { id: "health_antidiarrhea", title: "Anti-diarrhea medication" },
            { id: "health_sanitizer", title: "Hand sanitizer" },
            { id: "health_tissues", title: "Tissues/toilet paper", sub: "Many public toilets don't provide" },
            { id: "health_wetwipes", title: "Wet wipes" },
            { id: "health_sunscreen", title: "Sunscreen and lip balm", sub: "Winter sun + altitude" },
            { id: "health_toiletries", title: "Personal toiletries", sub: "Limited availability in Wulong" }
        ]
    },
    {
        id: "pre",
        title: "✅ Pre-Departure Tasks",
        items: [
            { id: "pre_ba_checkin", title: "Check in online for BA flight", sub: "Opens Jan 13" },
            { id: "pre_harmona_pickup", title: "Confirm Harmona Resort airport pickup arrangement" },
            { id: "pre_book_cq_wulong_train", title: "Book Chongqing → Wulong train", sub: "Jan 25" },
            { id: "pre_wulong_transfer", title: "Arrange Wulong → Chongqing Airport private transfer" },
            { id: "pre_fcdo", title: "Register with FCDO for travel alerts" },
            { id: "pre_inform_neighbours", title: "Inform neighbours/family of travel dates" },
            { id: "pre_home_security", title: "Arrange home security/mail collection" }
        ]
    },
    {
        id: "clothing",
        title: "🧳 Clothing Packing List",
        groups: [
            {
                id: "clothing_base",
                title: "Base Layers & Underwear",
                items: [
                    { id: "clothing_thermal_tops", title: "Thermal base layer tops", sub: "Qty: 3 • Essential for Beijing & Zhangjiajie" },
                    { id: "clothing_thermal_bottoms", title: "Thermal base layer bottoms", sub: "Qty: 2 • Wear under trousers in cold areas" },
                    { id: "clothing_underwear", title: "Underwear", sub: "Qty: 10 • Pack for ~10 days, use hotel laundry" },
                    { id: "clothing_socks_thermal", title: "Socks - thermal/wool", sub: "Qty: 4 pairs • For outdoor days & hiking" },
                    { id: "clothing_socks_regular", title: "Socks - regular", sub: "Qty: 6 pairs • Everyday wear" }
                ]
            },
            {
                id: "clothing_tops",
                title: "Tops",
                items: [
                    { id: "clothing_long_sleeve", title: "Long-sleeve shirts/blouses", sub: "Qty: 4 • Mix of casual & smart casual" },
                    { id: "clothing_tshirts", title: "T-shirts/short-sleeve tops", sub: "Qty: 3 • For layering & warmer Shenzhen" },
                    { id: "clothing_fleece", title: "Fleece mid-layer / sweater", sub: "Qty: 2 • Key layering piece" },
                    { id: "clothing_smart_top", title: "Smart evening top", sub: "Qty: 2 • Hotel restaurants & spa dinners" }
                ]
            },
            {
                id: "clothing_bottoms",
                title: "Bottoms",
                items: [
                    { id: "clothing_trousers_casual", title: "Trousers - casual/travel", sub: "Qty: 2 • Comfortable for sightseeing" },
                    { id: "clothing_trousers_smart", title: "Trousers - smart casual", sub: "Qty: 1 • Evening dinners & nice venues" },
                    { id: "clothing_trousers_hiking", title: "Hiking/outdoor trousers", sub: "Qty: 1 • Zhangjiajie, Wulong, Great Wall" },
                    { id: "clothing_jeans", title: "Jeans", sub: "Qty: 1 • Versatile everyday option" }
                ]
            },
            {
                id: "clothing_outerwear",
                title: "Outerwear & Cold Weather",
                items: [
                    { id: "clothing_winter_coat", title: "Heavy winter coat (down/insulated)", sub: "Qty: 1 • Essential - Beijing can be -5°C" },
                    { id: "clothing_light_jacket", title: "Lighter jacket/layer", sub: "Qty: 1 • For milder Shenzhen days (~15°C)" },
                    { id: "clothing_waterproof", title: "Waterproof outer layer", sub: "Qty: 1 • Rain protection for hiking" },
                    { id: "clothing_hat", title: "Warm hat/beanie", sub: "Qty: 1 • Great Wall & outdoor days" },
                    { id: "clothing_gloves", title: "Warm gloves", sub: "Qty: 1 pair • Touch-screen compatible recommended" },
                    { id: "clothing_scarf", title: "Scarf", sub: "Qty: 1 • Warmth & versatility" }
                ]
            },
            {
                id: "clothing_footwear",
                title: "Footwear",
                items: [
                    { id: "clothing_boots", title: "Waterproof walking boots/shoes", sub: "Qty: 1 pair • Essential - hiking & wet conditions" },
                    { id: "clothing_walk_shoes", title: "Comfortable walking shoes", sub: "Qty: 1 pair • City sightseeing" },
                    { id: "clothing_smart_shoes", title: "Smart casual shoes", sub: "Qty: 1 pair • Evening dining & hotels" },
                    { id: "clothing_slippers", title: "Slippers/flip-flops", sub: "Qty: 1 pair • Hotel rooms & spa areas" }
                ]
            },
            {
                id: "clothing_sleep_spa",
                title: "Sleepwear & Spa",
                items: [
                    { id: "clothing_pyjamas", title: "Pyjamas/sleepwear", sub: "Qty: 2 sets • Comfortable for hotels" },
                    { id: "clothing_swimwear", title: "Swimwear", sub: "Qty: 1–2 • Hotel pools & spa facilities" }
                ]
            },
            {
                id: "clothing_accessories",
                title: "Accessories",
                items: [
                    { id: "clothing_belt", title: "Belt", sub: "Qty: 1" },
                    { id: "clothing_sunglasses", title: "Sunglasses", sub: "Qty: 1 • Winter sun, especially at altitude" },
                    { id: "clothing_daypack", title: "Small daypack/backpack", sub: "Qty: 1 • Daily sightseeing essentials" },
                    { id: "clothing_neck_pillow", title: "Neck pillow", sub: "Qty: 1 • Long flights & train journeys" }
                ]
            }
        ]
    }
];

function getAllChecklistItems() {
    const items = [];
    for (const section of CHECKLIST_SECTIONS) {
        if (section.items) items.push(...section.items.map(i => ({ ...i, sectionId: section.id, sectionTitle: section.title })));
        if (section.groups) {
            for (const g of section.groups) {
                items.push(...g.items.map(i => ({ ...i, sectionId: section.id, sectionTitle: section.title, groupId: g.id, groupTitle: g.title })));
            }
        }
    }
    return items;
}

function loadChecklistState() {
    try {
        return JSON.parse(localStorage.getItem(CHECKLIST_STORAGE_KEY) || '{}') || {};
    } catch {
        return {};
    }
}

function saveChecklistState(state) {
    localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(state));
}

function setChecklistItem(id, checked) {
    const state = loadChecklistState();
    state[id] = !!checked;
    saveChecklistState(state);
}

function resetChecklist() {
    localStorage.removeItem(CHECKLIST_STORAGE_KEY);
}

function calcChecklistProgress() {
    const state = loadChecklistState();
    const all = getAllChecklistItems();
    const total = all.length;
    const done = all.reduce((acc, item) => acc + (state[item.id] ? 1 : 0), 0);
    const pct = total ? Math.round((done / total) * 100) : 0;
    return { total, done, pct };
}

function renderChecklistSummary() {
    const { total, done, pct } = calcChecklistProgress();
    const summary = document.getElementById('checklistSummary');
    if (!summary) return;
    summary.innerHTML = `
        <div class="checklist-summary-top">
            <h4>${done} / ${total} complete</h4>
            <span class="pill">${pct}%</span>
        </div>
        <div class="checklist-progress"><div class="checklist-progress-bar" style="width:${pct}%"></div></div>
        <div class="checklist-meta">
            <span>Tip: everything is saved offline on this device</span>
            <span>${pct === 100 ? 'Ready to go ✨' : 'Keep going 💪'}</span>
        </div>
    `;
}

function renderChecklistSection(section, state) {
    // Standard section
    if (section.items) {
        const total = section.items.length;
        const done = section.items.reduce((a, i) => a + (state[i.id] ? 1 : 0), 0);
        return `
            <div class="checklist-category" data-section="${section.id}">
                <div class="checklist-category-header">
                    <h3>${section.title}</h3>
                    <div class="count">${done}/${total}</div>
                </div>
                ${section.items.map(item => `
                    <label class="check-item ${state[item.id] ? 'completed' : ''}">
                        <input type="checkbox" data-check-id="${item.id}" ${state[item.id] ? 'checked' : ''} />
                        <div class="check-text">
                            <div class="check-title">${item.title}</div>
                            ${item.sub ? `<div class="check-sub">${item.sub}</div>` : ''}
                        </div>
                    </label>
                `).join('')}
            </div>
        `;
    }

    // Grouped (clothing)
    if (section.groups) {
        const htmlGroups = section.groups.map(g => {
            const total = g.items.length;
            const done = g.items.reduce((a, i) => a + (state[i.id] ? 1 : 0), 0);
            return `
                <div class="checklist-category" data-section="${section.id}" data-group="${g.id}">
                    <div class="checklist-category-header">
                        <h3>${section.title} • ${g.title}</h3>
                        <div class="count">${done}/${total}</div>
                    </div>
                    ${g.items.map(item => `
                        <label class="check-item ${state[item.id] ? 'completed' : ''}">
                            <input type="checkbox" data-check-id="${item.id}" ${state[item.id] ? 'checked' : ''} />
                            <div class="check-text">
                                <div class="check-title">${item.title}</div>
                                ${item.sub ? `<div class="check-sub">${item.sub}</div>` : ''}
                            </div>
                        </label>
                    `).join('')}
                </div>
            `;
        }).join('');
        return htmlGroups;
    }

    return '';
}

function renderChecklistView() {
    const container = document.getElementById('checklistContent');
    if (!container) return;

    const state = loadChecklistState();
    renderChecklistSummary();

    container.innerHTML = CHECKLIST_SECTIONS.map(section => renderChecklistSection(section, state)).join('');

    // Wire up checkbox listeners
    container.querySelectorAll('input[type="checkbox"][data-check-id]').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const id = e.target.getAttribute('data-check-id');
            setChecklistItem(id, e.target.checked);
            renderChecklistView(); // small list - quick re-render keeps UI consistent
        });
    });

    // Reset button
    document.getElementById('resetChecklistBtn')?.addEventListener('click', () => {
        resetChecklist();
        renderChecklistView();
    }, { once: true });
}

// ============ APP STATE ============
let currentView = 'homeView';
let selectedDay = null;
let deferredPrompt = null;

// ============ UTILITY FUNCTIONS ============
function formatDate(date) {
    return date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
}

function getDayOfTrip(date = new Date()) {
    const tripStart = new Date(TRIP_DATA.startDate);
    tripStart.setHours(0, 0, 0, 0);
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);
    const diffTime = checkDate - tripStart;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    if (diffDays < 1) return { day: 0, status: 'before' };
    if (diffDays > TRIP_DATA.totalDays) return { day: TRIP_DATA.totalDays, status: 'after' };
    return { day: diffDays, status: 'during' };
}

function getCurrentCity(dayNum) {
    for (let i = TRIP_DATA.cities.length - 1; i >= 0; i--) {
        if (dayNum >= TRIP_DATA.cities[i].startDay) return TRIP_DATA.cities[i];
    }
    return TRIP_DATA.cities[0];
}

function getNextTransport(dayNum) {
    for (const t of TRIP_DATA.transport) {
        if (t.day >= dayNum) return t;
    }
    return TRIP_DATA.transport[TRIP_DATA.transport.length - 1];
}

function getWeatherIcon(code) {
    const icons = { 0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️', 45: '🌫️', 48: '🌫️', 51: '🌧️', 53: '🌧️', 55: '🌧️', 61: '🌧️', 63: '🌧️', 65: '🌧️', 71: '🌨️', 73: '🌨️', 75: '🌨️', 80: '🌦️', 81: '🌦️', 82: '🌦️', 95: '⛈️', 96: '⛈️', 99: '⛈️' };
    return icons[code] || '🌡️';
}

function getWeatherDescription(code) {
    const descriptions = { 0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast', 45: 'Foggy', 48: 'Foggy', 51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle', 61: 'Light rain', 63: 'Rain', 65: 'Heavy rain', 71: 'Light snow', 73: 'Snow', 75: 'Heavy snow', 80: 'Showers', 81: 'Moderate showers', 82: 'Heavy showers', 95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Severe thunderstorm' };
    return descriptions[code] || 'Unknown';
}

// ============ WEATHER API ============
async function fetchWeather(lat, lon) {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,apparent_temperature&timezone=auto`;
        const response = await fetch(url);
        return (await response.json()).current;
    } catch (error) {
        console.error('Weather fetch error:', error);
        return null;
    }
}

// ============ RENDER FUNCTIONS ============
function renderHeader(dayInfo, city) {
    document.getElementById('currentDate').textContent = formatDate(new Date());
    document.getElementById('locationIcon').textContent = city.emoji;
    document.getElementById('currentCity').textContent = city.name;
    document.getElementById('cityDates').textContent = dayInfo.status === 'before' ? 'Trip starts soon!' : dayInfo.status === 'after' ? 'Trip completed! 🎉' : `${city.dates} • ${city.days} day${city.days > 1 ? 's' : ''}`;
}

function renderDayCounter(dayInfo) {
    const dayNum = document.getElementById('dayNumber');
    const dayLabel = document.getElementById('dayLabel');
    const progressBar = document.getElementById('progressBar');
    if (dayInfo.status === 'before') {
        const daysUntil = Math.ceil((TRIP_DATA.startDate - new Date()) / (1000 * 60 * 60 * 24));
        dayNum.textContent = daysUntil;
        dayLabel.textContent = 'days until your honeymoon';
        progressBar.style.width = '0%';
    } else if (dayInfo.status === 'after') {
        dayNum.textContent = '✓';
        dayLabel.textContent = 'Trip complete!';
        progressBar.style.width = '100%';
    } else {
        dayNum.textContent = dayInfo.day;
        dayLabel.textContent = `of ${TRIP_DATA.totalDays} days`;
        progressBar.style.width = `${(dayInfo.day / TRIP_DATA.totalDays) * 100}%`;
    }
}

async function renderWeather(city) {
    const weather = await fetchWeather(city.weather.lat, city.weather.lon);
    document.getElementById('weatherLocation').textContent = city.name;
    if (weather) {
        document.getElementById('weatherIcon').textContent = getWeatherIcon(weather.weather_code);
        document.getElementById('weatherTemp').textContent = `${Math.round(weather.temperature_2m)}°C`;
        document.getElementById('weatherDesc').textContent = getWeatherDescription(weather.weather_code);
        document.getElementById('weatherHumidity').textContent = `${weather.relative_humidity_2m}%`;
        document.getElementById('weatherWind').textContent = `${Math.round(weather.wind_speed_10m)} km/h`;
        document.getElementById('weatherFeels').textContent = `Feels ${Math.round(weather.apparent_temperature)}°C`;
    } else {
        document.getElementById('weatherDesc').textContent = 'Weather unavailable';
    }
}

function renderTransport(dayNum) {
    const transport = getNextTransport(dayNum);
    document.getElementById('transportIcon').textContent = transport.icon;
    document.getElementById('transportRoute').textContent = `${transport.from} → ${transport.to}`;
    document.getElementById('transportInfo').textContent = `${transport.company} • ${transport.details}`;
    document.getElementById('transportTime').textContent = transport.time;
    document.getElementById('transportDate').textContent = transport.date;
}

function renderCities(currentDayNum) {
    const container = document.getElementById('cityScroll');
    container.innerHTML = '';
    TRIP_DATA.cities.forEach((city) => {
        const card = document.createElement('div');
        card.className = 'city-card';
        if (currentDayNum >= city.startDay && currentDayNum <= city.endDay) card.classList.add('active');
        else if (currentDayNum > city.endDay) card.classList.add('completed');
        card.innerHTML = `<div class="city-emoji">${city.emoji}</div><div class="city-name">${city.name}</div><div class="city-dates">${city.dates}</div><div class="city-days">${city.days} day${city.days > 1 ? 's' : ''}</div>`;
        card.addEventListener('click', () => { selectedDay = city.startDay; switchView('scheduleView'); renderScheduleView(city.startDay); });
        container.appendChild(card);
    });
}

function renderActivities(dayNum) {
    const container = document.getElementById('activitiesList');
    const activities = TRIP_DATA.activities[dayNum] || [];
    document.getElementById('activitiesTitle').textContent = dayNum === getDayOfTrip().day ? "Today's Activities" : `Day ${dayNum} Activities`;
    if (activities.length === 0) { container.innerHTML = '<p style="color:var(--text-light);padding:15px;">No activities scheduled</p>'; return; }
    container.innerHTML = activities.map(act => `<div class="activity-card ${act.romantic ? 'activity-romantic' : ''}"><div class="activity-time">${act.time}</div><div class="activity-content"><h4>${act.title}${act.romantic ? '<span class="romantic-badge">💕 Romantic</span>' : ''}</h4><p>${act.desc}</p></div></div>`).join('');
}

function renderTip(dayNum) {
    document.getElementById('tipContent').textContent = TRIP_DATA.tips[dayNum] || "Enjoy your honeymoon adventure!";
}

function renderHotel(city) {
    document.getElementById('hotelName').textContent = city.hotel.name;
    document.getElementById('hotelAddress').textContent = city.hotel.address;
    const chineseEl = document.getElementById('hotelChinese');
    if (city.hotel.chinese) { chineseEl.textContent = city.hotel.chinese; chineseEl.style.display = 'block'; }
    else { chineseEl.style.display = 'none'; }
}

function renderHomeView() {
    const dayInfo = getDayOfTrip();
    const currentDay = dayInfo.status === 'during' ? dayInfo.day : 1;
    const city = getCurrentCity(currentDay);
    renderHeader(dayInfo, city);
    renderDayCounter(dayInfo);
    renderWeather(city);
    renderTransport(currentDay);
    renderCities(currentDay);
    renderActivities(currentDay);
    renderTip(currentDay);
    renderHotel(city);
}

function renderDaySelector(currentDay) {
    const container = document.getElementById('daySelector');
    container.innerHTML = '';
    const today = getDayOfTrip().day;
    for (let i = 1; i <= TRIP_DATA.totalDays; i++) {
        const btn = document.createElement('button');
        btn.className = 'day-btn';
        if (i === currentDay) btn.classList.add('active');
        if (i === today) btn.classList.add('today');
        const date = new Date(TRIP_DATA.startDate);
        date.setDate(date.getDate() + i - 1);
        btn.innerHTML = `<div class="day-num">${i}</div><div class="day-name">${date.toLocaleDateString('en-GB', { weekday: 'short' })}</div>`;
        btn.addEventListener('click', () => renderScheduleView(i));
        container.appendChild(btn);
    }
    setTimeout(() => { const activeBtn = container.querySelector('.active'); if (activeBtn) activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }); }, 100);
}

function renderScheduleView(dayNum) {
    selectedDay = dayNum;
    const city = getCurrentCity(dayNum);
    renderDaySelector(dayNum);
    const content = document.getElementById('scheduleContent');
    const activities = TRIP_DATA.activities[dayNum] || [];
    const tip = TRIP_DATA.tips[dayNum];
    const date = new Date(TRIP_DATA.startDate);
    date.setDate(date.getDate() + dayNum - 1);
    content.innerHTML = `
        <div class="section" style="margin-top:0;"><div class="current-location" style="background:var(--primary);margin:15px;border-radius:12px;padding:15px;"><span class="location-icon">${city.emoji}</span><div class="location-info"><h2 style="color:#fff;">${city.name}</h2><p style="color:rgba(255,255,255,.9);">${formatDate(date)} • Day ${dayNum}</p></div></div></div>
        ${activities.length > 0 ? `<div class="section"><div class="section-header"><h3>Activities</h3></div>${activities.map(act => `<div class="activity-card ${act.romantic ? 'activity-romantic' : ''}"><div class="activity-time">${act.time}</div><div class="activity-content"><h4>${act.title}${act.romantic ? '<span class="romantic-badge">💕 Romantic</span>' : ''}</h4><p>${act.desc}</p></div></div>`).join('')}</div>` : ''}
        ${tip ? `<div class="tip-card"><span class="tip-icon">💡</span><div class="tip-content">${tip}</div></div>` : ''}
        <div class="hotel-card"><div class="hotel-header"><span class="hotel-icon">🏨</span><div><div class="hotel-name">${city.hotel.name}</div><div class="hotel-address">${city.hotel.address}</div></div></div>${city.hotel.chinese ? `<div class="hotel-chinese">${city.hotel.chinese}</div>` : ''}</div>`;
}

function renderAllDaysView() {
    const container = document.getElementById('allDaysList');
    const today = getDayOfTrip().day;
    let currentCity = null;
    let html = '';
    for (let i = 1; i <= TRIP_DATA.totalDays; i++) {
        const city = getCurrentCity(i);
        const date = new Date(TRIP_DATA.startDate);
        date.setDate(date.getDate() + i - 1);
        const activities = TRIP_DATA.activities[i] || [];
        const firstActivity = activities[0];
        if (city.name !== currentCity) {
            if (currentCity) html += '</div>';
            html += `<div class="day-group"><div class="day-group-header">${city.emoji} ${city.name} • ${city.dates}</div>`;
            currentCity = city.name;
        }
        html += `<div class="day-list-item ${i === today ? 'current' : ''}" data-day="${i}"><div class="day-list-number ${i === today ? 'current' : ''}"><span class="num">${i}</span><span class="label">Day</span></div><div class="day-list-info"><h4>${formatDate(date)}</h4><p>${firstActivity ? firstActivity.title : 'Travel day'}</p></div><span class="day-list-emoji">${city.emoji}</span></div>`;
    }
    html += '</div>';
    container.innerHTML = html;
    container.querySelectorAll('.day-list-item').forEach(item => {
        item.addEventListener('click', () => { switchView('scheduleView'); renderScheduleView(parseInt(item.dataset.day)); });
    });
}

// ============ NAVIGATION ============
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    document.querySelector(`[data-view="${viewId}"]`).classList.add('active');
    currentView = viewId;
    if (viewId === 'homeView') renderHomeView();
    else if (viewId === 'scheduleView') { const day = selectedDay || getDayOfTrip().day || 1; renderScheduleView(day); }
    else if (viewId === 'checklistView') renderChecklistView();
    else if (viewId === 'allDaysView') renderAllDaysView();
}

// ============ PWA INSTALL ============
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredPrompt = e; document.getElementById('installBanner').classList.add('show'); });
document.getElementById('installBtn')?.addEventListener('click', async () => { if (deferredPrompt) { deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; document.getElementById('installBanner').classList.remove('show'); } });
document.getElementById('closeBanner')?.addEventListener('click', () => { document.getElementById('installBanner').classList.remove('show'); });

// ============ INITIALIZATION ============
document.querySelectorAll('.nav-item').forEach(btn => { btn.addEventListener('click', () => switchView(btn.dataset.view)); });
if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed')); }
renderHomeView();
