import React from "react";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    title: "Core Switch",
    subtitle: "Main network backbone",
  },
  {
    title: "Firewall",
    subtitle: "Network security device",
  },
  {
    title: "Virtual Machine",
    subtitle: "Server virtualization",
  },
  {
    title: "Backup Server",
    subtitle: "Backup and recovery",
  },
  {
    title: "Access Point",
    subtitle: "Wireless connectivity",
  },
  {
    title: "IDRAC",
    subtitle: "Remote server management",
  },
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

const subtitleStyle = {
  transform: "translateY(160px)",
  color: "rgb(134, 110, 221)",
  textAlign: "center",
  width: "100%",
};

const titleStyle = {
  position: "absolute",
  fontSize: "x-large",
  fontWeight: "bold",
  color: "white",
};

const promptStyle = {
  bottom: 8,
  left: 12,
  zIndex: 20,
  fontSize: 20,
  fontWeight: "bold",
  transition: "300ms ease-in-out-out",
  position: "absolute",
  maxWidth: 110,
  color: "#fff",
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
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
  minHeight: "100vh",
  background: "#000",
};

function Card({ title, subtitle, onClick }) {
  // For hover effect, use React state
  const [hovered, setHovered] = React.useState(false);
  const [titleVisible, setTitleVisible] = React.useState(false);

  // For 3D effect, track which tracker is hovered
  const [transform, setTransform] = React.useState("");

  // Map tracker index to transform
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
    setTitleVisible(true);
    setTransform(transforms[idx]);
  };
  const handleTrackerLeave = () => {
    setHovered(false);
    setTitleVisible(false);
    setTransform("");
  };

  return (
    <div
      style={{ ...containerStyle, ...(hovered ? { width: 180, height: 245 } : {}), cursor: onClick ? "pointer" : undefined }}
      className="noselect"
      onClick={onClick}
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
          <div
            className="title"
            style={titleStyle}
          >
            {title}
          </div>
          <div className="subtitle" style={subtitleStyle}>
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AlertEscalationHome() {
  const navigate = useNavigate();
  return (
    <div style={gridStyle}>
      {cardData.map((card, idx) => (
        <Card
          key={idx}
          title={card.title}
          subtitle={card.subtitle}
          onClick={
            card.title === "Core Switch"
              ? () => navigate("/coreswitch-incident")
              : card.title === "Virtual Machine"
              ? () => navigate("/virtualmachine-incident")
              : card.title === "Backup Server"
              ? () => navigate("/backupserver-incident")
              : card.title === "Access Point"
              ? () => navigate("/accesspoint-incident")
              : card.title === "IDRAC"
              ? () => navigate("/idrac-incident")
              : card.title === "Firewall"
              ? () => navigate("/firewall-incident")
              : undefined
          }
        />
      ))}
    </div>
  );
}
