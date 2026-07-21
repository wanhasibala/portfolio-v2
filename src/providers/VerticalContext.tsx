"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type PortfolioVertical = "general" | "fintech" | "web3";

interface VerticalContextType {
  vertical: PortfolioVertical;
  setVertical: (vertical: PortfolioVertical) => void;
}

const VerticalContext = createContext<VerticalContextType | undefined>(undefined);

export function VerticalProvider({ children }: { children: React.ReactNode }) {
  const [vertical, setVerticalState] = useState<PortfolioVertical>("general");

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-vertical") as PortfolioVertical;
    if (saved === "general" || saved === "fintech" || saved === "web3") {
      setVerticalState(saved);
    }
  }, []);

  const setVertical = (v: PortfolioVertical) => {
    setVerticalState(v);
    localStorage.setItem("portfolio-vertical", v);
  };

  return (
    <VerticalContext.Provider value={{ vertical, setVertical }}>
      {children}
    </VerticalContext.Provider>
  );
}

export function useVertical() {
  const context = useContext(VerticalContext);
  if (!context) {
    throw new Error("useVertical must be used within a VerticalProvider");
  }
  return context;
}
