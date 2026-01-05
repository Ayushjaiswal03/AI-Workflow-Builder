import { BaseNode } from "./BaseNode";

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Merge"
      inputs={[{ id: "a" }, { id: "b" }]}
      outputs={[{ id: "output" }]}
    >
      <div style={{ fontSize: 12, opacity: 0.8 }}>
        Merges two inputs into one
      </div>
    </BaseNode>
  );
};
