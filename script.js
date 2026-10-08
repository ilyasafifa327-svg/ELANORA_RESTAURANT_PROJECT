/* ============================================
   ELÁNORA — Premium Restaurant Web Application
   script.js — Vanilla JavaScript
   ============================================ */

/* ============================================
   MENU DATA — Array of dish objects
   Each dish: id, name, category, price, image, description, rating, popular, vegetarian, tags
   ============================================ */
const MENU_ITEMS = [
  // --- Biryani ---
  { id: 1, name: "Chicken Biryani", category: "Biryani", price: 380, image: "https://images.pexels.com/photos/9609860/pexels-photo-9609860.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Fragrant basmati rice layered with marinated chicken, saffron and traditional spices, slow-cooked to perfection.", rating: 4.8, popular: true, vegetarian: false, tags: ["spicy","traditional","rice","high-protein"] },
  { id: 2, name: "Saffron Chicken Biryani", category: "Biryani", price: 420, image: "https://images.pexels.com/photos/33683221/pexels-photo-33683221.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Aromatic saffron-infused biryani with tender chicken, caramelized onions and fresh herbs.", rating: 4.9, popular: true, vegetarian: false, tags: ["spicy","traditional","rice"] },

  // --- Chinese ---
  { id: 3, name: "Chicken Dumplings", category: "Chinese", price: 280, image: "https://images.pexels.com/photos/6378654/pexels-photo-6378654.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Steamed dumplings filled with seasoned minced chicken, served with a spicy dipping sauce.", rating: 4.6, popular: false, vegetarian: false, tags: ["light","high-protein"] },
  { id: 4, name: "Vegetable Spring Rolls", category: "Chinese", price: 220, image: "https://images.pexels.com/photos/38947729/pexels-photo-38947729.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Crispy golden spring rolls stuffed with fresh vegetables, served with sweet chili sauce.", rating: 4.5, popular: false, vegetarian: true, tags: ["light","vegetarian"] },
  { id: 5, name: "Vegetable Thai Curry", category: "Chinese", price: 320, image: "https://images.pexels.com/photos/31029754/pexels-photo-31029754.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Creamy coconut curry with seasonal vegetables, Thai basil and jasmine rice.", rating: 4.7, popular: false, vegetarian: true, tags: ["spicy","vegetarian","light"] },

  // --- BBQ & Tandoori ---
  { id: 6, name: "Chicken Tikka", category: "BBQ & Tandoori", price: 340, image: "https://images.pexels.com/photos/6522616/pexels-photo-6522616.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Char-grilled chicken marinated in yogurt and aromatic spices, cooked in a traditional tandoor.", rating: 4.9, popular: true, vegetarian: false, tags: ["spicy","traditional","high-protein"] },
  { id: 7, name: "Paneer Tikka", category: "BBQ & Tandoori", price: 300, image: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600", description: "Chunks of cottage cheese marinated in spiced yogurt, grilled with bell peppers and onions.", rating: 4.7, popular: true, vegetarian: true, tags: ["spicy","traditional","vegetarian"] },
  { id: 8, name: "Tandoori Prawns", category: "BBQ & Tandoori", price: 480, image: "https://images.pexels.com/photos/9222008/pexels-photo-9222008.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Juicy prawns marinated in tandoori spices, grilled over open flame.", rating: 4.8, popular: false, vegetarian: false, tags: ["spicy","high-protein"] },
  { id: 9, name: "Grilled Chicken Skewers", category: "BBQ & Tandoori", price: 360, image: "https://images.pexels.com/photos/5840330/pexels-photo-5840330.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Tender chicken pieces on skewers, marinated and char-grilled with herbs.", rating: 4.6, popular: false, vegetarian: false, tags: ["high-protein","spicy"] },

  // --- Shawarma ---
  { id: 10, name: "Chicken Shawarma Platter", category: "Shawarma", price: 320, image: "https://images.pexels.com/photos/5779364/pexels-photo-5779364.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Spiced chicken shawarma with garlic sauce, pickles and warm pita bread.", rating: 4.7, popular: true, vegetarian: false, tags: ["spicy","high-protein"] },

  // --- Starters ---
  { id: 11, name: "Creamy Tomato Soup", category: "Starters", price: 180, image: "https://images.pexels.com/photos/36909784/pexels-photo-36909784.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Velvety tomato basil soup with a touch of cream, served with crusty bread.", rating: 4.4, popular: false, vegetarian: true, tags: ["light","vegetarian"] },
  { id: 12, name: "Crispy Calamari", category: "Starters", price: 340, image: "https://images.pexels.com/photos/11160096/pexels-photo-11160096.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Golden-fried calamari rings with lemon wedge and zesty dipping sauce.", rating: 4.5, popular: false, vegetarian: false, tags: ["light","high-protein"] },
  { id: 13, name: "Samosa", category: "Starters", price: 140, image: "https://images.pexels.com/photos/36170557/pexels-photo-36170557.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Crispy pastry pockets filled with spiced potatoes and peas, served with chutney.", rating: 4.6, popular: false, vegetarian: true, tags: ["spicy","traditional","vegetarian"] },
  { id: 14, name: "Stuffed Mushrooms", category: "Starters", price: 260, image: "https://images.pexels.com/photos/10359397/pexels-photo-10359397.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Button mushrooms stuffed with herbed cream cheese and baked golden.", rating: 4.5, popular: false, vegetarian: true, tags: ["vegetarian","light"] },
  { id: 15, name: "Mediterranean Mezze Platter", category: "Starters", price: 420, image: "https://images.pexels.com/photos/5944/food-lunch-mexican-nachos.jpg?auto=compress&cs=tinysrgb&w=600", description: "Assorted mezze with hummus, baba ghanoush, falafel, olives and warm pita.", rating: 4.7, popular: true, vegetarian: true, tags: ["vegetarian","family-sharing","light"] },

  // --- Main Course ---
  { id: 16, name: "Chef's Signature Steak", category: "Main Course", price: 680, image: "https://images.pexels.com/photos/28321266/pexels-photo-28321266.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Grilled-to-perfection steak with herb butter, roasted vegetables and truffle jus.", rating: 4.9, popular: true, vegetarian: false, tags: ["high-protein"] },
  { id: 17, name: "Paneer Butter Masala", category: "Main Course", price: 340, image: "https://images.pexels.com/photos/11188417/pexels-photo-11188417.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Cottage cheese in a rich tomato-butter gravy with cashew cream and fenugreek.", rating: 4.8, popular: true, vegetarian: true, tags: ["traditional","vegetarian"] },
  { id: 18, name: "Lamb Rogan Josh", category: "Main Course", price: 520, image: "https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Slow-braised lamb in aromatic Kashmiri spices with yogurt and warm gravy.", rating: 4.8, popular: false, vegetarian: false, tags: ["spicy","traditional","high-protein"] },
  { id: 19, name: "Royal Lamb Shank", category: "Main Course", price: 620, image: "https://images.pexels.com/photos/16588046/pexels-photo-16588046.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Fall-off-the-bone lamb shank braised in a royal blend of spices, served on saffron rice.", rating: 4.9, popular: false, vegetarian: false, tags: ["traditional","high-protein","family-sharing"] },
  { id: 20, name: "Grilled Salmon", category: "Main Course", price: 580, image: "https://images.pexels.com/photos/14537684/pexels-photo-14537684.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Perfectly grilled salmon fillet with lemon butter sauce and seasonal vegetables.", rating: 4.7, popular: false, vegetarian: false, tags: ["high-protein","light"] },
  { id: 21, name: "Herb Crusted Salmon", category: "Main Course", price: 620, image: "https://images.pexels.com/photos/15723764/pexels-photo-15723764.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Sesame-and-herb crusted salmon with couscous and citrus reduction.", rating: 4.8, popular: false, vegetarian: false, tags: ["high-protein"] },
  { id: 22, name: "Stuffed Bell Peppers", category: "Main Course", price: 320, image: "https://images.pexels.com/photos/15747862/pexels-photo-15747862.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Bell peppers stuffed with herbed rice and vegetables, baked in a creamy sauce.", rating: 4.4, popular: false, vegetarian: true, tags: ["vegetarian","light"] },
  { id: 23, name: "Vegetable Lasagna", category: "Main Course", price: 340, image: "https://images.pexels.com/photos/28321262/pexels-photo-28321262.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Layers of pasta, seasonal vegetables and melted cheese baked to golden perfection.", rating: 4.6, popular: false, vegetarian: true, tags: ["vegetarian","family-sharing"] },
  { id: 24, name: "Smoked Chicken Platter", category: "Main Course", price: 480, image: "https://images.pexels.com/photos/36869212/pexels-photo-36869212.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Assorted smoked chicken with coleslaw and toasted bread.", rating: 4.5, popular: false, vegetarian: false, tags: ["high-protein","family-sharing"] },
  { id: 25, name: "Saffron Chicken", category: "Main Course", price: 420, image: "https://images.pexels.com/photos/27352275/pexels-photo-27352275.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Chicken simmered in a saffron-infused gravy with aromatic whole spices.", rating: 4.7, popular: false, vegetarian: false, tags: ["traditional","high-protein"] },

  // --- Rice & Noodles ---
  { id: 26, name: "Mushroom Risotto", category: "Rice & Noodles", price: 360, image: "https://images.pexels.com/photos/11190139/pexels-photo-11190139.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Creamy arborio rice with wild mushrooms, parmesan and fresh herbs.", rating: 4.6, popular: false, vegetarian: true, tags: ["vegetarian"] },
  { id: 27, name: "Truffle Pasta", category: "Rice & Noodles", price: 440, image: "https://images.pexels.com/photos/7491886/pexels-photo-7491886.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Pasta in a luxurious truffle cream sauce with shaved black truffle.", rating: 4.8, popular: true, vegetarian: true, tags: ["vegetarian"] },
  { id: 28, name: "Masala Dosa", category: "Rice & Noodles", price: 180, image: "https://images.pexels.com/photos/20422138/pexels-photo-20422138.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Crispy rice crepe filled with spiced potato masala, served with chutneys and sambar.", rating: 4.7, popular: true, vegetarian: true, tags: ["traditional","vegetarian","light"] },

  // --- Fast Food ---
  { id: 29, name: "Margherita Pizza", category: "Fast Food", price: 280, image: "https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Classic pizza with fresh mozzarella, basil and San Marzano tomato sauce.", rating: 4.6, popular: true, vegetarian: true, tags: ["vegetarian","family-sharing"] },
  { id: 30, name: "Chicken Steak", category: "Fast Food", price: 340, image: "https://images.pexels.com/photos/36734922/pexels-photo-36734922.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Grilled chicken steak with mashed potatoes and fresh salad.", rating: 4.5, popular: false, vegetarian: false, tags: ["high-protein"] },
  { id: 31, name: "Crispy Fish & Chips", category: "Fast Food", price: 320, image: "https://images.pexels.com/photos/5863643/pexels-photo-5863643.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Beer-battered fish with golden fries and tartar sauce.", rating: 4.5, popular: false, vegetarian: false, tags: ["high-protein"] },
  { id: 32, name: "Falafel Platter", category: "Fast Food", price: 280, image: "https://images.pexels.com/photos/12814859/pexels-photo-12814859.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Crispy falafel with hummus, salad, pita and tahini drizzle.", rating: 4.6, popular: false, vegetarian: true, tags: ["vegetarian","light"] },
  { id: 33, name: "Kabab Platter", category: "Fast Food", price: 460, image: "https://images.pexels.com/photos/7340982/pexels-photo-7340982.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Assorted grilled kebabs with onions, peppers and mint chutney.", rating: 4.7, popular: false, vegetarian: false, tags: ["spicy","high-protein","family-sharing"] },
  { id: 34, name: "Chicken Alfredo Pasta", category: "Fast Food", price: 340, image: "https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Fettuccine in creamy alfredo sauce with grilled chicken and parmesan.", rating: 4.6, popular: false, vegetarian: false, tags: ["high-protein"] },

  // --- Beverages ---
  { id: 35, name: "Classic Mojito", category: "Beverages", price: 180, image: "https://images.pexels.com/photos/4051265/pexels-photo-4051265.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Refreshing mint and lime mocktail with soda over crushed ice.", rating: 4.5, popular: false, vegetarian: true, tags: ["light","vegetarian"] },
  { id: 36, name: "Fresh Lemonade", category: "Beverages", price: 120, image: "https://images.pexels.com/photos/8042740/pexels-photo-8042740.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Hand-pressed lemonade with mint and a hint of raspberry.", rating: 4.3, popular: false, vegetarian: true, tags: ["light","vegetarian"] },
  { id: 37, name: "Fresh Orange Juice", category: "Beverages", price: 140, image: "https://images.pexels.com/photos/17612820/pexels-photo-17612820.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Freshly squeezed oranges, served chilled with ice.", rating: 4.4, popular: false, vegetarian: true, tags: ["light","vegetarian"] },
  { id: 38, name: "Mango Mocktail", category: "Beverages", price: 200, image: "https://images.pexels.com/photos/14930536/pexels-photo-14930536.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Tropical mango blend with sparkling water and fresh garnish.", rating: 4.6, popular: true, vegetarian: true, tags: ["sweet","vegetarian"] },
  { id: 39, name: "Iced Coffee", category: "Beverages", price: 160, image: "https://images.pexels.com/photos/4869290/pexels-photo-4869290.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Chilled coffee over ice with a creamy finish.", rating: 4.4, popular: false, vegetarian: true, tags: ["vegetarian"] },
  { id: 40, name: "Cold Coffee", category: "Beverages", price: 180, image: "https://images.pexels.com/photos/7091582/pexels-photo-7091582.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Thick blended cold coffee topped with whipped cream.", rating: 4.5, popular: false, vegetarian: true, tags: ["sweet","vegetarian"] },
  { id: 41, name: "Strawberry Mojito", category: "Beverages", price: 200, image: "https://images.pexels.com/photos/12049919/pexels-photo-12049919.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Strawberry and mint mocktail with lime and soda.", rating: 4.5, popular: false, vegetarian: true, tags: ["sweet","vegetarian","light"] },
  { id: 42, name: "Passion Fruit Mocktail", category: "Beverages", price: 220, image: "https://images.pexels.com/photos/16678544/pexels-photo-16678544.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Exotic passion fruit mocktail with a citrus twist.", rating: 4.4, popular: false, vegetarian: true, tags: ["sweet","vegetarian"] },

  // --- Desserts ---
  { id: 43, name: "Chocolate Lava Cake", category: "Desserts", price: 240, image: "https://images.pexels.com/photos/33674414/pexels-photo-33674414.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Warm chocolate cake with a molten center, served with vanilla ice cream.", rating: 4.9, popular: true, vegetarian: true, tags: ["sweet","vegetarian"] },
  { id: 44, name: "Chocolate Mousse", category: "Desserts", price: 220, image: "https://images.pexels.com/photos/19525903/pexels-photo-19525903.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Airy chocolate mousse topped with fresh berries.", rating: 4.6, popular: false, vegetarian: true, tags: ["sweet","vegetarian","light"] },
  { id: 45, name: "Chocolate Opera Cake", category: "Desserts", price: 280, image: "https://images.pexels.com/photos/10249461/pexels-photo-10249461.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Layered chocolate cake with coffee buttercream and chocolate ganache.", rating: 4.7, popular: false, vegetarian: true, tags: ["sweet","vegetarian"] },
  { id: 46, name: "Chocolate Truffle Cake", category: "Desserts", price: 260, image: "https://images.pexels.com/photos/37382219/pexels-photo-37382219.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Rich truffle cake with dark chocolate and strawberry topping.", rating: 4.7, popular: false, vegetarian: true, tags: ["sweet","vegetarian"] },
  { id: 47, name: "Crème Brûlée", category: "Desserts", price: 240, image: "https://images.pexels.com/photos/299349/pexels-photo-299349.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Classic French custard with a caramelized sugar crust and fresh berries.", rating: 4.8, popular: true, vegetarian: true, tags: ["sweet","vegetarian"] },
  { id: 48, name: "Fruit Tart", category: "Desserts", price: 220, image: "https://images.pexels.com/photos/4748367/pexels-photo-4748367.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Buttery tart shell with custard cream and fresh seasonal fruits.", rating: 4.5, popular: false, vegetarian: true, tags: ["sweet","vegetarian","light"] },
  { id: 49, name: "Gulab Jamun", category: "Desserts", price: 160, image: "https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Traditional Indian dessert — golden dumplings soaked in saffron syrup.", rating: 4.8, popular: true, vegetarian: true, tags: ["sweet","traditional","vegetarian"] },
  { id: 50, name: "Tiramisu", category: "Desserts", price: 260, image: "https://images.pexels.com/photos/26838690/pexels-photo-26838690.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Italian classic with layers of coffee-soaked ladyfingers and mascarpone.", rating: 4.7, popular: false, vegetarian: true, tags: ["sweet","vegetarian"] },
  { id: 51, name: "Panna Cotta", category: "Desserts", price: 220, image: "https://images.pexels.com/photos/5640039/pexels-photo-5640039.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Silky vanilla cream set with fresh berry compote.", rating: 4.6, popular: false, vegetarian: true, tags: ["sweet","vegetarian","light"] },
  { id: 52, name: "New York Cheesecake", category: "Desserts", price: 260, image: "https://images.pexels.com/photos/15030594/pexels-photo-15030594.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Dense and creamy cheesecake with a buttery graham crust.", rating: 4.7, popular: false, vegetarian: true, tags: ["sweet","vegetarian"] },
  { id: 53, name: "Rasmalai", category: "Desserts", price: 180, image: "https://images.pexels.com/photos/20446398/pexels-photo-20446398.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Soft cottage cheese dumplings in saffron-cardamom milk, garnished with pistachios.", rating: 4.8, popular: false, vegetarian: true, tags: ["sweet","traditional","vegetarian"] },
  { id: 54, name: "Red Velvet Cake", category: "Desserts", price: 240, image: "https://images.pexels.com/photos/22673942/pexels-photo-22673942.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Moist red velvet layers with cream cheese frosting.", rating: 4.6, popular: false, vegetarian: true, tags: ["sweet","vegetarian"] },
  { id: 55, name: "Strawberry Shortcake", category: "Desserts", price: 220, image: "https://images.pexels.com/photos/8954801/pexels-photo-8954801.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Fluffy shortcake layered with whipped cream and fresh strawberries.", rating: 4.5, popular: false, vegetarian: true, tags: ["sweet","vegetarian"] },
  { id: 56, name: "Lemon Cake", category: "Desserts", price: 200, image: "https://images.pexels.com/photos/36673263/pexels-photo-36673263.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Zesty lemon cake with a light glaze and powdered sugar.", rating: 4.4, popular: false, vegetarian: true, tags: ["sweet","vegetarian","light"] },
  { id: 57, name: "Mango Mousse", category: "Desserts", price: 220, image: "https://images.pexels.com/photos/8250150/pexels-photo-8250150.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Creamy mango mousse with fresh fruit garnish.", rating: 4.6, popular: false, vegetarian: true, tags: ["sweet","vegetarian"] },
  { id: 58, name: "Pistachio Cake", category: "Desserts", price: 240, image: "https://images.pexels.com/photos/30575774/pexels-photo-30575774.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Delicate pistachio cake with creamy frosting and crushed nuts.", rating: 4.5, popular: false, vegetarian: true, tags: ["sweet","vegetarian"] },
  { id: 59, name: "Vanilla Berry Cake", category: "Desserts", price: 220, image: "https://images.pexels.com/photos/28254499/pexels-photo-28254499.jpeg?auto=compress&cs=tinysrgb&w=600", description: "Vanilla sponge layered with fresh berries and cream.", rating: 4.5, popular: false, vegetarian: true, tags: ["sweet","vegetarian"] },
];

/* ============================================
   CHEF DATA
   ============================================ */
const CHEFS = [
  { name: "Arjun Mehta", role: "Executive Chef", image: "https://images.pexels.com/photos/32224391/pexels-photo-32224391.jpeg?auto=compress&cs=tinysrgb&w=600", bio: "With over 20 years of fine dining experience, Arjun leads the ELÁNORA kitchen with a vision of blending Indian heritage with global techniques.", specialty: "Modern Indian Cuisine" },
  { name: "Priya Sharma", role: "Head Chef", image: "https://images.pexels.com/photos/5737830/pexels-photo-5737830.jpeg?auto=compress&cs=tinysrgb&w=600", bio: "Priya's passion for regional Indian flavors brings authenticity and depth to every dish she creates, drawing inspiration from family recipes.", specialty: "Regional Indian Dishes" },
  { name: "Vikram Nair", role: "Sous Chef", image: "https://images.pexels.com/photos/24252237/pexels-photo-24252237.jpeg?auto=compress&cs=tinysrgb&w=600", bio: "Vikram specializes in tandoor and grill techniques, bringing smoky depth and precise temperature control to our signature dishes.", specialty: "Tandoor & BBQ" },
  { name: "Ananya Reddy", role: "Pastry Chef", image: "https://images.pexels.com/photos/3983571/pexels-photo-3983571.jpeg?auto=compress&cs=tinysrgb&w=600", bio: "Ananya crafts our desserts with artistic precision, combining classic French pastry techniques with Indian sweet traditions.", specialty: "Artisan Desserts" },
  { name: "Karthik Iyer", role: "Kitchen Chef", image: "https://images.pexels.com/photos/4253298/pexels-photo-4253298.jpeg?auto=compress&cs=tinysrgb&w=600", bio: "Karthik brings energy and precision to the kitchen line, mastering the art of wok cooking and Asian fusion dishes.", specialty: "Asian Fusion" },
  { name: "Meera Krishnan", role: "Junior Chef", image: "https://images.pexels.com/photos/31995484/pexels-photo-31995484.jpeg?auto=compress&cs=tinysrgb&w=600", bio: "Meera's dedication to fresh, seasonal ingredients and creative plating makes her a rising star in the ELÁNORA brigade.", specialty: "Seasonal Specials" },
];

/* ============================================
   CONSTANTS
   ============================================ */
const TAX_RATE = 0.05;        // 5% tax
const DISCOUNT_RATE = 0.10;   // 10% discount on subtotal above ₹500
const DISCOUNT_THRESHOLD = 500;
const LS_CART = "elanoraCart";
const LS_FAV = "elanoraFavorites";
const LS_ORDERS = "elanoraOrders";
const LS_RESERVATIONS = "elanoraReservations";
const LS_THEME = "elanoraTheme";
const SS_LOADER = "elanoraLoaderShown";

const MENU_CATEGORIES = ["All","Biryani","Chinese","BBQ & Tandoori","Shawarma","Starters","Main Course","Rice & Noodles","Fast Food","Beverages","Desserts"];

/* ============================================
   STATE — loaded from localStorage
   ============================================ */
let cart = loadJSON(LS_CART, []);
let favorites = loadJSON(LS_FAV, []);
let orders = loadJSON(LS_ORDERS, []);
let reservations = loadJSON(LS_RESERVATIONS, []);

let currentCategory = "All";
let currentSearch = "";
let currentSort = "default";
let vegOnly = false;
let popularOnly = false;

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */
function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("localStorage save failed", e);
  }
}

