"use client";

import { useState, useEffect } from "react";
import { Row, Text, useToast } from "@once-ui-system/core";

export function InteractivePing() {
  const { addToast } = useToast();
  const [latency, setLatency] = useState(14);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Random minor variation to make the ping look alive when healthy
    const interval = setInterval(() => {
      if (clickCount === 0) {
        setLatency(Math.floor(Math.random() * 5) + 12);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [clickCount]);

  const handleClick = () => {
    const nextCount = (clickCount + 1) % 4;
    setClickCount(nextCount);

    if (nextCount === 0) {
      setLatency(14);
      addToast({
        variant: "success",
        message: "✅ Ping status restored to normal. Server workload: 3% (Idle)",
      });
    } else if (nextCount === 1) {
      setLatency(128);
      addToast({
        variant: "warning",
        message: "⚠️ Latency spike detected. Database replication lag is increasing...",
      });
    } else if (nextCount === 2) {
      setLatency(1420);
      addToast({
        variant: "danger",
        message: "🚨 Critical Load: API Gateway queue buffer full. Retrying requests...",
      });
    } else if (nextCount === 3) {
      addToast({
        variant: "danger",
        message: "🔥 ERROR: Database connection pool exhausted! Activating emergency backup cooling fans. 🌪️",
      });
    }
  };

  const getStatusColor = () => {
    if (clickCount === 0) return "#33ff33"; // Neon Green
    if (clickCount === 1) return "#ffcc00"; // Warning Yellow
    if (clickCount === 2) return "#ff3333"; // Danger Red
    return "#ff00ff"; // Critical Magenta
  };

  return (
    <Row
      fitWidth
      gap="8"
      vertical="center"
      onClick={handleClick}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      <span
        className={clickCount === 3 ? "ping-pulse" : ""}
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: getStatusColor(),
          boxShadow: `0 0 6px ${getStatusColor()}`,
        }}
      />
      <Text variant="body-default-xs" onBackground="neutral-weak">
        {clickCount === 3 ? "DB Ping: ERROR" : `DB Ping: ${latency}ms`}
      </Text>
    </Row>
  );
}
