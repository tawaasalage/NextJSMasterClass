"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="client-section">
      <p className="data-label">Client-Side Counter</p>
      <button
        className="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clicked {count} times
      </button>
    </div>
  );
}
