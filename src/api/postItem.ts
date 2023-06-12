export const postItem = async (body: {
  title: string;
  done: boolean;
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
