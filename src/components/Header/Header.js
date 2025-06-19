import React from "react";

const headerStyle = {
  width: "100%",
  background: "#22223b",
  color: "#fff",
  padding: "18px 0",
  textAlign: "center",
  fontSize: "1.7rem",
  fontWeight: "bold",
  letterSpacing: "1px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

export default function Header() {
  return <header style={headerStyle}>Core Switch Incident Report System</header>;
}
