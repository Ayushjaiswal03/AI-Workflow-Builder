// layout/AppLayout.jsx
export const AppLayout = ({ sidebar, canvas, footer }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        background:
          "radial-gradient(circle at top left, #6b2cff 0%, #0b0614 45%, #000 100%)",
        color: "#fff",
      }}
    >
      {sidebar}

      {/* MAIN CONTENT COLUMN */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative",
        }}
      >
        {/* Canvas grows */}
        <div style={{ flex: 1, position: "relative" }}>
          {canvas}
        </div>

        {/* Footer stays at bottom */}
        <div
          style={{
            padding: "16px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {footer}
        </div>
      </div>
    </div>
  );
};
