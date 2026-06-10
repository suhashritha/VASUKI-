/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, PortfolioItem, Testimonial, ServiceItem, FAQItem, ValueItem, StatItem } from './types';

// Let's use our generated premium assets for primary products / banners,
// and high-quality royalty-free photography for the remaining items.
export const GENERATED_HERO_IMAGE = '/src/assets/images/vasuki_hero_model_1781085216278.png';
export const GENERATED_SAREE_IMAGE = '/src/assets/images/vasuki_bridal_saree_1781085232660.png';

export const VALUES_DATA: ValueItem[] = [
  {
    id: 'val_1',
    title: 'Quality Craftsmanship',
    description: 'Every weave and embroidery is handled by veteran master artisans, keeping pristine attention to detail.',
    icon: 'Sparkles',
  },
  {
    id: 'val_2',
    title: 'Authentic Designs',
    description: 'We weave stories of Indian heritage with handloomed fabrics, original zari threads, and cultural integrity.',
    icon: 'Feather',
  },
  {
    id: 'val_3',
    title: 'Customer Satisfaction',
    description: 'From customized sizes to post-fitting alterations, your styling experience is our highest priority.',
    icon: 'Heart',
  },
  {
    id: 'val_4',
    title: 'Cultural Heritage',
    description: 'Deeply rooted in subcontinental roots, we bring century-old regional weaving techniques into modern wardrobes.',
    icon: 'Award',
  },
  {
    id: 'val_5',
    title: 'Sustainable Fashion',
    description: 'We support local artisan clusters, respect eco-certified dye-free processes, and encourage slow ethical fashion.',
    icon: 'Leaf',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv_1',
    title: 'Custom Bridal Wear',
    description: 'Personalized bridal lehengas, heavy embroidered sarees, and custom wedding ensembles matching your theme and fit.',
    longDescription: 'Our bridal styling experts work directly with you to conceptualize, sketch, and stitch the lehenga or saree of your dreams. Incorporates fine zardozi work, custom motifs, handwoven silks, and multiple fittings to ensure flawless grace on your big day.',
    icon: 'Sparkles',
  },
  {
    id: 'srv_2',
    title: 'Designer Saree Collections',
    description: 'A handpicked curation of handloomed Banarasi, Kanjeevaram, Patola, and exquisite modern digital designer sarees.',
    longDescription: 'Choose from our elite handloom reserves, customized with designer border styling and personalized blouse pieces. Each saree is dry-cleaned, roll-pressed, and beautifully packed in linen heirloom preservation bags.',
    icon: 'Gem',
  },
  {
    id: 'srv_3',
    title: 'Festive Wear Styling',
    description: 'Tailored silhouettes, vibrant pastels, and shimmering details tailored for Diwali, Eid, Karwa Chauth, and relative celebrations.',
    longDescription: 'Make special festivals unforgettable with customizable kurtis, anarkalis, and salwar sets embellished with fine gota patti and mirror handwork. We help families coordinate motifs and color themes.',
    icon: 'Flame',
  },
  {
    id: 'srv_4',
    title: 'Boutique Consultation',
    description: 'One-on-one personal styling appointments with veteran ethnic fashion consultants at our preview boutique or virtually.',
    longDescription: 'Sit down with our creative lead for personal color profiling, body-type draping analysis, fabric matching, and curated accessory selections. This guarantees your outfit reflects you perfectly.',
    icon: 'Users',
  },
  {
    id: 'srv_5',
    title: 'Bulk Wedding Orders',
    description: 'Coordinated outfits for bridesmaids, groomsmen, close family members, and wedding event gatherings.',
    longDescription: 'Coordinate color themes or matching woven texturing seamlessly. We provide express premium custom-fitting schedules, bulk sizing discounts, and specialized doorstep delivery for the entire wedding party.',
    icon: 'Briefcase',
  },
  {
    id: 'srv_6',
    title: 'Custom Tailoring & Alteration',
    description: 'Flawless precision stitching for custom blouses, custom fits, and quick resizing by master drapers.',
    longDescription: 'Never settle for bulk fits. Our digital measuring systems and expert master tailors design the perfect blouse, anarkali yoke, or salwar flare with structural pad inserts, seamless canvas support, and side zippers.',
    icon: 'Scissors',
  },
];

