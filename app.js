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


// ============ TRANSLATIONS DATA ============
const TRANSLATIONS_DATA = {
    general: {
        title: "👋 General Phrases",
        emoji: "👋",
        phrases: [
            { english: "Hello", chinese: "你好", pinyin: "Nǐ hǎo" },
            { english: "Good morning", chinese: "早上好", pinyin: "Zǎoshang hǎo" },
            { english: "Good evening", chinese: "晚上好", pinyin: "Wǎnshang hǎo" },
            { english: "Thank you", chinese: "谢谢", pinyin: "Xièxiè" },
            { english: "Thank you very much", chinese: "非常感谢", pinyin: "Fēicháng gǎnxiè" },
            { english: "You're welcome", chinese: "不客气", pinyin: "Bù kèqì" },
            { english: "Excuse me / Sorry", chinese: "对不起", pinyin: "Duìbùqǐ" },
            { english: "I'm sorry", chinese: "抱歉", pinyin: "Bàoqiàn" },
            { english: "It's okay / No problem", chinese: "没关系", pinyin: "Méi guānxi" },
            { english: "Yes", chinese: "是", pinyin: "Shì" },
            { english: "No", chinese: "不是", pinyin: "Bù shì" },
            { english: "Okay / Good", chinese: "好", pinyin: "Hǎo" },
            { english: "Please", chinese: "请", pinyin: "Qǐng" },
            { english: "Goodbye", chinese: "再见", pinyin: "Zàijiàn" },
            { english: "See you later", chinese: "待会见", pinyin: "Dāihuì jiàn" },
            { english: "I don't understand", chinese: "我不明白", pinyin: "Wǒ bù míngbái" },
            { english: "Do you speak English?", chinese: "你会说英语吗？", pinyin: "Nǐ huì shuō Yīngyǔ ma?" },
            { english: "I don't speak Chinese", chinese: "我不会说中文", pinyin: "Wǒ bù huì shuō Zhōngwén" },
            { english: "Can you help me?", chinese: "你能帮我吗？", pinyin: "Nǐ néng bāng wǒ ma?" },
            { english: "What is this?", chinese: "这是什么？", pinyin: "Zhè shì shénme?" }
        ]
    },
    travel: {
        title: "✈️ Travel & Directions",
        emoji: "✈️",
        phrases: [
            { english: "Where is...?", chinese: "...在哪里？", pinyin: "...zài nǎlǐ?" },
            { english: "Where is the bathroom?", chinese: "厕所在哪里？", pinyin: "Cèsuǒ zài nǎlǐ?" },
            { english: "Where is the hotel?", chinese: "酒店在哪里？", pinyin: "Jiǔdiàn zài nǎlǐ?" },
            { english: "Where is the train station?", chinese: "火车站在哪里？", pinyin: "Huǒchē zhàn zài nǎlǐ?" },
            { english: "Where is the airport?", chinese: "机场在哪里？", pinyin: "Jīchǎng zài nǎlǐ?" },
            { english: "Are we close?", chinese: "我们快到了吗？", pinyin: "Wǒmen kuài dào le ma?" },
            { english: "How far is it?", chinese: "有多远？", pinyin: "Yǒu duō yuǎn?" },
            { english: "How long does it take?", chinese: "要多长时间？", pinyin: "Yào duō cháng shíjiān?" },
            { english: "Please take me to...", chinese: "请带我去...", pinyin: "Qǐng dài wǒ qù..." },
            { english: "I want to go to...", chinese: "我想去...", pinyin: "Wǒ xiǎng qù..." },
            { english: "Stop here please", chinese: "请在这里停", pinyin: "Qǐng zài zhèlǐ tíng" },
            { english: "Left", chinese: "左", pinyin: "Zuǒ" },
            { english: "Right", chinese: "右", pinyin: "Yòu" },
            { english: "Straight ahead", chinese: "直走", pinyin: "Zhí zǒu" },
            { english: "Turn left", chinese: "左转", pinyin: "Zuǒ zhuǎn" },
            { english: "Turn right", chinese: "右转", pinyin: "Yòu zhuǎn" },
            { english: "How much is the taxi?", chinese: "出租车多少钱？", pinyin: "Chūzū chē duōshao qián?" },
            { english: "Can I see the map?", chinese: "我能看看地图吗？", pinyin: "Wǒ néng kànkan dìtú ma?" },
            { english: "I'm lost", chinese: "我迷路了", pinyin: "Wǒ mílù le" },
            { english: "What time does it open/close?", chinese: "什么时候开门/关门？", pinyin: "Shénme shíhou kāimén/guānmén?" }
        ]
    },
    service: {
        title: "🍜 Service Interactions",
        emoji: "🍜",
        phrases: [
            { english: "I would like...", chinese: "我想要...", pinyin: "Wǒ xiǎng yào..." },
            { english: "Can I have the menu?", chinese: "能给我菜单吗？", pinyin: "Néng gěi wǒ càidān ma?" },
            { english: "I want to order", chinese: "我要点餐", pinyin: "Wǒ yào diǎn cán" },
            { english: "This one please", chinese: "我要这个", pinyin: "Wǒ yào zhège" },
            { english: "I don't eat meat", chinese: "我不吃肉", pinyin: "Wǒ bù chī ròu" },
            { english: "I'm vegetarian", chinese: "我是素食者", pinyin: "Wǒ shì sùshí zhě" },
            { english: "Not spicy", chinese: "不要辣", pinyin: "Bù yào là" },
            { english: "A little spicy", chinese: "微辣", pinyin: "Wēi là" },
            { english: "Very spicy", chinese: "很辣", pinyin: "Hěn là" },
            { english: "Water please", chinese: "请给我水", pinyin: "Qǐng gěi wǒ shuǐ" },
            { english: "The bill please", chinese: "买单", pinyin: "Mǎidān" },
            { english: "How much is this?", chinese: "这个多少钱？", pinyin: "Zhège duōshao qián?" },
            { english: "Too expensive", chinese: "太贵了", pinyin: "Tài guì le" },
            { english: "Can you make it cheaper?", chinese: "能便宜一点吗？", pinyin: "Néng piányí yīdiǎn ma?" },
            { english: "I'll take it", chinese: "我买了", pinyin: "Wǒ mǎi le" },
            { english: "Can I try this?", chinese: "我能试试吗？", pinyin: "Wǒ néng shì shì ma?" },
            { english: "Do you accept credit cards?", chinese: "可以用信用卡吗？", pinyin: "Kěyǐ yòng xìnyòngkǎ ma?" },
            { english: "Can I use Alipay?", chinese: "可以用支付宝吗？", pinyin: "Kěyǐ yòng Zhīfùbǎo ma?" },
            { english: "Two tickets please", chinese: "两张票", pinyin: "Liǎng zhāng piào" },
            { english: "One more please", chinese: "再来一个", pinyin: "Zài lái yīgè" },
            { english: "That's all", chinese: "就这些", pinyin: "Jiù zhèxiē" },
            { english: "Delicious!", chinese: "好吃！", pinyin: "Hǎochī!" }
        ]
    }
};

