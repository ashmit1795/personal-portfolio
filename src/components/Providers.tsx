"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  BorderStyle,
  ChartMode,
  ChartVariant,
  DataThemeProvider,
  IconProvider,
  LayoutProvider,
  NeutralColor,
  ScalingSize,
  Schemes,
  SolidStyle,
  SolidType,
  SurfaceStyle,
  ThemeProvider,
  ToastProvider,
  useToast,
  TransitionStyle,
} from "@once-ui-system/core";
import { style, dataStyle } from "../resources";
import { iconLibrary } from "../resources/icons";

function ConsoleAndKonamiListener() {
  const { addToast } = useToast();
  const [showSplash, setShowSplash] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 1. DevTools Console Greeting
    console.log(
      "%c🚀 Looking under the hood?",
      "color: #00e5ff; font-size: 20px; font-weight: bold; font-family: monospace; text-shadow: 0 0 10px rgba(0,229,255,0.5);"
    );
    console.log(
      "%cHey there, curious developer! This portfolio is built using Next.js 15, Once UI, and the Magic Portfolio template (https://once-ui.com/products/magic-portfolio).\n\n" +
      "Feel free to check out my GitHub: https://github.com/ashmit1795\n" +
      "Or let's schedule a chat: https://cal.com/ashmit-patra\n\n" +
      "💡 Hint: Entering a retro arcade cheat code on this page might unlock something cool...\n" +
      "💻 Diagnostic console commands are loaded! Type `help()` or `secrets()` and press Enter.",
      "color: #e0e0e0; font-size: 13px; font-family: monospace; line-height: 1.5;"
    );

    // 2. Expose window console commands
    if (typeof window !== "undefined") {
      (window as any).help = () => {
        console.log(
          "%c⚙️ Portfolio Terminal Diagnostics\n" +
          "-----------------------------------\n" +
          "Available commands (run them in the console):\n" +
          "• secrets() - Print riddles and hints about hidden features\n" +
          "• stats()   - View server environment and performance statistics\n" +
          "• about()   - Print a brief developer profile\n",
          "color: #00ff00; font-family: monospace; font-size: 13px;"
        );
        return "Command completed.";
      };

      (window as any).secrets = () => {
        console.log(
          "%c🔓 Secrets Registry & Riddles:\n" +
          "--------------------------------\n" +
          "• Riddle 1: 'I am a cup, not a bean. Query me where coffee should have been.'\n" +
          "• Riddle 2: 'The gaming code of '86 — type it out to see green CRT tricks.'\n" +
          "• Riddle 3: 'Click the face of the builder to find why bugs inhabit digital space.'\n" +
          "• Riddle 4: 'Under the copyright, find the heartbeat. Click it to overheat the server.'\n\n" +
          "👉 Visit '/secrets' to see your progress and hints directly on the web!",
          "color: #ff9f43; font-family: monospace; font-size: 13px;"
        );
        return "Command completed.";
      };

      (window as any).stats = () => {
        console.log(
          "%c📊 System Status Diagnostics:\n" +
          "--------------------------------\n" +
          "• Hostname:      ashmitpatra.in\n" +
          "• Platform:      Next.js 15.3.3 (App Router)\n" +
          "• Framework:     Once UI Design System\n" +
          "• DB Latency:    14ms (Healthy)\n" +
          "• Memory Load:   4% (Idle)\n" +
          "• Coffee Level:  0% (Brewing blocked by teapot)\n" +
          "• Fun Level:     100%\n",
          "color: #00a8ff; font-family: monospace; font-size: 13px;"
        );
        return "Command completed.";
      };

      (window as any).about = () => {
        console.log(
          "%c👨‍💻 Developer Profile:\n" +
          "--------------------\n" +
          "• Name:      Ashmit Patra\n" +
          "• Role:      Backend Engineer & DevOps Enthusiast\n" +
          "• Location:  Asia/Kolkata\n" +
          "• Current:   CS Engineering Student @ KIIT University\n" +
          "• Focus:     System Design, Infrastructure, APIs\n",
          "color: #a55eea; font-family: monospace; font-size: 13px;"
        );
        return "Command completed.";
      };
    }

    // 3. Konami Code Sequence listener
    const konamiCode = [
      "arrowup",
      "arrowup",
      "arrowdown",
      "arrowdown",
      "arrowleft",
      "arrowright",
      "arrowleft",
      "arrowright",
      "b",
      "a",
    ];
    let inputSequence: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      inputSequence.push(e.key.toLowerCase());
      inputSequence = inputSequence.slice(-konamiCode.length);

      if (JSON.stringify(inputSequence) === JSON.stringify(konamiCode)) {
        // Unlock Cyberpunk mode!
        document.documentElement.setAttribute("data-brand", "magenta");
        document.documentElement.setAttribute("data-accent", "emerald");

        setShowSplash(true);

        addToast({
          variant: "success",
          message: "🔓 Konami Code Unlocked: Cyberpunk Mode Activated! ⚡",
        });

        setTimeout(() => {
          setShowSplash(false);
        }, 1200);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (typeof window !== "undefined") {
        delete (window as any).help;
        delete (window as any).secrets;
        delete (window as any).stats;
        delete (window as any).about;
      }
    };
  }, [addToast]);

  return showSplash && mounted ? createPortal(<div className="cyberpunk-splash" />, document.body) : null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <ThemeProvider
        brand={style.brand as Schemes}
        accent={style.accent as Schemes}
        neutral={style.neutral as NeutralColor}
        solid={style.solid as SolidType}
        solidStyle={style.solidStyle as SolidStyle}
        border={style.border as BorderStyle}
        surface={style.surface as SurfaceStyle}
        transition={style.transition as TransitionStyle}
        scaling={style.scaling as ScalingSize}
      >
        <DataThemeProvider
          variant={dataStyle.variant as ChartVariant}
          mode={dataStyle.mode as ChartMode}
          height={dataStyle.height}
          axis={{
            stroke: dataStyle.axis.stroke,
          }}
          tick={{
            fill: dataStyle.tick.fill,
            fontSize: dataStyle.tick.fontSize,
            line: dataStyle.tick.line,
          }}
        >
          <ToastProvider>
            <IconProvider icons={iconLibrary}>
              <ConsoleAndKonamiListener />
              {children}
            </IconProvider>
          </ToastProvider>
        </DataThemeProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
}
