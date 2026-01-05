import { useStore } from "./store";
import { toast } from "react-toastify";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const handleSubmit = async () => {
    
    const res = await fetch("http://localhost:8000/pipelines/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nodes, edges }),
    });

    const data = await res.json();

    toast.info(
      `Nodes: ${data.num_nodes}, Edges: ${data.num_edges}, DAG: ${data.is_dag}`,
      {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  return (
    <button
  onClick={handleSubmit}
  style={{
    padding: "12px 32px",
    borderRadius: 14,
    background: "linear-gradient(90deg,#bc7dff,#6b2cff)",
    color: "#fff",
    border: "none",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(108,64,255,0.45)",
  }}
>
  Submit Pipeline
</button>

  );
};
