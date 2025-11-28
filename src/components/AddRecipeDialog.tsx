import { useState } from "react";
import { Recipe } from "../types/recipe";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Loader2 } from "lucide-react";
import { NANO_BANANA_CONFIG } from "../config/api";

interface AddRecipeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddRecipe: (recipe: Recipe) => void;
}

export function AddRecipeDialog({
  open,
  onOpenChange,
  onAddRecipe,
}: AddRecipeDialogProps) {
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    prepTime: "",
    chef: "",
    ingredients: "",
    instructions: "",
    tags: "",
  });

  console.log("AddRecipeDialog rendering, open:", open);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsGeneratingImage(true);

    try {
      // Generate image using Nano Banana API
      const imageUrl = await generateRecipeImage(
        formData.name,
        formData.description,
        formData.ingredients
      );

      // Create new recipe object
      const newRecipe: Recipe = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        prepTime: formData.prepTime,
        chef: formData.chef,
        image: imageUrl,
        ingredients: formData.ingredients
          .split("\n")
          .filter((item) => item.trim()),
        instructions: formData.instructions
          .split("\n")
          .filter((item) => item.trim()),
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
      };

      onAddRecipe(newRecipe);
      
      // Reset form
      setFormData({
        name: "",
        description: "",
        prepTime: "",
        chef: "",
        ingredients: "",
        instructions: "",
        tags: "",
      });
      
      onOpenChange(false);
    } catch (error) {
      console.error("Error creating recipe:", error);
      alert("Failed to generate image. Please try again.");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Recipe</DialogTitle>
          <DialogDescription>
            Fill in the details below. We'll generate an image for your recipe!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Recipe Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="e.g., Spaghetti Carbonara"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Brief description of your recipe"
              required
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prepTime">Prep Time *</Label>
              <Input
                id="prepTime"
                value={formData.prepTime}
                onChange={(e) =>
                  setFormData({ ...formData, prepTime: e.target.value })
                }
                placeholder="e.g., 15 min"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="chef">Chef Name *</Label>
              <Input
                id="chef"
                value={formData.chef}
                onChange={(e) =>
                  setFormData({ ...formData, chef: e.target.value })
                }
                placeholder="e.g., Jamie Oliver"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ingredients">Ingredients (one per line) *</Label>
            <Textarea
              id="ingredients"
              value={formData.ingredients}
              onChange={(e) =>
                setFormData({ ...formData, ingredients: e.target.value })
              }
              placeholder="400g spaghetti&#10;200g pancetta&#10;4 large eggs"
              required
              rows={6}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions">Instructions (one per line) *</Label>
            <Textarea
              id="instructions"
              value={formData.instructions}
              onChange={(e) =>
                setFormData({ ...formData, instructions: e.target.value })
              }
              placeholder="Boil water and cook pasta&#10;Fry pancetta until crispy&#10;Mix eggs and cheese"
              required
              rows={6}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma separated) *</Label>
            <Input
              id="tags"
              value={formData.tags}
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
              placeholder="e.g., Italian, Pasta, Quick"
              required
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isGeneratingImage}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isGeneratingImage}>
              {isGeneratingImage ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Image...
                </>
              ) : (
                "Add Recipe"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// API function to generate recipe image using Nano Banana
async function generateRecipeImage(
  name: string,
  description: string,
  ingredients: string
): Promise<string> {
  try {
    // Create a prompt for the image generation
    const prompt = `A professional, appetizing photo of ${name}. ${description}. High quality food photography, well-lit, restaurant style presentation.`;

    // Make API call to Nano Banana
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    // Add API key if configured
    if (NANO_BANANA_CONFIG.apiKey) {
      headers["Authorization"] = `Bearer ${NANO_BANANA_CONFIG.apiKey}`;
    }

    const response = await fetch(NANO_BANANA_CONFIG.apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        prompt: prompt,
        width: NANO_BANANA_CONFIG.defaultWidth,
        height: NANO_BANANA_CONFIG.defaultHeight,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const data = await response.json();
    return data.imageUrl || data.url || data.image_url;
  } catch (error) {
    console.error("Image generation error:", error);
    // Fallback to a placeholder image if API fails
    return NANO_BANANA_CONFIG.fallbackImage;
  }
}

