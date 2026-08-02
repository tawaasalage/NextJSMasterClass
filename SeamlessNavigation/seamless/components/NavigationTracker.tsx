"use client";

import { useState } from "react";

export function NavigationTracker() {
  const [count, setCount] = useState(0);

  return (
    <div className="tracker">
      <span>
        Navigation Count: <strong>{count}</strong>
      </span>
      <button onClick={() => setCount(count + 1)} className="button.secondary">
        Increment
      </button>
    </div>
  );
}
