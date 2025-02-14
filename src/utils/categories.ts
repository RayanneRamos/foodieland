import breakfastImage from "../assets/categories/breakfast.png";
import veganImage from "../assets/categories/vegan.png";
import meatImage from "../assets/categories/meat.png";
import dessertImage from "../assets/categories/dessert.png";
import lunchImage from "../assets/categories/lunch.png";
import chocolateImage from "../assets/categories/chocolate.png";
import chickenImage from "../assets/categories/chicken.png";
import fishImage from "../assets/categories/fish.png";
import saladImage from "../assets/categories/salad.png";
import soupImage from "../assets/categories/soup.png";
import pastaImage from "../assets/categories/pasta.png";
import beveragesImage from "../assets/categories/beverages.png";
import healthyImage from "../assets/categories/healthy.png";
import koreanImage from "../assets/categories/korean.png";
import thailandImage from "../assets/categories/thailand.png";
import japanImage from "../assets/categories/japan.png";
import chinaImage from "../assets/categories/china.png";
import airfryerImage from "../assets/categories/air-fryer.png";

interface Recipe {
  id: string;
  name: string;
  image: string;
  categoryId: string;
}

export const categories: Recipe[] = [
  {
    id: "1",
    image: breakfastImage,
    name: "Breakfast",
    categoryId: "1",
  },
  {
    id: "2",
    image: veganImage,
    name: "Vegan",
    categoryId: "2",
  },
  {
    id: "3",
    image: meatImage,
    name: "Meat",
    categoryId: "3",
  },
  {
    id: "4",
    image: dessertImage,
    name: "Dessert",
    categoryId: "4",
  },
  {
    id: "5",
    image: lunchImage,
    name: "Lunch",
    categoryId: "5",
  },
  {
    id: "6",
    image: chocolateImage,
    name: "Chocolate",
    categoryId: "6",
  },
  {
    id: "7",
    image: chickenImage,
    name: "Chicken",
    categoryId: "7",
  },
  {
    id: "8",
    image: fishImage,
    name: "Seafood",
    categoryId: "8",
  },
  {
    id: "9",
    image: saladImage,
    name: "Salad",
    categoryId: "9",
  },
  {
    id: "10",
    image: soupImage,
    name: "Soup",
    categoryId: "10",
  },
  {
    id: "11",
    image: pastaImage,
    name: "Pasta",
    categoryId: "11",
  },
  {
    id: "12",
    image: beveragesImage,
    name: "Beverages",
    categoryId: "12",
  },
  {
    id: "13",
    image: healthyImage,
    name: "Healthy",
    categoryId: "13",
  },
  {
    id: "14",
    image: koreanImage,
    name: "Korean",
    categoryId: "14",
  },
  {
    id: "15",
    image: thailandImage,
    name: "Thailand",
    categoryId: "15",
  },
  {
    id: "16",
    image: japanImage,
    name: "Japan",
    categoryId: "16",
  },
  {
    id: "17",
    image: chinaImage,
    name: "China",
    categoryId: "17",
  },
  {
    id: "18",
    image: airfryerImage,
    name: "Air Fryer",
    categoryId: "18",
  },
];