export const PRODUCTS_DATA: Product[] = [
  // Wedding Collection / Bridal
  {
    id: 'prod_1',
    name: 'The Vasuki Royal Pastel Lehenga',
    category: 'Wedding Collection',
    price: '₹1,24,999',
    image: GENERATED_HERO_IMAGE,
    description: 'Intricately embroidered bridal lehenga in soft blush pink, champagne gold, and rose-petal silk.',
    tags: ['Bridal', 'Silk', 'Rose Gold', 'Lehenga'],
    isBestSeller: true,
  },
  {
    id: 'prod_2',
    name: 'Champagne Ivory Zardosi Lehenga',
    category: 'Lehengas',
    price: '₹89,500',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600',
    description: 'Stunning champagne beige georgette lehenga featuring luxury glass beads and gold zari work.',
    tags: ['Lehenga', 'Beige', 'Festive', 'Bridal'],
    isNew: true,
  },
  {
    id: 'prod_3',
    name: 'Classic Banarasi Silk Crimson Saree',
    category: 'Sarees',
    price: '₹45,000',
    image: GENERATED_SAREE_IMAGE,
    description: 'The epitome of traditional excellence. Crimson pure katan silk detailing heavy zari pallu and gorgeous motifs.',
    tags: ['Saree', 'Banarasi', 'Silk', 'Best Seller'],
    isBestSeller: true,
  },
  {
    id: 'prod_4',
    name: 'Sage Mint Silk Georgette Saree',
    category: 'Sarees',
    price: '₹28,999',
    image: 'https://images.unsplash.com/photo-1610030469614-2ec51cdec60b?auto=format&fit=crop&q=80&w=600',
    description: 'Translucent sage green silk with champagne border styling, perfect for day ceremonies and high-tea socials.',
    tags: ['Saree', 'Sage Green', 'Designer'],
    isNew: true,
  },
  // Kurtis
  {
    id: 'prod_5',
    name: 'Ivory Anarkali Designer Kurti Set',
    category: 'Kurtis',
    price: '₹12,499',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600',
    description: 'Ethereal ivory white pure chanderi cotton long kurti styled with handcrafted lucknowi chikankari.',
    tags: ['Kurti', 'Chikankari', 'Ivory'],
    isBestSeller: true,
  },
  {
    id: 'prod_6',
    name: 'Lilac Organza Festive Kurti',
    category: 'Kurtis',
    price: '₹9,800',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
    description: 'Translucent lilac organza overlay styled with gold gota laces and pants.',
    tags: ['Kurti', 'Organza', 'Lavender'],
    isNew: true,
  },
  // Salwar Suits
  {
    id: 'prod_7',
    name: 'Blush Pink Straight Slit Suit Set',
    category: 'Salwar Suits',
    price: '₹18,500',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
    description: 'Silk-blend straight fit suit with detailed threadwork, paired with scalloped organza dupatta.',
    tags: ['Salwar Suit', 'Blush Pink', 'Silk'],
    isBestSeller: true,
  },
  {
    id: 'prod_8',
    name: 'Sage Green Patiala Designer Suit',
    category: 'Salwar Suits',
    price: '₹14,900',
    image: 'https://images.unsplash.com/photo-1610030470298-2070a373bcf8?auto=format&fit=crop&q=80&w=600',
    description: 'Comfy cotton silk drapes featuring patiala salwars, perfect for lively festive events.',
    tags: ['Salwar Suit', 'Sage Green', 'Festive'],
  },
  // Extra Wedding collection
  {
    id: 'prod_9',
    name: 'The Royal Crimson Velvet Lehenga',
    category: 'Wedding Collection',
    price: '₹1,65,000',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600',
    description: 'Heavy micro-velvet bridal lehenga with royal red hues, detailed double dupatta styling.',
    tags: ['Bridal', 'Velvet', 'Luxury', 'Lehenga'],
    isNew: true,
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port_1',
    title: 'The Dreamy Pastel Bride',
    category: 'Bridal Collection',
    image: GENERATED_HERO_IMAGE,
    description: 'Pre-wedding lookup styling matching soft peach silks against traditional ivory archways.',
    year: '2026',
  },
  {
    id: 'port_2',
    title: 'Classic Red Royal Banarasi drapes',
    category: 'Saree Collection',
    image: GENERATED_SAREE_IMAGE,
    description: 'An ethereal showcase showcasing fine gold weaves of heritage Banaras drapes.',
    year: '2025',
  },
  {
    id: 'port_3',
    title: 'Minimalist Ivory Chikankari Yoke',
    category: 'Designer Wear',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600',
    description: 'Chanderi cotton silhouettes paired with fine Lucknowi handwork.',
    year: '2026',
  },
  {
    id: 'port_4',
    title: 'Modern Festive Sage Georgette',
    category: 'Festive Collection',
    image: 'https://images.unsplash.com/photo-1610030469614-2ec51cdec60b?auto=format&fit=crop&q=80&w=600',
    description: 'Dazzling daytime looks featuring sage green and rose accents.',
    year: '2025',
  },
  {
    id: 'port_5',
    title: 'The Royal Velvet Bridal Heritage',
    category: 'Bridal Collection',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600',
    description: 'Stately micro-velvet bridal styling with traditional zardozi craftsmanship.',
    year: '2026',
  },
  {
    id: 'port_6',
    title: 'Gota Patti Festive Salwars',
    category: 'Festive Collection',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
    description: 'Graceful festive assemblies captured at home during traditional gatherings.',
    year: '2026',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test_1',
    name: 'Anjali Sharma',
    role: 'Dehradun Bride',
    rating: 5,
    review: 'Absolutely loved my bridal lehenga from Vasuki! The craftsmanship, heavy gold thread embroidery, and attention to detail were exceptional. Having multiple calls with their designers made me feel very secure.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    location: 'Dehradun',
  },
  {
    id: 'test_2',
    name: 'Priyanka Patel',
    role: 'Festival Buyer',
    rating: 5,
    review: 'I ordered the Sage Mint Georgette Saree. The fabric feels like butter and the champagne border looks timeless. I received countless compliments on Diwali evening. Fast delivery too!',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    location: 'Mumbai',
  },
  {
    id: 'test_3',
    name: 'Dr. Meera Iyer',
    role: 'Bespoke Client',
    rating: 5,
    review: 'Vasuki’s customization service is outstanding. They designed a custom katan silk blouse fitting my measurements precisely. The fabric was matching my mother’s ancestral saree perfectly.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    location: 'Bangalore',
  },
  {
    id: 'test_4',
    name: 'Kiran Grewal',
    role: 'Bridesmaid Outfit Coordinator',
    rating: 5,
    review: 'Coordinated six bridesmaid salwar sets with Vasuki. Their bulk order services saved us massive headaches. Everything from the sage green color uniformity to customized adjustments was handled smoothly.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200',
    location: 'Delhi',
  },
  {
    id: 'test_5',
    name: 'Suhana Malhotra',
    role: 'Fashion Blogger',
    rating: 5,
    review: 'The ivory white Chikankari set has become a staple in my workspace and casual wardrobe. Vasuki makes slow, sustainable luxury feel highly accessible without compromising subcontinental integrity.',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=200',
    location: 'Chandigarh',
  },
  {
    id: 'test_6',
    name: 'Radhika Sen',
    role: 'Family Festive Shopper',
    rating: 5,
    review: 'Beautiful fabrics and a distinct color palette that relies on rich dusty pastels rather than jarring bright shades. Highly recommend for any classy family occasion or wedding season shopping!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    location: 'Kolkata',
  },
];