// ============ CHECKLIST DATA ============
const CHECKLIST_STORAGE_KEY = 'china-honeymoon-checklist-v1';
const CHECKLIST_CUSTOM_TASKS_KEY = 'china-honeymoon-checklist-custom-v1';

let checklistAddOpen = false;

function loadCustomChecklistTasks() {
    try {
        const raw = localStorage.getItem(CHECKLIST_CUSTOM_TASKS_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveCustomChecklistTasks(tasks) {
    localStorage.setItem(CHECKLIST_CUSTOM_TASKS_KEY, JSON.stringify(tasks));
}

function createCustomTaskId() {
    return `custom_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function addCustomChecklistTask(title, sub = '') {
    const t = String(title || '').trim();
    const s = String(sub || '').trim();
    if (!t) return false;

    const tasks = loadCustomChecklistTasks();
    tasks.unshift({ id: createCustomTaskId(), title: t, sub: s, createdAt: Date.now() });
    saveCustomChecklistTasks(tasks);
    return true;
}

function deleteCustomChecklistTask(id) {
    const tasks = loadCustomChecklistTasks().filter(t => t.id !== id);
    saveCustomChecklistTasks(tasks);

    // Also clear completion state for this task
    const state = loadChecklistState();
    if (state && Object.prototype.hasOwnProperty.call(state, id)) {
        delete state[id];
        saveChecklistState(state);
    }
}

// ============ ACTIVITIES DATA ============
const ACTIVITIES_MODIFICATIONS_KEY = 'china-honeymoon-activities-mods-v1';
const ACTIVITIES_CUSTOM_KEY = 'china-honeymoon-activities-custom-v1';

function loadActivityModifications() {
    try {
        const raw = localStorage.getItem(ACTIVITIES_MODIFICATIONS_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function saveActivityModifications(mods) {
    try {
        localStorage.setItem(ACTIVITIES_MODIFICATIONS_KEY, JSON.stringify(mods));
        return true;
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            alert('Storage limit reached. Please delete some activities.');
        }
        return false;
    }
}

function loadCustomActivities() {
    try {
        const raw = localStorage.getItem(ACTIVITIES_CUSTOM_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function saveCustomActivities(custom) {
    try {
        localStorage.setItem(ACTIVITIES_CUSTOM_KEY, JSON.stringify(custom));
        return true;
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            alert('Storage limit reached. Please delete some activities.');
        }
        return false;
    }
}

function createActivityId() {
    return `custom_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function parseTime(timeStr) {
    const [hours, mins] = timeStr.split(':').map(Number);
    return hours * 60 + mins;
}

function getMergedActivities(dayNum) {
    const hardcoded = TRIP_DATA.activities[dayNum] || [];
    const mods = loadActivityModifications();
    const custom = loadCustomActivities();

    const dayMods = mods[dayNum] || { edits: {}, deletions: [] };
    const dayCustom = custom[dayNum] || [];

    // Step 1: Apply deletions and edits to hardcoded
    let merged = hardcoded
        .map((act, idx) => {
            // Check if deleted
            if (dayMods.deletions.includes(idx)) return null;
            // Check if edited
            if (dayMods.edits[idx]) {
                return { ...act, ...dayMods.edits[idx], index: idx, isEdited: true };
            }
            return { ...act, index: idx, isHardcoded: true };
        })
        .filter(act => act !== null);

    // Step 2: Append custom activities
    const customWithMeta = dayCustom.map(act => ({ ...act, isCustom: true }));
    merged = [...merged, ...customWithMeta];

    // Step 3: Sort by time
    merged.sort((a, b) => {
        const timeA = parseTime(a.time);
        const timeB = parseTime(b.time);
        return timeA - timeB;
    });

    return merged;
}

function formatTimeInput(timeStr) {
    // Handle both "HH:MM" and browser time input format
    const match = timeStr.match(/^(\d{1,2}):(\d{2})$/);
    if (!match) return null;

    const hours = parseInt(match[1], 10);
    const mins = parseInt(match[2], 10);

    if (hours < 0 || hours > 23 || mins < 0 || mins > 59) return null;

    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

function addCustomActivity(dayNum, time, title, desc, romantic = false, venue = null) {
    const t = String(title || '').trim();
    const ti = String(time || '').trim();
    if (!t || !ti) return false;

    const formattedTime = formatTimeInput(ti);
    if (!formattedTime) return false;

    const custom = loadCustomActivities();
    if (!custom[dayNum]) custom[dayNum] = [];

    custom[dayNum].push({
        id: createActivityId(),
        time: formattedTime,
        title: t,
        desc: String(desc || '').trim(),
        romantic: !!romantic,
        venue: venue || null,
        createdAt: Date.now()
    });

    return saveCustomActivities(custom);
}

function updateHardcodedActivity(dayNum, index, time, title, desc, romantic, venue = null) {
    const formattedTime = formatTimeInput(String(time || '').trim());
    if (!formattedTime) return false;

    const mods = loadActivityModifications();
    if (!mods[dayNum]) mods[dayNum] = { edits: {}, deletions: [] };

    mods[dayNum].edits[index] = {
        time: formattedTime,
        title: String(title || '').trim(),
        desc: String(desc || '').trim(),
        romantic: !!romantic,
        venue: venue || null
    };

    return saveActivityModifications(mods);
}

function updateCustomActivity(dayNum, activityId, time, title, desc, romantic, venue = null) {
    const formattedTime = formatTimeInput(String(time || '').trim());
    if (!formattedTime) return false;

    const custom = loadCustomActivities();
    if (!custom[dayNum]) return false;

    const idx = custom[dayNum].findIndex(a => a.id === activityId);
    if (idx === -1) return false;

    custom[dayNum][idx] = {
        ...custom[dayNum][idx],
        time: formattedTime,
        title: String(title || '').trim(),
        desc: String(desc || '').trim(),
        romantic: !!romantic,
        venue: venue || null
    };

    return saveCustomActivities(custom);
}

function deleteHardcodedActivity(dayNum, index) {
    const mods = loadActivityModifications();
    if (!mods[dayNum]) mods[dayNum] = { edits: {}, deletions: [] };

    // Add to deletions if not already there
    if (!mods[dayNum].deletions.includes(index)) {
        mods[dayNum].deletions.push(index);
    }

    // Remove from edits if it was edited
    if (mods[dayNum].edits[index]) {
        delete mods[dayNum].edits[index];
    }

    return saveActivityModifications(mods);
}

function deleteCustomActivity(dayNum, activityId) {
    const custom = loadCustomActivities();
    if (!custom[dayNum]) return true;

    custom[dayNum] = custom[dayNum].filter(a => a.id !== activityId);

    // Clean up empty day arrays
    if (custom[dayNum].length === 0) {
        delete custom[dayNum];
    }

    return saveCustomActivities(custom);
}

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

    // User-added tasks
    const custom = loadCustomChecklistTasks();
    if (custom.length) {
        items.push(...custom.map(i => ({
            id: i.id,
            title: i.title,
            sub: i.sub,
            sectionId: 'custom',
            sectionTitle: '✨ My added tasks',
            isCustom: true
        })));
    }

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

function renderCustomTasksSection(tasks, state) {
    const total = tasks.length;
    const done = tasks.reduce((a, i) => a + (state[i.id] ? 1 : 0), 0);

    if (!tasks.length) {
        return `
            <div class="checklist-category" data-section="custom">
                <div class="checklist-category-header">
                    <h3>✨ My added tasks</h3>
                    <div class="count">0/0</div>
                </div>
                <div class="empty-hint">No custom tasks yet — tap <strong>+ Add</strong> above to create one.</div>
            </div>
        `;
    }

    return `
        <div class="checklist-category" data-section="custom">
            <div class="checklist-category-header">
                <h3>✨ My added tasks</h3>
                <div class="count">${done}/${total}</div>
            </div>
            ${tasks.map((item) => `
                <div class="check-item-row ${state[item.id] ? 'completed' : ''}">
                    <label class="check-item ${state[item.id] ? 'completed' : ''}">
                        <input type="checkbox" data-check-id="${item.id}" ${state[item.id] ? 'checked' : ''} />
                        <div class="check-text">
                            <div class="check-title">${item.title}</div>
                            ${item.sub ? `<div class="check-sub">${item.sub}</div>` : ''}
                        </div>
                    </label>
                    <button class="icon-btn" data-delete-id="${item.id}" aria-label="Delete task" title="Delete">🗑️</button>
                </div>
            `).join('')}
        </div>
    `;
}

function renderChecklistAddCard() {
    const wrap = document.getElementById('checklistAddWrap');
    if (!wrap) return;

    if (!checklistAddOpen) {
        wrap.innerHTML = '';
        return;
    }

    wrap.innerHTML = `
        <div class="checklist-add" id="checklistAddCard">
            <div><strong>Add a task</strong></div>
            <div class="row">
                <input id="newTaskTitle" type="text" placeholder="Task title (e.g., Buy travel adaptors)" maxlength="120" />
            </div>
            <div class="row">
                <input id="newTaskNote" type="text" placeholder="Optional note (e.g., 2x, get from Boots)" maxlength="160" />
            </div>
            <div class="row">
                <button class="small-btn primary-btn" id="saveTaskBtn">Add task</button>
                <button class="small-btn" id="cancelTaskBtn">Cancel</button>
            </div>
            <div class="helper">Saved offline on this device.</div>
        </div>
    `;

    const titleEl = document.getElementById('newTaskTitle');
    const noteEl = document.getElementById('newTaskNote');
    titleEl?.focus();

    document.getElementById('cancelTaskBtn')?.addEventListener('click', () => {
        checklistAddOpen = false;
        renderChecklistView();
    }, { once: true });

    const doSave = () => {
        const ok = addCustomChecklistTask(titleEl?.value || '', noteEl?.value || '');
        if (!ok) {
            alert('Please enter a task title.');
            titleEl?.focus();
            return;
        }
        checklistAddOpen = false;
        renderChecklistView();
    };

    document.getElementById('saveTaskBtn')?.addEventListener('click', doSave, { once: true });

    // Allow Enter to submit from either input
    [titleEl, noteEl].forEach(el => {
        el?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                doSave();
            }
        });
    });
}

function renderChecklistView() {
    const container = document.getElementById('checklistContent');
    if (!container) return;

    const state = loadChecklistState();
    renderChecklistSummary();

    // Add card (shows/hides based on checklistAddOpen)
    renderChecklistAddCard();

    const customTasks = loadCustomChecklistTasks();

    container.innerHTML = [
        renderCustomTasksSection(customTasks, state),
        ...CHECKLIST_SECTIONS.map(section => renderChecklistSection(section, state))
    ].join('');

    // Wire up checkbox listeners
    container.querySelectorAll('input[type="checkbox"][data-check-id]').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const id = e.target.getAttribute('data-check-id');
            setChecklistItem(id, e.target.checked);
            renderChecklistView(); // small list - quick re-render keeps UI consistent
        });
    });

    // Delete custom task
    container.querySelectorAll('button[data-delete-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-delete-id');
            if (!id) return;
            deleteCustomChecklistTask(id);
            renderChecklistView();
        });
    });

    // Add task button
    document.getElementById('addTaskBtn')?.addEventListener('click', () => {
        checklistAddOpen = !checklistAddOpen;
        renderChecklistView();
    }, { once: true });

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