function formatPrice(amount) {
  return "₹" + amount.toFixed(0);
}

function findDish(id) {
  return MENU_ITEMS.find(function (d) { return d.id === id; });
}

function generateOrderNumber() {
  const num = 1000 + Math.floor(Math.random() * 9000);
  return "ELA-2026-" + num;
}

function generateReservationNumber() {
  const num = 2000 + Math.floor(Math.random() * 99);
  return "ELA-RES-20" + num;
}

/* ============================================
   TOAST SYSTEM
   ============================================ */
function showToast(message, type) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  type = type || "info";
  const toast = document.createElement("div");
  toast.className = "toast toast--" + type;

  const iconPaths = {
    success: '<polyline points="20 6 9 17 4 12"/>',
    error: '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
  };

  toast.innerHTML = '<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + iconPaths[type] + '</svg><span>' + message + "</span>";
  container.appendChild(toast);

  setTimeout(function () {
    toast.classList.add("toast--removing");
    setTimeout(function () { toast.remove(); }, 300);
  }, 2800);
}

/* ============================================
   THEME TOGGLE
   ============================================ */
function initTheme() {
  const savedTheme = localStorage.getItem(LS_THEME) || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(LS_THEME, next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (!icon) return;
  if (theme === "dark") {
    icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
  } else {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  }
}

/* ============================================
   MARQUEE — inject fixed strip below navbar on all pages
   ============================================ */
function initMarquee() {
  if (document.querySelector(".marquee")) return;

  var items = ["Fine Dining","Indian Heritage","Global Flavors","Handcrafted with Care","ELÁNORA"];
  var trackHTML = "";
  // Duplicate items twice for seamless scroll
  for (var rep = 0; rep < 2; rep++) {
    items.forEach(function (text) {
      trackHTML += '<span class="marquee__item">' + text + "</span>";
    });
  }

  var marquee = document.createElement("div");
  marquee.className = "marquee";
  marquee.innerHTML = '<div class="marquee__track">' + trackHTML + "</div>";

  // Insert right after the navbar
  var navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.parentNode.insertBefore(marquee, navbar.nextSibling);
  } else {
    document.body.insertBefore(marquee, document.body.firstChild);
  }
}

