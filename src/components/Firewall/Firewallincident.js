import React from "react";
import { useNavigate } from "react-router-dom";

const cardData = [
  { title: "Rule Failure" },
  { title: "Traffic Blocked" },
  { title: "Firmware Issue" },
  { title: "DoS Attack" },
  { title: "VPN Failure" },
];

const containerStyle = {
  position: "relative",
  width: 190,
  height: 254,
  transition: "200ms",
  margin: 20,
  display: "inline-block",
};

const cardStyle = {
  position: "absolute",
  inset: 0,
  zIndex: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  transition: "700ms",
  background: "linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)",
  overflow: "hidden",
};

const titleStyle = {
  position: "absolute",
  fontSize: "x-large",
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
  width: "100%",
};

const canvasStyle = {
  perspective: 800,
  inset: 0,
  zIndex: 200,
  position: "absolute",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gap: 0,
  width: "100%",
  height: "100%",
  gridTemplateAreas: `
    'tr-1 tr-2 tr-3 tr-4 tr-5'
    'tr-6 tr-7 tr-8 tr-9 tr-10'
    'tr-11 tr-12 tr-13 tr-14 tr-15'
    'tr-16 tr-17 tr-18 tr-19 tr-20'
    'tr-21 tr-22 tr-23 tr-24 tr-25'
  `,
};

const trackerStyle = {
  position: "absolute",
  zIndex: 200,
  width: "100%",
  height: "100%",
  cursor: "pointer",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 1,
  justifyItems: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "#000",
};

const buttonStyle = {
  margin: "20px auto 0 auto",
  display: "block",
  padding: "10px 24px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  background: "#4158d0",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
};

function Card({ title }) {
  const [hovered, setHovered] = React.useState(false);
  const [transform, setTransform] = React.useState("");
  const transforms = [
    "rotateX(20deg) rotateY(-10deg)",
    "rotateX(20deg) rotateY(-5deg)",
    "rotateX(20deg) rotateY(0deg)",
    "rotateX(20deg) rotateY(5deg)",
    "rotateX(20deg) rotateY(10deg)",
    "rotateX(10deg) rotateY(-10deg)",
    "rotateX(10deg) rotateY(-5deg)",
    "rotateX(10deg) rotateY(0deg)",
    "rotateX(10deg) rotateY(5deg)",
    "rotateX(10deg) rotateY(10deg)",
    "rotateX(0deg) rotateY(-10deg)",
    "rotateX(0deg) rotateY(-5deg)",
    "rotateX(0deg) rotateY(0deg)",
    "rotateX(0deg) rotateY(5deg)",
    "rotateX(0deg) rotateY(10deg)",
    "rotateX(-10deg) rotateY(-10deg)",
    "rotateX(-10deg) rotateY(-5deg)",
    "rotateX(-10deg) rotateY(0deg)",
    "rotateX(-10deg) rotateY(5deg)",
    "rotateX(-10deg) rotateY(10deg)",
    "rotateX(-20deg) rotateY(-10deg)",
    "rotateX(-20deg) rotateY(-5deg)",
    "rotateX(-20deg) rotateY(0deg)",
    "rotateX(-20deg) rotateY(5deg)",
    "rotateX(-20deg) rotateY(10deg)",
  ];
  const handleTrackerEnter = (idx) => {
    setHovered(true);
    setTransform(transforms[idx]);
  };
  const handleTrackerLeave = () => {
    setHovered(false);
    setTransform("");
  };
  return (
    <div
      style={{ ...containerStyle, ...(hovered ? { width: 180, height: 245 } : {}) }}
      className="noselect"
    >
      <div style={canvasStyle}>
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            style={{ ...trackerStyle, gridArea: `tr-${i + 1}` }}
            onMouseEnter={() => handleTrackerEnter(i)}
            onMouseLeave={handleTrackerLeave}
          />
        ))}
        <div
          id="card"
          style={{
            ...cardStyle,
            filter: hovered ? "brightness(1.1)" : undefined,
            transition: hovered ? "300ms" : "700ms",
            transform: transform,
          }}
        >
          <div className="title" style={titleStyle}>
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FirewallIncident() {
  const navigate = useNavigate();
  return (
    <div style={{ background: "#000", minHeight: "100vh", paddingTop: 40 }}>
      <button style={buttonStyle} onClick={() => navigate("/")}>Close</button>
      <h1 style={{ color: "#fff", textAlign: "center", marginBottom: 40 }}>
        Firewall Incident Report
      </h1>
      <div style={gridStyle}>
        {cardData.map((card, idx) => (
          <Card key={idx} title={card.title} />
        ))}
      </div>
    </div>
  );
}