// Activity form state
let activityFormOpen = false;
let activityFormMode = null; // 'add' | 'edit'
let activityFormDay = null;
let activityFormData = null; // {index?, id?, time, title, desc, romantic, isCustom?}

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

function refreshCurrentView() {
    if (currentView === 'homeView') {
        renderHomeView();
    } else if (currentView === 'scheduleView') {
        renderScheduleView(selectedDay || getDayOfTrip().day || 1);
    }
}

function openActivityForm(mode, dayNum, activityData = null) {
    activityFormOpen = true;
    activityFormMode = mode;
    activityFormDay = dayNum;
    activityFormData = activityData;
    renderActivityForm();
}

function closeActivityForm() {
    activityFormOpen = false;
    activityFormMode = null;
    activityFormDay = null;
    activityFormData = null;
    renderActivityForm();
}

function renderActivityForm() {
    const wrapId = currentView === 'scheduleView' ? 'activityFormWrapSchedule' : 'activityFormWrap';
    const wrap = document.getElementById(wrapId);
    if (!wrap) return;

    if (!activityFormOpen) {
        wrap.innerHTML = '';
        return;
    }

    const data = activityFormData || { time: '', title: '', desc: '', romantic: false };
    const isEdit = activityFormMode === 'edit';

    wrap.innerHTML = `
        <div class="checklist-add" id="activityFormCard">
            <div><strong>${isEdit ? 'Edit Activity' : 'Add Activity'} - Day ${activityFormDay}</strong></div>
            <div class="row">
                <input id="activityTime" type="text" value="${data.time}"
                       placeholder="Time (e.g., 14:30)" maxlength="5" style="max-width:120px;" />
            </div>
            <div class="row">
                <input id="activityTitle" type="text" value="${data.title}"
                       placeholder="Activity title" maxlength="100" />
            </div>
            <div class="row">
                <input id="activityDesc" type="text" value="${data.desc}"
                       placeholder="Description" maxlength="200" />
            </div>
            <div class="row">
                <label style="display:flex;align-items:center;gap:8px;font-size:.9rem;">
                    <input id="activityRomantic" type="checkbox" ${data.romantic ? 'checked' : ''} />
                    <span>💕 Romantic activity</span>
                </label>
            </div>
            <div class="row">
                <label style="display:flex;align-items:center;gap:8px;font-size:.9rem;">
                    <input id="activityHasVenue" type="checkbox" ${data.venue && (data.venue.name || data.venue.address) ? 'checked' : ''} />
                    <span>📍 Add venue details</span>
                </label>
            </div>
            <div id="venueFieldsWrap" style="display:none;margin-top:10px;">
                <div class="row">
                    <input id="venueName" type="text" value="${data.venue?.name || ''}"
                           placeholder="Venue name (e.g., Restaurant, Hotel)" maxlength="100" />
                </div>
                <div class="row">
                    <input id="venueAddress" type="text" value="${data.venue?.address || ''}"
                           placeholder="Full address" maxlength="200" />
                </div>
            </div>
            <div class="row">
                <button class="small-btn primary-btn" id="saveActivityBtn">
                    ${isEdit ? 'Save Changes' : 'Add Activity'}
                </button>
                <button class="small-btn" id="cancelActivityBtn">Cancel</button>
            </div>
            <div class="helper">Changes saved offline on this device.</div>
        </div>
    `;

    const timeEl = document.getElementById('activityTime');
    const titleEl = document.getElementById('activityTitle');
    const descEl = document.getElementById('activityDesc');
    const romanticEl = document.getElementById('activityRomantic');
    const hasVenueEl = document.getElementById('activityHasVenue');
    const venueFieldsWrap = document.getElementById('venueFieldsWrap');

    // Pre-populate venue fields if editing and venue exists
    if (data.venue && (data.venue.name || data.venue.address)) {
        venueFieldsWrap.style.display = 'block';
    }

    // Toggle venue fields visibility
    hasVenueEl?.addEventListener('change', () => {
        venueFieldsWrap.style.display = hasVenueEl.checked ? 'block' : 'none';
        if (hasVenueEl.checked) {
            document.getElementById('venueName')?.focus();
        }
    });

    titleEl?.focus();

    // Cancel button
    document.getElementById('cancelActivityBtn')?.addEventListener('click', () => {
        closeActivityForm();
    }, { once: true });

    // Save button
    const doSave = () => {
        const time = timeEl?.value?.trim() || '';
        const title = titleEl?.value?.trim() || '';
        const desc = descEl?.value?.trim() || '';
        const romantic = romanticEl?.checked || false;

        // Get venue data
        const hasVenue = hasVenueEl?.checked || false;
        const venue = hasVenue ? {
            name: document.getElementById('venueName')?.value?.trim() || '',
            address: document.getElementById('venueAddress')?.value?.trim() || '',
            lat: null,
            lng: null
        } : null;

        // Validate venue if checkbox checked
        if (hasVenue && !venue.name && !venue.address) {
            alert('Please enter venue name or address.');
            document.getElementById('venueName')?.focus();
            return;
        }

        // Validation
        if (!time) {
            alert('Please enter a time (HH:MM format).');
            timeEl?.focus();
            return;
        }
        if (!title) {
            alert('Please enter an activity title.');
            titleEl?.focus();
            return;
        }

        // Format time to HH:MM
        const formattedTime = formatTimeInput(time);
        if (!formattedTime) {
            alert('Please enter a valid time (e.g., 14:30).');
            timeEl?.focus();
            return;
        }

        let success = false;
        if (activityFormMode === 'add') {
            success = addCustomActivity(activityFormDay, formattedTime, title, desc, romantic, venue);
        } else if (activityFormMode === 'edit') {
            if (activityFormData.isCustom) {
                success = updateCustomActivity(
                    activityFormDay,
                    activityFormData.id,
                    formattedTime,
                    title,
                    desc,
                    romantic,
                    venue
                );
            } else {
                success = updateHardcodedActivity(
                    activityFormDay,
                    activityFormData.index,
                    formattedTime,
                    title,
                    desc,
                    romantic,
                    venue
                );
            }
        }

        if (!success) {
            alert('Failed to save activity. Please try again.');
            return;
        }

        closeActivityForm();
        refreshCurrentView();
    };

    document.getElementById('saveActivityBtn')?.addEventListener('click', doSave, { once: true });

    // Enter key support
    [timeEl, titleEl, descEl].forEach(el => {
        el?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                doSave();
            }
        });
    });
}

