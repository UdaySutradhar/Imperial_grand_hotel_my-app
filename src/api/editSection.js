export async function updateSection(component, field, value) {
  try {
    const res = await fetch("http://localhost:5050/update-section", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ component, field, value }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Unknown error");
    return data;
  } catch (err) {
    console.error("POST to Flask failed:", err);
    throw err;
  }
}
