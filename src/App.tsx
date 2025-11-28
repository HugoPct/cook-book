import { useState } from "react";
import { recipes as initialRecipes } from "./data/recipes";
import { Recipe } from "./types/recipe";
import { RecipeCard } from "./components/RecipeCard";
import { RecipeDetailSheet } from "./components/RecipeDetailSheet";
import { RecipeFormDialog } from "./components/RecipeFormDialog";
import { UtensilsCrossed, Plus } from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setSheetOpen(true);
  };

  const handleAddRecipe = (recipe: Recipe) => {
    setRecipes([recipe, ...recipes]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-orange-100 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-orange-600">GF1</h1>
                <p className="text-sm text-gray-600">What's for dinner tonight?</p>
              </div>
            </div>
            <Button onClick={() => setFormOpen(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Recipe</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="mb-2">Quick Dinner Recipes</h2>
          <p className="text-gray-600">
            Perfect meals for busy coworkers at 6pm
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => handleRecipeClick(recipe)}
            />
          ))}
        </div>
      </main>

      {/* Recipe Detail Sheet */}
      <RecipeDetailSheet
        recipe={selectedRecipe}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />

      {/* Add Recipe Dialog */}
      <RecipeFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        onSubmit={handleAddRecipe}
      />
    </div>
  );
}
