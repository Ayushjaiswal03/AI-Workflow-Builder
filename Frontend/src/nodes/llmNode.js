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
export const LLMNode = ({ id }) => {
  const [system, setSystem] = useState("");
  const [prompt, setPrompt] = useState("");

  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[{ id: "system" }, { id: "prompt" }]}
      outputs={[{ id: "response" }]}
    >
      <label>
        System
        <input
          value={system}
          onChange={(e) => setSystem(e.target.value)}
          style={inputStyle}
        />
      </label>

      <label style={{ marginTop: 10, display: "block" }}>
        Prompt
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{ ...inputStyle, minHeight: 42 }}
        />
      </label>
    </BaseNode>
  );
};
