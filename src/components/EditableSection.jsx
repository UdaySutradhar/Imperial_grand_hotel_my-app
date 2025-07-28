import React, { useState } from "react";
import { updateSection } from "../api/editSection";

export default function EditableSection({ component, field, defaultValue, className }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(defaultValue);

  async function handleSave() {
    setIsEditing(false);
    await updateSection(component, field, value);
  }

  return (
    <div className={className ? className + " editable-section" : "editable-section"}>
      {isEditing ? (
        <>
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSave()}
            autoFocus
          />
          <button className="edit-btn" onClick={handleSave}>Save</button>
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
