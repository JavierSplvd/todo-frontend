export const editItem = async (body: {
  id: string;
  title: string;
  done: boolean;
}): Promise<number | undefined> => {
  try {
    console.log(body);
    const response = await fetch("http://localhost:8000/items/", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    return response.status;
  } catch (error) {
    console.error(error);
  }
};
