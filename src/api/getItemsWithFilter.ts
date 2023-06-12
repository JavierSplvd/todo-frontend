import { Item } from "../entities/Item";

export const getItemsWithFilter = async (
  searchString?: string
): Promise<Item[] | undefined> => {
  try {
    const response = await fetch(
      "http://localhost:8000/items/" +
        (searchString ? "?title=" + searchString : "")
    );
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