/* ============================================
   LOADING SCREEN — sessionStorage
   Shows only on first visit per browser session
   ============================================ */
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  // Check sessionStorage — only show on initial entry
  if (sessionStorage.getItem(SS_LOADER)) {
    loader.classList.add("loader--hidden");
    return;
  }

  // Show loader, then hide after animation
  loader.style.display = "flex";
  setTimeout(function () {
    loader.classList.add("loader--hidden");
    sessionStorage.setItem(SS_LOADER, "true");
  }, 2600);
}

/* ============================================
   NAVBAR — scroll behavior, mobile menu
   ============================================ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 40) {
        navbar.classList.add("navbar--scrolled");
      } else {
        navbar.classList.remove("navbar--scrolled");
      }
    });
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("nav__hamburger--open");
      mobileMenu.classList.toggle("mobile-menu--open");
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("nav__hamburger--open");
        mobileMenu.classList.remove("mobile-menu--open");
      });
    });
  }

  // Bottom nav "More" button opens mobile menu
  const bottomMore = document.getElementById("bottomMoreBtn");
  if (bottomMore && hamburger && mobileMenu) {
    bottomMore.addEventListener("click", function () {
      hamburger.classList.toggle("nav__hamburger--open");
      mobileMenu.classList.toggle("mobile-menu--open");
    });
  }
}

/* ============================================
   DISH CARD HTML GENERATOR
   ============================================ */
