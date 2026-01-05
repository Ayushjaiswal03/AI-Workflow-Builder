import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="constant" label="Constant" />
      <DraggableNode type="transform" label="Transform" />
      <DraggableNode type="condition" label="Condition" />
      <DraggableNode type="merge" label="Merge" />
      <DraggableNode type="logger" label="Logger" />

    </div>
  );
};

