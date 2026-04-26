export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h1 style={{ fontSize: "48px", color: "red" }}>
        UB BJJ Club
      </h1>

      <p style={{ marginTop: "20px" }}>
        Train. Compete. Dominate.
      </p>

      <a
        href="/join"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 20px",
          background: "red",
          color: "white",
          textDecoration: "none"
        }}
      >
        Join the Team
      </a>
    </div>
  );
}
