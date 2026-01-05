// layout/Sidebar.jsx
export const Sidebar = ({ children }) => {
  return (
    <div
      style={{
        padding: 16,
        backdropFilter: "blur(14px)",
        background: "rgba(20, 10, 40, 0.6)",
        borderRight: "1px solid rgba(255,255,255,0.12)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div
        style={{
          fontSize: 18,
          fontWeight: 600,
          background:
            "linear-gradient(90deg,#bc7dff,#e6ddfd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        VectorShift
      </div>

      {children}
    </div>
  );
};
