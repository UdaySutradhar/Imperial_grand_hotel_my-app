const BASE_URL = "/api";
export async function updateSection(component, field, value) {
  try {
    const res = await fetch(`${BASE_URL}/update-section`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ component, field, value }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Unknown error");
    return data;
  } catch (err) {
    console.error("POST to Serverless Function failed:", err);
    throw err;
  }
}
