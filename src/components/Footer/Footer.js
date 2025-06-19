import React from "react";

const footerStyle = {
  width: "100%",
  background: "#22223b",
  color: "#fff",
  padding: "14px 0",
  textAlign: "center",
  fontSize: "1rem",
  position: "fixed",
  left: 0,
  bottom: 0,
  zIndex: 100,
};

export default function Footer() {
  return <footer style={footerStyle}>© 2025 Fentos IT</footer>;
}
