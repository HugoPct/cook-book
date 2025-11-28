import { Recipe } from "../types/recipe";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Clock, ChefHat } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Separator } from "./ui/separator";

interface RecipeDetailSheetProps {
  recipe: Recipe | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RecipeDetailSheet({
  recipe,
  open,
  onOpenChange,
}: RecipeDetailSheetProps) {
  if (!recipe) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{recipe.name}</SheetTitle>
          <SheetDescription>{recipe.description}</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Image */}
          <div className="rounded-lg overflow-hidden">
            <ImageWithFallback
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Recipe Info */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <div>
                <div className="text-gray-500">Prep Time</div>
                <div>{recipe.prepTime}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-orange-600" />
              <div>
                <div className="text-gray-500">Chef</div>
                <div>{recipe.chef}</div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Ingredients */}
          <div>
            <h3 className="mb-3 text-orange-600">Ingredients</h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Instructions */}
          <div>
            <h3 className="mb-3 text-orange-600">Instructions</h3>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="flex-1 pt-0.5">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
