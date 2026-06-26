"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    // 1. DevTools Console Greeting
    console.log(
      "%c🚀 Looking under the hood?",
      "color: #00e5ff; font-size: 20px; font-weight: bold; font-family: monospace; text-shadow: 0 0 10px rgba(0,229,255,0.5);"
    );
    console.log(
      "%cHey there, curious developer! This portfolio is built using Next.js 15, Once UI, and the Magic Portfolio template (https://once-ui.com/products/magic-portfolio).\n\n" +
      "Feel free to check out my GitHub: https://github.com/ashmit1795\n" +
      "Or let's schedule a chat: https://cal.com/ashmit-patra\n\n" +
      "💡 Hint: Entering a retro arcade cheat code on this page might unlock something cool...",
      "color: #e0e0e0; font-size: 13px; font-family: monospace; line-height: 1.5;"
    );

    // 2. Konami Code Sequence listener
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

        addToast({
          variant: "success",
          message: "🔓 Konami Code Unlocked: Cyberpunk Mode Activated! ⚡",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [addToast]);

  return null;
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
