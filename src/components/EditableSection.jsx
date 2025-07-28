import React, { useState } from "react";
import { updateSection } from "../api/editSection";

export default function EditableSection({ component, field, defaultValue, className }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    setLoading(true);
    try {
      await updateSection(component, field, value);
      setIsEditing(false);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setIsEditing(true);
      alert("Edit failed. Try again.\n" + (err?.message || ''));
      // Critical for debugging:
      console.error("[EditableSection] POST to Flask failed:", err);
    }
  }

  return (
    <div className={className ? className + " editable-section" : "editable-section"}>
      {isEditing ? (
        <>
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e =>
              e.key === "Enter" && !loading && handleSave()
            }
            disabled={loading}
            autoFocus
          />
          <button className="edit-btn" onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
        </>
      ) : (
        <>
          <span>{value}</span>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
