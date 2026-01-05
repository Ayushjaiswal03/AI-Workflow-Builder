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
  boxSizing: "border-box", 
};

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [type, setType] = useState(data?.inputType || "Text");

  return (
    <BaseNode id={id} title="Input" outputs={[{ id: "value" }]}>
    <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
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
          <option>File</option>
        </select>
      </label>
    </BaseNode>
  );
};

