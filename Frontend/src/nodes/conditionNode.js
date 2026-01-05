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

export const ConditionNode = ({ id }) => {
  const [condition, setCondition] = useState("value.length > 5");

  return (
    <BaseNode
      id={id}
      title="Condition"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "true" }, { id: "false" }]}
    >
      <label>
        Condition
        <input
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          style={inputStyle}
        />
      </label>
    </BaseNode>
  );
};
