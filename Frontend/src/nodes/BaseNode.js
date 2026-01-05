// BaseNode.js
import { Handle, Position } from "reactflow";

const NODE_WIDTH = 260;

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div
      style={{
        width: NODE_WIDTH,
        minHeight: 180,
        borderRadius: 16,
        padding: 14,
        background:
          "linear-gradient(180deg, #5b3db8 0%, #1a102a 100%)",
        border: "1px solid rgba(186,149,255,0.25)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        overflow: "hidden", // 🔒 hard safety
      }}
    >
      {/* Input handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
            background: "#bc7dff",
            width: 10,
            height: 10,
            border: "none",
          }}
        />
      ))}

      {/* Header */}
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          background:
            "linear-gradient(90deg, #bc7dff, #e6ddfd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </div>

      {/* CONTENT WRAPPER */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flexGrow: 1,
        }}
      >
        {children}
      </div>

      {/* Output handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
            background: "#82cef3",
            width: 10,
            height: 10,
            border: "none",
          }}
        />
      ))}
    </div>
  );
};
