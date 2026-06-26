"use client";

import { useState } from "react";
import { Avatar, useToast } from "@once-ui-system/core";
import styles from "./InteractiveAvatar.module.scss";

const jokes = [
  "Why do backend engineers prefer dark mode? Because light attracts bugs. 🐛",
  "There are 10 types of people in the world: those who understand binary, and those who don't. 💻",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem. 💡",
  "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?' 📊",
  "Why did the database administrator leave his wife? She had too many one-to-many relationships. 💔",
  "['hip', 'hip'] (hip hip array!) 🧬",
  "An engineer's advice: 'If it works, don't touch it!' 🛠️",
  "DNS: It's always DNS. Even when it's not DNS, it's DNS. 🌐",
  "Why did the microservice break up with the monolithic backend? 'You're too codependent.' 💔",
];

interface InteractiveAvatarProps {
  src: string;
  size: "xs" | "s" | "m" | "l" | "xl";
  style?: React.CSSProperties;
  className?: string;
}

export function InteractiveAvatar({ src, size, style, className }: InteractiveAvatarProps) {
  const { addToast } = useToast();
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    if (spinning) return;
    setSpinning(true);
    
    // Pick a random developer joke
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    addToast({
      variant: "success",
      message: randomJoke,
    });

    // Reset spinning state after the 1-second transition finishes
    setTimeout(() => {
      setSpinning(false);
    }, 1000);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.avatarContainer} ${spinning ? styles.spin : ""} ${className || ""}`}
      style={{ cursor: "pointer", display: "inline-flex", ...style }}
    >
      <Avatar src={src} size={size} />
    </div>
  );
}
