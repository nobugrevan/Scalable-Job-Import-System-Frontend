import dayjs from "dayjs";

export default function ImportTable({ logs }) {
  if (!logs.length) return <p>No logs found.</p>;

  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", marginTop: "2rem" }}
    >
      <thead style={{ backgroundColor: "#f4f4f4" }}>
        <tr>
          <th style={th}>File Name</th>
          <th style={th}>Import DateTime</th>
          <th style={th}>Total</th>
          <th style={th}>New</th>
          <th style={th}>Updated</th>
          <th style={th}>Failed</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log._id}>
            <td style={td}>{log.fileName}</td>
            <td style={td}>
              {dayjs(log.timestamp).format("DD MMM YYYY HH:mm:ss")}
            </td>
            <td style={td}>{log.total}</td>
            <td style={{ ...td, color: "#fa902d" }}>{log.new}</td>
            <td style={{ ...td, color: "#fa902d" }}>{log.updated}</td>
            <td style={{ ...td, color: "#fa902d" }}>
              {log.failed?.length || 0}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const th = { padding: "10px", border: "1px solid #ddd", textAlign: "left" };
const td = { padding: "10px", border: "1px solid #eee" };