function dishCardHTML(dish) {
  var badges = "";
  if (dish.popular) badges += '<span class="badge badge--popular">Popular</span>';
  if (dish.vegetarian) badges += '<span class="badge badge--veg">Veg</span>';

  var isFav = favorites.indexOf(dish.id) !== -1;
  var favClass = isFav ? " dish-card__fav--active" : "";
  var heartFill = isFav ? "#fff" : "none";
  var heartStroke = isFav ? "#fff" : "#fff";

  return '' +
    '<article class="dish-card" data-id="' + dish.id + '">' +
      '<div class="dish-card__img-wrap" data-quickview="' + dish.id + '">' +
        '<div class="dish-card__badges">' + badges + '</div>' +
        '<img class="dish-card__img" src="' + dish.image + '" alt="' + dish.name + '" loading="lazy" />' +
      '</div>' +
      '<button class="dish-card__fav' + favClass + '" data-fav="' + dish.id + '" aria-label="Toggle favorite">' +
        '<svg viewBox="0 0 24 24" fill="' + heartFill + '" stroke="' + heartStroke + '" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
      '</button>' +
      '<div class="dish-card__body">' +
        '<h3 class="dish-card__name" data-quickview="' + dish.id + '">' + dish.name + '</h3>' +
        '<p class="dish-card__category">' + dish.category + '</p>' +
        '<div class="dish-card__rating"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ' + dish.rating + '</div>' +
        '<p class="dish-card__desc">' + dish.description + '</p>' +
        '<div class="dish-card__footer">' +
          '<span class="dish-card__price">' + formatPrice(dish.price) + '</span>' +
          '<button class="dish-card__add" data-add="' + dish.id + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add</button>' +
        '</div>' +
      '</div>' +
    '</article>';
}

/* ============================================
   HOMEPAGE — Signature dishes
   ============================================ */
function initSignatureGrid() {
  var grid = document.getElementById("signatureGrid");
  if (!grid) return;

  var signatureIds = [16, 15, 43]; // Chef's Signature Steak, Mediterranean Mezze, Chocolate Lava Cake
  var html = "";
  signatureIds.forEach(function (id) {
    var dish = findDish(id);
    if (dish) html += dishCardHTML(dish);
  });
  grid.innerHTML = html;
}

/* ============================================
   CHEFS PAGE — Render chef cards
   ============================================ */
function initChefGrid() {
  var grid = document.getElementById("chefGrid");
  if (!grid) return;

  var html = "";
  CHEFS.forEach(function (chef) {
    html += '' +
      '<article class="chef-card reveal">' +
        '<div class="chef-card__img"><img src="' + chef.image + '" alt="' + chef.name + ' — ' + chef.role + '" loading="lazy" /></div>' +
        '<div class="chef-card__body">' +
          '<h3 class="chef-card__name">' + chef.name + '</h3>' +
          '<p class="chef-card__role">' + chef.role + '</p>' +
          '<p class="chef-card__bio">' + chef.bio + '</p>' +
          '<p class="chef-card__specialty">Specialty: <span>' + chef.specialty + '</span></p>' +
        '</div>' +
      '</article>';
  });
  grid.innerHTML = html;
}

/* ============================================
   MENU PAGE — Categories, Search, Filter, Sort
   ============================================ */
function initMenuPage() {
  var grid = document.getElementById("menuGrid");
  if (!grid) return;

  renderCategories();
  renderMenu();
  initMenuControls();
}

function renderCategories() {
  var container = document.getElementById("menuCategories");
  if (!container) return;

  var html = "";
  MENU_CATEGORIES.forEach(function (cat) {
    var active = cat === currentCategory ? " cat-btn--active" : "";
    html += '<button class="cat-btn' + active + '" data-cat="' + cat + '">' + cat + "</button>";
  });
  container.innerHTML = html;

  container.querySelectorAll(".cat-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentCategory = this.getAttribute("data-cat");
      container.querySelectorAll(".cat-btn").forEach(function (b) { b.classList.remove("cat-btn--active"); });
      this.classList.add("cat-btn--active");
      renderMenu();
    });
  });
}

function getFilteredMenu() {
  var filtered = MENU_ITEMS.slice();

  // Category filter
  if (currentCategory !== "All") {
    filtered = filtered.filter(function (d) { return d.category === currentCategory; });
  }

  // Search filter — by name, category, description, tags
  if (currentSearch) {
    var q = currentSearch.toLowerCase();
    filtered = filtered.filter(function (d) {
      var inName = d.name.toLowerCase().indexOf(q) !== -1;
      var inCat = d.category.toLowerCase().indexOf(q) !== -1;
      var inDesc = d.description.toLowerCase().indexOf(q) !== -1;
      var inTags = d.tags.some(function (t) { return t.indexOf(q) !== -1; });
      return inName || inCat || inDesc || inTags;
    });
  }

  // Veg filter
  if (vegOnly) {
    filtered = filtered.filter(function (d) { return d.vegetarian; });
  }

  // Popular filter
  if (popularOnly) {
    filtered = filtered.filter(function (d) { return d.popular; });
  }

  // Sorting
  if (currentSort === "price-asc") {
    filtered.sort(function (a, b) { return a.price - b.price; });
  } else if (currentSort === "price-desc") {
    filtered.sort(function (a, b) { return b.price - a.price; });
  } else if (currentSort === "rating-desc") {
    filtered.sort(function (a, b) { return b.rating - a.rating; });
  } else if (currentSort === "name-asc") {
    filtered.sort(function (a, b) { return a.name.localeCompare(b.name); });
  }

  return filtered;
}

function renderMenu() {
  var grid = document.getElementById("menuGrid");
  var noResults = document.getElementById("noResults");
  var countEl = document.getElementById("resultsCount");
  if (!grid) return;

  var filtered = getFilteredMenu();

  if (countEl) {
    countEl.textContent = filtered.length + " dish" + (filtered.length !== 1 ? "es" : "") + " found";
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (noResults) noResults.style.display = "block";
    return;
  }

  if (noResults) noResults.style.display = "none";

  var html = "";
  filtered.forEach(function (dish) {
    html += dishCardHTML(dish);
  });
  grid.innerHTML = html;

  attachCardListeners();
}

function initMenuControls() {
  var search = document.getElementById("menuSearch");
  var sort = document.getElementById("menuSort");
  var vegBtn = document.getElementById("vegFilter");
  var popBtn = document.getElementById("popularFilter");
  var resetBtn = document.getElementById("resetBtn");

  if (search) {
    search.addEventListener("input", function () {
      currentSearch = this.value.trim();
      renderMenu();
    });
  }

  if (sort) {
    sort.addEventListener("change", function () {
      currentSort = this.value;
      renderMenu();
    });
  }

  if (vegBtn) {
    vegBtn.addEventListener("click", function () {
      vegOnly = !vegOnly;
      this.classList.toggle("filter-toggle--active", vegOnly);
      renderMenu();
    });
  }

  if (popBtn) {
    popBtn.addEventListener("click", function () {
      popularOnly = !popularOnly;
      this.classList.toggle("filter-toggle--active", popularOnly);
      renderMenu();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      currentCategory = "All";
      currentSearch = "";
      currentSort = "default";
      vegOnly = false;
      popularOnly = false;
      if (search) search.value = "";
      if (sort) sort.value = "default";
      if (vegBtn) vegBtn.classList.remove("filter-toggle--active");
      if (popBtn) popBtn.classList.remove("filter-toggle--active");
      renderCategories();
      renderMenu();
    });
  }
}

/* ============================================
   CARD EVENT LISTENERS — fav, add, quickview
   ============================================ */
function attachCardListeners() {
  // Favorite buttons
  document.querySelectorAll("[data-fav]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var id = parseInt(this.getAttribute("data-fav"));
      toggleFavorite(id);
    });
  });

  // Add to cart buttons
  document.querySelectorAll("[data-add]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var id = parseInt(this.getAttribute("data-add"));
      addToCart(id, 1);
    });
  });

  // Quick view
  document.querySelectorAll("[data-quickview]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.stopPropagation();
      var id = parseInt(this.getAttribute("data-quickview"));
      openQuickView(id);
    });
  });
}

/* ============================================
   FAVORITES SYSTEM — localStorage
   ============================================ */
function toggleFavorite(id) {
  var idx = favorites.indexOf(id);
  var dish = findDish(id);
  if (!dish) return;

  if (idx === -1) {
    favorites.push(id);
    showToast(dish.name + " added to favorites", "success");
  } else {
    favorites.splice(idx, 1);
    showToast(dish.name + " removed from favorites", "info");
  }
  saveJSON(LS_FAV, favorites);
  updateBadges();
  renderMenu();
  renderFavoritesDrawer();
}

function renderFavoritesDrawer() {
  var body = document.getElementById("favBody");
  if (!body) return;

  if (favorites.length === 0) {
    body.innerHTML = '' +
      '<div class="empty-state">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
        '<h3>No Favorites Yet</h3>' +
        '<p>Tap the heart icon on any dish to save it here.</p>' +
      '</div>';
    return;
  }

  var html = "";
  favorites.forEach(function (id) {
    var dish = findDish(id);
    if (!dish) return;
    html += '' +
      '<div class="fav-item">' +
        '<img class="fav-item__img" src="' + dish.image + '" alt="' + dish.name + '" />' +
        '<div class="fav-item__info">' +
          '<p class="fav-item__name">' + dish.name + '</p>' +
          '<p class="fav-item__rating">★ ' + dish.rating + ' · ' + dish.category + '</p>' +
          '<p class="fav-item__price">' + formatPrice(dish.price) + '</p>' +
        '</div>' +
        '<div class="fav-item__actions">' +
          '<button class="btn btn--burgundy btn--sm" data-add="' + dish.id + '">Add</button>' +
          '<button class="btn btn--ghost btn--sm" data-removefav="' + dish.id + '">Remove</button>' +
        '</div>' +
      '</div>';
  });
  body.innerHTML = html;

  // Attach listeners
  body.querySelectorAll("[data-add]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = parseInt(this.getAttribute("data-add"));
      addToCart(id, 1);
    });
  });
  body.querySelectorAll("[data-removefav]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = parseInt(this.getAttribute("data-removefav"));
      toggleFavorite(id);
    });
  });
}

