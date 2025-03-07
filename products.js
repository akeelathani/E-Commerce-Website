// Product data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 79.99,
        oldPrice: 129.99,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: "Sale",
        rating: 4.5,
        ratingCount: 128,
        description: "Experience premium sound quality with these comfortable wireless headphones. Features noise cancellation and 20-hour battery life.",
        stock: 15,
        isFeatured: true,
        specifications: {
            brand: "SoundMaster",
            model: "SM-WH100",
            color: "Black",
            connectivity: "Bluetooth 5.0",
            batteryLife: "20 hours",
            weight: "250g"
        },
        additionalImages: [
            "https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 2,
        name: "Smart Fitness Tracker",
        category: "Electronics",
        price: 49.99,
        oldPrice: 69.99,
        image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: "Bestseller",
        rating: 4.8,
        ratingCount: 256,
        description: "Track your fitness goals with this waterproof smart tracker. Monitors heart rate, steps, sleep, and more.",
        stock: 22,
        isFeatured: true,
        specifications: {
            brand: "FitPro",
            model: "FP-200",
            color: "Black/Blue",
            connectivity: "Bluetooth 4.2",
            batteryLife: "7 days",
            waterproof: "IP68 rated"
        },
        additionalImages: [
            "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 3,
        name: "Premium Leather Wallet",
        category: "Fashion",
        price: 39.99,
        oldPrice: null,
        image: "https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: null,
        rating: 4.6,
        ratingCount: 89,
        description: "Handcrafted genuine leather wallet with multiple card slots and RFID protection.",
        stock: 18,
        isFeatured: true,
        specifications: {
            brand: "LeatherCraft",
            material: "Genuine Leather",
            color: "Brown",
            dimensions: "4.5 x 3.5 inches",
            cardSlots: "8",
            rfidProtection: "Yes"
        },
        additionalImages: [
            "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/4452526/pexels-photo-4452526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 4,
        name: "Stainless Steel Water Bottle",
        category: "Home & Kitchen",
        price: 24.99,
        oldPrice: 34.99,
        image: "https://images.pexels.com/photos/4000090/pexels-photo-4000090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: "Eco-friendly",
        rating: 4.7,
        ratingCount: 112,
        description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
        stock: 30,
        isFeatured: true,
        specifications: {
            brand: "EcoHydrate",
            material: "18/8 Stainless Steel",
            capacity: "750ml",
            insulation: "Double-walled vacuum",
            dimensions: "10.5 x 3 inches",
            weight: "350g"
        },
        additionalImages: [
            "https://images.pexels.com/photos/1188649/pexels-photo-1188649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1282278/pexels-photo-1282278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 5,
        name: "Organic Face Serum",
        category: "Beauty",
        price: 29.99,
        oldPrice: null,
        image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: "New",
        rating: 4.4,
        ratingCount: 76,
        description: "Hydrating face serum made with organic ingredients. Helps reduce fine lines and improve skin texture.",
        stock: 25,
        isFeatured: true,
        specifications: {
            brand: "NaturalGlow",
            volume: "30ml",
            skinType: "All skin types",
            ingredients: "Hyaluronic Acid, Vitamin C, Aloe Vera",
            organic: "Yes",
            crueltyFree: "Yes"
        },
        additionalImages: [
            "https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/5069609/pexels-photo-5069609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 6,
        name: "Wireless Charging Pad",
        category: "Electronics",
        price: 19.99,
        oldPrice: 29.99,
        image: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: "Sale",
        rating: 4.3,
        ratingCount: 94,
        description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek and compact design.",
        stock: 20,
        isFeatured: true,
        specifications: {
            brand: "PowerUp",
            model: "PU-WC10",
            color: "Black",
            chargingSpeed: "10W",
            compatibility: "All Qi-enabled devices",
            dimensions: "4 x 4 x 0.5 inches"
        },
        additionalImages: [
            "https://images.pexels.com/photos/5082576/pexels-photo-5082576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/4526404/pexels-photo-4526404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 7,
        name: "Ceramic Coffee Mug Set",
        category: "Home & Kitchen",
        price: 34.99,
        oldPrice: null,
        image: "https://images.pexels.com/photos/6306720/pexels-photo-6306720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: null,
        rating: 4.9,
        ratingCount: 68,
        description: "Set of 4 handcrafted ceramic coffee mugs. Microwave and dishwasher safe.",
        stock: 12,
        isFeatured: true,
        specifications: {
            brand: "ArtisanHome",
            material: "Ceramic",
            capacity: "12 oz each",
            pieces: "4",
            dishwasherSafe: "Yes",
            microwaveSafe: "Yes"
        },
        additionalImages: [
            "https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 8,
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 19.99,
        oldPrice: null,
        image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: null,
        rating: 4.5,
        ratingCount: 132,
        description: "Premium cotton t-shirt with a comfortable fit. Available in multiple colors and sizes.",
        stock: 45,
        isFeatured: true,
        specifications: {
            brand: "ComfortWear",
            material: "100% Organic Cotton",
            fit: "Regular",
            sizes: "S, M, L, XL, XXL",
            colors: "White, Black, Navy, Gray",
            care: "Machine washable"
        },
        additionalImages: [
            "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 9,
        name: "Moisturizing Body Lotion",
        category: "Beauty",
        price: 14.99,
        oldPrice: 19.99,
        image: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: "Sale",
        rating: 4.6,
        ratingCount: 87,
        description: "Deeply moisturizing body lotion with shea butter and vitamin E. Non-greasy formula.",
        stock: 28,
        isFeatured: false,
        specifications: {
            brand: "NaturalGlow",
            volume: "250ml",
            skinType: "All skin types",
            ingredients: "Shea Butter, Vitamin E, Aloe Vera",
            fragrance: "Light floral",
            parabenfree: "Yes"
        },
        additionalImages: [
            "https://images.pexels.com/photos/6621329/pexels-photo-6621329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/6621442/pexels-photo-6621442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 10,
        name: "Portable Bluetooth Speaker",
        category: "Electronics",
        price: 59.99,
        oldPrice: 79.99,
        image: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: "Bestseller",
        rating: 4.7,
        ratingCount: 215,
        description: "Waterproof portable speaker with powerful bass and 12-hour battery life.",
        stock: 18,
        isFeatured: false,
        specifications: {
            brand: "SoundMaster",
            model: "SM-BS200",
            color: "Black/Blue",
            connectivity: "Bluetooth 5.0",
            batteryLife: "12 hours",
            waterproof: "IPX7 rated"
        },
        additionalImages: [
            "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/191877/pexels-photo-191877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 11,
        name: "Stainless Steel Cookware Set",
        category: "Home & Kitchen",
        price: 149.99,
        oldPrice: 199.99,
        image: "https://images.pexels.com/photos/6996085/pexels-photo-6996085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: "Sale",
        rating: 4.8,
        ratingCount: 64,
        description: "10-piece stainless steel cookware set with non-stick coating. Suitable for all cooktops.",
        stock: 10,
        isFeatured: false,
        specifications: {
            brand: "ChefElite",
            material: "18/10 Stainless Steel",
            pieces: "10",
            coating: "Non-stick ceramic",
            dishwasherSafe: "Yes",
            inductionCompatible: "Yes"
        },
        additionalImages: [
            "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/5825578/pexels-photo-5825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 12,
        name: "Leather Crossbody Bag",
        category: "Fashion",
        price: 69.99,
        oldPrice: null,
        image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: "New",
        rating: 4.5,
        ratingCount: 42,
        description: "Stylish genuine leather crossbody bag with adjustable strap and multiple compartments.",
        stock: 15,
        isFeatured: false,
        specifications: {
            brand: "LeatherCraft",
            material: "Genuine Leather",
            color: "Brown",
            dimensions: "9 x 7 x 3 inches",
            compartments: "3",
            adjustableStrap: "Yes"
        },
        additionalImages: [
            "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 13,
        name: "Smart LED TV - 55 inch",
        category: "Electronics",
        price: 499.99,
        oldPrice: 649.99,
        image: "https://images.pexels.com/photos/6782570/pexels-photo-6782570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: "Sale",
        rating: 4.7,
        ratingCount: 156,
        description: "55-inch 4K Ultra HD Smart LED TV with built-in streaming apps and voice control.",
        stock: 8,
        isFeatured: false,
        specifications: {
            brand: "VisionTech",
            size: "55 inches",
            resolution: "4K Ultra HD (3840 x 2160)",
            smartFeatures: "Built-in Wi-Fi, Voice Control",
            ports: "3 HDMI, 2 USB",
            refreshRate: "60Hz"
        },
        additionalImages: [
            "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 14,
        name: "Yoga Mat",
        category: "Sports & Outdoors",
        price: 29.99,
        oldPrice: null,
        image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: null,
        rating: 4.6,
        ratingCount: 98,
        description: "Eco-friendly non-slip yoga mat with alignment lines. Perfect for yoga, pilates, and floor exercises.",
        stock: 22,
        isFeatured: false,
        specifications: {
            brand: "YogaFlex",
            material: "TPE Eco-friendly foam",
            thickness: "6mm",
            dimensions: "72 x 24 inches",
            nonSlip: "Yes",
            carryStrap: "Included"
        },
        additionalImages: [
            "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 15,
        name: "Scented Candle Set",
        category: "Home & Kitchen",
        price: 24.99,
        oldPrice: 34.99,
        image: "https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: "Sale",
        rating: 4.8,
        ratingCount: 75,
        description: "Set of 3 scented soy candles in decorative glass jars. Perfect for creating a relaxing atmosphere.",
        stock: 30,
        isFeatured: false,
        specifications: {
            brand: "AromaHome",
            material: "100% Soy Wax",
            scents: "Lavender, Vanilla, Sandalwood",
            burnTime: "30 hours each",
            pieces: "3",
            jarSize: "4 oz each"
        },
        additionalImages: [
            "https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/4195567/pexels-photo-4195567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    },
    {
        id: 16,
        name: "Men's Leather Watch",
        category: "Fashion",
        price: 89.99,
        oldPrice: 119.99,
        image: "https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        badge: "Sale",
        rating: 4.7,
        ratingCount: 112,
        description: "Classic men's watch with genuine leather strap and stainless steel case. Water-resistant design.",
        stock: 18,
        isFeatured: false,
        specifications: {
            brand: "TimeClassic",
            material: "Stainless Steel, Genuine Leather",
            movement: "Japanese Quartz",
            waterResistant: "3 ATM",
            caseDiameter: "42mm",
            strapWidth: "20mm"
        },
        additionalImages: [
            "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]
    }
];

// Categories data with counts
const categories = [
    {
        id: 1,
        name: "Electronics",
        image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Latest gadgets and electronic devices"
    },
    {
        id: 2,
        name: "Fashion",
        image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Trendy clothing and accessories"
    },
    {
        id: 3,
        name: "Home & Kitchen",
        image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Essential items for your home"
    },
    {
        id: 4,
        name: "Beauty",
        image: "https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Skincare, makeup, and personal care products"
    },
    {
        id: 5,
        name: "Sports & Outdoors",
        image: "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Equipment and gear for sports and outdoor activities"
    }
]; 