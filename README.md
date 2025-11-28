
  # GF1 Recipe App

  This is a code bundle for GF1 Recipe App. The original project is available at https://www.figma.com/design/HtWvdGxUQkYMiFmgSnreh3/GF1-Recipe-App.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Features

  ### Add Your Own Recipes
  - Click the **+** button (floating button in the bottom right) to add a new recipe
  - Fill in all recipe details: name, description, prep time, chef, ingredients, instructions, and tags
  - The app will automatically generate an image for your recipe using Nano Banana AI

  ### Nano Banana API Configuration
  To enable AI-generated recipe images:
  1. Create a `.env` file in the root directory
  2. Add your Nano Banana API key:
     ```
     VITE_NANO_BANANA_API_KEY=your_api_key_here
     ```
  3. Update the API endpoint in `src/config/api.ts` if needed

  If no API key is configured, the app will use a fallback placeholder image.
  