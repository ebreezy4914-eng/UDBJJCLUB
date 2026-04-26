"use client";
import { useState } from "react";

export default function Join() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/join", {
      method: "POST",
      body: JSON.stringify({ test: "data" })
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Join UB BJJ</h1>

      <form onSubmit={handleSubmit}>
        <button style={{ padding: "10px", background: "red", color: "white" }}>
          Submit
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
}
