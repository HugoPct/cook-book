// API Configuration for Nano Banana Image Generation
// Update these values with your actual Nano Banana API credentials

export const NANO_BANANA_CONFIG = {
  // Replace with your actual Nano Banana API endpoint
  apiUrl: "https://api.nanobanana.com/generate",
  
  // Add your API key here (consider using environment variables in production)
  apiKey: import.meta.env.VITE_NANO_BANANA_API_KEY || "",
  
  // Default image generation settings
  defaultWidth: 1080,
  defaultHeight: 810,
  
  // Fallback image when API fails or is not configured
  fallbackImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1080&h=810&fit=crop&q=80",
};

// You can create a .env file in the root directory with:
// VITE_NANO_BANANA_API_KEY=your_api_key_here

