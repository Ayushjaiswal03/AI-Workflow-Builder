import { BaseNode } from "./BaseNode";

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Logger"
      inputs={[{ id: "input" }]}
      outputs={[]}
    >
      <div style={{ fontSize: 12, opacity: 0.8 }}>
        Logs incoming data for debugging
      </div>
    </BaseNode>
  );
};