function wireActivityButtons(dayNum, activities) {
    const container = document.getElementById(currentView === 'scheduleView' ? 'scheduleContent' : 'activitiesList');
    if (!container) return;

    // Edit buttons
    container.querySelectorAll('[data-edit-activity]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const displayIdx = parseInt(btn.getAttribute('data-edit-activity'), 10);
            const activity = activities[displayIdx];

            openActivityForm('edit', dayNum, {
                index: activity.index,
                id: activity.id,
                time: activity.time,
                title: activity.title,
                desc: activity.desc,
                romantic: activity.romantic,
                isCustom: activity.isCustom,
                isHardcoded: activity.isHardcoded
            });
        });
    });

    // Delete buttons
    container.querySelectorAll('[data-delete-activity]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const displayIdx = parseInt(btn.getAttribute('data-delete-activity'), 10);
            const activity = activities[displayIdx];

            const confirmed = confirm(`Delete "${activity.title}"?`);
            if (!confirmed) return;

            if (activity.isCustom) {
                deleteCustomActivity(dayNum, activity.id);
            } else {
                deleteHardcodedActivity(dayNum, activity.index);
            }

            refreshCurrentView();
        });
    });
}

function openAMap(venueName, address) {
    const destination = venueName || address;
    const query = encodeURIComponent(destination);

    // Direct to AMap web with search - works on both mobile and desktop
    const url = `https://uri.amap.com/marker?position=&name=${query}&src=honeymoon&coordinate=gaode&callnative=1`;
    window.open(url, '_blank');
}