/* ============================================
   CART SYSTEM — localStorage
   ============================================ */
function addToCart(id, qty) {
  var dish = findDish(id);
  if (!dish) return;

  var existing = cart.find(function (c) { return c.id === id; });
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: id, qty: qty });
  }
  saveJSON(LS_CART, cart);
  updateBadges();
  renderCart();
  showToast(dish.name + " added to cart", "success");
}

function removeFromCart(id) {
  var dish = findDish(id);
  cart = cart.filter(function (c) { return c.id !== id; });
  saveJSON(LS_CART, cart);
  updateBadges();
  renderCart();
  if (dish) showToast(dish.name + " removed from cart", "info");
}

function changeQty(id, delta) {
  var item = cart.find(function (c) { return c.id === id; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    saveJSON(LS_CART, cart);
    updateBadges();
    renderCart();
  }
}

function calculateBill() {
  var subtotal = 0;
  cart.forEach(function (item) {
    var dish = findDish(item.id);
    if (dish) subtotal += dish.price * item.qty;
  });
  var tax = subtotal * TAX_RATE;
  var discount = subtotal > DISCOUNT_THRESHOLD ? subtotal * DISCOUNT_RATE : 0;
  var total = subtotal + tax - discount;
  return { subtotal: subtotal, tax: tax, discount: discount, total: total };
}

function renderCart() {
  var body = document.getElementById("cartBody");
  var footer = document.getElementById("cartFooter");
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = '' +
      '<div class="empty-state">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
        '<h3>Your Cart is Empty</h3>' +
        '<p>Browse the menu and add dishes to your order.</p>' +
      '</div>';
    if (footer) footer.style.display = "none";
    return;
  }

  var html = "";
  cart.forEach(function (item) {
    var dish = findDish(item.id);
    if (!dish) return;
    html += '' +
      '<div class="cart-item">' +
        '<img class="cart-item__img" src="' + dish.image + '" alt="' + dish.name + '" />' +
        '<div class="cart-item__info">' +
          '<p class="cart-item__name">' + dish.name + '</p>' +
          '<p class="cart-item__price">' + formatPrice(dish.price) + ' each</p>' +
          '<div class="cart-item__controls">' +
            '<button class="qty-btn" data-dec="' + dish.id + '" aria-label="Decrease">−</button>' +
            '<span class="qty-display">' + item.qty + '</span>' +
            '<button class="qty-btn" data-inc="' + dish.id + '" aria-label="Increase">+</button>' +
            '<button class="cart-item__remove" data-remove="' + dish.id + '">Remove</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  });
  body.innerHTML = html;

  // Bill
  var bill = calculateBill();
  if (footer) {
    footer.style.display = "block";
    footer.innerHTML = '' +
      '<div class="bill">' +
        '<div class="bill__row"><span>Subtotal</span><span>' + formatPrice(bill.subtotal) + '</span></div>' +
        '<div class="bill__row"><span>Tax (5%)</span><span>' + formatPrice(bill.tax) + '</span></div>' +
        (bill.discount > 0 ? '<div class="bill__row bill__row--discount"><span>Discount (10%)</span><span>−' + formatPrice(bill.discount) + '</span></div>' : '') +
        '<div class="bill__row bill__row--total"><span>Total</span><span>' + formatPrice(bill.total) + '</span></div>' +
      '</div>' +
      '<div class="drawer__actions">' +
        '<button class="btn btn--ghost" id="continueShopping">Continue Shopping</button>' +
        '<button class="btn btn--primary" id="checkoutBtn">Proceed to Checkout</button>' +
      '</div>';

    var continueBtn = document.getElementById("continueShopping");
    if (continueBtn) continueBtn.addEventListener("click", closeCart);

    var checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) checkoutBtn.addEventListener("click", openCheckout);
  }

  // Qty listeners
  body.querySelectorAll("[data-inc]").forEach(function (btn) {
    btn.addEventListener("click", function () { changeQty(parseInt(this.getAttribute("data-inc")), 1); });
  });
  body.querySelectorAll("[data-dec]").forEach(function (btn) {
    btn.addEventListener("click", function () { changeQty(parseInt(this.getAttribute("data-dec")), -1); });
  });
  body.querySelectorAll("[data-remove]").forEach(function (btn) {
    btn.addEventListener("click", function () { removeFromCart(parseInt(this.getAttribute("data-remove"))); });
  });
}

/* ============================================
   BADGE UPDATES — navbar + bottom nav
   ============================================ */
function updateBadges() {
  var cartCount = cart.reduce(function (sum, c) { return sum + c.qty; }, 0);
  var favCount = favorites.length;

  var badges = ["cartBadge", "bottomCartBadge"];
  badges.forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    if (cartCount > 0) {
      el.textContent = cartCount;
      el.style.display = "flex";
      el.classList.add("nav__badge--pop");
      setTimeout(function () { el.classList.remove("nav__badge--pop"); }, 300);
    } else {
      el.style.display = "none";
    }
  });

  var favBadges = ["favBadge", "bottomFavBadge"];
  favBadges.forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    if (favCount > 0) {
      el.textContent = favCount;
      el.style.display = "flex";
    } else {
      el.style.display = "none";
    }
  });
}

/* ============================================
   DRAWERS — open/close cart and favorites
   ============================================ */
function openCart() {
  var drawer = document.getElementById("cartDrawer");
  var overlay = document.getElementById("overlay");
  if (drawer) drawer.classList.add("drawer--open");
  if (overlay) overlay.classList.add("overlay--open");
  document.body.classList.add("no-scroll");
  renderCart();
}

function closeCart() {
  var drawer = document.getElementById("cartDrawer");
  var overlay = document.getElementById("overlay");
  if (drawer) drawer.classList.remove("drawer--open");
  if (overlay && !isFavOpen()) overlay.classList.remove("overlay--open");
  document.body.classList.remove("no-scroll");
}

function openFavorites() {
  var drawer = document.getElementById("favDrawer");
  var overlay = document.getElementById("overlay");
  if (drawer) drawer.classList.add("drawer--open");
  if (overlay) overlay.classList.add("overlay--open");
  document.body.classList.add("no-scroll");
  renderFavoritesDrawer();
}

function closeFavorites() {
  var drawer = document.getElementById("favDrawer");
  var overlay = document.getElementById("overlay");
  if (drawer) drawer.classList.remove("drawer--open");
  if (overlay && !isCartOpen()) overlay.classList.remove("overlay--open");
  document.body.classList.remove("no-scroll");
}

function isCartOpen() {
  var d = document.getElementById("cartDrawer");
  return d && d.classList.contains("drawer--open");
}

function isFavOpen() {
  var d = document.getElementById("favDrawer");
  return d && d.classList.contains("drawer--open");
}

function closeAllDrawers() {
  closeCart();
  closeFavorites();
}

/* ============================================
   QUICK VIEW MODAL
   ============================================ */
var quickViewQty = 1;

function openQuickView(id) {
  var dish = findDish(id);
  if (!dish) return;

  var modal = document.getElementById("quickViewModal");
  var content = document.getElementById("quickViewContent");
  if (!modal || !content) return;

  quickViewQty = 1;
  var isFav = favorites.indexOf(id) !== -1;

  var badges = "";
  if (dish.popular) badges += '<span class="badge badge--popular">Popular</span> ';
  if (dish.vegetarian) badges += '<span class="badge badge--veg">Vegetarian</span>';
  if (!dish.vegetarian) badges += '<span class="badge badge--nonveg">Non-Veg</span>';

  content.innerHTML = '' +
    '<button class="modal__close" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
    '<img class="qv__img" src="' + dish.image + '" alt="' + dish.name + '" />' +
    '<div class="qv__body">' +
      '<div class="qv__header">' +
        '<h2 class="qv__name">' + dish.name + '</h2>' +
        '<span class="qv__price">' + formatPrice(dish.price) + '</span>' +
      '</div>' +
      '<div class="qv__meta">' +
        '<span class="dish-card__rating"><svg viewBox="0 0 24 24" style="width:14px;height:14px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ' + dish.rating + '</span>' +
        '<span style="font-size:0.75rem;color:var(--text-muted);letter-spacing:0.1em;text-transform:uppercase">' + dish.category + '</span>' +
        badges +
      '</div>' +
      '<p class="qv__desc">' + dish.description + '</p>' +
      '<div class="qv__qty">' +
        '<span class="qv__qty-label">Quantity</span>' +
        '<button class="qty-btn" id="qvDec" aria-label="Decrease">−</button>' +
        '<span class="qty-display" id="qvQty">1</span>' +
        '<button class="qty-btn" id="qvInc" aria-label="Increase">+</button>' +
      '</div>' +
      '<div class="qv__actions">' +
        '<button class="btn btn--burgundy" id="qvAddFav">' + (isFav ? "Remove from Favorites" : "Add to Favorites") + '</button>' +
        '<button class="btn btn--primary" id="qvAddCart">Add to Cart</button>' +
      '</div>' +
    '</div>';

  modal.classList.add("modal--open");
  document.body.classList.add("no-scroll");

  // Listeners
  document.getElementById("qvDec").addEventListener("click", function () {
    if (quickViewQty > 1) { quickViewQty--; document.getElementById("qvQty").textContent = quickViewQty; }
  });
  document.getElementById("qvInc").addEventListener("click", function () {
    quickViewQty++; document.getElementById("qvQty").textContent = quickViewQty;
  });
  document.getElementById("qvAddCart").addEventListener("click", function () {
    addToCart(id, quickViewQty);
    closeModal("quickViewModal");
  });
  document.getElementById("qvAddFav").addEventListener("click", function () {
    toggleFavorite(id);
    // Update button text
    var nowFav = favorites.indexOf(id) !== -1;
    this.textContent = nowFav ? "Remove from Favorites" : "Add to Favorites";
  });
}

