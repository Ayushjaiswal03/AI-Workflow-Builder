import { useState } from "react";
import { BaseNode } from "./BaseNode";

const inputStyle = {
  width: "100%",
  padding: "8px 10px",
  borderRadius: 10,
  background: "#131018",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#fff",
  fontSize: 12,
  boxSizing: "border-box"
};

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [type, setType] = useState(data?.outputType || "Text");

  return (
    <BaseNode id={id} title="Output" inputs={[{ id: "value" }]}>
      <label>
        Name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
      </label>

      <label style={{ marginTop: 10, display: "block" }}>
        Type
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={inputStyle}
        >
          <option>Text</option>
          <option>Image</option>
        </select>
      </label>

      <div
        style={{
          marginTop: 10,
          padding: "8px",
          borderRadius: 10,
          background: "#131018",
          border: "1px solid rgba(255,255,255,0.12)",
          fontSize: 11,
          opacity: 0.85,
        }}
      >
        {type === "Text"
          ? "📄 Output will be displayed as text"
          : "🖼️ Output will be displayed as image"}
      </div>
    </BaseNode>
  );
};
