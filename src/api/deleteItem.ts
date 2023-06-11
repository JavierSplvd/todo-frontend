export const deleteItem = async (id: string): Promise<number | undefined> => {
  try {
    const response = await fetch("http://localhost:8000/items/" + id, {
      method: "DELETE",
    });
    return response.status;
  } catch (error) {
    console.error(error);
  }
};
