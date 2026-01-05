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
};

export const ConstantNode = ({ id }) => {
  const [value, setValue] = useState("Hello World");

  return (
    <BaseNode id={id} title="Constant" outputs={[{ id: "value" }]}>
      <label>
        Value
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={inputStyle}
        />
      </label>
    </BaseNode>
  );
};
