import React, { useState } from "react";
import EditableSection from "./EditableSection";
import AddButtonModal from "./AddButtonModal";
import "./HomePage1.css";

export default function HomePage1() {
  const [ctaButtons, setCtaButtons] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  function handleAddCTA(newButton) {
    setCtaButtons([...ctaButtons, newButton]);
    setShowAddModal(false);
  }

  return (
    <div className="homepage-hero">
      <div className="homepage-hero-content">
        <EditableSection
          component="hero"
          field="title"
          defaultValue="A Luxurious Way To Enjoy Your Life"
          className="homepage-title"
        />
        <p className="homepage-desc">
          Welcome to Imperial Grand Hotel. Experience unmatched elegance and exceptional amenities.<br />
          Book your memorable stay today!
        </p>
        <div className="homepage-cta-row">
          {ctaButtons.map((btn, i) => (
            <a
              key={i}
              className="homepage-cta-btn"
              href={btn.url}
              style={btn.style}
              target="_blank"
              rel="noopener noreferrer"
            >
              {btn.text}
            </a>
          ))}
          <button onClick={() => setShowAddModal(true)} className="homepage-add-btn">+ Add Button</button>
        </div>
      </div>
      {showAddModal && (
        <AddButtonModal
          onSubmit={handleAddCTA}
          onClose={() => setShowAddModal(false)}
        />
      )}
      <div className="homepage-hero-bg" />

      {/* ----- Example Rooms/Features Section goes here ----- */}
      <div className="homepage-rooms-section">
        <h2 className="section-title">Our Rooms & Suites</h2>
        <div className="rooms-row">
          <div className="room-card">
            <div className="room-photo room-photo1" />
            <div className="room-title">Executive Suite</div>
            <div className="room-desc">Spacious, elegant comfort with city or pool view.</div>
          </div>
          <div className="room-card">
            <div className="room-photo room-photo2" />
            <div className="room-title">Family Room</div>
            <div className="room-desc">Perfect for families of 4-6 with additional amenities.</div>
          </div>
          <div className="room-card">
            <div className="room-photo room-photo3" />
            <div className="room-title">Imperial Deluxe</div>
            <div className="room-desc">Our most iconic, with private lounge access.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