/* ============================================
   GENERIC MODAL CLOSE
   ============================================ */
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("modal--open");
  // Check if any other modal/drawer is open before removing no-scroll
  var anyOpen = document.querySelector(".modal--open") || isCartOpen() || isFavOpen();
  if (!anyOpen) document.body.classList.remove("no-scroll");
}

function initModalClose() {
  document.querySelectorAll("[data-close-modal]").forEach(function (el) {
    el.addEventListener("click", function () {
      var modal = this.closest(".modal");
      if (modal) closeModal(modal.id);
    });
  });

  // Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal--open").forEach(function (m) { closeModal(m.id); });
      closeAllDrawers();
    }
  });
}

/* ============================================
   CHECKOUT
   ============================================ */
function openCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty", "error");
    return;
  }

  var modal = document.getElementById("checkoutModal");
  var content = document.getElementById("checkoutContent");
  if (!modal || !content) return;

  var bill = calculateBill();
  var itemsHTML = "";
  cart.forEach(function (item) {
    var dish = findDish(item.id);
    if (!dish) return;
    itemsHTML += '<div class="order-summary__item"><span>' + dish.name + ' ×' + item.qty + '</span><span>' + formatPrice(dish.price * item.qty) + '</span></div>';
  });

  content.innerHTML = '' +
    '<button class="modal__close" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
    '<div class="checkout__body">' +
      '<h2 style="font-family:var(--font-serif);margin-bottom:var(--sp-3)">Checkout</h2>' +

      '<div class="checkout__section">' +
        '<h3>Customer Details</h3>' +
        '<form id="checkoutForm" novalidate>' +
          '<div class="form-grid">' +
            '<div class="form-group"><label for="ckName">Full Name *</label><input type="text" id="ckName" placeholder="Your name" /><span class="form-error" id="errCkName"></span></div>' +
            '<div class="form-group"><label for="ckPhone">Phone *</label><input type="tel" id="ckPhone" placeholder="+91 98765 43210" /><span class="form-error" id="errCkPhone"></span></div>' +
            '<div class="form-group form-group--full"><label for="ckEmail">Email *</label><input type="email" id="ckEmail" placeholder="you@example.com" /><span class="form-error" id="errCkEmail"></span></div>' +
          '</div>' +

          '<h3 style="margin-top:var(--sp-3)">Order Type</h3>' +
          '<div class="radio-group" id="orderTypeGroup">' +
            '<div class="radio-card radio-card--active" data-type="Dine In"><p class="radio-card__title">Dine In</p><p class="radio-card__desc">Eat at the restaurant</p></div>' +
            '<div class="radio-card" data-type="Takeaway"><p class="radio-card__title">Takeaway</p><p class="radio-card__desc">Pick up your order</p></div>' +
            '<div class="radio-card" data-type="Delivery"><p class="radio-card__title">Delivery</p><p class="radio-card__desc">Get it delivered</p></div>' +
          '</div>' +
          '<div class="form-group form-group--full" id="addressField" style="display:none;margin-top:var(--sp-2)">' +
            '<label for="ckAddress">Delivery Address *</label>' +
            '<textarea id="ckAddress" placeholder="Full delivery address..."></textarea>' +
            '<span class="form-error" id="errCkAddress"></span>' +
          '</div>' +

          '<div class="form-group form-group--full" style="margin-top:var(--sp-2)">' +
            '<label for="ckRequest">Special Requests</label>' +
            '<textarea id="ckRequest" placeholder="Any special instructions..."></textarea>' +
          '</div>' +

          '<h3 style="margin-top:var(--sp-3)">Order Summary</h3>' +
          '<div class="order-summary">' + itemsHTML +
            '<div class="bill__row" style="margin-top:var(--sp-1)"><span>Subtotal</span><span>' + formatPrice(bill.subtotal) + '</span></div>' +
            '<div class="bill__row"><span>Tax (5%)</span><span>' + formatPrice(bill.tax) + '</span></div>' +
            (bill.discount > 0 ? '<div class="bill__row bill__row--discount"><span>Discount</span><span>−' + formatPrice(bill.discount) + '</span></div>' : '') +
            '<div class="bill__row bill__row--total"><span>Total</span><span>' + formatPrice(bill.total) + '</span></div>' +
          '</div>' +

          '<h3 style="margin-top:var(--sp-3)">Payment Method</h3>' +
          '<div class="radio-group" id="paymentGroup">' +
            '<div class="radio-card radio-card--active" data-pay="Pay at Restaurant"><p class="radio-card__title">Pay at Restaurant</p></div>' +
            '<div class="radio-card" data-pay="Cash on Delivery"><p class="radio-card__title">Cash on Delivery</p></div>' +
            '<div class="radio-card" data-pay="UPI Demo"><p class="radio-card__title">UPI Demo</p></div>' +
          '</div>' +
          '<p style="font-size:0.78rem;color:var(--text-muted);margin-top:var(--sp-1)">Demo only — no real payment is processed.</p>' +

          '<button type="submit" class="btn btn--primary btn--lg" style="width:100%;margin-top:var(--sp-3)">Place Order</button>' +
        '</form>' +
      '</div>' +
    '</div>';

  modal.classList.add("modal--open");
  document.body.classList.add("no-scroll");
  closeCart();

  // Re-attach modal close for new content
  content.querySelectorAll("[data-close-modal]").forEach(function (el) {
    el.addEventListener("click", function () { closeModal("checkoutModal"); });
  });

  // Order type selection
  var selectedOrderType = "Dine In";
  content.querySelectorAll("#orderTypeGroup .radio-card").forEach(function (card) {
    card.addEventListener("click", function () {
      content.querySelectorAll("#orderTypeGroup .radio-card").forEach(function (c) { c.classList.remove("radio-card--active"); });
      this.classList.add("radio-card--active");
      selectedOrderType = this.getAttribute("data-type");
      var addr = document.getElementById("addressField");
      if (addr) addr.style.display = selectedOrderType === "Delivery" ? "flex" : "none";
    });
  });

  // Payment selection
  var selectedPayment = "Pay at Restaurant";
  content.querySelectorAll("#paymentGroup .radio-card").forEach(function (card) {
    card.addEventListener("click", function () {
      content.querySelectorAll("#paymentGroup .radio-card").forEach(function (c) { c.classList.remove("radio-card--active"); });
      this.classList.add("radio-card--active");
      selectedPayment = this.getAttribute("data-pay");
    });
  });

  // Form submit
  var form = document.getElementById("checkoutForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      // Validate name
      var name = document.getElementById("ckName").value.trim();
      var errName = document.getElementById("errCkName");
      if (!name) { errName.textContent = "Name is required"; valid = false; } else errName.textContent = "";

      // Validate phone
      var phone = document.getElementById("ckPhone").value.trim();
      var errPhone = document.getElementById("errCkPhone");
      if (!phone || phone.length < 6) { errPhone.textContent = "Valid phone is required"; valid = false; } else errPhone.textContent = "";

      // Validate email
      var email = document.getElementById("ckEmail").value.trim();
      var errEmail = document.getElementById("errCkEmail");
      if (!email || email.indexOf("@") === -1) { errEmail.textContent = "Valid email is required"; valid = false; } else errEmail.textContent = "";

      // Validate address if delivery
      if (selectedOrderType === "Delivery") {
        var addr = document.getElementById("ckAddress").value.trim();
        var errAddr = document.getElementById("errCkAddress");
        if (!addr) { errAddr.textContent = "Address is required for delivery"; valid = false; } else errAddr.textContent = "";
      }

      if (!valid) {
        showToast("Please fill in all required fields", "error");
        return;
      }

      // Place order
      var bill = calculateBill();
      var orderItems = cart.map(function (item) {
        var d = findDish(item.id);
        return { id: d.id, name: d.name, price: d.price, qty: item.qty, image: d.image };
      });

      var order = {
        number: generateOrderNumber(),
        date: new Date().toISOString(),
        items: orderItems,
        subtotal: bill.subtotal,
        tax: bill.tax,
        discount: bill.discount,
        total: bill.total,
        customer: { name: name, phone: phone, email: email },
        orderType: selectedOrderType,
        payment: selectedPayment,
        request: document.getElementById("ckRequest").value.trim(),
        status: "received",
        statusTime: Date.now()
      };

      orders.unshift(order);
      saveJSON(LS_ORDERS, orders);

      // Clear cart
      cart = [];
      saveJSON(LS_CART, cart);
      updateBadges();

      // Close checkout, show confirmation
      closeModal("checkoutModal");
      showOrderConfirmation(order);
      renderOrders();
    });
  }
}

