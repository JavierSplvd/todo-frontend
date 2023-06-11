export const editItem = async (body: {
  id: string;
  title: string;
}): Promise<number | undefined> => {
  try {
    const response = await fetch("http://localhost:8000/items/", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    return response.status;
  } catch (error) {
    console.error(error);
  }
};
