import { Recipe } from "../types/recipe";
import { Card, CardContent } from "./ui/card";
import { Clock, ChefHat } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {recipe.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2">{recipe.name}</h3>
        <p className="text-gray-600 mb-3">{recipe.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            <span>{recipe.chef}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
