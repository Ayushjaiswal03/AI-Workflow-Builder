import { AppLayout } from "./layout/AppLayout";
import { Sidebar } from "./layout/Sidebar";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

export default function App() {
  return (
    <AppLayout
      sidebar={
        <Sidebar>
          <PipelineToolbar />
        </Sidebar>
      }
      canvas={<PipelineUI />}
      footer={
        <div
          style={{
            position: "absolute",
            bottom: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SubmitButton />
        </div>
      }
    />
  );
}
