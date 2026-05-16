export type MenuItem = { name: string; desc: string; price: string };

export const DRINKS: MenuItem[] = [
  { name: "Corona Extra", desc: "Mexican lager · ice-cold long neck", price: "€5" },
  { name: "Heineken", desc: "Crisp Dutch pilsner on draft", price: "€4.5" },
  { name: "Mythos", desc: "The Greek classic — sun in a glass", price: "€4" },
  { name: "Vodka Red Bull", desc: "Smooth vodka, electric energy", price: "€8" },
  { name: "Jack & Coke", desc: "Tennessee whiskey, ice, coke", price: "€8" },
  { name: "Gin & Tonic", desc: "London dry, premium tonic, lime", price: "€8" },
  { name: "Tequila Shot", desc: "Salt. Lime. Don't think about it.", price: "€4" },
  { name: "Ouzo", desc: "Chilled Greek aniseed, the proper way", price: "€4" },
];

export const COCKTAILS: MenuItem[] = [
  { name: "Mojito", desc: "White rum, fresh mint, lime, soda", price: "€9" },
  { name: "Aperol Spritz", desc: "Aperol, prosecco, orange, ice", price: "€9" },
  { name: "Sex on the Beach", desc: "Vodka, peach, cranberry, orange", price: "€9" },
  { name: "Piña Colada", desc: "Rum, coconut cream, pineapple", price: "€9" },
  { name: "Cosmopolitan", desc: "Vodka, triple sec, cranberry, lime", price: "€10" },
  { name: "Margarita", desc: "Tequila, triple sec, lime, salt rim", price: "€10" },
  { name: "Blue Lagoon", desc: "Vodka, blue curaçao, lemonade", price: "€9" },
  { name: "Espresso Martini", desc: "Vodka, espresso, kahlua, foam", price: "€10" },
];

export const SHISHA: MenuItem[] = [
  { name: "Double Apple", desc: "Classic Middle-East profile, rich & sweet", price: "€15" },
  { name: "Mint", desc: "Pure cool mint — clean exhale", price: "€15" },
  { name: "Watermelon", desc: "Juicy summer melon, smooth clouds", price: "€15" },
  { name: "Blueberry Mint", desc: "Berries laced with arctic mint", price: "€16" },
  { name: "Peach Ice", desc: "Ripe peach with a frozen finish", price: "€16" },
  { name: "Grape", desc: "Deep purple grape, candy-sweet", price: "€15" },
  { name: "Lemon Ice", desc: "Sour citrus burst on ice", price: "€16" },
  { name: "Mixed Fruit", desc: "Our house blend — ask the bar", price: "€17" },
];

export const DISHES: MenuItem[] = [
  { name: "Club Sandwich", desc: "Chicken, bacon, egg, lettuce, tomato", price: "€9" },
  { name: "Greek Salad", desc: "Tomato, cucumber, olives, feta, oregano", price: "€8" },
  { name: "Bruschetta", desc: "Toasted bread, tomato, basil, olive oil", price: "€6" },
  { name: "Loaded Nachos", desc: "Cheese, jalapeños, salsa, sour cream", price: "€8" },
  { name: "Chicken Wings", desc: "Crispy wings, BBQ or hot sauce", price: "€9" },
  { name: "Crispy Fries", desc: "Golden, salted, with house dip", price: "€5" },
  { name: "Cheese Platter", desc: "Graviera, feta, kasseri, crackers", price: "€12" },
  { name: "Fruit Platter", desc: "Seasonal Cretan fruit, fresh & cold", price: "€10" },
];

export const REVIEWS = [
  { rating: 5, text: "Had so much fun here! Staff were brilliant, the vibe was great and music was good! Definitely recommend!", name: "Jamie", country: "UK", meta: "Service 5/5 · Atmosphere 5/5" },
  { rating: 5, text: "What a great party with some RnB bangers. Top place in Malia. Thank you!", name: "Sophie", country: "Germany", meta: "Atmosphere 5/5" },
  { rating: 5, text: "Good service and atmosphere. Honestly our favourite chill out place if we want to go party. Always an amazing atmosphere, kind bartender, nice promoters and security guard.", name: "Aiden", country: "Ireland", meta: "Service 5/5" },
  { rating: 5, text: "They even have a pole to dance on which is always so fun. Highly recommend — it's free entry! Great food, service and atmosphere.", name: "Maja", country: "Sweden", meta: "Food 5/5 · Service 5/5 · Atmosphere 5/5" },
];
