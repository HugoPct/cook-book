export interface Recipe {
  id: string;
  name: string;
  description: string;
  prepTime: string;
  chef: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  tags: string[];
}
