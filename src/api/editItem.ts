export const editItem = async (body: {
  title: string;
}): Promise<number | undefined> => {
  try {
    const response = await fetch("http://localhost:8000/items/", {
      method: "POST",
      body: JSON.stringify(body),
    });
    return response.status;
  } catch (error) {
    console.error(error);
  }
};
