import React from "react";
import "../styles/Sections.css";

export default function TrustworthySection() {
  const items = [
    { title: "Trusted", desc: "Secure banking with end-to-end encryption." },
    { title: "Transparent", desc: "No hidden fees. Clear policies." },
    { title: "Fast", desc: "Instant approvals & 24/7 service." },
  ];

  return (
    <section id="why" className="section trust-section">
      <div className="container">
        <h2>Why Choose NeoBank</h2>
        <div className="trust-grid">
          {items.map((it, i) => (
            <div className="trust-card" key={i}>
              <div className="trust-icon">{it.title.charAt(0)}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
