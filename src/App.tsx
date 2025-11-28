import { useState } from "react";
import { recipes as initialRecipes } from "./data/recipes";
import { Recipe } from "./types/recipe";
import { RecipeCard } from "./components/RecipeCard";
import { RecipeDetailSheet } from "./components/RecipeDetailSheet";
import { AddRecipeDialog } from "./components/AddRecipeDialog";
import { TestDialog } from "./components/TestDialog";
import { UtensilsCrossed, Plus } from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setSheetOpen(true);
  };

  const handleAddRecipe = (newRecipe: Recipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  const handleButtonClick = () => {
    console.log("Button clicked! Opening dialog...");
    setAddDialogOpen(true);
    console.log("Dialog state set to:", true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-orange-100 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-orange-600">GF1</h1>
                <p className="text-sm text-gray-600">What's for dinner tonight?</p>
              </div>
            </div>
            <Button
              onClick={handleButtonClick}
              className="h-12 w-12 rounded-full bg-orange-600 hover:bg-orange-700"
              size="icon"
            >
              <Plus className="h-5 w-5" />
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
      <TestDialog
        open={addDialogOpen}
        onOpenChange={setAddDialogOpen}
      />
      {/* <AddRecipeDialog
        open={addDialogOpen}
        onOpenChange={setAddDialogOpen}
        onAddRecipe={handleAddRecipe}
      /> */}

      {/* Floating Add Button */}
      <Button
        onClick={() => setAddDialogOpen(true)}
        className="fixed top-20 right-8 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow bg-orange-600 hover:bg-orange-700 z-50"
        size="icon"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
}