// Rich aesthetic gallery with 15 beautiful images (using Unsplash high-quality photography matching ethnic styles)
export const INSTAGRAM_GALLERY_DATA = [
  {
    id: 'g_1',
    url: 'https://images.unsplash.com/photo-1610030469614-2ec51cdec60b?auto=format&fit=crop&q=80&w=600',
    title: 'Emerald Silk Details',
    category: 'Sarees',
  },
  {
    id: 'g_2',
    url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600',
    title: 'Peach Bridal Glimmer',
    category: 'Lehengas',
  },
  {
    id: 'g_3',
    url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600',
    title: 'Gold Embellished Border',
    category: 'Sarees',
  },
  {
    id: 'g_4',
    url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
    title: 'Bridal Dupatta Drapes',
    category: 'Wedding Collection',
  },
  {
    id: 'g_5',
    url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600',
    title: 'Handloom Chikankari Yoke',
    category: 'Kurtis',
  },
  {
    id: 'g_6',
    url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600',
    title: 'Detailed Velvet Zardozi',
    category: 'Wedding Collection',
  },
  {
    id: 'g_7',
    url: 'https://images.unsplash.com/photo-1610030470298-2070a373bcf8?auto=format&fit=crop&q=80&w=600',
    title: 'Crimson Silk Textures',
    category: 'Sarees',
  },
  {
    id: 'g_8',
    url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=600',
    title: 'Artisan Thread Loops',
    category: 'Designer Wear',
  },
  {
    id: 'g_9',
    url: GENERATED_HERO_IMAGE,
    title: 'The Signature Dream Lehenga',
    category: 'Wedding Collection',
  },
  {
    id: 'g_10',
    url: GENERATED_SAREE_IMAGE,
    title: 'Heritage Mint Golden Saree',
    category: 'Sarees',
  },
  {
    id: 'g_11',
    url: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&q=80&w=600',
    title: 'Stately Jewelry Details',
    category: 'Bridal Accessories',
  },
  {
    id: 'g_12',
    url: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&q=80&w=600',
    title: 'Indigo Block-print Dyes',
    category: 'Boutique Fabric',
  },
  {
    id: 'g_13',
    url: 'https://images.unsplash.com/photo-1561053720-76cd73ff22c3?auto=format&fit=crop&q=80&w=600',
    title: 'Rose Gold Banarasi Flairs',
    category: 'Sarees',
  },
  {
    id: 'g_14',
    url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=600',
    title: 'Boutique Display Hangers',
    category: 'Designer Wear',
  },
  {
    id: 'g_15',
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600',
    title: 'Modern Festive Silk Cuts',
    category: 'Kurtis',
  },
];

