import React, { useState } from "react";
import EditableSection from "./EditableSection";
import AddButtonModal from "./AddButtonModal";
import "./HomePage2.css";

export default function HomePage2() {
  const [ctaButtons, setCtaButtons] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  function handleAddCTA(newButton) {
    setCtaButtons([...ctaButtons, newButton]);
    setShowAddModal(false);
  }

  return (
    <div className="homepage2">
      {/* HERO SECTION with overlay booking panel */}
      <div className="homepage2-hero-section">
        <div className="homepage2-hero-bg"></div>
        <div className="homepage2-hero-content">
          <EditableSection
            component="hero2"
            field="title"
            defaultValue="Let’s Make Your Stay Comfortable"
            className="homepage2-title"
          />
          <p className="homepage2-desc">
            Experience hospitality redefined at Imperial Grand Hotel.<br />
            Reserve your luxury suite or family room now!
          </p>
          <div className="homepage2-cta-row">
            {ctaButtons.map((btn, i) => (
              <a
                key={i}
                className="homepage2-cta-btn"
                href={btn.url}
                style={btn.style}
                target="_blank"
                rel="noopener noreferrer"
              >
                {btn.text}
              </a>
            ))}
            <button onClick={() => setShowAddModal(true)} className="homepage2-add-btn">
              + Add Button
            </button>
          </div>
        </div>
        {/* Booking panel overlay */}
        <div className="homepage2-booking-panel">
          <div className="booking-panel-title">Quick Booking</div>
          <form className="booking-form">
            <input type="text" placeholder="Check-in" />
            <input type="text" placeholder="Check-out" />
            <input type="number" placeholder="Guests" min="1" />
            <button type="submit">Check Availability</button>
          </form>
        </div>
      </div>
      {showAddModal && (
        <AddButtonModal
          onSubmit={handleAddCTA}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/* ROOMS CAROUSEL/SECTION */}
      <div className="homepage2-rooms-section">
        <h2 className="homepage2-section-title">Our Featured Rooms</h2>
        <div className="homepage2-rooms-carousel">
          <div className="homepage2-room-card homepage2-room1">
            <div className="room-photo"></div>
            <div className="room-title">Executive Suite</div>
            <div className="room-desc">Premium luxury, breakfast complimentary.</div>
          </div>
          <div className="homepage2-room-card homepage2-room2">
            <div className="room-photo"></div>
            <div className="room-title">Royal Deluxe</div>
            <div className="room-desc">Elegance, workspace, fast WiFi.</div>
          </div>
          <div className="homepage2-room-card homepage2-room3">
            <div className="room-photo"></div>
            <div className="room-title">Family Room</div>
            <div className="room-desc">Fits up to six, play corner for kids.</div>
          </div>
          <div className="homepage2-room-card homepage2-room4">
            <div className="room-photo"></div>
            <div className="room-title">Penthouse</div>
            <div className="room-desc">Panoramic views, private terrace.</div>
          </div>
        </div>
      </div>

      {/* LATEST NEWS/UPDATES */}
      <div className="homepage2-news-section">
        <div className="homepage2-news-header">Latest News & Updates</div>
        <div className="homepage2-news-cards">
          <div className="homepage2-news-card">
            <div className="news-photo" />
            <div className="news-title">Imperial Spa Opens</div>
            <div className="news-desc">
              Try our new spa facilities—complimentary for all premium bookings through August.
            </div>
          </div>
          <div className="homepage2-news-card">
            <div className="news-photo" />
            <div className="news-title">Summer Events</div>
            <div className="news-desc">
              Weekly live music at the patio, Saturdays 6:00 pm onward. Book your table!
            </div>
          </div>
          <div className="homepage2-news-card">
            <div className="news-photo" />
            <div className="news-title">Kids Stay Free</div>
            <div className="news-desc">
              Children under 12 stay free with every family room booking.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
