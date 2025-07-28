import React, { useState } from "react";
import "./AddButtonModal.css";

export default function AddButtonModal({ onSubmit, onClose }) {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [bgColor, setBgColor] = useState("#C19B77");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ text, url, style: { background: bgColor } });
  }

  return (
    <div className="modal-overlay">
      <form className="modal" onSubmit={handleSubmit}>
        <h4>Add Call To Action Button</h4>
        <label>
          Button Text:
          <input value={text} onChange={e => setText(e.target.value)} required />
        </label>
        <label>
          URL/Action:
          <input value={url} onChange={e => setUrl(e.target.value)} required />
        </label>
        <label>
          Color:
          <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} />
        </label>
        <div className="modal-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
