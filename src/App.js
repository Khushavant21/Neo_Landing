import React, { useRef, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrustworthySection from "./components/TrustworthySection";
import BankingServices from "./components/BankingServices";
import CreditCardsSection from "./components/CreditCardsSection";
import Footer from "./components/Footer";

export default function App() {
  const headerLogoRef = useRef(null);
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <LoadingScreen headerLogoRef={headerLogoRef} onFinish={() => setSplashDone(true)} />
      <div className={`app-root ${splashDone ? "ready" : "behind-splash"}`}>
        <Header headerLogoRef={headerLogoRef} />
        <main>
          <HeroSection />
          <TrustworthySection />
          <BankingServices />
          <CreditCardsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
