import React from "react";
import "../styles/Footer.css";
import logo from "../assets/neobank-mark.png";

// Import social icons from react-icons
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const supportLinks = [
  { label: "1800 1080", href: "tel:18001080" },
  { label: "Contact Us", href: "/contact" },
  { label: "Locate Us", href: "/locations" }
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/neobank" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/neobank" },
  { icon: <FaTwitter />, href: "https://twitter.com/neobank" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/neobank" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/channel/neobank" }
];

const mainColumns = [
  {
    heading: "Services",
    items: ["Accounts", "Loans", "Cards", "Investments", "Insurance"]
  },
  {
    heading: "Support",
    items: [
      { label: "Help Center", href: "/help" },
      { label: "Live Chat", href: "/chat" },
      { label: "Branch Locator", href: "/locations" }
    ]
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Disclosures", href: "/disclosures" }
    ]
  },
  {
    heading: "Digital Access",
    items: [
      { label: "Mobile Banking", href: "/mobile" },
      { label: "Internet Banking", href: "/internet" },
      { label: "ATM & Branches", href: "/locations" }
    ]
  },
  {
    heading: "Explore",
    items: [
      { label: "Interest Rates", href: "/rates" },
      { label: "FAQs", href: "/faq" },
      { label: "Offers", href: "/offers" }
    ]
  }
];

export default function Footer() {
  const handleClick = (label) => {
    console.log("Clicked on:", label);
    // Here you can add any navigation logic if required
  };

  return (
    <footer>
      <div className="footer-top">
        <div className="container footer-main-grid">
          <div className="footer-brand">
            <img src={logo} alt="NeoBank Logo" className="footer-logo" />
            <h4>NeoBank 24/7</h4>
            <p>Modern banking. Fast &amp; secure.</p>
            <div className="socials">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social-link"
                  onClick={() => handleClick(`Social: ${s.href}`)}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {mainColumns.map((col, idx) => (
            <div key={idx}>
              <h5 onClick={() => handleClick(col.heading)} style={{ cursor: "pointer" }}>
                {col.heading}
              </h5>
              <ul>
                {col.items.map((item, i) =>
                  typeof item === "string" ? (
                    <li
                      key={i}
                      onClick={() => handleClick(item)}
                      style={{ cursor: "pointer" }}
                    >
                      {item}
                    </li>
                  ) : (
                    <li key={i}>
                      <a
                        href={item.href}
                        onClick={() => handleClick(item.label)}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div>@ {new Date().getFullYear()} NeoBank 24/7 — All rights reserved.</div>
          <div className="contact-links">
            {supportLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleClick(link.label)}
                >
                  {link.label}
                </a>
                {idx < supportLinks.length - 1 && <span className="separator">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="footer-logo-bottom">
          <img src={logo} alt="NeoBank Logo" />
        </div>
      </div>
    </footer>
  );
}
