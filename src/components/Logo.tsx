import React from "react";
import logo from "/logo.png";

export default function Logo({ className }: { className?: string }) {
  return <img src={logo} alt="Nashik LocalConnect" className={className ?? "h-8"} />;
}