"use client";

import { Heading, useToast } from "@once-ui-system/core";
import { useState } from "react";

interface InteractiveHeadingProps {
  children: React.ReactNode;
}

export function InteractiveHeading({ children }: InteractiveHeadingProps) {
  const { addToast } = useToast();
  const [retroActive, setRetroActive] = useState(false);

  const handleClick = (e: React.MouseEvent<any>) => {
    // Check if Alt or Shift is held down
    if (e.altKey || e.shiftKey) {
      const nextState = !retroActive;
      setRetroActive(nextState);

      if (nextState) {
        // Toggle retro CRT mode on the document root!
        document.documentElement.classList.add("retro-crt");
        
        addToast({
          variant: "success",
          message: "📺 CRT Time Machine Activated: retro zsh terminal loaded! 📟",
        });
      } else {
        document.documentElement.classList.remove("retro-crt");
        addToast({
          variant: "success",
          message: "📺 CRT Time Machine Deactivated. Back to modern times.",
        });
      }
    }
  };

  return (
    <Heading
      onClick={handleClick}
      style={{ cursor: "pointer", userSelect: "none" }}
      marginBottom="l"
      variant="heading-strong-xl"
      marginLeft="24"
      title="Alt / Shift + Click to travel back in time 📺"
    >
      {children}
    </Heading>
  );
}
