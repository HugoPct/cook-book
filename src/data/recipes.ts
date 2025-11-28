import { Recipe } from "../types/recipe";

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Creamy Pasta Carbonara",
    description: "Classic Italian pasta dish with a creamy egg-based sauce",
    prepTime: "10 min",
    chef: "Chef Mario Rossi",
    image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYXxlbnwxfHx8fDE3NjQyMzYwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: [
      "400g spaghetti",
      "200g pancetta or bacon, diced",
      "4 large eggs",
      "100g Parmesan cheese, grated",
      "2 cloves garlic, minced",
      "Salt and black pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil and cook spaghetti according to package directions.",
      "While pasta cooks, fry pancetta in a large skillet over medium heat until crispy, about 5-7 minutes. Add garlic and cook for 1 minute.",
      "In a bowl, whisk together eggs and Parmesan cheese.",
      "Drain pasta, reserving 1 cup of pasta water. Add hot pasta to the skillet with pancetta.",
      "Remove from heat and quickly stir in the egg mixture, tossing constantly. Add pasta water as needed to create a creamy sauce.",
      "Season with salt and pepper, garnish with parsley and extra Parmesan. Serve immediately."
    ],
    tags: ["Italian", "Pasta", "Quick"]
  },
  {
    id: "2",
    name: "Chicken Stir Fry",
    description: "Colorful and healthy stir fry with tender chicken and crisp vegetables",
    prepTime: "15 min",
    chef: "Chef Wei Zhang",
    image: "https://images.unsplash.com/photo-1621515554656-3da68ba128b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwc3RpciUyMGZyeXxlbnwxfHx8fDE3NjQyMjUxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, cut into florets",
      "2 carrots, julienned",
      "3 tbsp soy sauce",
      "2 tbsp oyster sauce",
      "1 tbsp sesame oil",
      "2 cloves garlic, minced",
      "1 tbsp fresh ginger, minced",
      "2 tbsp vegetable oil",
      "Cooked rice for serving"
    ],
    instructions: [
      "Heat 1 tablespoon vegetable oil in a wok or large skillet over high heat.",
      "Add chicken and stir-fry until golden and cooked through, about 5-6 minutes. Remove and set aside.",
      "Add remaining oil to the wok. Stir-fry garlic and ginger for 30 seconds.",
      "Add all vegetables and stir-fry for 4-5 minutes until tender-crisp.",
      "Return chicken to the wok. Add soy sauce, oyster sauce, and sesame oil.",
      "Toss everything together for 2 minutes until well combined and heated through.",
      "Serve hot over steamed rice."
    ],
    tags: ["Asian", "Healthy", "Quick"]
  },
  {
    id: "3",
    name: "Easy Beef Tacos",
    description: "Flavorful Mexican-style tacos perfect for a quick dinner",
    prepTime: "10 min",
    chef: "Chef Carlos Garcia",
    image: "https://images.unsplash.com/photo-1689774329109-9b70beeefc0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMGRpbm5lcnxlbnwxfHx8fDE3NjQzMjcwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: [
      "500g ground beef",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "2 tbsp taco seasoning",
      "8 taco shells or tortillas",
      "1 cup shredded lettuce",
      "1 cup diced tomatoes",
      "1 cup shredded cheese",
      "Sour cream and salsa for serving"
    ],
    instructions: [
      "In a large skillet, cook ground beef over medium-high heat until browned, breaking it up as it cooks.",
      "Add onion and garlic, cook for 3-4 minutes until softened.",
      "Stir in taco seasoning and 1/4 cup water. Simmer for 5 minutes until thickened.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa.",
      "Serve immediately with your favorite toppings."
    ],
    tags: ["Mexican", "Easy", "Family-Friendly"]
  },
  {
    id: "4",
    name: "Baked Salmon with Vegetables",
    description: "Healthy and delicious one-pan salmon dinner",
    prepTime: "10 min",
    chef: "Chef Emma Johnson",
    image: "https://images.unsplash.com/photo-1641898378335-246c542f01f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjB2ZWdldGFibGVzfGVufDF8fHx8MTc2NDMzMjg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: [
      "4 salmon fillets (about 150g each)",
      "2 zucchini, sliced",
      "2 cups cherry tomatoes",
      "1 lemon, sliced",
      "3 tbsp olive oil",
      "2 tsp dried herbs (thyme, oregano)",
      "Salt and pepper to taste",
      "Fresh dill for garnish"
    ],
    instructions: [
      "Preheat oven to 200°C (400°F).",
      "Arrange salmon fillets on a large baking sheet. Surround with zucchini and cherry tomatoes.",
      "Drizzle everything with olive oil and sprinkle with herbs, salt, and pepper.",
      "Top salmon with lemon slices.",
      "Bake for 20-25 minutes until salmon is cooked through and flakes easily with a fork.",
      "Garnish with fresh dill and serve hot."
    ],
    tags: ["Healthy", "Seafood", "Easy"]
  },
  {
    id: "5",
    name: "Vegetarian Buddha Bowl",
    description: "Nutritious and colorful bowl packed with plant-based goodness",
    prepTime: "15 min",
    chef: "Chef Lily Chen",
    image: "https://images.unsplash.com/photo-1505576633757-0ac1084af824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRkaGElMjBib3dsfGVufDF8fHx8MTc2NDI1NzcxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: [
      "2 cups cooked quinoa",
      "1 can chickpeas, drained and roasted",
      "2 cups kale, chopped",
      "1 avocado, sliced",
      "1 cup shredded carrots",
      "1 cup red cabbage, shredded",
      "4 tbsp tahini",
      "2 tbsp lemon juice",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook quinoa according to package instructions.",
      "Toss chickpeas with olive oil, salt, and pepper. Roast at 200°C (400°F) for 20 minutes until crispy.",
      "Massage kale with a bit of olive oil and lemon juice to soften.",
      "Make tahini dressing by mixing tahini, lemon juice, water, salt, and pepper until smooth.",
      "Divide quinoa into bowls. Arrange kale, chickpeas, carrots, cabbage, and avocado on top.",
      "Drizzle with tahini dressing and serve."
    ],
    tags: ["Vegetarian", "Healthy", "Bowl"]
  },
  {
    id: "6",
    name: "Quick Chicken Curry",
    description: "Aromatic and flavorful curry ready in 30 minutes",
    prepTime: "10 min",
    chef: "Chef Priya Sharma",
    image: "https://images.unsplash.com/photo-1707322571124-9d3a47cce941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJyeSUyMHJpY2V8ZW58MXx8fHwxNzY0MzA3NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ingredients: [
      "500g chicken thighs, cubed",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 tbsp fresh ginger, grated",
      "2 tbsp curry powder",
      "400ml coconut milk",
      "200g diced tomatoes",
      "2 tbsp vegetable oil",
      "Fresh cilantro for garnish",
      "Cooked rice for serving"
    ],
    instructions: [
      "Heat oil in a large pot over medium-high heat. Add chicken and brown on all sides, about 5 minutes. Remove and set aside.",
      "In the same pot, sauté onion until softened, about 3 minutes.",
      "Add garlic, ginger, and curry powder. Cook for 1 minute until fragrant.",
      "Stir in coconut milk and diced tomatoes. Bring to a simmer.",
      "Return chicken to the pot. Simmer for 15 minutes until chicken is cooked through and sauce has thickened.",
      "Season with salt and pepper. Garnish with cilantro and serve over rice."
    ],
    tags: ["Indian", "Curry", "Comfort Food"]
  }
];