function wireVenueToggles() {
    const container = document.getElementById(currentView === 'scheduleView' ? 'scheduleContent' : 'activitiesList');
    if (!container) return;

    container.querySelectorAll('[data-venue-idx]').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const idx = toggle.getAttribute('data-venue-idx');
            const details = document.getElementById(`venue-${idx}`);
            if (details) {
                const isVisible = details.style.display !== 'none';
                details.style.display = isVisible ? 'none' : 'block';
                // Toggle arrow
                const arrow = toggle.querySelector('span:last-child');
                if (arrow) arrow.textContent = isVisible ? '▼' : '▲';
            }
        });
    });
}

function renderActivities(dayNum) {
    const container = document.getElementById('activitiesList');
    const activities = getMergedActivities(dayNum);
    const isToday = dayNum === getDayOfTrip().day;

    document.getElementById('activitiesTitle').textContent = isToday ? "Today's Activities" : `Day ${dayNum} Activities`;

    if (activities.length === 0) {
        container.innerHTML = `
            <p style="color:var(--text-light);padding:15px;">No activities scheduled</p>
            <button class="small-btn primary-btn" onclick="openActivityForm('add', ${dayNum})" style="width:100%;">
                + Add Activity
            </button>
        `;
        return;
    }

    container.innerHTML = activities.map((act, displayIdx) => {
        const romanticBadge = act.romantic ? '<span class="romantic-badge">💕 Romantic</span>' : '';
        const editBtn = `<button class="icon-btn" data-edit-activity="${displayIdx}" title="Edit">✏️</button>`;
        const deleteBtn = `<button class="icon-btn" data-delete-activity="${displayIdx}" title="Delete">🗑️</button>`;

        const venueHtml = act.venue && (act.venue.name || act.venue.address) ? `
            <div class="venue-toggle" data-venue-idx="${displayIdx}" style="cursor:pointer;padding:8px 0;color:var(--primary);font-size:.85rem;display:flex;align-items:center;gap:5px;">
                <span>📍 ${act.venue.name || act.venue.address}</span>
                <span style="font-size:.7rem;">▼</span>
            </div>
            <div class="venue-details" id="venue-${displayIdx}" style="display:none;padding:10px;background:var(--bg);border-radius:8px;margin-top:5px;">
                ${act.venue.name ? `<div style="font-size:.85rem;margin-bottom:8px;"><strong>${act.venue.name}</strong></div>` : ''}
                ${act.venue.address ? `<div style="font-size:.8rem;color:var(--text-light);margin-bottom:10px;">${act.venue.address}</div>` : ''}
                <button class="small-btn primary-btn" onclick="openAMap('${encodeURIComponent(act.venue.name || '')}', '${encodeURIComponent(act.venue.address || '')}')" style="width:100%;">
                    🧭 Navigate with AMap
                </button>
            </div>
        ` : '';

        return `
            <div class="activity-card ${act.romantic ? 'activity-romantic' : ''}" data-activity-idx="${displayIdx}">
                <div class="activity-time">${act.time}</div>
                <div class="activity-content" style="flex:1;">
                    <h4>${act.title}${romanticBadge}</h4>
                    <p>${act.desc}</p>
                    ${venueHtml}
                </div>
                <div style="display:flex;gap:5px;align-items:center;">
                    ${editBtn}
                    ${deleteBtn}
                </div>
            </div>
        `;
    }).join('') + `
        <button class="small-btn primary-btn" onclick="openActivityForm('add', ${dayNum})" style="margin-top:10px;width:100%;">
            + Add Activity
        </button>
    `;

    wireActivityButtons(dayNum, activities);
    wireVenueToggles();
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
    const activities = getMergedActivities(dayNum);
    const tip = TRIP_DATA.tips[dayNum];
    const date = new Date(TRIP_DATA.startDate);
    date.setDate(date.getDate() + dayNum - 1);

    const activitiesHtml = activities.length > 0
        ? `<div class="section"><div class="section-header"><h3>Activities</h3></div>${activities.map((act, displayIdx) => {
            const romanticBadge = act.romantic ? '<span class="romantic-badge">💕 Romantic</span>' : '';
            const editBtn = `<button class="icon-btn" data-edit-activity="${displayIdx}" title="Edit">✏️</button>`;
            const deleteBtn = `<button class="icon-btn" data-delete-activity="${displayIdx}" title="Delete">🗑️</button>`;
            const venueHtml = act.venue && (act.venue.name || act.venue.address) ? `
                <div class="venue-toggle" data-venue-idx="${displayIdx}" style="cursor:pointer;padding:8px 0;color:var(--primary);font-size:.85rem;display:flex;align-items:center;gap:5px;">
                    <span>📍 ${act.venue.name || act.venue.address}</span>
                    <span style="font-size:.7rem;">▼</span>
                </div>
                <div class="venue-details" id="venue-${displayIdx}" style="display:none;padding:10px;background:var(--bg);border-radius:8px;margin-top:5px;">
                    ${act.venue.name ? `<div style="font-size:.85rem;margin-bottom:8px;"><strong>${act.venue.name}</strong></div>` : ''}
                    ${act.venue.address ? `<div style="font-size:.8rem;color:var(--text-light);margin-bottom:10px;">${act.venue.address}</div>` : ''}
                    <button class="small-btn primary-btn" onclick="openAMap('${encodeURIComponent(act.venue.name || '')}', '${encodeURIComponent(act.venue.address || '')}')" style="width:100%;">
                        🧭 Navigate with AMap
                    </button>
                </div>
            ` : '';
            return `<div class="activity-card ${act.romantic ? 'activity-romantic' : ''}"><div class="activity-time">${act.time}</div><div class="activity-content" style="flex:1;"><h4>${act.title}${romanticBadge}</h4><p>${act.desc}</p>${venueHtml}</div><div style="display:flex;gap:5px;align-items:center;">${editBtn}${deleteBtn}</div></div>`;
        }).join('')}<button class="small-btn primary-btn" onclick="openActivityForm('add', ${dayNum})" style="margin:10px 15px;width:calc(100% - 30px);">+ Add Activity</button></div>`
        : `<div class="section"><p style="color:var(--text-light);padding:15px;">No activities scheduled</p><button class="small-btn primary-btn" onclick="openActivityForm('add', ${dayNum})" style="margin:0 15px 15px 15px;width:calc(100% - 30px);">+ Add Activity</button></div>`;

    content.innerHTML = `
        <div class="section" style="margin-top:0;"><div class="current-location" style="background:var(--primary);margin:15px;border-radius:12px;padding:15px;"><span class="location-icon">${city.emoji}</span><div class="location-info"><h2 style="color:#fff;">${city.name}</h2><p style="color:rgba(255,255,255,.9);">${formatDate(date)} • Day ${dayNum}</p></div></div></div>
        ${activitiesHtml}
        ${tip ? `<div class="tip-card"><span class="tip-icon">💡</span><div class="tip-content">${tip}</div></div>` : ''}
        <div class="hotel-card"><div class="hotel-header"><span class="hotel-icon">🏨</span><div><div class="hotel-name">${city.hotel.name}</div><div class="hotel-address">${city.hotel.address}</div></div></div>${city.hotel.chinese ? `<div class="hotel-chinese">${city.hotel.chinese}</div>` : ''}</div>`;

    wireActivityButtons(dayNum, activities);
    wireVenueToggles();
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

function playChineseAudio(text) {
    if (!window.speechSynthesis) {
        alert('Audio playback is not supported in this browser.');
        return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN'; // Chinese (Mandarin, Simplified)
    utterance.rate = 0.8; // Slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    window.speechSynthesis.speak(utterance);
}

function renderTranslationsView() {
    const container = document.getElementById('translationsContent');
    if (!container) return;

    const sections = [
        { key: 'general', data: TRANSLATIONS_DATA.general },
        { key: 'travel', data: TRANSLATIONS_DATA.travel },
        { key: 'service', data: TRANSLATIONS_DATA.service }
    ];

    const html = sections.map(section => {
        const phrasesHtml = section.data.phrases.map((phrase, idx) => `
            <div style="padding:12px 0;border-top:1px solid var(--border);display:flex;gap:12px;align-items:flex-start;">
                <div style="flex:1;">
                    <div style="font-size:.9rem;font-weight:500;margin-bottom:4px;">${phrase.english}</div>
                    <div style="font-size:1.1rem;color:var(--primary);margin-bottom:2px;">${phrase.chinese}</div>
                    <div style="font-size:.8rem;color:var(--text-light);font-style:italic;">${phrase.pinyin}</div>
                </div>
                <button class="icon-btn" data-speak="${section.key}-${idx}" data-text="${phrase.chinese}" title="Play audio" style="flex-shrink:0;font-size:1.2rem;">🔊</button>
            </div>
        `).join('');

        return `
            <div class="checklist-category" style="margin-bottom:15px;">
                <div class="checklist-category-header">
                    <h3>${section.data.title}</h3>
                    <div class="count">${section.data.phrases.length}</div>
                </div>
                ${phrasesHtml}
            </div>
        `;
    }).join('');

    container.innerHTML = html;

    // Wire up audio buttons
    container.querySelectorAll('button[data-speak]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const text = btn.getAttribute('data-text');
            if (text) {
                playChineseAudio(text);
            }
        });
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
    else if (viewId === 'translationsView') renderTranslationsView();
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
