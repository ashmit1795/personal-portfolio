export function BackgroundGrid() {
  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        opacity: 0.15
      }}
    />
  );
}
