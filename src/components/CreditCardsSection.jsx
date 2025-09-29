import React from "react";
import "../styles/CreditCards.css";

// Import your QR code image
import qrCodeImg from "../assets/Neo_qr_code.png"; // replace with your actual QR code file

export default function CreditCardsSection() {
  const cards = [
    { 
      name: "Neo Platinum", 
      perks: "Dining • Travel • Cashback",
      gradient: "linear-gradient(135deg, #c41e3a, #8b1538)",
    },
    { 
      name: "Neo Gold", 
      perks: "Rewards • Lounge access",
      gradient: "linear-gradient(135deg, #1e3a8a, #1e40af)",
    },
    { 
      name: "Neo Classic", 
      perks: "Essentials • Low fee",
      gradient: "linear-gradient(135deg, #059669, #047857)",
    },
  ];

  const handleApply = (cardName) => {
    alert(`Redirecting to apply for ${cardName} card`);
  };

  return (
    <>
      {/* ===================== Credit Cards Section ===================== */}
      <section className="section cards-section">
        <div className="container">
          <h2>Choose Your Credit Card</h2>
          <div className="cards-row">
            {cards.map((card, index) => (
              <div className="credit-card-wrapper" key={index}>
                <div 
                  className="credit-card-visual" 
                  style={{ background: card.gradient }}
                >
                  <div className="card-header">
                    <div className="neo-logo">
                      <div className="logo-icon">N</div>
                      <span className="logo-text">NeoBank</span>
                    </div>
                  </div>

                  {/* Chip with tower lines */}
                  <div className="chip">
                    <div className="chip-lines">
                      <div style={{ height: '25%' }}></div>
                      <div style={{ height: '50%' }}></div>
                      <div style={{ height: '75%' }}></div>
                      <div style={{ height: '100%' }}></div>
                    </div>
                  </div>

                  <div className="card-number">
                    <span>1234 5678 9012 3456</span>
                  </div>

                  <div className="card-details">
                    <div className="valid-thru">
                      <span className="label">VALID<br/>THRU</span>
                      <span className="date">01/29</span>
                    </div>
                    <div className="cardholder">
                      <span>CARDHOLDER</span>
                    </div>
                  </div>
                </div>

                <div className="card-info">
                  <h3>{card.name}</h3>
                  <p className="card-perks">
                    <span className="best-for-badge">BEST FOR</span>
                    {card.perks}
                  </p>
                  <div className="card-actions">
                    <button 
                      className="btn primary"
                      onClick={() => handleApply(card.name)}
                    >
                      Apply Now
                    </button>
                    <button className="btn ghost">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Mobile Banking Section ===================== */}
      <section className="section mobile-banking-section">
        <div className="container mobile-banking-grid">
          <div className="mobile-banking-text">
            <h2 className="animated-text">Seamless Mobile Banking</h2>
            <p className="animated-subtext">
              Access your NeoBank account anytime, anywhere with our easy-to-use app.
            </p>
          </div>
          <div className="mobile-banking-qr">
            <img src={qrCodeImg} alt="Download NeoBank App" />
          </div>
        </div>
      </section>
    </>
  );
}