export const STATS_DATA: StatItem[] = [
  { value: '15,000+', label: 'Happy Customers' },
  { value: '500+', label: 'Exclusive Designs' },
  { value: '100+', label: 'Bridal Projects' },
  { value: '98%', label: 'Satisfaction Rating' },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq_1',
    question: 'Do you provide custom stitching?',
    answer: 'Yes, absolutely! We specialize in tailored silhouettes, custom blouses, and complete bespoke bridal adjustments. Once you make an inquiry or purchase, our design consultant will reach out over WhatsApp or video-call to collect exact measurements and design specifications.',
  },
  {
    id: 'faq_2',
    question: 'Can I order bridal collections online?',
    answer: 'Yes, bridal bookings are available online. We schedule 1-on-1 boutique styling consultations digitally. We then provide sketches, fabric selections, and send intermediate fittings via secure shipment to get your 100% approval at every phase.',
  },
  {
    id: 'faq_3',
    question: 'Do you offer nationwide shipping?',
    answer: 'We provide free insured shipping anywhere across India. Plus, we offer express international customized delivery services to the US, UK, UAE, Canada, and Australia using tracked secure carriers.',
  },
  {
    id: 'faq_4',
    question: 'What fabrics are used?',
    answer: 'We use premium high-grade authentic fabrics: real katan silks, linen blends, pure chanderi cotton, organza overlays, custom velvet yokes, and georgette weaves. We source directly from prestigious handloom clusters across Banaras, Kanchipuram, and Rajasthan.',
  },
  {
    id: 'faq_5',
    question: 'How long does customization take?',
    answer: 'Standard festive wear suits or custom blouses take 7–12 business days. Premium, fully-embellished bridal or heavy wedding lehengas are customized inside 4–6 weeks depending on the complexity of handloomed zari embroidery.',
  },
];
