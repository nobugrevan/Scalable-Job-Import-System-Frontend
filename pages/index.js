import ImportTable from "../components/ImportTable";
import axios from "axios";

export default function Home({ logs }) {
  return (
    <main style={{ padding: "2rem", maxWidth: "1000px", margin: "auto" }}>
      <h2>🗂 Import History</h2>
      <ImportTable logs={logs} />
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get("http://localhost:9090/api/jobs/logs");
    return {
      props: {
        logs: res.data,
      },
    };
  } catch (error) {
    console.error("❌ Failed to load logs:", error.message);
    return {
      props: {
        logs: [],
      },
    };
  }
}
