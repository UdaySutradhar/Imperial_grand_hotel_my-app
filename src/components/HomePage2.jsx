import React, { useState } from "react";
import EditableSection from "./EditableSection";
import AddButtonModal from "./AddButtonModal";
import "./HomePage2.css";

export default function HomePage2() {
  // CTA button logic (for "+ Add Button" in hero section)
  const [ctaButtons, setCtaButtons] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  function handleAddCTA(newButton) {
    setCtaButtons([...ctaButtons, newButton]);
    setShowAddModal(false);
  }

  return (
    <div className="home2-root">

      {/* --- HERO + BOOKING PANEL --- */}
      <section className="home2-hero">
        <div className="home2-hero-gradient" />
        <div className="home2-hero-content">
          <span className="home2-hero-badge">Best Place To Relax & Enjoy</span>
          <EditableSection
            component="home2" field="hero_title"
            defaultValue="Perfect Place to Enjoy Your Life"
            className="home2-hero-title"
          />
          <div className="home2-rating-row">
            <div className="home2-rating-balls">
              <div /><div /><div />
            </div>
            <div className="home2-rating-text">
              4.8 Rated Around The World <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="home2-cta-row">
            {ctaButtons.map((btn, i) => (
              <a
                key={i}
                className="home2-cta-btn"
                href={btn.url}
                style={btn.style}
                target="_blank"
                rel="noopener noreferrer"
              >{btn.text}</a>
            ))}
            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              className="home2-add-btn"
            >+ Add Button</button>
          </div>
        </div>
        {/* Floating booking panel */}
        <div className="home2-booking-panel">
          <form className="home2-booking-form" onSubmit={e => e.preventDefault()}>
            <div>
              <label>Check In</label>
              <input
                type="text"
                placeholder="24 December 2023"
                onFocus={e => (e.target.type = "date")}
                onBlur={e => (e.target.type = "text")}
              />
            </div>
            <div>
              <label>Check Out</label>
              <input
                type="text"
                placeholder="28 December 2023"
                onFocus={e => (e.target.type = "date")}
                onBlur={e => (e.target.type = "text")}
              />
            </div>
            <div>
              <label>Room</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div>
              <label>Guest</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <button type="submit">Check Availability</button>
          </form>
        </div>
      </section>
      {showAddModal && (
        <AddButtonModal
          onSubmit={handleAddCTA}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/* --- DISCOVER LUXURY EXPERIENCE --- */}
      <section className="home2-discover">
        <div className="home2-discover-img" />
        <div className="home2-discover-content">
          <span className="home2-discover-sub">Discover Our Hotel</span>
          <h2>Enjoy A Luxury Experience</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
          </p>
          <button type="button" className="discover-more-btn">Discover More &rarr;</button>
        </div>
      </section>

      {/* --- ROOMS & SUITES --- */}
      <section className="home2-rooms-slider">
        <span className="home2-section-pretitle">Our Room Choices</span>
        <h2 className="home2-section-title">Luxury Rooms & Suites</h2>
        <div className="home2-rooms-row">
          <div className="home2-room-card">
            <div className="slider-room-img" />
            <div className="home2-room-info">
              <div className="slider-room-title">Superior Suite</div>
              <div className="slider-room-features">
                <span>2 Persons</span>
                <span>King Size Bed</span>
                <span>Bathtub</span>
                <span>Free Wifi</span>
                <span>Free Breakfast</span>
                <span>Air Conditioner</span>
              </div>
              <div className="slider-room-actions">
                <span className="slider-room-price">$300/Night</span>
                <button type="button" className="slider-room-book">Book Now &rarr;</button>
              </div>
            </div>
          </div>
          <div className="home2-room-card fade">
            <div className="slider-room-img" />
            <div className="home2-room-info">
              <div className="slider-room-title">Superior Suite</div>
              <div className="slider-room-features">
                <span>2 Persons</span>
                <span>King Size Bed</span>
                <span>Bathtub</span>
                <span>Free Wifi</span>
                <span>Free Breakfast</span>
                <span>Air Conditioner</span>
              </div>
              <div className="slider-room-actions">
                <span className="slider-room-price">$300/Night</span>
                <button type="button" className="slider-room-book">Book Now &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL --- */}
      <section className="home2-testimonial">
        <span className="home2-section-pretitle">Our Customer Review</span>
        <h2 className="home2-section-title">What Our Client Says</h2>
        <div className="home2-testimonial-card">
          <div className="testimonial-stars">★★★★★</div>
          <div className="testimonial-quote">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </div>
          <div className="testimonial-signer">
            <div className="testimonial-avatar" />
            <span>
              Jackson Dean<br />
              <span className="testimonial-role">Guest</span>
            </span>
          </div>
        </div>
      </section>

      {/* --- TEAM --- */}
      <section className="home2-team">
        <span className="home2-section-pretitle">Meet Our Team</span>
        <h2 className="home2-section-title">Expert Team Persons</h2>
        <div className="home2-team-row">
          <div className="team-card">Josh Mullins<br/><span>Kitchen Manager</span></div>
          <div className="team-card">Laurent Wayne<br/><span>Hotel Manager</span></div>
          <div className="team-card">Andrea Hugh<br/><span>Receptionist</span></div>
        </div>
      </section>

      {/* --- LATEST NEWS & UPDATES --- */}
      <section className="home2-news">
        <span className="home2-section-pretitle">Local News & Activities</span>
        <h2 className="home2-section-title">Latest News Update</h2>
        <div className="home2-news-row">
          <div className="home2-news-card">
            <div className="news-square" />
            <div className="news-title">Retore Lighting Design ...</div>
            <div className="news-meta">20 December 2023 | Interior</div>
          </div>
          <div className="home2-news-card">
            <div className="news-square" />
            <div className="news-title">Classy Rooms That Will ...</div>
            <div className="news-meta">22 December 2023 | Design</div>
          </div>
          <div className="home2-news-card">
            <div className="news-square" />
            <div className="news-title">Luxury Bathroom Interior Styles For You</div>
            <div className="news-meta">22 December 2023 | Interior</div>
          </div>
        </div>
      </section>

      {/* --- PROMO SECTION --- */}
      <section className="home2-promo">
        <span className="promo-text">Get A Luxurious Experience With 25% Off Now</span>
        <button type="button" className="promo-btn">Book Now &rarr;</button>
      </section>
    </div>
  );
}