/* ============================================
   ORDER CONFIRMATION
   ============================================ */
function showOrderConfirmation(order) {
  var modal = document.getElementById("confirmModal");
  var content = document.getElementById("confirmContent");
  if (!modal || !content) return;

  var itemsHTML = order.items.map(function (item) {
    return '<div class="bill__row"><span>' + item.name + ' ×' + item.qty + '</span><span>' + formatPrice(item.price * item.qty) + '</span></div>';
  }).join("");

  content.innerHTML = '' +
    '<button class="modal__close" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
    '<div class="confirm">' +
      '<div class="confirm__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>' +
      '<h2 class="confirm__title">Order Confirmed</h2>' +
      '<p class="confirm__order-num">' + order.number + '</p>' +

      '<div class="status-tracker">' +
        '<div class="status-step status-step--active"><div class="status-step__dot">1</div><span class="status-step__label">Received</span></div>' +
        '<div class="status-step"><div class="status-step__dot">2</div><span class="status-step__label">Preparing</span></div>' +
        '<div class="status-step"><div class="status-step__dot">3</div><span class="status-step__label">Ready</span></div>' +
        '<div class="status-step"><div class="status-step__dot">4</div><span class="status-step__label">Completed</span></div>' +
      '</div>' +

      '<div class="confirm__details">' + itemsHTML +
        '<div class="bill__row" style="margin-top:var(--sp-1)"><span>Subtotal</span><span>' + formatPrice(order.subtotal) + '</span></div>' +
        '<div class="bill__row"><span>Tax</span><span>' + formatPrice(order.tax) + '</span></div>' +
        (order.discount > 0 ? '<div class="bill__row bill__row--discount"><span>Discount</span><span>−' + formatPrice(order.discount) + '</span></div>' : '') +
        '<div class="bill__row bill__row--total"><span>Total</span><span>' + formatPrice(order.total) + '</span></div>' +
      '</div>' +
      '<p class="confirm__eta">Estimated preparation time: <strong>25–35 minutes</strong></p>' +
      '<p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:var(--sp-2)">This is a demo order — no real order has been placed.</p>' +
      '<button class="btn btn--primary" data-close-modal>Done</button>' +
    '</div>';

  modal.classList.add("modal--open");
  document.body.classList.add("no-scroll");

  content.querySelectorAll("[data-close-modal]").forEach(function (el) {
    el.addEventListener("click", function () { closeModal("confirmModal"); });
  });

  showToast("Order " + order.number + " confirmed", "success");
}

/* ============================================
   MY ORDERS — render order history
   ============================================ */
function renderOrders() {
  var list = document.getElementById("ordersList");
  if (!list) return;

  if (orders.length === 0) {
    list.innerHTML = '<div class="empty-state"><h3>No Orders Yet</h3><p>Your past orders will appear here.</p></div>';
    return;
  }

  // Update statuses based on time elapsed (demo simulation)
  orders.forEach(function (order) {
    var elapsed = Date.now() - new Date(order.date).getTime();
    if (elapsed > 120000) order.status = "completed";
    else if (elapsed > 60000) order.status = "ready";
    else if (elapsed > 20000) order.status = "preparing";
    else order.status = "received";
  });
  saveJSON(LS_ORDERS, orders);

  var statusLabels = { received: "Order Received", preparing: "Preparing", ready: "Ready", completed: "Completed" };
  var statusClasses = { received: "received", preparing: "preparing", ready: "ready", completed: "completed" };

  var html = "";
  orders.forEach(function (order) {
    var date = new Date(order.date);
    var dateStr = date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) + " · " + date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
    var itemsStr = order.items.map(function (i) { return i.name + " ×" + i.qty; }).join(", ");

    html += '' +
      '<div class="order-card">' +
        '<div class="order-card__main">' +
          '<h4>' + order.number + '</h4>' +
          '<p class="order-card__date">' + dateStr + '</p>' +
          '<p class="order-card__items">' + itemsStr + '</p>' +
        '</div>' +
        '<div class="order-card__right">' +
          '<span class="order-card__total">' + formatPrice(order.total) + '</span>' +
          '<span class="order-status-badge order-status-badge--' + statusClasses[order.status] + '">' + statusLabels[order.status] + '</span>' +
        '</div>' +
      '</div>';
  });
  list.innerHTML = html;
}

/* ============================================
   TODAY'S OFFER — add to cart
   ============================================ */
function initOffer() {
  var btn = document.getElementById("addOfferBtn");
  if (!btn) return;
  btn.addEventListener("click", function () {
    // Add a special offer item
    var offerId = 999;
    var existing = cart.find(function (c) { return c.id === offerId; });
    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        id: offerId,
        qty: 1,
        name: "Dinner for Two Offer",
        price: 999,
        image: "https://images.pexels.com/photos/27138849/pexels-photo-27138849.jpeg?auto=compress&cs=tinysrgb&w=600"
      });
    }
    saveJSON(LS_CART, cart);
    updateBadges();
    renderCart();
    showToast("Dinner for Two offer added to cart", "success");
  });
}

// Override findDish to handle offer items
var _originalFindDish = findDish;
function findDishExtended(id) {
  if (id === 999) {
    return { id: 999, name: "Dinner for Two Offer", price: 999, image: "https://images.pexels.com/photos/27138849/pexels-photo-27138849.jpeg?auto=compress&cs=tinysrgb&w=600", category: "Offer", rating: 5.0, description: "2 Main Courses + 1 Dessert + 2 Mocktails", popular: false, vegetarian: false, tags: ["offer"] };
  }
  return _originalFindDish(id);
}
findDish = findDishExtended;

/* ============================================
   SMART DINING ADVISOR
   ============================================ */
function initAdvisor() {
  var prefsContainer = document.getElementById("advisorPrefs");
  var recommendBtn = document.getElementById("advisorRecommend");
  var results = document.getElementById("advisorResults");
  if (!prefsContainer || !recommendBtn) return;

  var selectedPrefs = [];

  prefsContainer.querySelectorAll(".pref-chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      var pref = this.getAttribute("data-pref");
      var idx = selectedPrefs.indexOf(pref);
      if (idx === -1) {
        selectedPrefs.push(pref);
        this.classList.add("pref-chip--active");
      } else {
        selectedPrefs.splice(idx, 1);
        this.classList.remove("pref-chip--active");
      }
    });
  });

  recommendBtn.addEventListener("click", function () {
    if (selectedPrefs.length === 0) {
      showToast("Select at least one preference", "error");
      return;
    }

    // Score each dish based on matching tags
    var scored = MENU_ITEMS.map(function (dish) {
      var score = 0;
      var reasons = [];
      selectedPrefs.forEach(function (pref) {
        if (dish.tags.indexOf(pref) !== -1) {
          score += 2;
          reasons.push(pref.charAt(0).toUpperCase() + pref.slice(1).replace("-", " "));
        }
        if (pref === "vegetarian" && dish.vegetarian) { score += 1; }
        if (pref === "spicy" && dish.tags.indexOf("spicy") !== -1) { score += 1; }
        if (pref === "sweet" && dish.category === "Desserts") { score += 2; reasons.push("Sweet"); }
        if (pref === "high-protein" && dish.tags.indexOf("high-protein") !== -1) { score += 1; }
        if (pref === "family-sharing" && dish.tags.indexOf("family-sharing") !== -1) { score += 1; }
        if (pref === "traditional" && dish.tags.indexOf("traditional") !== -1) { score += 1; }
        if (pref === "light" && dish.tags.indexOf("light") !== -1) { score += 1; }
      });
      return { dish: dish, score: score, reasons: reasons };
    });

    // Filter to dishes with score > 0 and sort by score
    var recommendations = scored.filter(function (r) { return r.score > 0; })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, 6);

    if (recommendations.length === 0) {
      results.innerHTML = '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1">No matching dishes found. Try different preferences.</p>';
      return;
    }

    var html = "";
    recommendations.forEach(function (rec) {
      html += '' +
        '<div class="advisor__result">' +
          '<img src="' + rec.dish.image + '" alt="' + rec.dish.name + '" loading="lazy" />' +
          '<div class="advisor__result-body">' +
            '<p class="advisor__result-name">' + rec.dish.name + '</p>' +
            '<p class="advisor__result-reason">Matches: ' + rec.reasons.slice(0, 3).join(", ") + '</p>' +
            '<p class="advisor__result-price">' + formatPrice(rec.dish.price) + '</p>' +
            '<button class="btn btn--burgundy btn--sm" data-add="' + rec.dish.id + '">Add to Cart</button>' +
          '</div>' +
        '</div>';
    });
    results.innerHTML = html;

    results.querySelectorAll("[data-add]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        addToCart(parseInt(this.getAttribute("data-add")), 1);
      });
    });

    showToast(recommendations.length + " recommendations found", "success");
  });
}

/* ============================================
   RESERVATION PAGE
   ============================================ */
