import React, { useState, useEffect, useRef } from "react";
import "../styles/HeroSection.css";

// Images
import homeLoanImg from "../assets/NCard_01.jpg";
import savingImg from "../assets/NCard_02.jpg";
import creditImg from "../assets/NCard_03.jpg";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const trackRef = useRef(null);

  const slides = [
    { img: homeLoanImg, title: "🏠 Your dream home, your pride", desc: "Turn your dream into reality with a NeoBank Home Loan", btn: "Apply Now" },
    { img: savingImg, title: "💰 Saving, Demand & Trading", desc: "Make banking & trading easy with NeoBank", btn: "Apply Now" },
    { img: creditImg, title: "💳 Dine with UPI on Credit Cards", desc: "Smart payments, rewards & convenience", btn: "Apply Now" },
  ];

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Drag/Touch events
  const touchStart = (index) => (event) => {
    setIsDragging(true);
    setStartPos(getPositionX(event));
    trackRef.current.classList.add("dragging");
  };

  const touchMove = (event) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const diff = currentPosition - startPos;
    setCurrentTranslate(prevTranslate + diff);
  };

  const touchEnd = () => {
    setIsDragging(false);
    trackRef.current.classList.remove("dragging");

    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -50) handleNext();
    else if (movedBy > 50) handlePrev();
    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  const getPositionX = (event) => (event.type.includes("mouse") ? event.pageX : event.touches[0].clientX);

  // Click handlers
  const handleSearch = () => alert("Search clicked!");
  const handleServiceClick = (service) => alert(`${service} clicked!`);
  const handleApply = (slide) => alert(`${slide.title} Apply clicked!`);
  const handleOfferApply = () => alert("Offer Apply clicked!");
  const handleOfferDetails = () => alert("Offer Details clicked!");

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        {/* Left Column */}
        <div className="hero-left">
          <h1 className="hero-title">Truth, Trust, Transparency</h1>
          <p className="hero-sub">
            Banking reimagined — fast, simple & secure with NeoBank 24/7.
          </p>

          {/* Search */}
          <div className="search-wrap">
            <input className="search-input" placeholder='Search for "Fixed Deposit"' />
            <button className="search-btn" onClick={handleSearch}>Search</button>
          </div>

          {/* Services */}
          <div className="service-grid">
            {["Accounts", "Cards", "Loans", "Deposits", "Investment", "Support"].map((service) => (
              <button key={service} className="service-btn" onClick={() => handleServiceClick(service)}>
                {service}
              </button>
            ))}
          </div>

          {/* Offers */}
          <div className="offers">
            <h4>✨ Offers for You</h4>
            <div className="offer-card">
              <div className="offer-img" />
              <div className="offer-text">
                <strong>Credit Card for you!</strong>
                <p>Enjoy discounts on dining, movies & more.</p>
                <div className="offer-links">
                  <a href="#apply" onClick={handleOfferApply}>APPLY</a> •{" "}
                  <a href="#details" onClick={handleOfferDetails}>DETAILS</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Carousel */}
        <div className="hero-right">
          <div
            className="carousel"
            onMouseDown={touchStart(currentSlide)}
            onMouseMove={touchMove}
            onMouseUp={touchEnd}
            onMouseLeave={() => isDragging && touchEnd()}
            onTouchStart={touchStart(currentSlide)}
            onTouchMove={touchMove}
            onTouchEnd={touchEnd}
          >
            <div
              ref={trackRef}
              className="carousel-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%) translateX(${currentTranslate}px)`,
                transition: isDragging ? "none" : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
              }}
            >
              {slides.map((slide, idx) => (
                <div className="carousel-slide" key={idx}>
                  <img src={slide.img} alt={slide.title} />
                  <div className="promo-content">
                    <h3 className="promo-title">{slide.title}</h3>
                    <p>{slide.desc}</p>
                    <button className="apply-btn" onClick={() => handleApply(slide)}>
                      {slide.btn}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button className="carousel-btn left" onClick={handlePrev}>‹</button>
            <button className="carousel-btn right" onClick={handleNext}>›</button>

            {/* Dots */}
            <div className="carousel-dots">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
