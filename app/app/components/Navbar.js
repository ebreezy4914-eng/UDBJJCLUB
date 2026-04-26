export default function Navbar() {
  return (
    <nav style={{
      padding: "15px",
      borderBottom: "1px solid gray",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h2 style={{ color: "red" }}>UB BJJ</h2>

      <div>
        <a href="/" style={{ marginRight: "10px" }}>Home</a>
        <a href="/join">Join</a>
      </div>
    </nav>
  );
}
