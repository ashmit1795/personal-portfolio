export function BackgroundGrid() {
  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{
        backgroundImage: `
          radial-gradient(circle at center, transparent 40%, var(--background) 100%),
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 60px 60px, 60px 60px",
        opacity: 0.05
      }}
    />
  );
}
