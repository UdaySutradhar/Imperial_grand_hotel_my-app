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
    <div className="home1-root">

      {/* HERO SECTION */}
      <section className="home1-hero">
        <div className="home1-hero-inner">
          <span className="home1-hero-badge">Best Place to Relax & Enjoy</span>
          <EditableSection
            component="home1"
            field="hero_title"
            defaultValue="A Luxurious Way To Enjoy Your Life"
            className="home1-hero-title"
          />
          <div className="home1-cta-row">
            <button
              onClick={() => setShowAddModal(true)}
              className="home1-add-btn"
            >+ Add Button</button>
            {ctaButtons.map((btn, i) => (
              <a
                key={i}
                className="home1-cta-btn"
                href={btn.url}
                style={btn.style}
                target="_blank"
                rel="noopener noreferrer"
              >{btn.text}</a>
            ))}
          </div>
        </div>
      </section>
      {showAddModal && (
        <AddButtonModal onSubmit={handleAddCTA} onClose={() => setShowAddModal(false)} />
      )}

      {/* FLOATING CHECK AVAILABILITY PANEL */}
      <div className="home1-availability-panel">
        <form className="home1-availability-form">
          <input
            type="text"
            placeholder="Check In"
            onFocus={e => (e.target.type = 'date')}
            onBlur={e => (e.target.type = 'text')}
          />
          <input
            type="text"
            placeholder="Check Out"
            onFocus={e => (e.target.type = 'date')}
            onBlur={e => (e.target.type = 'text')}
          />
          <select>
            <option>Room</option>
            <option>Single</option>
            <option>Double</option>
            <option>Suite</option>
          </select>
          <button type="submit">Check Availability</button>
        </form>
      </div>

      {/* ROOMS & SUITES */}
      <section className="home1-rooms">
        <div className="section-title-group">
          <div className="section-pretitle">Our Room Choices</div>
          <h2 className="section-title">Luxury Rooms & Suites</h2>
        </div>
        <div className="rooms-suites-row">
          <div className="room-card"><div className="room-sq" /></div>
          <div className="room-card"><div className="room-sq" /></div>
          <div className="room-card"><div className="room-sq" /></div>
          <div className="room-card"><div className="room-sq" /></div>
          <div className="room-card"><div className="room-sq" /></div>
        </div>
      </section>

      {/* AMENITIES / SERVICES */}
      <section className="home1-amenities">
        <div className="amenities-title-group">
          <div className="amenities-pretitle">Introducing Our Services</div>
          <h2>Amenities That You Can Enjoy</h2>
        </div>
        <div className="amenities-row">
          <div className="amenity-card">Workout & Yoga Rooms</div>
          <div className="amenity-card">Spa, Massage & Sauna</div>
          <div className="amenity-card">Multiple Cuisines & Beverages</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="home1-testimonials">
        <div className="testimonials-title-group">
          <div className="testimonials-pretitle">Our Customer Review</div>
          <h2>What Our Client Says</h2>
        </div>
        <div className="testimonial-card">
          <div>⭐⭐⭐⭐⭐</div>
          <div className="testimonial-text">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </div>
          <div className="testimonial-signer">Jackson Dean, Guest</div>
        </div>
      </section>

      {/* TEAM */}
      <section className="home1-team">
        <div className="team-title-group">
          <div className="team-pretitle">Meet Our Team</div>
          <h2>Expert Team Persons</h2>
        </div>
        <div className="team-row">
          <div className="team-card">Laurent Wayne<br/><span>Hotel Manager</span></div>
          <div className="team-card">Josh Mullins<br/><span>Kitchen Manager</span></div>
          <div className="team-card">Andrea Hugh<br/><span>Receptionist</span></div>
          <div className="team-card">James Norman<br/><span>Room Service</span></div>
        </div>
      </section>
    </div>
  );
}
