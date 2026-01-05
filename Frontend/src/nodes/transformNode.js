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

export const TransformNode = ({ id }) => {
  const [expression, setExpression] = useState("value.toUpperCase()");

  return (
    <BaseNode
      id={id}
      title="Transform"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "output" }]}
    >
      <label>
        Transform Logic
        <input
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          style={inputStyle}
        />
      </label>
    </BaseNode>
  );
};
