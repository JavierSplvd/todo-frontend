import { Item } from "../entities/Item";

export const getItems = async (): Promise<Item[] | undefined> => {
  try {
    const response = await fetch("http://localhost:8000/items/");
    if (response.ok) {
      const data: Item[] = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch items");
    }
  } catch (error) {
    console.error(error);
  }
};
