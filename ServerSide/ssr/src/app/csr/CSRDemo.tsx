"use client";

import { useEffect, useState } from "react";

export default function CSRDemo() {
  const [time, setTime] = useState("Loading...");

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => setTime(data.time));
  }, []);

  return (
    <>
      <p className="data-label">Client Render Time</p>
      <p className="data-value">{time}</p>
    </>
  );
}