var timeSlots = [
  { time: "6:00 PM", status: "available", label: "Available" },
  { time: "6:30 PM", status: "available", label: "Available" },
  { time: "7:00 PM", status: "almost", label: "Almost Full" },
  { time: "7:30 PM", status: "available", label: "Available" },
  { time: "8:00 PM", status: "full", label: "Fully Booked" },
  { time: "8:30 PM", status: "available", label: "Available" },
  { time: "9:00 PM", status: "almost", label: "Almost Full" },
  { time: "9:30 PM", status: "available", label: "Available" },
];

var selectedTime = "";

function initReservation() {
  var form = document.getElementById("reservationForm");
  var slotsContainer = document.getElementById("timeSlots");
  if (!form && !slotsContainer) return;

  // Render time slots
  if (slotsContainer) {
    var html = "";
    timeSlots.forEach(function (slot) {
      html += '<button type="button" class="time-slot time-slot--' + slot.status + '" data-time="' + slot.time + '"' + (slot.status === "full" ? " disabled" : "") + '>' +
        '<span class="time-slot__time">' + slot.time + '</span>' +
        '<span class="time-slot__status">' + slot.label + '</span>' +
      '</button>';
    });
    slotsContainer.innerHTML = html;

    slotsContainer.querySelectorAll(".time-slot").forEach(function (slot) {
      slot.addEventListener("click", function () {
        if (this.classList.contains("time-slot--full")) return;
        slotsContainer.querySelectorAll(".time-slot").forEach(function (s) { s.classList.remove("time-slot--selected"); });
        this.classList.add("time-slot--selected");
        selectedTime = this.getAttribute("data-time");
        var hidden = document.getElementById("resTime");
        if (hidden) hidden.value = selectedTime;
        var err = document.getElementById("errResTime");
        if (err) err.textContent = "";
      });
    });
  }

  // Set min date to today
  var dateInput = document.getElementById("resDate");
  if (dateInput) {
    var today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  // Form submit
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      var fields = [
        { id: "resName", errId: "errResName", label: "Name" },
        { id: "resPhone", errId: "errResPhone", label: "Phone" },
        { id: "resEmail", errId: "errResEmail", label: "Email" },
        { id: "resDate", errId: "errResDate", label: "Date" },
        { id: "resGuests", errId: "errResGuests", label: "Number of guests" },
      ];

      fields.forEach(function (f) {
        var input = document.getElementById(f.id);
        var err = document.getElementById(f.errId);
        if (!input || !err) return;
        var val = input.value.trim();
        if (!val) {
          err.textContent = f.label + " is required";
          valid = false;
        } else if (f.id === "resEmail" && val.indexOf("@") === -1) {
          err.textContent = "Valid email is required";
          valid = false;
        } else if (f.id === "resPhone" && val.length < 6) {
          err.textContent = "Valid phone is required";
          valid = false;
        } else {
          err.textContent = "";
        }
      });

      // Validate time slot
      if (!selectedTime) {
        var timeErr = document.getElementById("errResTime");
        if (timeErr) timeErr.textContent = "Please select a time slot";
        valid = false;
      }

      if (!valid) {
        showToast("Please fill in all required fields", "error");
        return;
      }

      // Create reservation
      var reservation = {
        number: generateReservationNumber(),
        date: new Date().toISOString(),
        resDate: document.getElementById("resDate").value,
        resTime: selectedTime,
        name: document.getElementById("resName").value.trim(),
        phone: document.getElementById("resPhone").value.trim(),
        email: document.getElementById("resEmail").value.trim(),
        guests: document.getElementById("resGuests").value,
        occasion: document.getElementById("resOccasion").value,
        request: document.getElementById("resRequest").value.trim()
      };

      reservations.unshift(reservation);
      saveJSON(LS_RESERVATIONS, reservations);

      showReservationConfirmation(reservation);
      renderReservationsList();
      form.reset();
      selectedTime = "";
      if (slotsContainer) slotsContainer.querySelectorAll(".time-slot").forEach(function (s) { s.classList.remove("time-slot--selected"); });
    });
  }

  renderReservationsList();
}

function showReservationConfirmation(res) {
  var modal = document.getElementById("resConfirmModal");
  var content = document.getElementById("resConfirmContent");
  if (!modal || !content) return;

  content.innerHTML = '' +
    '<button class="modal__close" data-close-modal aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
    '<div class="confirm">' +
      '<div class="confirm__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>' +
      '<h2 class="confirm__title">Reservation Confirmed</h2>' +
      '<p class="confirm__order-num">' + res.number + '</p>' +
      '<div class="confirm__details">' +
        '<div class="bill__row"><span>Name</span><span>' + res.name + '</span></div>' +
        '<div class="bill__row"><span>Date</span><span>' + res.resDate + '</span></div>' +
        '<div class="bill__row"><span>Time</span><span>' + res.resTime + '</span></div>' +
        '<div class="bill__row"><span>Guests</span><span>' + res.guests + '</span></div>' +
        '<div class="bill__row"><span>Occasion</span><span>' + res.occasion + '</span></div>' +
      '</div>' +
      '<p class="confirm__eta">We look forward to welcoming you to <strong>ELÁNORA</strong></p>' +
      '<p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:var(--sp-2)">This is a demo reservation — no real booking has been made.</p>' +
      '<button class="btn btn--primary" data-close-modal>Done</button>' +
    '</div>';

  modal.classList.add("modal--open");
  document.body.classList.add("no-scroll");

  content.querySelectorAll("[data-close-modal]").forEach(function (el) {
    el.addEventListener("click", function () { closeModal("resConfirmModal"); });
  });

  showToast("Reservation " + res.number + " confirmed", "success");
}

function renderReservationsList() {
  var list = document.getElementById("reservationsList");
  if (!list) return;

  if (reservations.length === 0) {
    list.innerHTML = '<div class="empty-state"><h3>No Reservations Yet</h3><p>Your booking history will appear here.</p></div>';
    return;
  }

  var html = "";
  reservations.forEach(function (res) {
    html += '' +
      '<div class="order-card">' +
        '<div class="order-card__main">' +
          '<h4>' + res.number + '</h4>' +
          '<p class="order-card__date">' + res.resDate + ' · ' + res.resTime + '</p>' +
          '<p class="order-card__items">' + res.guests + ' guests · ' + res.occasion + ' · ' + res.name + '</p>' +
        '</div>' +
        '<div class="order-card__right">' +
          '<span class="order-status-badge order-status-badge--received">Confirmed</span>' +
        '</div>' +
      '</div>';
  });
  list.innerHTML = html;
}

/* ============================================
   CONTACT FORM
   ============================================ */
function initContactForm() {
  var form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = true;

    var name = document.getElementById("contactName").value.trim();
    var errName = document.getElementById("errContactName");
    if (!name) { errName.textContent = "Name is required"; valid = false; } else errName.textContent = "";

    var email = document.getElementById("contactEmail").value.trim();
    var errEmail = document.getElementById("errContactEmail");
    if (!email || email.indexOf("@") === -1) { errEmail.textContent = "Valid email is required"; valid = false; } else errEmail.textContent = "";

    var msg = document.getElementById("contactMessage").value.trim();
    var errMsg = document.getElementById("errContactMessage");
    if (!msg) { errMsg.textContent = "Message is required"; valid = false; } else errMsg.textContent = "";

    if (!valid) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    showToast("Message sent! We will get back to you.", "success");
    form.reset();
  });
}

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */
function initScrollReveal() {
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("reveal--visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  reveals.forEach(function (el) { observer.observe(el); });
}

/* ============================================
   GLOBAL EVENT LISTENERS — nav buttons
   ============================================ */
function initGlobalListeners() {
  // Cart button
  var cartBtn = document.getElementById("cartBtn");
  if (cartBtn) cartBtn.addEventListener("click", openCart);

  var bottomCartBtn = document.getElementById("bottomCartBtn");
  if (bottomCartBtn) bottomCartBtn.addEventListener("click", openCart);

  // Favorites button
  var favBtn = document.getElementById("favBtn");
  if (favBtn) favBtn.addEventListener("click", openFavorites);

  var bottomFavBtn = document.getElementById("bottomFavBtn");
  if (bottomFavBtn) bottomFavBtn.addEventListener("click", openFavorites);

  // Close cart
  var cartClose = document.getElementById("cartClose");
  if (cartClose) cartClose.addEventListener("click", closeCart);

  // Close favorites
  var favClose = document.getElementById("favClose");
  if (favClose) favClose.addEventListener("click", closeFavorites);

  // Overlay click closes everything
  var overlay = document.getElementById("overlay");
  if (overlay) overlay.addEventListener("click", closeAllDrawers);
}

/* ============================================
   INITIALIZATION — runs on every page
   ============================================ */
function init() {
  initTheme();
  initLoader();
  initMarquee();
  initNavbar();
  initGlobalListeners();
  initModalClose();
  updateBadges();

  // Page-specific initializations
  initSignatureGrid();
  initChefGrid();
  initMenuPage();
  initOffer();
  initAdvisor();
  initReservation();
  initContactForm();
  renderOrders();
  renderReservationsList();
  renderCart();
  renderFavoritesDrawer();

  // Scroll reveal after content is rendered
  setTimeout(initScrollReveal, 100);
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
