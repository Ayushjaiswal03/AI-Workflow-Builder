import { useState, useMemo, useEffect } from "react";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

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

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);

  const [text, setText] = useState(data?.text || "{{input}}");

  // Extract variables like {{input}}
  const variables = useMemo(() => {
    const matches = text.match(/{{\s*[a-zA-Z_$][\w$]*\s*}}/g) || [];
    return matches.map(v => v.replace(/[{}]/g, "").trim());
  }, [text]);

  // 🔑 Sync variables + text to store so React Flow rebinds handles
  useEffect(() => {
    updateNodeField(id, "text", text);
    updateNodeField(id, "variables", variables);
  }, [text, variables, id, updateNodeField]);

  // Auto-size node
  const dynamicHeight = Math.max(140, 90 + variables.length * 24);
  const dynamicWidth = Math.min(420, 260 + text.length * 3);

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.map((v) => ({ id: v }))}
      outputs={[{ id: "output" }]}
      style={{
        minHeight: dynamicHeight,
        width: dynamicWidth,
      }}
    >
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        Text
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            ...inputStyle,
            minHeight: 60,
            resize: "none",
          }}
        />
      </label>
    </BaseNode>
  );
};
